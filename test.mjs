import { buttonLibraryData } from './src/data/buttonLibraryData.js';
const btn = buttonLibraryData[0].buttons[0];
const uniqueId = '0-0';
const scopedCss = btn.css
  .replace(/(^|\n|\})\s*button\s*\{/g, `$1 .btn-preview-${uniqueId} button {`)
  .replace(/(^|\n|\})\s*\.([a-zA-Z_-][a-zA-Z0-9_-]*)/g, `$1 .btn-preview-${uniqueId} .$2`);
console.log('Original CSS:');
console.log(btn.css);
console.log('---');
console.log('Scoped CSS:');
console.log(scopedCss);
