// Import OpenAPI file and dynamically generate API service and DTOs
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';



// Set __dirname for ES module
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Create an Axios instance for React-based templates
const axiosInstanceTemplate = `import axios from 'axios';

const api = axios.create({
  baseURL: 'https://petstore3.swagger.io/api/v3',
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json',
  },
});

api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = 'Bearer ' + token;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

export default api;`;

// Framework-specific templates
const templates = {
  angular: (serviceName, endpoint, method, description, params, responseType, headers) => `import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ${responseType} } from '../../dtos/${responseType}';

@Injectable({
  providedIn: 'root',
})
export class ${serviceName} {
  constructor(private http: HttpClient) {}

  // ${description}
  ${method}(params: any, body: any = null) {
    const headers = new HttpHeaders(${JSON.stringify(headers)});
    return this.http.${method}<${responseType}>('${endpoint}', body || { params, headers });
  }
}`,

  react: (serviceName, endpoint, method, description, params, responseType, headers) => `import api from '../../axiosInstance';
import { ${responseType} } from '../../dtos/${responseType}';

export const ${serviceName} = async (params, body = null) => {
  // ${description}
  return api.${method}('${endpoint}', body || { params }).then((res) => res.data as ${responseType});
};`,

  js: (serviceName, endpoint, method, description, params, responseType, headers) => `// ${description}
export const ${serviceName} = async (params, body = null) => {
  const response = await fetch('${endpoint}', {
    method: '${method.toUpperCase()}',
    headers: {
      'Content-Type': 'application/json',
      ...${JSON.stringify(headers)},
    },
    body: body ? JSON.stringify(body) : null,
    ...(params && !body ? { params } : {})
  });
  return response.json(); // Expecting ${responseType}
};`,

  react_ts: (serviceName, endpoint, method, description, params, responseType, headers) => `import api from '../../axiosInstance';
import { ${responseType} } from '../../dtos/${responseType}';

interface Params {
  ${params.map((p) => `${p.name}?: ${p.type};`).join('\n  ')}
}

export const ${serviceName} = async (params: Params, body: any = null): Promise<${responseType}> => {
  // ${description}
  return api.${method}('${endpoint}', body || { params }).then((res) => res.data);
};`,

  dto_ts: (schemaName, properties) => `export interface ${schemaName} {
  ${properties.map((p) => `${p.name}${p.required ? '' : '?'}: ${p.type}; // ${p.description}`).join('\n  ')}
}`,

  dto_java: (schemaName, properties) => `public class ${schemaName} {
  ${properties.map((p) => `private ${p.type} ${p.name}; // ${p.description}`).join('\n  ')}

  // Getters and Setters
  ${properties.map((p) => `public ${p.type} get${capitalize(p.name)}() { return ${p.name}; }
  public void set${capitalize(p.name)}(${p.type} ${p.name}) { this.${p.name} = ${p.name}; }`).join('\n  ')}
}`,
};

// Utility function to capitalize the first letter of a string
function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

// Function to generate DTOs
function generateDTOs(language ,openAPISpec) {
  const outputDir = path.join(__dirname, 'dtos', language);
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  const schemas = openAPISpec?.components?.schemas || {};
  Object.entries(schemas).forEach(([schemaName, schema]) => {
    const properties = Object.entries(schema.properties || {}).map(([name, details]) => ({
      name,
      type: mapType(details.type, language),
      description: details.description || '',
      required: (schema.required || []).includes(name),
    }));

    const dtoCode = templates[`dto_${language}`](schemaName, properties);
    fs.writeFileSync(path.join(outputDir, `${schemaName}.${language === 'java' ? 'java' : 'ts'}`), dtoCode);
  });

  console.log(`DTOs generated for ${language} in ${outputDir}`);
}

// Utility to map OpenAPI types to specific language types
function mapType(openApiType, language) {
  const typeMap = {
    string: language === 'java' ? 'String' : 'string',
    integer: language === 'java' ? 'Integer' : 'number',
    boolean: 'boolean',
    array: language === 'java' ? 'List<Object>' : 'Array<any>',
    object: 'Object',
  };
  return typeMap[openApiType] || 'any';
}

// Function to generate services by tag
function generateServicesByTag(language,openAPISpec) {
  const outputDir = path.join(__dirname, 'services', language);
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  if (language.includes('react')) {
    const axiosPath = path.join(outputDir, 'axiosInstance.ts');
    if (!fs.existsSync(axiosPath)) {
      fs.writeFileSync(axiosPath, axiosInstanceTemplate);
    }
  }

  Object.entries(openAPISpec?.paths).forEach(([endpoint, methods]) => {
    Object.entries(methods).forEach(([method, details]) => {
      const tag = details.tags[0];
      const tagDir = path.join(outputDir, tag);
      if (!fs.existsSync(tagDir)) {
        fs.mkdirSync(tagDir, { recursive: true });
      }

      const serviceName = `${details.operationId}Service`;
      const description = details.summary || details.description || '';
      const params = details.parameters || [];
      const responseType = details.responses?.['200']?.content?.['application/json']?.schema?.['$ref']?.split('/')?.pop() || 'any';
      const headers = (details.security || []).reduce((acc, security) => {
        const [key] = Object.keys(security);
        if (key === 'api_key') acc['Authorization'] = 'Bearer <API_KEY>';
        return acc;
      }, {});

      const serviceCode = templates[language](
        serviceName,
        endpoint,
        method,
        description,
        params.map((p) => ({ name: p.name, type: p.schema?.type || 'any' })),
        responseType,
        headers
      );

      fs.writeFileSync(path.join(tagDir, `${serviceName}.${language === 'react_ts' ? 'ts' : 'js'}`), serviceCode);
    });
  });

  console.log(`API services generated for ${language} in ${outputDir}`);
}

// Main function to generate DTOs and services
async function main() {
  const language = process.argv[2]; // Pass language as an argument
  if (!templates[language]) {
    console.error('Unsupported language. Choose from: angular, react, js, react_ts');
    return;
  }

const openApiFilePath = 'D://APIGEnrater//openapiJs.json';
var da = fs.readFileSync(openApiFilePath, 'utf8');


const fetchOpenAPISpec = async () => {
    try {
      const response = await fetch('https://petstore3.swagger.io/api/v3/openapi.json');
      if (!response.ok) {
        throw new Error('Network response was not ok ' + response.statusText);
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching OpenAPI spec:', error);
      throw error;
    }
  };
var dad =await fetchOpenAPISpec();
  console.log(dad.components.schemas);

  const schemas = dad.components.schemas;
const formattedSchemas = [];

for (const schemaName in schemas) {
  if (schemas.hasOwnProperty(schemaName)) {
  if (schemas.hasOwnProperty(schemaName)) {
    const properties = schemas[schemaName].properties;
    for (const propertyName in properties) {
      if (properties.hasOwnProperty(propertyName)) {
        const property = properties[propertyName];
        const formattedProperty = {
          name: propertyName,
          type: property.type,
          description: property.description,
          example: property.example
        };
        formattedSchemas.push(formattedProperty);
      }
    }
  }
}

console.log(formattedSchemas);

//  console.log(da);
//   generateDTOs(language === 'react_ts' ? 'ts' : 'java',openAPISpec);
//   generateServicesByTag(language,openAPISpec);
}

await main();