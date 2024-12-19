// const { exec } = require('child_process');

// const OPENAPI_URL = 'https://localhost:44301/swagger/v1/swagger.json'; // Replace with your backend URL
// const OUTPUT_DIR = './src/api'; // Path where the generated code will be saved

// const generateApi = () => {
//   console.log('Fetching OpenAPI spec and generating TypeScript API...');

//   // Command to run OpenAPI generator
//   const command = `openapi-generator-cli generate -i ${OPENAPI_URL} -g typescript-axios -o ${OUTPUT_DIR}`;

//   // Execute the command
//   exec(command, (error, stdout, stderr) => {
//     if (error) {
//       console.error('Error generating API:', error.message);
//       return;
//     }
//     if (stderr) {
//       console.error('Stderr:', stderr);
//       return;
//     }
//     console.log('API generated successfully:', stdout);
//   });
// };

// generateApi();

// src/gleab-clone.d.ts
declare module 'gleab-clone/src/index.js' {
  export function initializeFeedbackPopup(): void;
}