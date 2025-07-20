const fs = require("fs");
const path = require("path");
const zlib = require("zlib");
const crypto = require("crypto");
const { execSync } = require("child_process");
const os = require("os");
require("dotenv").config();

// preventing debugging tools

function detectDebugTools() {
  try {
    const output = execSync("tasklist", { encoding: "utf-8" });
    const suspicious = [
      "ida64.exe",
      "ida.exe",
      "x64dbg.exe",
      "ollydbg.exe",
      "procmon.exe",
      "wireshark.exe",
    ];
    if (suspicious.some((p) => output.toLowerCase().includes(p))) {
      console.log("Debugger tool detected. Exiting...");
      process.exit(1);
    }
  } catch (_) {}
}
detectDebugTools();
//
//detect virtual machines

function detectVM() {
  const cpuInfo = os.cpus()[0].model.toLocaleLowerCase();
  if (
    cpuInfo.includes("virtual") ||
    cpuInfo.includes("vmware") ||
    cpuInfo.includes("qemu")
  ) {
    console.log("VM detected");
    process.exit(1);
  }
  const bios = execSync("wmic bios get manufacturer", {
    encoding: "utf-8",
  }).toLowerCase();
  if (
    bios.includes("virtualbox") ||
    bios.includes("vmware") ||
    bios.includes("qemu")
  ) {
    console.log("VM BIOS detected. Exiting...");
    process.exit(1);
  }
}
detectVM();

// get CLI arguments
const [, , inputFilePath, licensePath] = process.argv;

if (!inputFilePath || !licensePath) {
  console.error("Usage: node compressor.js <file-to-compress> <license-file>");
  process.exit(1);
}

const license = JSON.parse(fs.readFileSync("license.lic", "utf-8"));
const publicKey = `-----BEGIN PUBLIC KEY-----
MFkwEwYHKoZIzj0CAQYIKoZIzj0DAQcDQgAERMNSNAQbfLgHIzgsjsJ3uDImeVHz
8BXFkoAoU+kiDNtRqVXzyFVzSocNYDP2bZpZD0R9+fHxTYBhNbRg1cdhgQ==
-----END PUBLIC KEY-----
`;
const aesKey = Buffer.from(process.env.AES_KEY, "base64");
const iv = Buffer.from(license.iv, "base64");
const encrypted = license.data;
const signature = Buffer.from(license.signature.data); // or license.signature directly if already a Buffer

// Step 2: Decrypt the data
const decipher = crypto.createDecipheriv("aes-256-cbc", aesKey, iv);
let decrypted = decipher.update(encrypted, "base64", "utf-8");
decrypted += decipher.final("utf-8");

const licenseBundle = JSON.parse(decrypted);
const payload = licenseBundle.license.payload;
const signedData = Buffer.from(JSON.stringify(payload));

// Step 3: Verify the signature
const isValid = crypto.verify(
  "sha256",
  signedData,
  {
    key: publicKey,
    format: "pem",
    type: "spki",
  },
  Buffer.from(licenseBundle.signature, "base64")
);

const now = new Date();
const expiry = new Date(payload.expiryDate);

if (now > expiry) {
  console.log(" License has expired");
  process.exit(1);
}

console.log(isValid ? " License is valid" : " License is invalid");

// Parse decrypted payload
let parsedPayload;
try {
  parsedPayload = JSON.parse(decrypted);
} catch {
  console.error("Invalid payload structure");
  process.exit(1);
}

console.log("Step: Starting compression");
//
const input = fs.createReadStream(inputFilePath);
const outputPath = inputFilePath + ".gz";
const output = fs.createWriteStream(outputPath);

const gzip = zlib.createGzip();

input.pipe(gzip).pipe(output);
//
console.log("Step: Compression done");
//
input.on("error", (err) => console.error("Read error:", err));
output.on("error", (err) => console.error("Write error:", err));
gzip.on("error", (err) => console.error("Gzip error:", err));

output.on("finish", () => {
  console.log("File compressed");
});
