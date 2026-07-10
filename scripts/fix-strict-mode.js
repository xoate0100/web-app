#!/usr/bin/env node
/**
 * Automated fixes for TypeScript strict mode errors in mifosx-web-app.
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

function fixFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  const original = content;
  let changes = 0;

  // 1. JSON.parse(localStorage.getItem(...)) -> add ?? 'null'
  content = content.replace(
    /JSON\.parse\(localStorage\.getItem\(([^)]+)\)\)/g,
    (match, arg) => {
      if (match.includes("?? 'null'") || match.includes('?? "null"')) return match;
      changes++;
      return `JSON.parse(localStorage.getItem(${arg}) ?? 'null')`;
    }
  );

  // 2. document.getElementById(...).method -> optional chaining
  content = content.replace(
    /document\.getElementById\(([^)]+)\)\.(?!click\(\))/g,
    (match, arg) => {
      if (match.includes('?.') ) return match;
      changes++;
      return `document.getElementById(${arg})?.`;
    }
  );
  content = content.replace(
    /document\.getElementById\(([^)]+)\)\.click\(\)/g,
    (match, arg) => {
      if (match.includes('?.') ) return match;
      changes++;
      return `document.getElementById(${arg})?.click()`;
    }
  );

  // 3. route.data.subscribe typed callbacks -> (data: any)
  // Handle parent.data first, then .data (multi-line supported)
  content = content.replace(
    /\.parent\.data\.subscribe\(\(data:\s*\{[\s\S]*?\}\s*\)\s*=>/g,
    () => {
      changes++;
      return '.parent.data.subscribe((data: any) =>';
    }
  );
  content = content.replace(
    /\.data\.subscribe\(\(data:\s*\{[\s\S]*?\}\s*\)\s*=>/g,
    () => {
      changes++;
      return '.data.subscribe((data: any) =>';
    }
  );

  // 4. Form .get('field').method -> .get('field')!.method (non-null assertion)
  // Only when not already using ! or ?
  content = content.replace(
    /\.get\(([^)]+)\)\.(?![!?])/g,
    (match, arg) => {
      changes++;
      return `.get(${arg})!.`;
    }
  );

  // 5. FormArray .at(index).method -> .at(index)!.method
  content = content.replace(
    /\.at\(([^)]+)\)\.(?![!?])/g,
    (match, arg) => {
      changes++;
      return `.at(${arg})!.`;
    }
  );

  // 6. controls[index].method -> controls[index]!.method
  content = content.replace(
    /\.controls\[([^\]]+)\]\.(?![!?])/g,
    (match, arg) => {
      changes++;
      return `.controls[${arg}]!.`;
    }
  );

  // 7. route.paramMap.get('x') passed directly - add non-null assertion when assigned
  content = content.replace(
    /(const\s+\w+\s*=\s*)route\.paramMap\.get\(([^)]+)\)(?![!?])/g,
    (match, prefix, arg) => {
      changes++;
      return `${prefix}route.paramMap.get(${arg})!`;
    }
  );

  // 8. this.route.paramMap.get('x') without assignment
  content = content.replace(
    /this\.route\.paramMap\.get\(([^)]+)\)(?![!?.])/g,
    (match, arg) => {
      changes++;
      return `this.route.paramMap.get(${arg})!`;
    }
  );

  // 9. route.params['key'] and route.params["key"] - add + for number conversion or !
  // For string usage in service calls, the param is typically string
  content = content.replace(
    /route\.params\[([^\]]+)\](?![!?.])/g,
    (match, arg) => {
      changes++;
      return `route.params[${arg}]!`;
    }
  );

  // 10. this.route.params['key']
  content = content.replace(
    /this\.route\.params\[([^\]]+)\](?![!?.])/g,
    (match, arg) => {
      changes++;
      return `this.route.params[${arg}]!`;
    }
  );

  // 11. Object indexed access - change Object type to Record<string, any> in refineObject patterns
  content = content.replace(
    /refineObject\(dataObj:\s*Object\)/g,
    () => {
      changes++;
      return 'refineObject(dataObj: Record<string, any>)';
    }
  );

  // 12. dataObj[propName] where dataObj is typed as Object in function params
  content = content.replace(
    /\((\w+):\s*Object\)(\s*:\s*\w+)?\s*\{/g,
    (match, paramName, returnType) => {
      changes++;
      return `(${paramName}: Record<string, any>)${returnType || ''} {`;
    }
  );

  // 13. route.snapshot.paramMap.get without assertion
  content = content.replace(
    /route\.snapshot\.paramMap\.get\(([^)]+)\)(?![!?.])/g,
    (match, arg) => {
      changes++;
      return `route.snapshot.paramMap.get(${arg})!`;
    }
  );

  // 14. this.route.snapshot.paramMap.get
  content = content.replace(
    /this\.route\.snapshot\.paramMap\.get\(([^)]+)\)(?![!?.])/g,
    (match, arg) => {
      changes++;
      return `this.route.snapshot.paramMap.get(${arg})!`;
    }
  );

  // 15. activatedRoute.paramMap.get
  content = content.replace(
    /activatedRoute\.paramMap\.get\(([^)]+)\)(?![!?.])/g,
    (match, arg) => {
      changes++;
      return `activatedRoute.paramMap.get(${arg})!`;
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

walkDir(SRC_DIR, ['.ts', '.html'], (filePath) => {
  const changes = fixFile(filePath);
  if (changes > 0) {
    filesChanged++;
    totalChanges += changes;
    console.log(`Fixed ${changes} issues in ${path.relative(SRC_DIR, filePath)}`);
  }
});

console.log(`\nTotal: ${totalChanges} fixes in ${filesChanged} files`);
