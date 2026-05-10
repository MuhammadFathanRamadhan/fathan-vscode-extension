#!/usr/bin/env node
const { execSync } = require("child_process");
const fs = require("fs");
const path = require("path");

const pkgPath = path.join(__dirname, "..", "package.json");
const pkg = JSON.parse(fs.readFileSync(pkgPath, "utf8"));

const out = execSync("code --list-extensions", { encoding: "utf8", shell: true });
const exts = out.split(/\r?\n/).map(s => s.trim()).filter(Boolean).sort();

const self = `${pkg.publisher}.${pkg.name}`.toLowerCase();
pkg.extensionPack = exts.filter(e => e.toLowerCase() !== self);

fs.writeFileSync(pkgPath, JSON.stringify(pkg, null, 2) + "\n");
console.log(`extensionPack updated: ${pkg.extensionPack.length} extensions`);
