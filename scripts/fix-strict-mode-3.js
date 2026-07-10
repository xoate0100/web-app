#!/usr/bin/env node
/**
 * Third round: route.parent nullability, JSON.parse fixes, transaction object types.
 */
const fs = require('fs');
const path = require('path');

const SRC_DIR = path.join(__dirname, '..', 'src');

function walkDir(dir, extensions, callback) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      walkDir(fullPath, extensions, callback);
    } else if (extensions.some(ext => entry.name.endsWith(ext))) {
      callback(fullPath);
    }
  }
}

function fixParentNullability(content) {
  let changes = 0;
  let prev;
  do {
    prev = content;
    content = content.replace(/\.parent(?!\!)(?=\.)/g, () => {
      changes++;
      return '.parent!';
    });
  } while (content !== prev);
  return { content, changes };
}

function fixFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  const original = content;
  let changes = 0;

  // 1. route.parent nullability
  const parentFix = fixParentNullability(content);
  content = parentFix.content;
  changes += parentFix.changes;

  // 2. JSON.parse without null coalescing on getItem (not already fixed)
  content = content.replace(
    /JSON\.parse\(([^)]*\.getItem\([^)]+\)(?:\s*\|\|\s*[^)]*\.getItem\([^)]+\))*)(?!\s*\?\?)\)/g,
    (match, inner) => {
      if (inner.includes("?? 'null'") || inner.includes('?? "null"')) return match;
      changes++;
      // Wrap each getItem call with ?? 'null'
      const fixed = inner.replace(/(\w+\.getItem\([^)]+\))/g, "$1 ?? 'null'");
      return `JSON.parse(${fixed})`;
    }
  );

  // 3. window.open result - add non-null assertion for common pattern
  content = content.replace(
    /(const\s+templateWindow\s*=\s*window\.open\([^)]+\))(?!\s*;?\s*\/\/)/g,
    (match) => {
      if (content.includes('templateWindow!.')) return match;
      return match;
    }
  );
  content = content.replace(
    /templateWindow\.(document|location|print|close|focus)/g,
    (match) => {
      changes++;
      return match.replace('templateWindow.', 'templateWindow!.');
    }
  );

  // 4. Transaction objects with dynamic keys - add Record type
  content = content.replace(
    /const\s+(loanTransaction)\s*=\s*\{/g,
    () => {
      changes++;
      return 'const loanTransaction: Record<string, any> = {';
    }
  );
  content = content.replace(
    /const\s+(savingsTransaction)\s*=\s*\{/g,
    () => {
      changes++;
      return 'const savingsTransaction: Record<string, any> = {';
    }
  );

  // 5. map returning of(true) -> return true (common bug with strict typing)
  content = content.replace(
    /return\s+of\(true\);/g,
    () => {
      changes++;
      return 'return true;';
    }
  );

  // 6. http subscribe typed callbacks -> any
  content = content.replace(
    /\.subscribe\(\((\w+):\s*(Credentials|OAuth2Token)\)\s*=>/g,
    (match, param) => {
      changes++;
      return `.subscribe((${param}: any) =>`;
    }
  );

  // 7. dataForDialog type with undefined values - make fields optional
  if (content.includes('dataForDialog:') && content.includes('columnName: undefined')) {
    content = content.replace(
      /dataForDialog:\s*\{\s*columnName:\s*string,/g,
      () => {
        changes++;
        return 'dataForDialog: {\n    columnName?: string,';
      }
    );
    content = content.replace(
      /columnDisplayType:\s*string,/g,
      'columnDisplayType?: string,'
    );
    content = content.replace(
      /isColumnPrimaryKey:\s*boolean,/g,
      'isColumnPrimaryKey?: boolean,'
    );
    content = content.replace(
      /columnLength:\s*string,/g,
      'columnLength?: string,'
    );
    content = content.replace(
      /columnCode:\s*string,/g,
      'columnCode?: string,'
    );
    content = content.replace(
      /columnCodes:\s*any,/g,
      'columnCodes?: any,'
    );
    content = content.replace(
      /type:\s*string\s*\}/g,
      'type?: string\n  }'
    );
  }

  // 8. Bracket access on typed action maps in client-actions etc
  content = content.replace(
    /this\.(clientActions|groupActions|loanActions|savingsActions)\[(\w+)\]/g,
    (match, obj, key) => {
      if (match.includes('Record<string')) return match;
      changes++;
      return `(this.${obj} as Record<string, boolean>)[${key}]`;
    }
  );

  if (content !== original) {
    fs.writeFileSync(filePath, content, 'utf8');
    return changes;
  }
  return 0;
}

let totalChanges = 0;
let filesChanged = 0;

walkDir(SRC_DIR, ['.ts'], (filePath) => {
  const changes = fixFile(filePath);
  if (changes > 0) {
    filesChanged++;
    totalChanges += changes;
    console.log(`Fixed ${changes} issues in ${path.relative(SRC_DIR, filePath)}`);
  }
});

console.log(`\nTotal: ${totalChanges} fixes in ${filesChanged} files`);
