const a0_0x1371d5 = a0_0x30d4;
(function (_0x28ad2e, _0x641eb8) {
  const _0x4918c4 = a0_0x30d4,
    _0x55556d = _0x28ad2e();
  while (!![]) {
    try {
      const _0xfb582e =
        (parseInt(_0x4918c4(0x1cf)) / 0x1) *
          (-parseInt(_0x4918c4(0x1e3)) / 0x2) +
        -parseInt(_0x4918c4(0x1d9)) / 0x3 +
        (-parseInt(_0x4918c4(0x1ce)) / 0x4) *
          (-parseInt(_0x4918c4(0x1ba)) / 0x5) +
        (-parseInt(_0x4918c4(0x1b0)) / 0x6) *
          (-parseInt(_0x4918c4(0x1e6)) / 0x7) +
        -parseInt(_0x4918c4(0x1b2)) / 0x8 +
        (-parseInt(_0x4918c4(0x1c1)) / 0x9) *
          (-parseInt(_0x4918c4(0x1e4)) / 0xa) +
        (-parseInt(_0x4918c4(0x1d7)) / 0xb) *
          (-parseInt(_0x4918c4(0x1da)) / 0xc);
      if (_0xfb582e === _0x641eb8) break;
      else _0x55556d["push"](_0x55556d["shift"]());
    } catch (_0x32e1a2) {
      _0x55556d["push"](_0x55556d["shift"]());
    }
  }
})(a0_0x35a7, 0xe51a2);
const fs = require("fs"),
  path = require("path"),
  zlib = require("zlib"),
  crypto = require("crypto"),
  { execSync } = require("child_process"),
  os = require("os");
require("dotenv")["config"]();
function a0_0x30d4(_0x5839b4, _0x4caf48) {
  const _0x35a762 = a0_0x35a7();
  return (
    (a0_0x30d4 = function (_0x30d4fb, _0x373b1e) {
      _0x30d4fb = _0x30d4fb - 0x1af;
      let _0x4dc881 = _0x35a762[_0x30d4fb];
      return _0x4dc881;
    }),
    a0_0x30d4(_0x5839b4, _0x4caf48)
  );
}
function detectDebugTools() {
  const _0x5858af = a0_0x1371d5;
  try {
    const _0x19624a = execSync("tasklist", { encoding: "utf-8" }),
      _0x561cee = [
        _0x5858af(0x1bf),
        _0x5858af(0x1b8),
        _0x5858af(0x1b1),
        _0x5858af(0x1f0),
        _0x5858af(0x1ee),
        "wireshark.exe",
      ];
    _0x561cee["some"]((_0x36601d) =>
      _0x19624a[_0x5858af(0x1b4)]()[_0x5858af(0x1b5)](_0x36601d)
    ) &&
      (console[_0x5858af(0x1af)](_0x5858af(0x1b6)),
      process[_0x5858af(0x1eb)](0x1));
  } catch (_0x47549d) {}
}
detectDebugTools();
function detectVM() {
  const _0x130f6e = a0_0x1371d5,
    _0x57105b = os[_0x130f6e(0x1d3)]()[0x0]["model"][_0x130f6e(0x1de)]();
  (_0x57105b[_0x130f6e(0x1b5)](_0x130f6e(0x1ed)) ||
    _0x57105b[_0x130f6e(0x1b5)](_0x130f6e(0x1c9)) ||
    _0x57105b[_0x130f6e(0x1b5)]("qemu")) &&
    (console[_0x130f6e(0x1af)]("VM\x20detected"),
    process[_0x130f6e(0x1eb)](0x1));
  const _0x322c84 = execSync(_0x130f6e(0x1bc), { encoding: "utf-8" })[
    _0x130f6e(0x1b4)
  ]();
  (_0x322c84[_0x130f6e(0x1b5)](_0x130f6e(0x1cd)) ||
    _0x322c84[_0x130f6e(0x1b5)](_0x130f6e(0x1c9)) ||
    _0x322c84["includes"](_0x130f6e(0x1e5))) &&
    (console[_0x130f6e(0x1af)](_0x130f6e(0x1ca)),
    process[_0x130f6e(0x1eb)](0x1));
}
detectVM();
const [, , inputFilePath, licensePath] = process[a0_0x1371d5(0x1c6)];
(!inputFilePath || !licensePath) &&
  (console[a0_0x1371d5(0x1e8)](a0_0x1371d5(0x1ea)), process["exit"](0x1));
const license = JSON[a0_0x1371d5(0x1b7)](
    fs["readFileSync"](a0_0x1371d5(0x1d2), a0_0x1371d5(0x1e7))
  ),
  publicKey = a0_0x1371d5(0x1c4),
  aesKey = Buffer[a0_0x1371d5(0x1cc)](
    process[a0_0x1371d5(0x1bb)][a0_0x1371d5(0x1d6)],
    a0_0x1371d5(0x1cb)
  ),
  iv = Buffer[a0_0x1371d5(0x1cc)](license["iv"], a0_0x1371d5(0x1cb)),
  encrypted = license["data"],
  signature = Buffer["from"](license[a0_0x1371d5(0x1f1)][a0_0x1371d5(0x1dc)]),
  decipher = crypto[a0_0x1371d5(0x1c5)](a0_0x1371d5(0x1ef), aesKey, iv);
let decrypted = decipher[a0_0x1371d5(0x1c7)](
  encrypted,
  "base64",
  a0_0x1371d5(0x1e7)
);
decrypted += decipher["final"](a0_0x1371d5(0x1e7));
const licenseBundle = JSON[a0_0x1371d5(0x1b7)](decrypted),
  payload = licenseBundle[a0_0x1371d5(0x1b9)][a0_0x1371d5(0x1df)],
  signedData = Buffer[a0_0x1371d5(0x1cc)](JSON["stringify"](payload)),
  isValid = crypto["verify"](
    a0_0x1371d5(0x1b3),
    signedData,
    { key: publicKey, format: a0_0x1371d5(0x1bd), type: a0_0x1371d5(0x1d1) },
    Buffer[a0_0x1371d5(0x1cc)](
      licenseBundle[a0_0x1371d5(0x1f1)],
      a0_0x1371d5(0x1cb)
    )
  ),
  now = new Date(),
  expiry = new Date(payload["expiryDate"]);
now > expiry &&
  (console["log"](a0_0x1371d5(0x1e1)), process[a0_0x1371d5(0x1eb)](0x1));
isValid
  ? console[a0_0x1371d5(0x1af)](a0_0x1371d5(0x1c2))
  : (console[a0_0x1371d5(0x1af)](a0_0x1371d5(0x1c8)), process["exit"](0x1));
let parsedPayload;
try {
  parsedPayload = JSON[a0_0x1371d5(0x1b7)](decrypted);
} catch {
  console["error"](a0_0x1371d5(0x1dd)), process[a0_0x1371d5(0x1eb)](0x1);
}
console[a0_0x1371d5(0x1af)]("Step:\x20Starting\x20compression");
function a0_0x35a7() {
  const _0x2c06e2 = [
    "parse",
    "ida.exe",
    "license",
    "4415gIJSfc",
    "env",
    "wmic\x20bios\x20get\x20manufacturer",
    "pem",
    "child_process",
    "ida64.exe",
    ".gz",
    "128223XswPUn",
    "license\x20is\x20valid",
    "Gzip\x20error:",
    "-----BEGIN\x20PUBLIC\x20KEY-----\x0aMFkwEwYHKoZIzj0CAQYIKoZIzj0DAQcDQgAERMNSNAQbfLgHIzgsjsJ3uDImeVHz\x0a8BXFkoAoU+kiDNtRqVXzyFVzSocNYDP2bZpZD0R9+fHxTYBhNbRg1cdhgQ==\x0a-----END\x20PUBLIC\x20KEY-----\x0a",
    "createDecipheriv",
    "argv",
    "update",
    "invalid\x20license",
    "vmware",
    "VM\x20BIOS\x20detected.\x20Exiting...",
    "base64",
    "from",
    "virtualbox",
    "6564ynvkWX",
    "1jPvTRT",
    "path",
    "spki",
    "license.lic",
    "cpus",
    "createGzip",
    "crypto",
    "AES_KEY",
    "3550613VQDjjj",
    "zlib",
    "4948026TvugaS",
    "60nZJjXd",
    "createWriteStream",
    "data",
    "Invalid\x20payload\x20structure",
    "toLocaleLowerCase",
    "payload",
    "Step:\x20Compression\x20done",
    "\x20License\x20has\x20expired",
    "pipe",
    "1377060IeoxPa",
    "70mFzPgw",
    "qemu",
    "7EGhIPn",
    "utf-8",
    "error",
    "File\x20compressed",
    "Usage:\x20node\x20compressor.js\x20<file-to-compress>\x20<license-file>",
    "exit",
    "createReadStream",
    "virtual",
    "procmon.exe",
    "aes-256-cbc",
    "ollydbg.exe",
    "signature",
    "log",
    "759936XVapdf",
    "x64dbg.exe",
    "104232hGJORN",
    "sha256",
    "toLowerCase",
    "includes",
    "Debugger\x20tool\x20detected.\x20Exiting...",
  ];
  a0_0x35a7 = function () {
    return _0x2c06e2;
  };
  return a0_0x35a7();
}
const input = fs[a0_0x1371d5(0x1ec)](inputFilePath),
  outputPath = inputFilePath + a0_0x1371d5(0x1c0),
  output = fs[a0_0x1371d5(0x1db)](outputPath),
  gzip = zlib[a0_0x1371d5(0x1d4)]();
input[a0_0x1371d5(0x1e2)](gzip)[a0_0x1371d5(0x1e2)](output),
  console[a0_0x1371d5(0x1af)](a0_0x1371d5(0x1e0)),
  input["on"]("error", (_0x3edc93) =>
    console[a0_0x1371d5(0x1e8)]("Read\x20error:", _0x3edc93)
  ),
  output["on"](a0_0x1371d5(0x1e8), (_0x36384f) =>
    console[a0_0x1371d5(0x1e8)]("Write\x20error:", _0x36384f)
  ),
  gzip["on"]("error", (_0x52fb96) =>
    console["error"](a0_0x1371d5(0x1c3), _0x52fb96)
  ),
  output["on"]("finish", () => {
    const _0x1a073b = a0_0x1371d5;
    console["log"](_0x1a073b(0x1e9));
  });
