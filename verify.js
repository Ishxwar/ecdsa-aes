import fs from "fs";
import crypto from "crypto";
import dotenv from "dotenv";
dotenv.config();

const publicKey = fs.readFileSync("./public.pem", "utf-8");
const aesKey = Buffer.from(process.env.AES_KEY, "base64");

const license = JSON.parse(fs.readFileSync("license.lic", "utf-8"));

const iv = Buffer.from(license.iv, "base64");
const encrypted = license.data;
const signature = Buffer.from(license.signature.data);

const decipher = crypto.createDecipheriv("aes-256-cbc", aesKey, iv);
let decrypted = decipher.update(encrypted, "base64", "utf-8");
decrypted += decipher.final("utf-8");

const licenseBundle = JSON.parse(decrypted);
const payload = licenseBundle.license.payload;
const signedData = Buffer.from(JSON.stringify(payload));

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
