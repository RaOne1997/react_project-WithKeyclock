// Utility function to generate TypeScript DTO file based on provided properties

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


function generateDTO(properties) {
    let className = 'PetDTO'; // Name of the class (can be dynamic)
    let dtoContent = `export class ${className} {\n`;

    properties.forEach(property => {
        const { name, type, format, example, description } = property;
        let typeString = type || 'string';  // Default to 'string' if no type is provided
        let formattedType = typeString;
        
        if (format) {
            formattedType = `${typeString}`; // Include format if provided
        }
        
        // Add property line
        dtoContent += `    ${name}: ${formattedType};\n`;
    });

    dtoContent += '\n';

    // Adding constructor to initialize properties
    dtoContent += `    constructor(data?: any) {\n`;
    dtoContent += `        if (data) {\n`;
    properties.forEach(property => {
        dtoContent += `            this.${property.name} = data.${property.name};\n`;
    });
    dtoContent += `        }\n`;
    dtoContent += `    }\n`;

    // Static fromJS method
    dtoContent += `    static fromJS(data: any): ${className} {\n`;
    dtoContent += `        let result = new ${className}();\n`;
    properties.forEach(property => {
        dtoContent += `        result.${property.name} = data.${property.name};\n`;
    });
    dtoContent += `        return result;\n`;
    dtoContent += `    }\n`;

    // toJSON method to convert object to JSON format
    dtoContent += `    toJSON(): any {\n`;
    dtoContent += `        const data: any = {};\n`;
    properties.forEach(property => {
        dtoContent += `        data["${property.name}"] = this.${property.name};\n`;
    });
    dtoContent += `        return data;\n`;
    dtoContent += `    }\n`;

    dtoContent += `}\n`;

    // Interface for DTO
    dtoContent += `export interface IPetDTO {\n`;
    properties.forEach(property => {
        dtoContent += `    ${property.name}: ${property.type || 'string'};\n`;
    });
    dtoContent += `}\n`;

    return dtoContent;
}

// Define the properties for the Pet DTO
const petProperties = [
    { name: 'id', type: 'number', format: 'int64', example: 10 },
    { name: 'name', type: 'string', example: 'doggie' },
    { name: 'category', type: 'string' }, // type undefined (can be nullable or another type)
    { name: 'photoUrls', type: 'array' },
    { name: 'tags', type: 'array' },
    { name: 'status', type: 'string', description: 'pet status in the store' }
];
const language = process.argv[2];
// Generate the DTO class dynamically

 const outputDir = path.join(__dirname, 'dtos', language);
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }
    const serviceName = 'PetService';
    const serviceCode = `export class ${serviceName} {\n\n}`;
const generatedDTO = generateDTO(petProperties);
fs.writeFileSync(path.join(outputDir, `${serviceName}.${language === 'react_ts' ? 'ts' : 'js'}`), generatedDTO);
// Output the generated DTO code to a file or log it
console.log(generatedDTO);
