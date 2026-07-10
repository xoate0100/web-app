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

  if (filePath.endsWith('.html')) {
    // Form.get()! -> $any(Form.get()) for FormControl inputs
    content = content.replace(/(\w+Form)\.get\(([^)]+)\)!/g, (m, form, arg) => {
      changes++;
      return `$any(${form}.get(${arg}))`;
    });

    // chart.controls in interest rate chart templates
    content = content.replace(/\bchart\.controls\./g, () => {
      changes++;
      return '$any(chart).controls.';
    });
  }

  if (filePath.endsWith('.ts')) {
    // SelectionModel without generic
    content = content.replace(/new SelectionModel\(/g, () => {
      changes++;
      return 'new SelectionModel<any>(';
    });

    // delete obj[key] in refineObject -> assign undefined
    content = content.replace(/delete (\w+)\[(\w+)\];/g, (m, obj, key) => {
      changes++;
      return `${obj}[${key}] = undefined;`;
    });

    // Remaining typed subscribe callbacks
    content = content.replace(/\.subscribe\(\((\w+):\s*[A-Z][\w<>,\s]*\)\s*=>/g, (m, param) => {
      changes++;
      return `.subscribe((${param}: any) =>`;
    });

    // savedCredentials possibly null - add guard or !
    content = content.replace(
      /if \(savedCredentials\) \{[\s\S]*?setAuthorizationToken\(savedCredentials\./g,
      (m) => m.replace('savedCredentials.', 'savedCredentials!.')
    );
  }

  if (content !== original) {
    fs.writeFileSync(filePath, content, 'utf8');
    return changes;
  }
  return 0;
}

let total = 0, files = 0;
walkDir(SRC_DIR, ['.html', '.ts'], (fp) => {
  const c = fixFile(fp);
  if (c > 0) { files++; total += c; console.log(c, path.relative(SRC_DIR, fp)); }
});
console.log(`Total: ${total} in ${files} files`);
