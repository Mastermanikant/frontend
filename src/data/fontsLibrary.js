export const FONT_CATEGORIES = [
  {
    name: 'Sans Serif',
    fonts: [
      'Inter', 'Roboto', 'Open Sans', 'Lato', 'Montserrat', 'Oswald',
      'Source Sans Pro', 'Poppins', 'Nunito', 'Ubuntu', 'Raleway',
      'Rubik', 'Work Sans', 'Fira Sans', 'Quicksand', 'Karla',
      'Barlow', 'Mulish', 'PT Sans', 'Manrope', 'Josefin Sans'
    ]
  },
  {
    name: 'Serif',
    fonts: [
      'Merriweather', 'Playfair Display', 'Lora', 'PT Serif',
      'Noto Serif', 'Crimson Text', 'Libre Baskerville',
      'EB Garamond', 'Bitter', 'Cormorant Garamond', 'Bree Serif'
    ]
  },
  {
    name: 'Display',
    fonts: [
      'Bebas Neue', 'Righteous', 'Permanent Marker', 'Alfa Slab One',
      'Anton', 'Lobster', 'Abril Fatface', 'Pacifico', 'Fjalla One',
      'Bangers', 'Fredoka One', 'Russo One', 'Creepster', 'Cinzel'
    ]
  },
  {
    name: 'Handwriting',
    fonts: [
      'Caveat', 'Dancing Script', 'Shadows Into Light',
      'Indie Flower', 'Amatic SC', 'Sacramento', 'Satisfy',
      'Yellowtail', 'Courgette', 'Kalam', 'Great Vibes'
    ]
  },
  {
    name: 'Monospace',
    fonts: [
      'Roboto Mono', 'Space Mono', 'Fira Code', 'Inconsolata',
      'Source Code Pro', 'IBM Plex Mono', 'JetBrains Mono'
    ]
  }
];

// Helper to flat map all fonts for search
export const ALL_FONTS = FONT_CATEGORIES.flatMap(cat => cat.fonts);

// Dynamically inject a font from Google Fonts to avoid loading 100+ at once.
const loadedFonts = new Set();
export const loadFont = (fontName) => {
  if (!fontName || loadedFonts.has(fontName)) return;
  const formattedName = fontName.replace(/ /g, '+');
  const link = document.createElement('link');
  link.href = `https://fonts.googleapis.com/css2?family=${formattedName}:wght@400;700;900&display=swap`;
  link.rel = 'stylesheet';
  document.head.appendChild(link);
  loadedFonts.add(fontName);
};
