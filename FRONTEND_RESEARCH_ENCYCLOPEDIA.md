# Complete Master Encyclopedia: Frontend Animations, Cursor FX, Design Tokens & Layout Architecture

---

## 1. Animation Types & Motion Masterclass (एनिमेशन के सभी प्रकार)

### A. Entrance & In-Animations (पेज या एलिमेंट के आने के एनिमेशन)
* **Fade In Up / Scale In**: तत्व नीचे से ऊपर की ओर आते हुए 0 से 1 ओपेसिटी (Opacity) और स्केल (Scale 0.95 -> 1) होता है।
* **Staggered Cascade**: लिस्ट या बेन्टो ग्रिड के कार्ड्स एक-एक करके 50ms या 100ms के गैप (Delay) से प्रकट होते हैं।
* **Spring Physics Entrance**: `cubic-bezier(0.34, 1.56, 0.64, 1)` का उपयोग करके कार्ड्स थोड़ा सा बाउंस (Bounce) होकर सेटल होते हैं।

### B. Exit & Out-Animations (जाने के एनिमेशन)
* **Fade Out Down / Shrink Collapse**: तत्व गायब होते समय नीचे की तरफ सिकुड़ता है और ओपेसिटी शून्य होती है।
* **Exit Morph**: संवाद बॉक्स (Modal) बंद होते समय वापस उसी बटन के अंदर सिकुड़ जाता है जहाँ से वह खुला था।

### C. Text & Highlight Animations (टेक्स्ट एनीमेशन)
* **Typewriter Effect**: अक्षर एक-एक करके टाईप होते हुए दिखते हैं।
* **Text Reveal (Clip Path)**: टेक्स्ट नीचे से ऊपर की ओर कटता हुआ निकलता है (`clip-path: inset(0 0 0 0)`).
* **Gradient Text Animation**: अक्षरों के ऊपर स्यान, पर्पल, और पिंक रंग लगातार बहते रहते हैं (`background-position` का घूमना)।
* **Text Highlight Sweeper**: जैसे ही यूजर स्क्रॉल करता है, टेक्स्ट पर हाइलाइटर मार्कर चलने जैसा रंग भर जाता है।

### D. Animated Borders & Glowing Neon Borders (बॉर्डर एनिमेशन)
* **Conic Gradient Laser Border**: कार्ड के चारों तरफ एक चमकती हुई रोशनी गोल घूमती रहती है।
* **पैरामीटर्स (Control Parameters):**
  - **Speed (गति):** `animation-duration` (e.g., 2s = फास्ट, 6s = स्लो और स्मूथ)।
  - **Glow Intensity (चमक):** `drop-shadow` या `box-shadow` का ब्लर रेडियस (e.g., `blur(12px)`).
  - **Thickness (मोटाई):** `padding: 2px` या `border-width: 2px`.

---

## 2. Cursor & Mouse Interactive Effects (माउस और कर्सर के प्रभाव)

### A. Magnetic Cursor (मैग्नेटिक कर्सर)
* **क्या है?**: जब माउस किसी बटन के पास आता है, तो बटन चुंबक की तरह माउस की तरफ खिंचता है।
* **तकनीकी नाम**: Magnetic Element Attractor (Spring Physics).

### B. Spotlight Effect / Light Follow (लाइट फॉलो प्रभाव)
* **क्या है?**: माउस जहां-जहां घूमता है, कार्ड्स या बैकग्राउंड पर उसके ठीक नीचे एक टॉर्च/स्पॉटलाइट जैसी लाइट चमकती है।
* **तकनीकी नाम**: Radial Gradient Mouse Pointer Tracker.
* **पैरामीटर्स:**
  - **Spotlight Size:** `radial-gradient(400px circle at var(--x) var(--y), ...)`
  - **Opacity / Brightness:** `rgba(0, 242, 254, 0.15)`

### C. Mouse Parallax Movement (माउस पैरालेक्स)
* **क्या है?**: माउस दाएँ ले जाने पर बैकग्राउंड की चीजें हल्की सी बाएँ खिसकती हैं और सामने की चीज़ें दाएँ, जिससे गहरा 3D गहराई का अहसास (Depth Perception) होता है।
* **तकनीकी नाम**: Cursor Mouse Relative 3D Tilt / Parallax Shift.

---

## 3. Theme Systems & Modes (थीम और मोड)

1. **Dark Mode (डार्क मोड):** मुख्य रूप से गहरा बैकग्राउंड (`#090a0f`) और हल्का टेक्स्ट।
2. **Light Mode (लाइट मोड):** साफ और सफ़ेद बैकग्राउंड (`#ffffff`) और गहरा टेक्स्ट।
3. **Glassmorphism Mode (ग्लास मोड):** पारदर्शी ब्लर बैकग्राउंड (`backdrop-filter: blur(16px)`).
4. **Neumorphism Mode (न्यूमॉर्फिज़्म):** 3D सॉफ्ट शैडो वाला भौतिक लुक।
5. **OLED Black (ओलेड ब्लैक):** 100% शुद्ध काला (`#000000`) जिससे बैटरी बचती है और कॉन्ट्रास्ट ज्यादा रहता है।

### CSS Variables & Design Tokens (एकीकृत कोड तकनीक)
* **क्या है?**: एक ही जगह (`:root`) पर कोड बदलने से पूरी वेबसाइट का कलर, फोंट, और शैडो अपने आप बदल जाता है!
```css
:root {
  --primary-color: #00f2fe;
  --bg-surface: #090a0f;
  --radius-card: 16px;
  --font-heading: 'Outfit', sans-serif;
}
```

---

## 4. Layout Architecture & Modern Frontend Terms (लेआउट स्ट्रक्चर)

### A. Headerless & Footerless UI (हेडरलेस / फुटरलेस यूआई)
* **क्या है?**: मॉडर्न SaaS ऐप्स (जैसे Linear, ChatGPT, Raycast) में पारंपरिक ऊपर वाला नेविगेशन बार (Header) और नीचे वाला Footer नहीं होता। उसकी जगह फ्लोटिंग कमांड बार (`Cmd+K`) या साइडबार डॉक होता है।

### B. Fixed vs Sticky Code (फिक्स्ड कोड तकनीक)
* **Wordpress style Fixed Header**: पेज कितना भी नीचे स्क्रॉल करो, हेडर स्क्रीन के सबसे ऊपर चिपका रहता है (`position: fixed` या `position: sticky; top: 0;`).
* **Changing vs Modular Code**: घटकों (Components) को अलग-अलग फाइलों में रखना ताकि एक जगह बदलाव करने से हर जगह अपडेट हो जाए।
