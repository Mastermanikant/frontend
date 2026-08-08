// Client-side export helper for React, HTML5 & AI Prompts

export function generateReactCode(elements) {
  let jsx = `import React from 'react';\n\nexport default function ExportedCanvas() {\n  return (\n    <div className="relative w-full h-screen bg-slate-950 text-white overflow-hidden">\n`;

  elements.forEach(el => {
    if (el.type === 'text') {
      jsx += `      <div\n        style={{\n          position: 'absolute',\n          left: '${el.x}px',\n          top: '${el.y}px',\n          fontSize: '${el.style?.fontSize || '24px'}',\n          color: '${el.style?.color || '#ffffff'}',\n          fontFamily: '${el.style?.fontFamily || 'Inter'}',\n          fontWeight: '${el.style?.fontWeight || 'bold'}'\n        }}\n      >\n        {${JSON.stringify(el.text)}}\n      </div>\n`;
    } else if (el.type === 'button') {
      const bg = el.style?.bgType === 'gradient'
        ? `linear-gradient(135deg, ${el.style.bgColor1}, ${el.style.bgColor2})`
        : el.style?.bgColor1 || '#06b6d4';
      
      jsx += `      <button\n        style={{\n          position: 'absolute',\n          left: '${el.x}px',\n          top: '${el.y}px',\n          borderRadius: '${el.style?.borderRadius || 8}px',\n          background: '${bg}',\n          color: '${el.style?.textColor || '#ffffff'}'\n        }}\n        className="px-8 py-3.5 font-bold text-sm shadow-xl hover:scale-105 transition-all duration-200 cursor-pointer"\n      >\n        {${JSON.stringify(el.text)}}\n      </button>\n`;
    }
  });

  jsx += `    </div>\n  );\n}\n`;
  return jsx;
}

export function generateHTMLCode(elements) {
  let html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Frontend Canvas Export</title>
  <script src="https://cdn.tailwindcss.com"></script>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700;900&display=swap" rel="stylesheet">
</head>
<body class="bg-slate-950 text-white min-h-screen relative overflow-hidden font-sans">
  <div class="relative w-full h-screen">
`;

  elements.forEach(el => {
    if (el.type === 'text') {
      html += `    <div style="position: absolute; left: ${el.x}px; top: ${el.y}px; font-size: ${el.style?.fontSize || '24px'}; color: ${el.style?.color || '#ffffff'}; font-family: '${el.style?.fontFamily || 'Inter'}'; font-weight: ${el.style?.fontWeight || 'bold'};">\n      ${el.text}\n    </div>\n`;
    } else if (el.type === 'button') {
      const bg = el.style?.bgType === 'gradient'
        ? `linear-gradient(135deg, ${el.style.bgColor1}, ${el.style.bgColor2})`
        : el.style?.bgColor1 || '#06b6d4';
      
      html += `    <button style="position: absolute; left: ${el.x}px; top: ${el.y}px; border-radius: ${el.style?.borderRadius || 8}px; background: ${bg}; color: ${el.style?.textColor || '#ffffff'};" class="px-8 py-3.5 font-bold text-sm shadow-xl transition-all cursor-pointer">\n      ${el.text}\n    </button>\n`;
    }
  });

  html += `  </div>\n</body>\n</html>`;
  return html;
}

export function generateAIPrompt(elements) {
  return `Act as a Senior React & Tailwind CSS Developer. 
I have visually designed a frontend canvas layout containing ${elements.length} elements:

ELEMENTS SPECIFICATION:
${elements.map((el, i) => `${i + 1}. [${el.type.toUpperCase()}] Text: "${el.text}", Position: (${el.x}px, ${el.y}px), Style: ${JSON.stringify(el.style)}`).join('\n')}

INSTRUCTIONS:
1. Re-create this frontend layout using React 18 and Tailwind CSS 3.
2. Ensure responsive container layout using Tailwind flex/grid classes.
3. Apply modern glassmorphism, glowing gradients, and smooth hover micro-interactions.
4. Output ready-to-paste functional JSX code.`;
}

export function downloadFile(filename, content, type = 'text/plain') {
  const blob = new Blob([content], { type });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}
