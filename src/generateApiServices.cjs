// // const fs = require('fs');
// // const path = require('path');

// // async function generateApiServices(openApiFilePath, outputDir) {
// //   const openApiSchema = JSON.parse(fs.readFileSync(openApiFilePath, 'utf8'));
// //   const apiBasePath = openApiSchema.servers[0]?.url || '';

// //   // Extract paths from OpenAPI
// //   const paths = openApiSchema.paths;
// //   console.log(openApiSchema.tags);

// //   // Ensure output directory exists
// //   if (!fs.existsSync(outputDir)) {
// //     fs.mkdirSync(outputDir, { recursive: true });
// //   }

// //   for (const [route, methods] of Object.entries(paths)) {
// //     Object.keys(openApiSchema).forEach(method => {
// //       const tags = openApiSchema[method].tags;
// //       console.log(`${method.toUpperCase()} Tags:`, tags);
// //     });
// //     const entityName = route
// //       .split('/')
// //       .filter((part) => part && !part.startsWith('{'))
// //       .join('_')
// //       .toLowerCase(); // Entity name derived from path

// //     const actionTypes = createActionTypes(entityName.toUpperCase());

// //     // Generate the reducer file for the entity
// //     const reducerContent = generateReducer(entityName, actionTypes);
// //     // fs.writeFileSync(path.join(outputDir, `${entityName}Reducer.ts`), reducerContent);

// //     // Generate the service file for the entity
// //     console.log( entityName, route);
// //     const serviceContent = generateService(entityName, apiBasePath + route, actionTypes, methods);

// //      //fs.writeFileSync(path.join(outputDir, `${entityName}Service.ts`), serviceContent);
// //   }

// //   console.log('All API services and reducers generated successfully!');
// // }

// // function createActionTypes(baseName) {
// //   return {
// //     LIST: `LIST_${baseName}`,
// //     ADD: `ADD_${baseName}`,
// //     UPDATE: `UPDATE_${baseName}`,
// //     DELETE: `DELETE_${baseName}`,
// //   };
// // }

// // function generateReducer(entityName, actionTypes) {
// //   return `
// // import { SUCCESS_SUFFIX } from "redux-axios-middleware";

// // const initialState = [];

// // const ${entityName}Reducer = (state = initialState, action) => {
// //   switch (action.type) {
// //     case '${actionTypes.LIST}' + SUCCESS_SUFFIX:
// //       return action.payload.data;

// //     case '${actionTypes.ADD}' + SUCCESS_SUFFIX:
// //       return [...state, action.payload.data];

// //     case '${actionTypes.UPDATE}' + SUCCESS_SUFFIX:
// //       return state.map(item => item.id === action.payload.data.id ? action.payload.data : item);

// //     case '${actionTypes.DELETE}':
// //       return state.filter(item => item.id !== action.payload.item.id);

// //     default:
// //       return state;
// //   }
// // };

// // export default ${entityName}Reducer;
// //   `;
// // }

// // function generateService(entityName, route, actionTypes, methods) {
// //   const actions = [];

// //   if (methods.get) {
// //     actions.push(`
// // export const list${capitalize(entityName)} = () => ({
// //   type: '${actionTypes.LIST}',
// //   payload: {
// //     request: {
// //       url: '${route}',
// //       method: 'GET',
// //     },
// //   },
// // });
// //     `);
// //   }

// //   if (methods.post) {
// //     actions.push(`
// // export const add${capitalize(entityName)} = (item) => ({
// //   type: '${actionTypes.ADD}',
// //   payload: {
// //     request: {
// //       url: '${route}',
// //       method: 'POST',
// //       data: item,
// //     },
// //   },
// // });
// //     `);
// //   }

// //   if (methods.put) {
// //     actions.push(`
// // export const update${capitalize(entityName)} = (item) => ({
// //   type: '${actionTypes.UPDATE}',
// //   payload: {
// //     request: {
// //       url: \`\${'${route}'}/\${item.id}\`,
// //       method: 'PUT',
// //       data: item,
// //     },
// //   },
// // });
// //     `);
// //   }

// //   if (methods.delete) {
// //     actions.push(`
// // export const delete${capitalize(entityName)} = (item) => ({
// //   type: '${actionTypes.DELETE}',
// //   payload: {
// //     item,
// //     request: {
// //       url: \`\${'${route}'}/\${item.id}\`,
// //       method: 'DELETE',
// //     },
// //   },
// // });
// //     `);
// //   }

// //   return actions.join('\n');
// // }

// // function capitalize(str) {
// //   return str.charAt(0).toUpperCase() + str.slice(1);
// // }

// // // Run the generator
// // const openApiFilePath = 'E:/arraka/controller-api-1/gen/http/openapi3.json'; // Replace with the path to your OpenAPI file
// // const outputDir = './generated'; // Directory to store generated files
// // generateApiServices(openApiFilePath, outputDir).catch(console.error);




// // const fs = require('fs');
// // const path = require('path');

// // async function generateApiServices(openApiFilePath, outputDir) {
// //   const openApiSchema = JSON.parse(fs.readFileSync(openApiFilePath, 'utf8'));
// //   const apiBasePath = openApiSchema.servers[0]?.url || '';

// //   // Extract paths from OpenAPI
// //   const paths = openApiSchema.paths;
// //   console.log(openApiSchema.tags);

// //   // Ensure output directory exists
// //   if (!fs.existsSync(outputDir)) {
// //     fs.mkdirSync(outputDir, { recursive: true });
// //   }

// //   // Initialize a dictionary to store methods by tag
// //   const tagMethodsMap = {};

// //   for (const [route, methods] of Object.entries(paths)) {
// //     // Group methods by tags
// //     Object.keys(methods).forEach(method => {
// //       const tags = methods[method].tags;
// //       if (tags && tags.length > 0) {
// //         tags.forEach(tag => {
// //           // If tag does not exist in the map, initialize it
// //           if (!tagMethodsMap[tag]) {
// //             tagMethodsMap[tag] = {
// //               list: false,
// //               add: false,
// //               update: false,
// //               delete: false,
// //               methods: []
// //             };
// //           }

// //           // Mark the method for the tag
// //           const methodInfo = {
// //             method,
// //             route,
// //             actionTypes: createActionTypes(tag.toUpperCase())
// //           };

// //           if (method === 'get' && !tagMethodsMap[tag].list) {
// //             tagMethodsMap[tag].list = true;
// //             tagMethodsMap[tag].methods.push(methodInfo);
// //           }
// //           if (method === 'post' && !tagMethodsMap[tag].add) {
// //             tagMethodsMap[tag].add = true;
// //             tagMethodsMap[tag].methods.push(methodInfo);
// //           }
// //           if (method === 'put' && !tagMethodsMap[tag].update) {
// //             tagMethodsMap[tag].update = true;
// //             tagMethodsMap[tag].methods.push(methodInfo);
// //           }
// //           if (method === 'delete' && !tagMethodsMap[tag].delete) {
// //             tagMethodsMap[tag].delete = true;
// //             tagMethodsMap[tag].methods.push(methodInfo);
// //           }
// //         });
// //       }
// //     });
// //   }

// //   // Generate service files for each tag
// //   for (const [tag, methodsGroup] of Object.entries(tagMethodsMap)) {
// //     const serviceContent = generateTagService(tag, methodsGroup.methods, apiBasePath);
// //     // Save the generated service file
// //     fs.writeFileSync(path.join(outputDir, `${tag}Service.ts`), serviceContent);
// //   }

// //   console.log('All API services generated successfully!');
// // }

// // function createActionTypes(baseName) {
// //   return {
// //     LIST: `LIST_${baseName}`,
// //     ADD: `ADD_${baseName}`,
// //     UPDATE: `UPDATE_${baseName}`,
// //     DELETE: `DELETE_${baseName}`,
// //   };
// // }

// // function generateTagService(tag, methodsGroup, apiBasePath) {
// //   const actions = [];

// //   methodsGroup.forEach(({ method, route, actionTypes }) => {
// //     const entityName = route
// //       .split('/')
// //       .filter(part => part && !part.startsWith('{'))
// //       .join('_')
// //       .toLowerCase();

// //     if (method === 'get') {
// //       actions.push(`
// // export const list${capitalize(tag)} = () => ({
// //   type: '${actionTypes.LIST}',
// //   payload: {
// //     request: {
// //       url: '${apiBasePath + route}',
// //       method: 'GET',
// //     },
// //   },
// // });
// //       `);
// //     }

// //     if (method === 'post') {
// //       actions.push(`
// // export const add${capitalize(tag)} = (item) => ({
// //   type: '${actionTypes.ADD}',
// //   payload: {
// //     request: {
// //       url: '${apiBasePath + route}',
// //       method: 'POST',
// //       data: item,
// //     },
// //   },
// // });
// //       `);
// //     }

// //     if (method === 'put') {
// //       actions.push(`
// // export const update${capitalize(tag)} = (item) => ({
// //   type: '${actionTypes.UPDATE}',
// //   payload: {
// //     request: {
// //       url: \`\${'${apiBasePath + route}'}/\${item.id}\`,
// //       method: 'PUT',
// //       data: item,
// //     },
// //   },
// // });
// //       `);
// //     }

// //     if (method === 'delete') {
// //       actions.push(`
// // export const delete${capitalize(tag)} = (item) => ({
// //   type: '${actionTypes.DELETE}',
// //   payload: {
// //     item,
// //     request: {
// //       url: \`\${'${apiBasePath + route}'}/\${item.id}\`,
// //       method: 'DELETE',
// //     },
// //   },
// // });
// //       `);
// //     }
// //   });

// //   return `// Generated Service for ${tag} \n\n` + actions.join('\n');
// // }

// // function capitalize(str) {
// //   return str.charAt(0).toUpperCase() + str.slice(1);
// // }

// // // Run the generator
// // const openApiFilePath = 'E:/arraka/controller-api-1/gen/http/openapi3.json'; // Replace with the path to your OpenAPI file
// // const outputDir = './generated'; // Directory to store generated files
// // generateApiServices(openApiFilePath, outputDir).catch(console.error);


// const fs = require('fs');
// const path = require('path');
// async function generateApiServices(openApiFilePath, outputDir) {
//   const openApiSchema = JSON.parse(fs.readFileSync(openApiFilePath, 'utf8'));
//   const apiBasePath = openApiSchema.servers[0]?.url || '';

//   // Extract paths from OpenAPI
//   const paths = openApiSchema.paths;
//   console.log(openApiSchema.tags);

//   // Ensure output directory exists
//   if (!fs.existsSync(outputDir)) {
//     fs.mkdirSync(outputDir, { recursive: true });
//   }

//   // Initialize a dictionary to store methods by tag
//   const tagMethodsMap = {};

//   for (const [route, methods] of Object.entries(paths)) {
//     // Group methods by tags
//     Object.keys(methods).forEach(method => {
//       const tags = methods[method].tags;
//       if (tags && tags.length > 0) {
//         tags.forEach(tag => {
//           // If tag does not exist in the map, initialize it
//           if (!tagMethodsMap[tag]) {
//             tagMethodsMap[tag] = {
//               list: false,
//               add: false,
//               update: false,
//               delete: false,
//               methods: []
//             };
//           }

//           // Mark the method for the tag
//           const methodInfo = {
//             method,
//             route,
//             actionTypes: createActionTypes(tag.toUpperCase())
//           };

//           if (method === 'get' && !tagMethodsMap[tag].list) {
//             tagMethodsMap[tag].list = true;
//             tagMethodsMap[tag].methods.push(methodInfo);
//           }
//           if (method === 'post' && !tagMethodsMap[tag].add) {
//             tagMethodsMap[tag].add = true;
//             tagMethodsMap[tag].methods.push(methodInfo);
//           }
//           if (method === 'put' && !tagMethodsMap[tag].update) {
//             tagMethodsMap[tag].update = true;
//             tagMethodsMap[tag].methods.push(methodInfo);
//           }
//           if (method === 'delete' && !tagMethodsMap[tag].delete) {
//             tagMethodsMap[tag].delete = true;
//             tagMethodsMap[tag].methods.push(methodInfo);
//           }
//         });
//       }
//     });
//   }

//   // Generate service and reducer files for each tag
//   for (const [tag, methodsGroup] of Object.entries(tagMethodsMap)) {
//     // Generate service content
//     const serviceContent = generateTagService(tag, methodsGroup.methods, apiBasePath);
//     // Save the generated service file
//     fs.writeFileSync(path.join(outputDir,"Service", `${tag}Service.ts`), serviceContent);

//     // Generate reducer content
//     const reducerContent = generateTagReducer(tag, methodsGroup.methods);
//     // Save the generated reducer file
//     fs.writeFileSync(path.join(outputDir,'Reducers', `${tag}Reducer.ts`), reducerContent);
//   }

//   console.log('All API services and reducers generated successfully!');
// }

// function createActionTypes(baseName) {
//   return {
//     LIST: `LIST_${baseName}`,
//     ADD: `ADD_${baseName}`,
//     UPDATE: `UPDATE_${baseName}`,
//     DELETE: `DELETE_${baseName}`,
//   };
// }

// function generateTagService(tag, methodsGroup, apiBasePath) {
//   const actions = [];

//   methodsGroup.forEach(({ method, route, actionTypes }) => {
//     const entityName = route
//       .split('/')
//       .filter(part => part && !part.startsWith('{'))
//       .join('_')
//       .toLowerCase();

//     if (method === 'get') {
//       actions.push(`
// export const list${capitalize(tag)} = () => ({
//   type: '${actionTypes.LIST}',
//   payload: {
//     request: {
//       url: '${route}',
//       method: 'GET',
//     },
//   },
// });
//       `);
//     }

//     if (method === 'post') {
//       actions.push(`
// export const add${capitalize(tag)} = (item:any) => ({
//   type: '${actionTypes.ADD}',
//   payload: {
//     request: {
//       url: '${route}',
//       method: 'POST',
//       data: item,
//     },
//   },
// });
//       `);
//     }

//     if (method === 'put') {
//       actions.push(`
// export const update${capitalize(tag)} = (item:any) => ({
//   type: '${actionTypes.UPDATE}',
//   payload: {
//     request: {
//       url: \`\${'${route}'}/\${item.id}\`,
//       method: 'PUT',
//       data: item,
//     },
//   },
// });
//       `);
//     }

//     if (method === 'delete') {
//       actions.push(`
// export const delete${capitalize(tag)} = (item:any) => ({
//   type: '${actionTypes.DELETE}',
//   payload: {
//     item,
//     request: {
//       url: \`\${'${route}'}/\${item.id}\`,
//       method: 'DELETE',
//     },
//   },
// });
//       `);
//     }
//   });

//   return `// Generated Service for ${tag} \n\n` + actions.join('\n');
// }

// function generateTagReducer(tag, methodsGroup) {
//   const actionTypes = methodsGroup.reduce((acc, { actionTypes }) => {
//     return { ...acc, ...actionTypes };
//   }, {});

// tag = removeSpecialCharacters(tag);
//   return `
  
//   import { AnyAction } from 'redux';
//    const initialState: any[] = [];
//      const SUCCESS_SUFFIX = '_SUCCESS';
// const ${tag}Reducer = (state = initialState, action:AnyAction) => {
//   switch (action.type) {
//     case '${actionTypes.LIST}' + SUCCESS_SUFFIX:
//       return action.payload.data;

//     case '${actionTypes.ADD}' + SUCCESS_SUFFIX:
//       return [...state, action.payload.data];

//     case '${actionTypes.UPDATE}' + SUCCESS_SUFFIX:
//       return state.map(item => item.id === action.payload.data.id ? action.payload.data : item);

//     case '${actionTypes.DELETE}':
//       return state.filter(item => item.id !== action.payload.item.id);

//     default:
//       return state;
//   }
// };

// export default ${tag}Reducer;
//   `;
// }

// function capitalize(str) {
//   return str.charAt(0).toUpperCase() + str.slice(1);
// }
// export const removeSpecialCharacters = (input) => {
//   return input.replace(/[^a-zA-Z0-9]/g, '');
// };
// // Run the generator
// const openApiFilePath = 'E:/arraka/controller-api-1/gen/http/openapi3.json'; // Replace with the path to your OpenAPI file
// const outputDir = './generated'; // Directory to store generated files
// generateApiServices(openApiFilePath, outputDir).catch(console.error);


const fs = require('fs');
const path = require('path');

// Generate API services and reducers
async function generateApiServices(openApiFilePath, outputDir) {
  const openApiSchema = JSON.parse(fs.readFileSync(openApiFilePath, 'utf8'));
  const apiBasePath = openApiSchema.servers[0]?.url || '';

  const paths = openApiSchema.paths;

  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  const tagMethodsMap = {};

  for (const [route, methods] of Object.entries(paths)) {
    Object.keys(methods).forEach(method => {
      const tags = methods[method].tags;
      if (tags && tags.length > 0) {
        tags.forEach(tag => {
          if (!tagMethodsMap[tag]) {
            tagMethodsMap[tag] = {
              list: false,
              add: false,
              update: false,
              delete: false,
              methods: []
            };
          }

          const methodInfo = {
            method,
            route,
            actionTypes: createActionTypes(tag.toUpperCase())
          };

          if (method === 'get' && !tagMethodsMap[tag].list) {
            tagMethodsMap[tag].list = true;
            tagMethodsMap[tag].methods.push(methodInfo);
          }
          if (method === 'post' && !tagMethodsMap[tag].add) {
            tagMethodsMap[tag].add = true;
            tagMethodsMap[tag].methods.push(methodInfo);
          }
          if (method === 'put' && !tagMethodsMap[tag].update) {
            tagMethodsMap[tag].update = true;
            tagMethodsMap[tag].methods.push(methodInfo);
          }
          if (method === 'delete' && !tagMethodsMap[tag].delete) {
            tagMethodsMap[tag].delete = true;
            tagMethodsMap[tag].methods.push(methodInfo);
          }
        });
      }
    });
  }

  for (const [tag, methodsGroup] of Object.entries(tagMethodsMap)) {
    const serviceContent = generateTagService(tag, methodsGroup.methods, apiBasePath);
    fs.writeFileSync(path.join(outputDir, `${tag}Service.ts`), serviceContent);

    const reducerContent = generateTagReducer(tag, methodsGroup.methods);
    fs.writeFileSync(path.join(outputDir, `${tag}Reducer.ts`), reducerContent);
  }

  console.log('All API services and reducers generated successfully!');

  // After generating reducers, combine them dynamically
  generateCombinedReducers(outputDir);
}

// Create action types for each tag
function createActionTypes(baseName) {
  return {
    LIST: `LIST_${baseName}`,
    ADD: `ADD_${baseName}`,
    UPDATE: `UPDATE_${baseName}`,
    DELETE: `DELETE_${baseName}`,
  };
}

// Generate service for each tag
function generateTagService(tag, methodsGroup, apiBasePath) {
  const actions = [];

  methodsGroup.forEach(({ method, route, actionTypes }) => {
    tag = removeSpecialCharacters(tag);
    if (method === 'get') {
      actions.push(`
export const list${capitalize(tag)} = () => ({
  type: '${actionTypes.LIST}',
  payload: {
    request: {
      url: '${route}',
      method: 'GET',
    },
  },
});
      `);
    }

    if (method === 'post') {
      actions.push(`
export const add${capitalize(tag)} = (item:any) => ({
  type: '${actionTypes.ADD}',
  payload: {
    request: {
      url: '${route}',
      method: 'POST',
      data: item,
    },
  },
});
      `);
    }

    if (method === 'put') {
      actions.push(`
export const update${capitalize(tag)} = (item:any) => ({
  type: '${actionTypes.UPDATE}',
  payload: {
    request: {
      url: \`\${'${route}'}/\${item.id}\`,
      method: 'PUT',
      data: item,
    },
  },
});
      `);
    }

    if (method === 'delete') {
      actions.push(`
export const delete${capitalize(tag)} = (item:any) => ({
  type: '${actionTypes.DELETE}',
  payload: {
    item,
    request: {
      url: \`\${'${route}'}/\${item.id}\`,
      method: 'DELETE',
    },
  },
});
      `);
    }
  });

  return `// Generated Service for ${tag} \n\n` + actions.join('\n');
}

// Generate reducer for each tag
function generateTagReducer(tag, methodsGroup) {
  const actionTypes = methodsGroup.reduce((acc, { actionTypes }) => {
    return { ...acc, ...actionTypes };
  }, {});

  tag = removeSpecialCharacters(tag);
  return `
import { AnyAction } from 'redux';
const initialState: any[] = [];
const SUCCESS_SUFFIX = '_SUCCESS';

const ${tag}Reducer = (state = initialState, action: AnyAction) => {
  switch (action.type) {
    case '${actionTypes.LIST}' + SUCCESS_SUFFIX:
      return action.payload.data;

    case '${actionTypes.ADD}' + SUCCESS_SUFFIX:
      return [...state, action.payload.data];

    case '${actionTypes.UPDATE}' + SUCCESS_SUFFIX:
      return state.map(item => item.id === action.payload.data.id ? action.payload.data : item);

    case '${actionTypes.DELETE}':
      return state.filter(item => item.id !== action.payload.item.id);

    default:
      return state;
  }
};

export default ${tag}Reducer;
  `;
}

// Capitalize a string
function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

// Remove special characters from a string
function removeSpecialCharacters(input) {
  return input.replace(/[^a-zA-Z0-9]/g, '');
}

// Dynamically generate combined reducers file
function generateCombinedReducers(outputDir) {
  const reducerFiles = fs.readdirSync(outputDir).filter(file => file.endsWith('Reducer.ts'));

  const imports = [];
  const combineReducersContent = [];

  reducerFiles.forEach(file => {
    const reducerName = path.basename(file, path.extname(file));
    imports.push(`import ${removeSpecialCharacters(reducerName)} from './${file.replace(".ts","")}';`);
    combineReducersContent.push(`  ${removeSpecialCharacters(reducerName)}`);
  });

  const combinedReducersContent = `
${imports.join('\n')}

import { combineReducers } from 'redux';

export default combineReducers({
${combineReducersContent.join(',\n')}
});
`;

  fs.writeFileSync(path.join(outputDir, 'combinedReducers.ts'), combinedReducersContent);
  console.log('Combined reducers file generated successfully!');
}

const openApiFilePath = 'E:/arraka/controller-api-1/gen/http/openapi3.json';
const outputDir = './generated';
generateApiServices(openApiFilePath, outputDir).catch(console.error);
