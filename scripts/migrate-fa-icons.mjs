#!/usr/bin/env node
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const srcDir = path.join(__dirname, '..', 'src');

const iconMap = {
  'stop': 'stop',
  'edit': 'edit',
  'calendar': 'calendar',
  'check-sign': 'check',
  'plus': 'plus',
  'exchange': 'right-left',
  'user': 'user',
  'file': 'file',
  'arrow-right': 'arrow-right',
  'flag': 'flag',
  'money': 'money-bill',
  'exclamation-circle': 'circle-exclamation',
  'times': 'times',
  'download': 'download',
  'upload': 'upload',
  'repeat': 'sync',
  'camera': 'camera',
  'trash': 'trash',
  'tasks': 'list-check',
  'file-text': 'file-alt',
  'arrow-circle-right': 'circle-arrow-right',
  'eye': 'eye',
  'pencil': 'pencil',
  'minus': 'minus',
  'dollar': 'dollar-sign',
  'group': 'users',
  'check': 'check',
  'arrow-up': 'arrow-up',
  'arrow-down': 'arrow-down',
  'undo': 'undo',
  'check-circle': 'check-circle',
  'power-off': 'power-off',
  'question-circle': 'circle-question',
  'briefcase': 'briefcase',
  'pencil-square-o': 'pen',
  'pincel-square-o': 'pen',
  'ban': 'ban',
  'exclamation': 'triangle-exclamation',
  'arrow-left': 'arrow-left',
  'table': 'table',
};

function mapIcon(legacyIcon) {
  const trimmed = legacyIcon.trim();
  if (trimmed.startsWith('fa fa-')) {
    const name = trimmed.slice(6).trim();
    return iconMap[name] || name;
  }
  if (trimmed === 'icon-dollar') {
    return 'dollar-sign';
  }
  return trimmed;
}

function walkDir(dir, files = []) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      walkDir(fullPath, files);
    } else if (entry.name.endsWith('.html') || entry.name.endsWith('.ts')) {
      files.push(fullPath);
    }
  }
  return files;
}

function migrateTsContent(content) {
  return content.replace(/icon:\s*'([^']+)'/g, (match, iconValue) => {
    const mapped = mapIcon(iconValue);
    return `icon: '${mapped}'`;
  });
}

function migrateHtmlContent(content) {
  let result = content;

  // Dynamic loan type icons: fa-user / fa-group with ngClass
  result = result.replace(
    /<i\s+class="fa fa-large"\s+\[ngClass\]="([^"]*)\?'fa-user':'fa-group'([^>]*)><\/i>/g,
    (_m, condition, rest) => `<fa-icon size="lg" [icon]="${condition}?'user':'users'${rest}></fa-icon>`
  );

  // Button/icon bindings
  result = result.replace(/<i class="\{\{button\.icon\}\}"><\/i>/g, '<fa-icon [icon]="button.icon"></fa-icon>');
  result = result.replace(/<i class="\{\{item\.icon\}\}"><\/i>/g, '<fa-icon [icon]="item.icon"></fa-icon>');

  // fa-icon with size from fa-2x in class
  result = result.replace(
    /<i\s+class="fa fa-([a-z0-9-]+)([^"]*?)fa-2x([^"]*?)"([^>]*)><\/i>/gi,
    (_m, iconName, before, after, attrs) => {
      const mapped = iconMap[iconName] || iconName;
      const classes = `${before}${after}`.replace(/\s*fa\s*/g, ' ').replace(/\s*fa-2x\s*/g, ' ').trim();
      const classAttr = classes ? ` class="${classes}"` : '';
      return `<fa-icon icon="${mapped}"${classAttr} size="2x"${attrs}></fa-icon>`;
    }
  );

  // Standard <i class="fa fa-ICON ..."> tags (including multiline)
  result = result.replace(/<i\s+class="fa fa-([a-z0-9-]+)([^"]*)"([^>]*)><\/i>/gi, (_m, iconName, extraClasses, attrs) => {
    const mapped = iconMap[iconName] || iconName;
    const classes = extraClasses.trim();
    const sizeMatch = classes.match(/\bfa-large\b/);
    const cleanedClasses = classes.replace(/\bfa-large\b/g, '').trim();
    const classAttr = cleanedClasses ? ` class="${cleanedClasses}"` : '';
    const sizeAttr = sizeMatch ? ' size="lg"' : '';
    return `<fa-icon icon="${mapped}"${classAttr}${sizeAttr}${attrs}></fa-icon>`;
  });

  // Single-quoted class variant
  result = result.replace(/<i\s+class='fa fa-([a-z0-9-]+)([^']*)'([^>]*)><\/i>/gi, (_m, iconName, extraClasses, attrs) => {
    const mapped = iconMap[iconName] || iconName;
    const classes = extraClasses.trim();
    const classAttr = classes ? ` class="${classes}"` : '';
    return `<fa-icon icon="${mapped}"${classAttr}${attrs}></fa-icon>`;
  });

  // Commented-out legacy icons in HTML comments
  result = result.replace(/class="fa fa-([a-z0-9-]+)"/gi, (_m, iconName) => {
    const mapped = iconMap[iconName] || iconName;
    return `icon="${mapped}"`;
  });

  return result;
}

function addFaIconImport(tsContent) {
  if (!tsContent.includes('FaIconComponent') && tsContent.includes('fa-icon')) {
    const faImport = "import { FaIconComponent } from '@fortawesome/angular-fontawesome';\n";
    const lastImportIndex = tsContent.lastIndexOf('\nimport ');
    if (lastImportIndex === -1) {
      return faImport + tsContent;
    }
    const insertAt = tsContent.indexOf('\n', lastImportIndex + 1) + 1;
    tsContent = tsContent.slice(0, insertAt) + faImport + tsContent.slice(insertAt);
  }

  if (tsContent.includes('FaIconComponent') && !tsContent.match(/imports:\s*\[[^\]]*FaIconComponent/)) {
    tsContent = tsContent.replace(/imports:\s*\[/, 'imports: [FaIconComponent, ');
  }

  return tsContent;
}

const changedFiles = [];

for (const filePath of walkDir(srcDir)) {
  const original = fs.readFileSync(filePath, 'utf8');
  let content = original;

  if (filePath.endsWith('.html')) {
    content = migrateHtmlContent(content);
  } else if (filePath.endsWith('.ts') && !filePath.endsWith('icons.module.ts')) {
    content = migrateTsContent(content);
  }

  const componentPath = filePath.replace('.html', '.component.ts');
  if (filePath.endsWith('.html') && fs.existsSync(componentPath)) {
    let tsContent = fs.readFileSync(componentPath, 'utf8');
    const updatedHtml = content;
    if (updatedHtml.includes('fa-icon') && !tsContent.includes('FaIconComponent')) {
      const updatedTs = addFaIconImport(tsContent);
      if (updatedTs !== tsContent) {
        fs.writeFileSync(componentPath, updatedTs);
        if (!changedFiles.includes(componentPath)) {
          changedFiles.push(componentPath);
        }
      }
    }
  }

  if (content !== original) {
    fs.writeFileSync(filePath, content);
    changedFiles.push(filePath);
  }
}

console.log('Changed files:');
changedFiles.sort().forEach((f) => console.log(path.relative(path.join(__dirname, '..'), f)));
