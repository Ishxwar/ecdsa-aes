import fs from "fs";
import crypto from "crypto";
import dotenv from "dotenv";
dotenv.config();

const privateKey = process.env.PRIVATE_KEY;
// why buffer from
const aesKey = Buffer.from(process.env.AES_KEY, "base64");

const licensePayload = {
  tier: "pro",
  issuedAt: "20-07-2025",
  expiryDate: "20-07-2026",
};

const signature = crypto.sign(
  "sha256",
  Buffer.from(JSON.stringify(licensePayload)),
  { key: privateKey, format: "pem", type: "pkcs8" }
);

const licenseBundle = {
  license: { payload: licensePayload },
  signature: signature.toString("base64"),
};

const iv = crypto.randomBytes(16);
const cipher = crypto.createCipheriv("aes-256-cbc", aesKey, iv);
let encrypted = cipher.update(JSON.stringify(licenseBundle), "utf-8", "base64");
encrypted += cipher.final("base64");

const licenseFile = {
  iv: iv.toString("base64"),
  data: encrypted,
  signature,
};

fs.writeFileSync("license.lic", JSON.stringify(licenseFile, null, 2));
console.log("License Generated");
