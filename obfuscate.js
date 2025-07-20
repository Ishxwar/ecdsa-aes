import JavaScriptObfuscator from "javascript-obfuscator";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const inputPath = path.join(__dirname, "compressor.js");
const outputPath = path.join(__dirname, "compressor.obf.cjs");

const sourceCode = fs.readFileSync(inputPath, "utf-8");

const obfuscationResult = JavaScriptObfuscator.obfuscate(sourceCode, {
  compact: true,
  controlFlowFlattening: true,
  target: "node",
  reservedNames: [
    "dotenv",
    "config",
    "require",
    "__dirname",
    "fs",
    "path",
    "process",
    "console",
  ],
});

fs.writeFileSync(outputPath, obfuscationResult.getObfuscatedCode(), "utf-8");
console.log("✅ Obfuscation complete: compressor.obf.cjs");
