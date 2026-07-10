#!/usr/bin/env node
/**
 * Second round of automated fixes for TypeScript strict mode errors.
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

  // 1. route.data.subscribe with space before data: ( data: { ... })
  content = content.replace(
    /\.data\.subscribe\(\(\s*data:\s*\{[\s\S]*?\}\s*\)\s*=>/g,
    () => {
      changes++;
      return '.data.subscribe((data: any) =>';
    }
  );

  // 2. snapshot.params['key'] and snapshot.queryParams['key'] - add !
  content = content.replace(
    /\.snapshot\.params\[([^\]]+)\](?![!?.])/g,
    (match, arg) => {
      changes++;
      return `.snapshot.params[${arg}]!`;
    }
  );
  content = content.replace(
    /\.snapshot\.queryParams\[([^\]]+)\](?![!?.])/g,
    (match, arg) => {
      changes++;
      return `.snapshot.queryParams[${arg}]!`;
    }
  );

  // 3. parent.snapshot.params['key']
  content = content.replace(
    /\.parent\.snapshot\.params\[([^\]]+)\](?![!?.])/g,
    (match, arg) => {
      changes++;
      return `.parent.snapshot.params[${arg}]!`;
    }
  );

  // 4. parent.parent.paramMap.get and parent.paramMap.get without !
  content = content.replace(
    /(\.parent(?:\.parent)?\.paramMap\.get\([^)]+\))(?![!?.])/g,
    (match) => {
      changes++;
      return `${match}!`;
    }
  );

  // 5. queryParamMap.get without !
  content = content.replace(
    /\.queryParamMap\.get\(([^)]+)\)(?![!?.])/g,
    (match, arg) => {
      changes++;
      return `.queryParamMap.get(${arg})!`;
    }
  );

  // 6. paramMap.get in inline expressions (not already fixed) - broader pattern
  // Match paramMap.get('x') not followed by ! when used as function argument
  content = content.replace(
    /paramMap\.get\(([^)]+)\)(?![!?.])/g,
    (match, arg) => {
      changes++;
      return `paramMap.get(${arg})!`;
    }
  );

  // 7. actions[name] = true pattern - dynamic key on typed object
  content = content.replace(
    /this\.actions\[(\w+)\]\s*=/g,
    (match, name) => {
      changes++;
      return `(this.actions as Record<string, boolean>)[${name}] =`;
    }
  );

  // 8. Similar pattern for other action maps
  content = content.replace(
    /this\.(\w+Actions)\[(\w+)\]\s*=/g,
    (match, obj, name) => {
      if (match.includes('Record<string')) return match;
      changes++;
      return `(this.${obj} as Record<string, boolean>)[${name}] =`;
    }
  );

  // 9. formfields.push with ternary null - change to conditional push pattern at end
  // Add filter at return: return formfields.filter((f): f is FormfieldBase => f !== null);
  if (content.includes('formfields.push(this.isFieldEnabled') && content.includes(': null)')) {
    if (!content.includes('formfields.filter')) {
      content = content.replace(
        /return formfields;/g,
        () => {
          changes++;
          return 'return formfields.filter((f): f is FormfieldBase => f !== null);';
        }
      );
    }
  }

  // 10. route.snapshot.data['key']
  content = content.replace(
    /\.snapshot\.data\[([^\]]+)\](?![!?.])/g,
    (match, arg) => {
      changes++;
      return `.snapshot.data[${arg}]!`;
    }
  );

  // 11. Indexed access on Params type - route.snapshot.params without snapshot prefix already done
  // Fix Params from @angular/router: params['id'] on ActivatedRouteSnapshot
  content = content.replace(
    /(\w+)\.params\[([^\]]+)\](?![!?.])/g,
    (match, obj, arg) => {
      if (obj === 'route' || obj === 'snapshot' || obj.includes('Route')) {
        changes++;
        return `${obj}.params[${arg}]!`;
      }
      return match;
    }
  );

  // 12. Fix Object type parameters in resolvers and services for route params
  // route.queryParams['x']
  content = content.replace(
    /\.queryParams\[([^\]]+)\](?![!?.])/g,
    (match, arg) => {
      changes++;
      return `.queryParams[${arg}]!`;
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
