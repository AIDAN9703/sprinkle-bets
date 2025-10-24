/* eslint-disable @typescript-eslint/no-require-imports */

const chokidar = require("chokidar");
const { exec } = require("child_process");
const { config } = require("dotenv");

config({ path: ".env.local" });

const openapiFile = process.env.OPENAPI_OUTPUT_FILE;

console.log("Starting OpenAPI schema watcher...");
console.log("Note: Next.js hot reload is handled natively by Next.js with polling enabled.");

// Watch for OpenAPI schema changes to regenerate the API client
if (openapiFile) {
  console.log(`Watching ${openapiFile} for changes...`);
  chokidar.watch(openapiFile).on("change", (path) => {
    console.log(`OpenAPI file ${path} has been modified. Running generate-client...`);
    exec("pnpm run generate-client", (error, stdout, stderr) => {
      if (error) {
        console.error(`Error: ${error.message}`);
        return;
      }
      if (stderr) {
        console.error(`stderr: ${stderr}`);
        return;
      }
      console.log(`stdout: ${stdout}`);
    });
  });
} else {
  console.log("OPENAPI_OUTPUT_FILE not set. Skipping OpenAPI watch.");
}
