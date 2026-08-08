import fs from 'fs';
import * as cheerio from 'cheerio';

const htmlContent = fs.readFileSync('D:/Best_ui/button_demo.html', 'utf-8');
const $ = cheerio.load(htmlContent);

// Extract CSS
const styleText = $('style').text();
const cssRules = {};
// A simple regex to find class rules in CSS (not perfect but works for this file)
const cssRegex = /\.([a-zA-Z0-9_-]+)(?::[a-zA-Z-]+)?\s*\{([^}]+)\}/g;
let match;
while ((match = cssRegex.exec(styleText)) !== null) {
  const className = match[1];
  const rules = match[2].trim();
  if (!cssRules[className]) {
    cssRules[className] = rules;
  } else {
    cssRules[className] += '\n' + rules;
  }
}

// Special case for global button styles
let baseButtonStyle = '';
const baseBtnMatch = /button\s*\{([^}]+)\}/.exec(styleText);
if (baseBtnMatch) {
  baseButtonStyle = baseBtnMatch[1].trim();
}

const categories = [];

$('.category').each((i, el) => {
  const catName = $(el).find('h2').text().replace(/^\d+\.\s*/, '');
  const buttons = [];
  
  $(el).find('.card').each((j, card) => {
    const name = $(card).find('.name').text();
    const previewHtml = $(card).find('.preview').html().trim();
    
    // Extract class names from the preview HTML to find the relevant CSS
    const classMatch = previewHtml.match(/class="([^"]+)"/);
    let cssCode = '';
    
    if (classMatch) {
      const classNames = classMatch[1].split(' ');
      classNames.forEach(cls => {
        if (cssRules[cls]) {
          cssCode += `.${cls} {\n  ${cssRules[cls].replace(/\n/g, '\n  ')}\n}\n\n`;
        }
      });
    }
    
    // Add base button CSS for context
    const fullCss = `/* Base Button Style */\nbutton {\n  ${baseButtonStyle.replace(/\n/g, '\n  ')}\n}\n\n/* Modifier */\n${cssCode}`.trim();
    
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

const output = `// Auto-generated from button_demo.html
export const buttonLibraryData = ${JSON.stringify(categories, null, 2)};
`;

fs.writeFileSync('src/data/buttonLibraryData.js', output);
console.log('Successfully generated src/data/buttonLibraryData.js');
