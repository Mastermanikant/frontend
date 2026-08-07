// Comprehensive Frontend Knowledge Master Database (Hindi & English)

export const categories = [
  { id: "all", name: "सभी 30 कैटेगरीज (All Terms)", icon: "Sparkles" },
  { id: "philosophy", name: "1. Design Philosophy", icon: "Compass" },
  { id: "architecture", name: "2. Design System Architecture", icon: "Layers" },
  { id: "layouts", name: "3. Layout Systems", icon: "Grid" },
  { id: "spacing", name: "4. Spacing & Rhythm", icon: "MoveHorizontal" },
  { id: "typography", name: "5. Typography & Fonts", icon: "Type" },
  { id: "color", name: "6. Color Science & Schemes", icon: "Palette" },
  { id: "shadows", name: "7. Shadows & Depth", icon: "Box" },
  { id: "motion", name: "11. Motion Design & Transitions", icon: "Zap" },
  { id: "states", name: "12. Interaction States", icon: "MousePointer" },
  { id: "micro", name: "21. Microinteractions", icon: "Fingerprint" },
  { id: "css", name: "22. Advanced CSS Effects", icon: "Code2" },
  { id: "polish", name: "26. Visual Polish & Glows", icon: "Wand2" },
  { id: "inspiration", name: "30. Top Inspiration Sources", icon: "Award" }
];

export const backgroundThemes = [
  { id: 'aurora', name: '🌌 Aurora Flow' },
  { id: 'mesh', name: '🎨 Mesh Gradient' },
  { id: 'cyberpunk', name: '⚡ Cyberpunk Neon' },
  { id: 'bento', name: '🍱 Bento Dot Grid' },
  { id: 'glass', name: '🍷 Liquid Glass' },
  { id: 'neumorphism', name: '🪨 Soft Neumorph' }
];

export const popularFonts = [
  {
    id: "plus-jakarta",
    name: "Plus Jakarta Sans",
    family: "'Plus Jakarta Sans', sans-serif",
    category: "Modern Sans-Serif (SaaS Standard)",
    bestFor: "Linear, Vercel & Stripe style clean dashboards",
    sampleText: "Modern SaaS Interface Typography"
  },
  {
    id: "outfit",
    name: "Outfit Font",
    family: "'Outfit', sans-serif",
    category: "Geometric Display",
    bestFor: "Hero Headings & High-Impact Titles",
    sampleText: "Build Immersive Vibe Coding Products"
  },
  {
    id: "fira-code",
    name: "Fira Code Monospace",
    family: "'Fira Code', monospace",
    category: "Code & Monospace",
    bestFor: "AI Prompts, Code Blocks & Terminal Windows",
    sampleText: "const vibeCoding = () => true;"
  },
  {
    id: "roboto",
    name: "Roboto / Inter",
    family: "-apple-system, BlinkMacSystemFont, sans-serif",
    category: "Universal UI Standard",
    bestFor: "High readability body text & mobile apps",
    sampleText: "Universal Readability across all Devices"
  }
];

export const buttonTypes = [
  {
    id: "shiny",
    name: "1. Shiny Light-Sweep Button",
    effects: ["CSS Linear Gradient", "Shimmer Keyframe", "Hover Scale"],
    desc: "होवर करते ही बटन पर ऊपर से एक लाइट की चमक बहती है।",
    demoType: "shiny",
    prompt: "Create a primary action button with a continuous light shimmer sweep on hover using CSS linear-gradient animation."
  },
  {
    id: "animatedBorder",
    name: "2. Conic Laser Border Button",
    effects: ["Conic Gradient Rotation", "Drop Shadow Glow", "Laser Border"],
    desc: "बटन के सीमाओं के चारों ओर घूमती हुई स्यान-पर्पल लाइट।",
    demoType: "animatedBorder",
    prompt: "Design a dark neon button with a rotating rainbow conic-gradient border using CSS keyframe animations."
  },
  {
    id: "neumorphic",
    name: "3. Neumorphic 3D Soft Button",
    desc: "बैकग्राउंड से 3D रूप में बाहर निकला हुआ भौतिक बटन।",
    effects: ["Dual Ambient Inset Shadow", "Soft Corner Radius", "Press Scale"],
    demoType: "neumorphic",
    prompt: "Build a Neumorphic 3D soft button with inset and ambient drop shadows on press interaction."
  },
  {
    id: "magnetic",
    name: "4. Magnetic Attraction Button",
    desc: "माउस कर्सर पास आते ही कर्सर की ओर खिंचने वाला बटन।",
    effects: ["Framer Motion Spring Physics", "Cursor Magnet Lerp"],
    demoType: "magnetic",
    prompt: "Add a magnetic mouse attraction effect to the action button using transform lerp physics."
  },
  {
    id: "cyberpunk",
    name: "5. Cyberpunk Hard Neon Button",
    desc: "हार्ड येलो/पिंक नैनो बॉर्डर्स और ग्लिच इफ़ेक्ट वाला बटन।",
    effects: ["Glitch Transform Offset", "High Contrast Borders", "Box Shadow 4px Offset"],
    demoType: "cyberpunk",
    prompt: "Create a Cyberpunk styled button with high contrast neon borders, glitch transform, and hard shadow offset."
  },
  {
    id: "glass",
    name: "6. Glassmorphism Translucent Button",
    desc: "पारदर्शी फ्रॉस्टेड कांच जैसा ब्लर बटन।",
    effects: ["Backdrop Blur 16px", "Translucent Border", "Soft Cyan Glow"],
    demoType: "glass",
    prompt: "Design a glassy backdrop-blur button with translucent white border and soft cyan hover state."
  },
  {
    id: "toggleTab",
    name: "7. Tablet Toggle Segment Button",
    desc: "टैबलेट / सेग्मेंटेड स्विच बटन जिसमें दो विकल्पों में स्लाइडिंग इंडिकेटर होता है।",
    effects: ["Sliding Segment Indicator", "Active Tab Highlight", "Spring Transition"],
    demoType: "toggleTab",
    prompt: "Build a Segmented Tablet Toggle button with active background spring indicator and icon labels."
  },
  {
    id: "laserPill",
    name: "8. Glowing Pill Badge Button",
    desc: "कैप्सूल/पिल शेप वाला बटन जिसके चारों तरफ धड़कती हुई लेज़र लाइट रहती है।",
    effects: ["Full Pill Border-Radius", "Heartbeat Pulse Glow", "Gradient Text"],
    demoType: "laserPill",
    prompt: "Create a rounded capsule pill button with continuous heartbeat glowing cyan ring."
  },
  {
    id: "rippleClick",
    name: "9. Material Liquid Ripple Button",
    desc: "क्लिक करते ही पानी की लहर की तरह फैलने वाला रिपल बटन।",
    effects: ["Click Origin Tracking", "SVG Liquid Ripple", "Scale Expansion"],
    demoType: "rippleClick",
    prompt: "Implement a Material Design liquid ripple animation expanding from mouse click coordinates."
  },
  {
    id: "glowingPulse",
    name: "10. Continuous Heartbeat Glow Button",
    desc: "नियॉन लाइट की तरह लगातार चमकता-बुझता हुआ अटेंशन बटन।",
    effects: ["Ping Keyframe Scale", "Drop-Shadow Intensity", "Radial Gradient Glow"],
    demoType: "glowingPulse",
    prompt: "Design a high-priority action button with continuous pulsing heartbeat glow halo."
  }
];

export const animationGallery = [
  {
    id: "springBounce",
    name: "1. Spring Physics Bounce (स्प्रिंग उछाल एनीमेशन)",
    category: "Motion Physics",
    desc: "एलिमेंट स्प्रिंग की तरह बाउंस होकर सेटल होता है।",
    type: "springBounce",
    prompt: "Apply spring physics bounce animation with cubic-bezier(0.34, 1.56, 0.64, 1) timing function."
  },
  {
    id: "staggerFade",
    name: "2. Staggered Cascade Entry (एक-एक करके कार्ड्स आना)",
    category: "Entrance",
    desc: "कार्ड्स या लिस्ट 100ms के अंतराल पर नीचे से ऊपर आते हैं।",
    type: "staggerFade",
    prompt: "Implement staggered cascade entrance animation with 0.1s animation-delay for each grid item."
  },
  {
    id: "magneticPulse",
    name: "3. Pulsing Heartbeat Glow (धड़कती नियॉन लाइट)",
    category: "Continuous Loop",
    desc: "नियॉन लाइट दिल की धड़कन की तरह जलती-बुझती है।",
    type: "magneticPulse",
    prompt: "Add a pulsating heartbeat neon glow animation using keyframe opacity and scale transforms."
  },
  {
    id: "laserBorderRotate",
    name: "4. Rotating Conic Laser Light (घूमती हुई लेज़र लाइट)",
    category: "Border & Glow",
    desc: "बॉक्स की सीमाओं पर स्यान और पर्पल रंग की लेज़र लाइट लगातार गोल घूमती है।",
    type: "laserBorderRotate",
    prompt: "Create a continuous rotating laser border effect using CSS conic-gradient and linear infinite animation."
  }
];

export const textEffects = [
  {
    id: "neonTypewriter",
    name: "1. Neon Typewriter with Rotating Laser Glow",
    desc: "अक्षर एक-एक करके टाइप होते हैं और बॉक्स पर नियॉन लेज़र लाइट घूमती है।",
    type: "neonTypewriter",
    prompt: "Create a typewriter text animation framed inside a glowing animated neon border box."
  },
  {
    id: "gradientSweep",
    name: "2. Animated Gradient Flow Text (बहता हुआ ग्रेडिएंट)",
    desc: "अक्षरों पर लगातार बहते हुए स्यान, पर्पल और पिंक रंग।",
    type: "gradientSweep",
    prompt: "Apply an animated text gradient flow using CSS background-clip and background-position keyframes."
  },
  {
    id: "glowingNeon",
    name: "3. Cyberpunk Drop-Shadow Neon Text (नियॉन ग्लो)",
    desc: "अक्षरों के पीछे चमकता हुआ लेज़र ड्रॉप शैडो नैनो प्रभाव।",
    type: "glowingNeon",
    prompt: "Design a high-impact glowing neon headline using drop-shadow and text-shadow layering."
  },
  {
    id: "clipReveal",
    name: "4. Clip-Path Mask Reveal (मास्क टेक्स्ट रिवील)",
    desc: "अक्षर नीचे की अदृश्य दीवार को चीरते हुए ऊपर आते हैं।",
    type: "clipReveal",
    prompt: "Implement a cinematic text reveal animation using CSS clip-path inset mask and translateY."
  }
];

export const frontendTerms = [
  {
    id: "glassmorphism",
    category: "polish",
    title: "Glassmorphism & Liquid Glass (ग्लास मॉर्फिज़्म)",
    badge: "Most Popular UI",
    shortDesc: "पारदर्शी कांच जैसा इफेक्ट, जिसमें बैकग्राउंड ब्लर (backdrop-filter blur) होता है।",
    hindiExplanation: "ग्लासमॉर्फिज़्म का मतलब है आपकी वेबसाइट के कार्ड या पैनल धुंधले कांच (Frosted Glass) की तरह दिखाई देंगे। इसके पीछे की चीजें हल्की-हल्की झलकती हैं, जिससे ऐप बेहद लक्ज़री और मॉडर्न लगता है।",
    vibePrompt: "Create a modern premium SaaS hero card with frosted glassmorphism effect, subtle light border, backdrop blur 16px, dark sleek background, and vibrant gradient text.",
    demoType: "glass"
  },
  {
    id: "aurora_bg",
    category: "polish",
    title: "Aurora Background (ऑरोरा बैकग्राउंड)",
    badge: "Trending Background",
    shortDesc: "उत्तरी ध्रुव की जगमगाती रंगीन रोशनी जैसी बहती हुई बैकग्राउंड ग्रेडिएंट।",
    hindiExplanation: "ऑरोरा बैकग्राउंड में कई जीवंत (vibrant) रंग जैसे स्यान, पर्पल और पिंक आपस में धीरे-धीरे ब्लेंड होते हैं। यह यूजर का ध्यान खींचने और वेबसाइट को 'जीवंत' महसूस कराने के लिए बेस्ट है।",
    vibePrompt: "Add a soft animated Aurora background with subtle purple, cyan, and magenta radial gradients smoothly shifting in dark mode.",
    demoType: "aurora"
  },
  {
    id: "bento_grid",
    category: "layouts",
    title: "Bento Dashboard Grid (बेन्टो ग्रिड)",
    badge: "Apple & Stripe Style",
    shortDesc: "जापानी बेन्टो लंच बॉक्स की तरह अलग-अलग साइज़ के आकर्षक कार्ड्स का लेआउट।",
    hindiExplanation: "जैसे बेन्टो बॉक्स में खाने की अलग-अलग चीज़ें सुंदर खानों में रखी होती हैं, वैसे ही Bento Grid में अलग-अलग फीचर्स या स्टेट्स को असमान साइज़ (Large, Wide, Small) वाले सुंदर डिब्बों में सजाया जाता है। एपल और स्ट्राइप इसका खूब उपयोग करते हैं।",
    vibePrompt: "Build a Bento Box layout grid for product features with rounded 24px cards, dark glowing borders, icon accents, and responsive 8-point grid alignment.",
    demoType: "bento"
  },
  {
    id: "neumorphism",
    category: "shadows",
    title: "Neumorphism / Soft UI (न्यूमॉर्फिज़्म)",
    badge: "Tactile 3D Feel",
    shortDesc: "उभरे हुए या धंसे हुए 3D प्लास्टिक/सॉफ्ट बटन जैसा इफेक्ट जो बैकग्राउंड से ही निकलता महसूस होता है।",
    hindiExplanation: "न्यूमॉर्फिज़्म में शैडो (Shadow) और हाईलाइट (Highlight) का ऐसा खेल होता है जिससे लगता है कि बटन असली दुनिया की मशीन के बटन की तरह 3D में बाहर की तरफ उभरा हुआ है।",
    vibePrompt: "Design a smooth dark Neumorphic toggle switch with dual ambient inset and drop shadows, creating a soft physical tactile depth.",
    demoType: "neumorph"
  },
  {
    id: "micro_interactions",
    category: "micro",
    title: "Magnetic Button & Ripple Effect (माइक्रो-इंटरैक्शन)",
    badge: "High Engagement",
    shortDesc: "बटन पर माउस ले जाते ही बटन का माउस की तरफ खिंचाव और क्लिक पर रिपल तरंगें।",
    hindiExplanation: "जब यूजर बटन पर होवर करता है या क्लिक करता है, तो छोटे-छोटे एनिमेशन्स (जैसे बटन का थोड़ा सा बड़ा होना, चमकना, या वाइब्रेट होना) यूजर को संतुष्टि देते हैं। इसे माइक्रो-इंटरैक्शन कहते हैं।",
    vibePrompt: "Add a magnetic hover attraction effect to the primary button and a smooth SVG ripple expansion on click with spring physics easing.",
    demoType: "magnetic"
  },
  {
    id: "animated_borders",
    category: "polish",
    title: "Animated Glowing Borders (एनिमेटेड लेज़र बॉर्डर)",
    badge: "SaaS Favorite",
    shortDesc: "कार्ड के चारों ओर घूमती हुई स्यान और पर्पल लेजर लाइट जैसी चमकती हुई बॉर्डर।",
    hindiExplanation: "यह इफेक्ट कार्ड्स को बहुत फ्यूचरिस्टिक और हाइ-टेक लुक देता है। CSS Conic Gradient या Linear Gradient एनिमेशन से बॉर्डर लगातार घूमती रहती है।",
    vibePrompt: "Create a glowing card with a continuous rotating rainbow neon border using CSS conic-gradient and linear animation.",
    demoType: "animatedBorder"
  }
];
