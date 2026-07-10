#!/usr/bin/env node
/**
 * Fourth round: validators, resolvers, displayWith, FormArray templates, etc.
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

  // 1. ValidatorFn - use AbstractControl parameter
  if (content.includes('ValidatorFn = (')) {
    content = content.replace(
      /import \{([^}]*)\} from '@angular\/forms';/,
      (match, imports) => {
        if (imports.includes('AbstractControl')) return match;
        changes++;
        return `import {${imports.trim()}, AbstractControl} from '@angular/forms';`;
      }
    );
    content = content.replace(
      /ValidatorFn = \((\w+): FormGroup\): ValidationErrors/g,
      (match, param) => {
        changes++;
        return `ValidatorFn = (${param}: AbstractControl): ValidationErrors`;
      }
    );
    // Add cast inside validator body
    content = content.replace(
      /(ValidatorFn = \(\w+: AbstractControl\): ValidationErrors \| null => \{\n)(\s*const)/g,
      (match, start, constLine) => {
        if (content.includes('as FormGroup')) return match;
        changes++;
        const paramName = match.match(/ValidatorFn = \((\w+):/)[1];
        return `${start}  const form = ${paramName} as FormGroup;\n`;
      }
    );
    content = content.replace(
      /(\w+Form)\.controls\./g,
      (match, formName) => {
        if (content.includes('const form =')) {
          changes++;
          return 'form.controls.';
        }
        return match;
      }
    );
  }

  // 2. Resolvers returning undefined -> of(null)
  if (filePath.endsWith('.resolver.ts') && content.includes('return undefined')) {
    if (!content.includes("from 'rxjs'") && content.includes("from 'rxjs';")) {
      // already has rxjs import
    }
    if (!content.match(/import \{[^}]*\bof\b[^}]*\} from 'rxjs'/)) {
      content = content.replace(
        /import \{([^}]*)\} from 'rxjs';/,
        (match, imports) => {
          if (imports.includes('of')) return match;
          changes++;
          return `import {${imports.trim()}, of} from 'rxjs';`;
        }
      );
    }
    content = content.replace(/return undefined;/g, () => {
      changes++;
      return 'return of(null);';
    });
  }

  // 3. FormArray.at(i)!.controls in HTML -> $any(...).controls
  content = content.replace(
    /(\w+)\.at\(([^)]+)\)!\.controls/g,
    (match, arr, idx) => {
      changes++;
      return `$any(${arr}.at(${idx})).controls`;
    }
  );

  // 4. displayWith functions returning undefined - add || ''
  content = content.replace(
    /(display\w+\([^)]*\)[^{]*\{[^}]*return\s+)([^;]+);/g,
    (match, prefix, ret) => {
      if (ret.includes("|| ''") || ret.includes('??')) return match;
      changes++;
      return `${prefix}${ret} || '';`;
    }
  );

  // 5. logout return true -> return of(true) in authentication service
  if (filePath.includes('authentication.service.ts')) {
    content = content.replace(
      /logout\(\): Observable<boolean> \{[\s\S]*?return true;\n  \}/,
      (match) => {
        if (match.includes('return of(true)')) return match;
        changes++;
        return match.replace('return true;', 'return of(true);');
      }
    );
  }

  // 6. formfields.push with null - ensure filter exists in address components
  if (content.includes('formfields.push(this.isFieldEnabled') && !content.includes('formfields.filter')) {
    content = content.replace(
      /return formfields;/g,
      () => {
        changes++;
        return 'return formfields.filter((f): f is FormfieldBase => f !== null);';
      }
    );
  }

  // 7. ckEditor.editorInstance possibly null
  content = content.replace(
    /this\.ckEditor\.editorInstance\./g,
    () => {
      changes++;
      return 'this.ckEditor.editorInstance!.';
    }
  );

  // 8. progressBarMode type - cast in component if needed (skip for now)

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
