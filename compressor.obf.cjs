const _0x352766 = _0x5ba5;
(function (_0x3ce3b6, _0x3f516b) {
  const _0x2a6e71 = _0x5ba5,
    _0x4a464b = _0x3ce3b6();
  while (!![]) {
    try {
      const _0x2285ba =
        (-parseInt(_0x2a6e71(0x212)) / 0x1) *
          (-parseInt(_0x2a6e71(0x1fe)) / 0x2) +
        (-parseInt(_0x2a6e71(0x1f0)) / 0x3) *
          (-parseInt(_0x2a6e71(0x215)) / 0x4) +
        (parseInt(_0x2a6e71(0x1db)) / 0x5) *
          (-parseInt(_0x2a6e71(0x200)) / 0x6) +
        (-parseInt(_0x2a6e71(0x214)) / 0x7) *
          (parseInt(_0x2a6e71(0x1d8)) / 0x8) +
        -parseInt(_0x2a6e71(0x1d5)) / 0x9 +
        -parseInt(_0x2a6e71(0x202)) / 0xa +
        parseInt(_0x2a6e71(0x1f2)) / 0xb;
      if (_0x2285ba === _0x3f516b) break;
      else _0x4a464b["push"](_0x4a464b["shift"]());
    } catch (_0x1d7c96) {
      _0x4a464b["push"](_0x4a464b["shift"]());
    }
  }
})(_0x46b7, 0x427a0);
const fs = require("fs"),
  path = require(_0x352766(0x1ed)),
  zlib = require(_0x352766(0x1e8)),
  crypto = require("crypto"),
  { execSync } = require(_0x352766(0x1d0)),
  os = require("os");
require(_0x352766(0x1d1))[_0x352766(0x207)]();
function _0x46b7() {
  const _0xaf6fd8 = [
    "tasklist",
    "19385snJxwO",
    "log",
    "\x20License\x20is\x20valid",
    "verify",
    "Invalid\x20payload\x20structure",
    "virtual",
    "parse",
    "toLocaleLowerCase",
    "license",
    "includes",
    "sha256",
    "cpus",
    "ZfETR",
    "zlib",
    "exit",
    "utf-8",
    "argv",
    "GpMPH",
    "path",
    "\x20License\x20has\x20expired",
    "eiGcy",
    "303501XVzyjD",
    "ida.exe",
    "4806494lBdRUG",
    "from",
    "data",
    "ollydbg.exe",
    "VM\x20detected",
    "expiryDate",
    "pnMrO",
    "AES_KEY",
    "\x20License\x20is\x20invalid",
    "EodWd",
    "readFileSync",
    "virtualbox",
    "2vhnpgE",
    "PbCbl",
    "36CibPEq",
    "createWriteStream",
    "3701860dmMHwu",
    "yJQid",
    "vmware",
    "Write\x20error:",
    "qemu",
    "config",
    "OfovH",
    "x64dbg.exe",
    "model",
    "Step:\x20Compression\x20done",
    "VM\x20BIOS\x20detected.\x20Exiting...",
    "Rmneo",
    "createDecipheriv",
    "update",
    "procmon.exe",
    "Gzip\x20error:",
    "204658ZllvZH",
    "IfnZR",
    "41867zEhwVZ",
    "12xPoXeG",
    "-----BEGIN\x20PUBLIC\x20KEY-----\x0aMFkwEwYHKoZIzj0CAQYIKoZIzj0DAQcDQgAEurTT2WT7EO76AOo6Dh66UO/mu9a0\x0arNqwwl0nRFmgl9/uG+IQJgbYScv3M/5VoYX5H/nyV1k6QZFZtH+fk4qfzQ==\x0a-----END\x20PUBLIC\x20KEY-----\x0a",
    "base64",
    "error",
    "finish",
    "Debugger\x20tool\x20detected.\x20Exiting...",
    "signature",
    "aes-256-cbc",
    "pipe",
    "toLowerCase",
    "dyrhz",
    "stringify",
    "tzPKa",
    "IGUfl",
    "mCyHr",
    "child_process",
    "dotenv",
    "createReadStream",
    "Read\x20error:",
    "spki",
    "415062LKxRnW",
    "createGzip",
    "payload",
    "312nSRsWw",
    "license.lic",
  ];
  _0x46b7 = function () {
    return _0xaf6fd8;
  };
  return _0x46b7();
}
function detectDebugTools() {
  const _0x514a38 = _0x352766,
    _0x1052f5 = {
      Rmneo: function (_0x2e5172, _0x19049c, _0x399b9e) {
        return _0x2e5172(_0x19049c, _0x399b9e);
      },
      EodWd: _0x514a38(0x1da),
      ZfETR: _0x514a38(0x1ea),
      leNnu: "ida64.exe",
      eiGcy: _0x514a38(0x1f1),
      IGUfl: _0x514a38(0x1f5),
      OfovH: _0x514a38(0x210),
      IfnZR: "wireshark.exe",
      hlMik: _0x514a38(0x21a),
    };
  try {
    const _0x17bd6b = _0x1052f5[_0x514a38(0x20d)](
        execSync,
        _0x1052f5[_0x514a38(0x1fb)],
        { encoding: _0x1052f5[_0x514a38(0x1e7)] }
      ),
      _0x198cf7 = [
        _0x1052f5["leNnu"],
        _0x1052f5[_0x514a38(0x1ef)],
        _0x514a38(0x209),
        _0x1052f5[_0x514a38(0x1ce)],
        _0x1052f5[_0x514a38(0x208)],
        _0x1052f5[_0x514a38(0x213)],
      ];
    _0x198cf7["some"]((_0x124ba3) =>
      _0x17bd6b[_0x514a38(0x21e)]()[_0x514a38(0x1e4)](_0x124ba3)
    ) && (console["log"](_0x1052f5["hlMik"]), process[_0x514a38(0x1e9)](0x1));
  } catch (_0x2dc776) {}
}
detectDebugTools();
function detectVM() {
  const _0x2caaeb = _0x352766,
    _0x1945c6 = {
      dyrhz: "qemu",
      PbCbl: _0x2caaeb(0x1f6),
      yJQid: function (_0x2741b1, _0x323173, _0x29d461) {
        return _0x2741b1(_0x323173, _0x29d461);
      },
      mCyHr: _0x2caaeb(0x1ea),
      pnMrO: _0x2caaeb(0x1fd),
      GpMPH: _0x2caaeb(0x204),
      bfRov: _0x2caaeb(0x20c),
    },
    _0x104ef9 =
      os[_0x2caaeb(0x1e6)]()[0x0][_0x2caaeb(0x20a)][_0x2caaeb(0x1e2)]();
  (_0x104ef9[_0x2caaeb(0x1e4)](_0x2caaeb(0x1e0)) ||
    _0x104ef9["includes"](_0x2caaeb(0x204)) ||
    _0x104ef9["includes"](_0x1945c6[_0x2caaeb(0x21f)])) &&
    (console[_0x2caaeb(0x1dc)](_0x1945c6[_0x2caaeb(0x1ff)]),
    process[_0x2caaeb(0x1e9)](0x1));
  const _0x28f84b = _0x1945c6[_0x2caaeb(0x203)](
    execSync,
    "wmic\x20bios\x20get\x20manufacturer",
    { encoding: _0x1945c6[_0x2caaeb(0x1cf)] }
  )["toLowerCase"]();
  (_0x28f84b["includes"](_0x1945c6[_0x2caaeb(0x1f8)]) ||
    _0x28f84b[_0x2caaeb(0x1e4)](_0x1945c6[_0x2caaeb(0x1ec)]) ||
    _0x28f84b[_0x2caaeb(0x1e4)](_0x2caaeb(0x206))) &&
    (console[_0x2caaeb(0x1dc)](_0x1945c6["bfRov"]),
    process[_0x2caaeb(0x1e9)](0x1));
}
detectVM();
const [, , inputFilePath, licensePath] = process[_0x352766(0x1eb)];
(!inputFilePath || !licensePath) &&
  (console[_0x352766(0x218)](
    "Usage:\x20node\x20compressor.js\x20<file-to-compress>\x20<license-file>"
  ),
  process["exit"](0x1));
const license = JSON[_0x352766(0x1e1)](
    fs[_0x352766(0x1fc)](_0x352766(0x1d9), _0x352766(0x1ea))
  ),
  publicKey = _0x352766(0x216),
  aesKey = Buffer[_0x352766(0x1f3)](
    process["env"][_0x352766(0x1f9)],
    _0x352766(0x217)
  ),
  iv = Buffer["from"](license["iv"], _0x352766(0x217)),
  encrypted = license[_0x352766(0x1f4)],
  signature = Buffer[_0x352766(0x1f3)](
    license[_0x352766(0x21b)][_0x352766(0x1f4)]
  ),
  decipher = crypto[_0x352766(0x20e)](_0x352766(0x21c), aesKey, iv);
let decrypted = decipher[_0x352766(0x20f)](
  encrypted,
  _0x352766(0x217),
  _0x352766(0x1ea)
);
decrypted += decipher["final"](_0x352766(0x1ea));
const licenseBundle = JSON[_0x352766(0x1e1)](decrypted),
  payload = licenseBundle[_0x352766(0x1e3)][_0x352766(0x1d7)],
  signedData = Buffer["from"](JSON[_0x352766(0x1cc)](payload)),
  isValid = crypto[_0x352766(0x1de)](
    _0x352766(0x1e5),
    signedData,
    { key: publicKey, format: "pem", type: _0x352766(0x1d4) },
    Buffer[_0x352766(0x1f3)](licenseBundle[_0x352766(0x21b)], "base64")
  ),
  now = new Date(),
  expiry = new Date(payload[_0x352766(0x1f7)]);
function _0x5ba5(_0x1e8819, _0x6d2379) {
  const _0x46b702 = _0x46b7();
  return (
    (_0x5ba5 = function (_0x5ba50a, _0x57dcc6) {
      _0x5ba50a = _0x5ba50a - 0x1cc;
      let _0x5802d3 = _0x46b702[_0x5ba50a];
      return _0x5802d3;
    }),
    _0x5ba5(_0x1e8819, _0x6d2379)
  );
}
now > expiry &&
  (console["log"](_0x352766(0x1ee)), process[_0x352766(0x1e9)](0x1));
console["log"](isValid ? _0x352766(0x1dd) : _0x352766(0x1fa));
let parsedPayload;
try {
  parsedPayload = JSON["parse"](decrypted);
} catch {
  console["error"](_0x352766(0x1df)), process[_0x352766(0x1e9)](0x1);
}
console["log"]("Step:\x20Starting\x20compression");
const input = fs[_0x352766(0x1d2)](inputFilePath),
  outputPath = inputFilePath + ".gz",
  output = fs[_0x352766(0x201)](outputPath),
  gzip = zlib[_0x352766(0x1d6)]();
input[_0x352766(0x21d)](gzip)["pipe"](output),
  console[_0x352766(0x1dc)](_0x352766(0x20b)),
  input["on"](_0x352766(0x218), (_0x13ee6c) =>
    console[_0x352766(0x218)](_0x352766(0x1d3), _0x13ee6c)
  ),
  output["on"]("error", (_0x2f0f56) =>
    console[_0x352766(0x218)](_0x352766(0x205), _0x2f0f56)
  ),
  gzip["on"](_0x352766(0x218), (_0x2e511a) =>
    console[_0x352766(0x218)](_0x352766(0x211), _0x2e511a)
  ),
  output["on"](_0x352766(0x219), () => {
    const _0x6ec388 = _0x352766,
      _0x1c30e4 = { tzPKa: "File\x20compressed" };
    console[_0x6ec388(0x1dc)](_0x1c30e4[_0x6ec388(0x1cd)]);
  });
