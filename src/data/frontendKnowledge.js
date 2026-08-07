// Comprehensive Frontend & Vibe-Coding Master Database in Hindi
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

export const frontendTerms = [
  {
    id: "glassmorphism",
    category: "polish",
    title: "Glassmorphism & Liquid Glass (ग्लास मॉर्फिज़्म)",
    badge: "Most Popular UI",
    shortDesc: "पारदर्शी कांच जैसा इफेक्ट, जिसमें बैकग्राउंड ब्लर (backdrop-filter blur) होता है।",
    hindiExplanation: "ग्लासमॉर्फिज़्म का मतलब है आपकी वेबसाइट के कार्ड या पैनल धुंधले कांच (Frosted Glass) की तरह दिखाई देंगे। इसके पीछे की चीजें हल्की-हल्की झलकती हैं, जिससे ऐप बेहद लक्ज़री और मॉडर्न लगता है।",
    vibePrompt: "Create a modern premium SaaS hero card with frosted glassmorphism effect, subtle light border, backdrop blur 16px, dark sleek background, and vibrant gradient text.",
    demoType: "glass",
    aiVoiceSpeech: "नमस्ते! ग्लास मॉर्फिज़्म वेबसाइट को एक प्रीमियम और महंगा लुक देता है। इसमें बैकग्राउंड फ़िल्टर ब्लर का इस्तेमाल करके हम कांच जैसा इफेक्ट बनाते हैं। एआई को प्रोम्प्ट देते समय फ्रॉस्टेड ग्लास और बैकग्राउंड ब्लर 16 पिक्सल लिखना न भूलें!"
  },
  {
    id: "aurora_bg",
    category: "polish",
    title: "Aurora Background (ऑरोरा बैकग्राउंड)",
    badge: "Trending Background",
    shortDesc: "उत्तरी ध्रुव की जगमगाती रंगीन रोशनी जैसी बहती हुई बैकग्राउंड ग्रेडिएंट।",
    hindiExplanation: "ऑरोरा बैकग्राउंड में कई जीवंत (vibrant) रंग जैसे स्यान, पर्पल और पिंक आपस में धीरे-धीरे ब्लेंड होते हैं। यह यूजर का ध्यान खींचने और वेबसाइट को 'जीवंत' महसूस कराने के लिए बेस्ट है।",
    vibePrompt: "Add a soft animated Aurora background with subtle purple, cyan, and magenta radial gradients smoothly shifting in dark mode.",
    demoType: "aurora",
    aiVoiceSpeech: "ऑरोरा बैकग्राउंड आपकी साइट को मैजिकल बना देता है। जब भी आप एआई से कहें, तो उसे बोलें कि सॉफ्ट रेडियल ग्रेडिएंट और पर्पल-स्यान कलर पैलेट का यूज़ करे।"
  },
  {
    id: "bento_grid",
    category: "layouts",
    title: "Bento Dashboard Grid (बेन्टो ग्रिड)",
    badge: "Apple & Stripe Style",
    shortDesc: "जापानी बेन्टो लंच बॉक्स की तरह अलग-अलग साइज़ के आकर्षक कार्ड्स का लेआउट।",
    hindiExplanation: "जैसे बेन्टो बॉक्स में खाने की अलग-अलग चीज़ें सुंदर खानों में रखी होती हैं, वैसे ही Bento Grid में अलग-अलग फीचर्स या स्टेट्स को असमान साइज़ (Large, Wide, Small) वाले सुंदर डिब्बों में सजाया जाता है। एपल और स्ट्राइप इसका खूब उपयोग करते हैं।",
    vibePrompt: "Build a Bento Box layout grid for product features with rounded 24px cards, dark glowing borders, icon accents, and responsive 8-point grid alignment.",
    demoType: "bento",
    aiVoiceSpeech: "बेन्टो ग्रिड आजकल सबसे हॉट यूआई ट्रेंड है! इसमें आप फीचर्स को छोटे-बड़े सुंदर बॉक्सेस में दिखाते हैं। एआई को बेन्टो लेआउट 8-पॉइंट स्पेसिंग के साथ बनाने को कहें।"
  },
  {
    id: "neumorphism",
    category: "shadows",
    title: "Neumorphism / Soft UI (न्यूमॉर्फिज़्म)",
    badge: "Tactile 3D Feel",
    shortDesc: "उभरे हुए या धंसे हुए 3D प्लास्टिक/सॉफ्ट बटन जैसा इफेक्ट जो बैकग्राउंड से ही निकलता महसूस होता है।",
    hindiExplanation: "न्यूमॉर्फिज़्म में शैडो (Shadow) और हाईलाइट (Highlight) का ऐसा खेल होता है जिससे लगता है कि बटन असली दुनिया की मशीन के बटन की तरह 3D में बाहर की तरफ उभरा हुआ है।",
    vibePrompt: "Design a smooth dark Neumorphic toggle switch with dual ambient inset and drop shadows, creating a soft physical tactile depth.",
    demoType: "neumorph",
    aiVoiceSpeech: "न्यूमॉर्फिज़्म में बटन या कार्ड्स बैकग्राउंड से 3D में उभरे हुए दिखाई देते हैं। इसके लिए लाइट और डार्क शैडो का बहुत ही सटीक कॉम्बिनेशन इस्तेमाल होता है।"
  },
  {
    id: "micro_interactions",
    category: "micro",
    title: "Magnetic Button & Ripple Effect (माइक्रो-इंटरैक्शन)",
    badge: "High Engagement",
    shortDesc: "बटन पर माउस ले जाते ही बटन का माउस की तरफ खिंचाव और क्लिक पर रिपल तरंगें।",
    hindiExplanation: "जब यूजर बटन पर होवर करता है या क्लिक करता है, तो छोटे-छोटे एनिमेशन्स (जैसे बटन का थोड़ा सा बड़ा होना, चमकना, या वाइब्रेट होना) यूजर को संतुष्टि देते हैं। इसे माइक्रो-इंटरैक्शन कहते हैं।",
    vibePrompt: "Add a magnetic hover attraction effect to the primary button and a smooth SVG ripple expansion on click with spring physics easing.",
    demoType: "magnetic",
    aiVoiceSpeech: "माइक्रो-इंटरैक्शन एक साधारण वेबसाइट और एक वर्ल्ड-क्लास ऐप के बीच का अंतर होते हैं। माउस ले जाने पर बटन का अट्रैक्ट होना यूजर को बहुत पसंद आता है।"
  },
  {
    id: "atomic_design",
    category: "philosophy",
    title: "Atomic Design (एटॉमिक डिज़ाइन)",
    badge: "Architecture Pattern",
    shortDesc: "छोटे कणों (Atoms like buttons) से मिलाकर Molecules, Organisms और पूरी साइट बनाना।",
    hindiExplanation: "एटॉमिक डिज़ाइन का नियम कहता है कि पहले सबसे छोटी इकाई (जैसे एक बटन या इनपुट बॉक्स) बनाओ। फिर उन्हें जोड़कर सर्च बार बनाओ, और फिर नेवबार बनाओ। इससे कोड रीयूजेबल और क्लीन रहता है।",
    vibePrompt: "Follow Atomic Design principles in React: build reusable Atoms (Buttons, Inputs), Molecules (SearchGroup), and Organisms (HeaderNavbar).",
    demoType: "atomic",
    aiVoiceSpeech: "एटॉमिक डिज़ाइन एक बहुत ही स्ट्रक्चर्ड तरीका है। अगर आप कोड में गड़बड़ी से बचना चाहते हैं तो एआई को हमेशा कहें कि एटॉमिक डिज़ाइन पैटर्न फॉलो करे।"
  },
  {
    id: "animated_borders",
    category: "polish",
    title: "Animated Glowing Borders (एनिमेटेड बॉर्डर)",
    badge: "SaaS Favorite",
    shortDesc: "कार्ड के चारों ओर घूमती हुई स्यान और पर्पल लेजर लाइट जैसी चमकती हुई बॉर्डर।",
    hindiExplanation: "यह इफेक्ट कार्ड्स को बहुत फ्यूचरिस्टिक और हाइ-टेक लुक देता है। CSS Conic Gradient या Linear Gradient एनिमेशन से बॉर्डर लगातार घूमती रहती है।",
    vibePrompt: "Create a glowing card with a continuous rotating rainbow neon border using CSS conic-gradient and linear animation.",
    demoType: "animatedBorder",
    aiVoiceSpeech: "एनिमेटेड बॉर्डर कार्ड को एकदम फ्यूचरिस्टिक बना देती है। स्यान और पर्पल रंग की चमकती हुई रेखाएँ यूजर को तुरंत अट्रैक्ट करती हैं।"
  },
  {
    id: "fluid_typography",
    category: "typography",
    title: "Fluid Typography with clamp() (फ्लुइड टाइपोग्राफी)",
    badge: "Responsive Text",
    shortDesc: "बिना मीडियो क्वेरी के स्क्रीन साइज़ के हिसाब से अक्षरों का अपने आप सही साइज़ में ढलना।",
    hindiExplanation: "CSS के clamp(min, val, max) फ़ंक्शन से आपकी हेडिंग मोबाइल पर अपने आप छोटी और बड़े मॉनिटर पर बड़ी हो जाती है। इससे टेक्स्ट कभी टूटता नहीं।",
    vibePrompt: "Implement Fluid Typography for headings using CSS clamp(2rem, 5vw, 4.5rem) so font scales seamlessly across mobile and desktop viewports.",
    demoType: "typography",
    aiVoiceSpeech: "फ्लुइड टाइपोग्राफी का मतलब है कि आपके फोंट मोबाइल से लेकर बड़ी 4K स्क्रीन तक अपने आप स्मूथली रीसाइज़ हो जाएंगे। इसके लिए सीएसएस क्लैम्प फ़ंक्शन बेस्ट है।"
  }
];
