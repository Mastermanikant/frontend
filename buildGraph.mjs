import fs from 'fs';
import path from 'path';

const researchDir = path.join(process.cwd(), 'research');
const outputFile = path.join(process.cwd(), 'src', 'data', 'frontendKnowledgeGraph.js');

const categories = {
  'RESEARCH_01_HTML_TAXONOMY.md': 'HTML',
  'RESEARCH_02_CSS_TAXONOMY.md': 'CSS',
  'RESEARCH_03_JS_TAXONOMY.md': 'JavaScript',
  'RESEARCH_04_UI_COMPONENTS.md': 'UI Components',
  'RESEARCH_05_ANIMATIONS.md': 'Animations',
  'RESEARCH_06_ADVANCED_ECOSYSTEM.md': 'Ecosystem'
};

const graph = [];

let idCounter = 1;

for (const [filename, category] of Object.entries(categories)) {
  const filePath = path.join(researchDir, filename);
  if (!fs.existsSync(filePath)) continue;

  const content = fs.readFileSync(filePath, 'utf-8');
  const lines = content.split('\n');

  let currentSubcategory = 'General';

  for (const line of lines) {
    if (line.startsWith('## ')) {
      currentSubcategory = line.replace('## ', '').trim();
    } else if (line.startsWith('### ')) {
      // Sub-sub category, maybe combine
      currentSubcategory = line.replace('### ', '').trim();
    } else if (line.startsWith('- `') || line.startsWith('* **') || line.startsWith('- **')) {
      // Parse list items
      let term = '';
      let definition = '';
      
      if (line.includes('**')) {
        const match = line.match(/\* \*\*(.*?)\*\*: (.*)/) || line.match(/- \*\*(.*?)\*\*: (.*)/) || line.match(/\* \*\*(.*?)\*\* (.*)/);
        if (match) {
          term = match[1];
          definition = match[2];
        }
      } else if (line.includes('`')) {
        const match = line.match(/- `(.*?)`: (.*)/) || line.match(/\* `(.*?)`: (.*)/);
        if (match) {
          term = match[1];
          definition = match[2];
        }
      }

      if (term) {
        graph.push({
          id: idCounter++,
          term: term.trim(),
          definition: definition.trim(),
          category: category,
          subcategory: currentSubcategory
        });
      }
    }
  }
}

// Ensure dir exists
const dir = path.dirname(outputFile);
if (!fs.existsSync(dir)){
    fs.mkdirSync(dir, { recursive: true });
}

fs.writeFileSync(
  outputFile,
  `export const frontendKnowledgeGraph = ${JSON.stringify(graph, null, 2)};\n`
);

console.log(`Successfully compiled ${graph.length} terms into frontendKnowledgeGraph.js`);
