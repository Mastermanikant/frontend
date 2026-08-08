import fs from 'fs';
import * as cheerio from 'cheerio';

const htmlContent = fs.readFileSync('D:/Best_ui/button_demo.html', 'utf-8');
const $ = cheerio.load(htmlContent);

const styleText = $('style').text();

// Extract ALL css blocks: selectors { rules }
// Also handle @keyframes
const cssBlocks = [];
const blockRegex = /([^{]+)\s*\{([^}]+)\}/g;
let match;
while ((match = blockRegex.exec(styleText)) !== null) {
  let selector = match[1].trim();
  const rules = match[2].trim();
  
  // ignore global body/header container stuff
  if (selector === '*' || selector === 'body' || selector.startsWith('header') || selector.startsWith('.container') || selector.startsWith('.category') || selector.startsWith('.grid') || selector.startsWith('.card') || selector.startsWith('.name') || selector.startsWith('.preview') || selector.startsWith('@media')) {
    continue;
  }
  
  cssBlocks.push({ selector, rules, fullText: `${selector} {\n  ${rules.replace(/\n/g, '\n  ')}\n}` });
}

// Special case for global button styles (button, button:hover)
const baseButtonCss = cssBlocks
  .filter(b => b.selector === 'button' || b.selector === 'button:hover')
  .map(b => b.fullText)
  .join('\n\n');

// Special case for keyframes (spin)
const keyframes = cssBlocks
  .filter(b => b.selector.includes('@keyframes'))
  .map(b => b.fullText)
  .join('\n\n');

const categories = [];

$('.category').each((i, el) => {
  const catName = $(el).find('h2').text().replace(/^\d+\.\s*/, '');
  const buttons = [];
  
  $(el).find('.card').each((j, card) => {
    const name = $(card).find('.name').text();
    const previewHtml = $(card).find('.preview').html().trim();
    
    // Find all class names in this button's HTML to match CSS
    const classMatches = previewHtml.match(/class="([^"]+)"/g) || [];
    const classNames = new Set();
    classMatches.forEach(c => {
      c.replace('class="', '').replace('"', '').split(' ').forEach(cls => classNames.add(cls));
    });

    let specificCss = [];
    
    // Find all blocks that reference ANY of these class names
    cssBlocks.forEach(block => {
      // Don't duplicate base button
      if (block.selector === 'button' || block.selector === 'button:hover') return;
      
      let matched = false;
      classNames.forEach(cls => {
        // e.g. `.primary`, `.tooltip:hover::after`, `.group button:first-child`
        if (block.selector.includes(`.${cls}`)) {
          matched = true;
        }
      });
      
      if (matched) {
        specificCss.push(block.fullText);
      }
    });

    // Special logic for loading button which needs @keyframes
    if (classNames.has('loading') && keyframes) {
      specificCss.push(`@keyframes spin {\n  to { transform: rotate(360deg); }\n}`);
    }

    const fullCss = `/* Base Button Style */\n${baseButtonCss}\n\n/* Modifier */\n${specificCss.join('\n\n')}`.trim();
    
    buttons.push({
      name,
      html: previewHtml,
      css: fullCss
    });
  });
  
  categories.push({
    name: catName,
    buttons
  });
});

const output = `// Auto-generated from button_demo.html\nexport const globalKeyframes = \`${keyframes.replace(/`/g, '\\`')}\`;\n\nexport const buttonLibraryData = ${JSON.stringify(categories, null, 2)};\n`;
fs.writeFileSync('src/data/buttonLibraryData.js', output);
console.log('Successfully generated src/data/buttonLibraryData.js');
