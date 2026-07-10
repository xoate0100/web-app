#!/usr/bin/env node
const fs = require('fs');
const path = require('path');

const SRC_DIR = path.join(__dirname, '..', 'src');

function walkDir(dir, extensions, callback) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) walkDir(fullPath, extensions, callback);
    else if (extensions.some(ext => entry.name.endsWith(ext))) callback(fullPath);
  }
}

function fixFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  const original = content;
  let changes = 0;

  // Only Form/form *Form.get() in templates and bindings
  content = content.replace(/(\w+Form)\.get\(([^)]+)\)("|>)/g, (match, form, arg, end) => {
    if (match.includes(')!')) return match;
    changes++;
    return `${form}.get(${arg})!${end}`;
  });

  if (content !== original) {
    fs.writeFileSync(filePath, content, 'utf8');
    return changes;
  }
  return 0;
}

let total = 0, files = 0;
walkDir(SRC_DIR, ['.html'], (fp) => {
  const c = fixFile(fp);
  if (c > 0) { files++; total += c; console.log(c, path.relative(SRC_DIR, fp)); }
});
console.log(`Total: ${total} in ${files} files`);
