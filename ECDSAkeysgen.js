import crypto from "crypto";
import fs from "fs";
import dotenv from "dotenv";
dotenv.config();

const { publicKey, privateKey } = crypto.generateKeyPairSync("ec", {
  namedCurve: "prime256v1",
  //secp256k1 can also be used
  publicKeyEncoding: {
    type: "spki",
    format: "pem",
  },
  privateKeyEncoding: {
    type: "pkcs8",
    format: "pem",
  },
});

const aesKey = crypto.randomBytes(32).toString("base64");

fs.writeFileSync("public.pem", publicKey);

const envContent = `PRIVATE_KEY=${JSON.stringify(
  privateKey
)} \n AES_KEY=${aesKey}`;

fs.writeFileSync(".env", envContent, { flag: "w" });

console.log("Generated keys");
