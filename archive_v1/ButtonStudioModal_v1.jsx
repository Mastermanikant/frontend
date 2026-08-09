import React, { useState } from 'react';
import { 
  X, Check, Copy, Sliders, Code2, RotateCcw, Palette, Type, Square, Sparkles, 
  Sun, Moon, ArrowRightLeft, Film, Activity, Shuffle, Zap, Orbit
} from 'lucide-react';
import { buttonCategories } from '../src/data/buttonLibraryData';

const PRESET_COLORS = [
  { name: 'Indigo', hex: '#6366f1' },
  { name: 'Emerald', hex: '#10b981' },
  { name: 'Cyan', hex: '#00d4ff' },
  { name: 'Rose', hex: '#f43f5e' },
  { name: 'Amber', hex: '#f59e0b' },
  { name: 'Violet', hex: '#8b5cf6' },
  { name: 'Cyber Pink', hex: '#ff0055' },
  { name: 'Gold', hex: '#eab308' },
  { name: 'White', hex: '#ffffff' },
  { name: 'Dark', hex: '#0f172a' }
];

const LAB_KEYFRAMES = `
@keyframes spinBorder {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
@keyframes sweepBorder {
  0% { transform: translateX(-100%); }
  100% { transform: translateX(100%); }
}
@keyframes neonBorder {
  0%, 100% { opacity: 0.4; filter: blur(2px); }
  50% { opacity: 1; filter: blur(8px); }
}
@keyframes borderPulse {
  0%, 100% { transform: scale(1); opacity: 0.8; }
  50% { transform: scale(1.06); opacity: 0.3; }
}
@keyframes gradientBorder {
  0% { background-position: 0% 0%; }
  100% { background-position: 300% 0%; }
}

@keyframes btnPulse{50%{transform:scale(1.06)}}
@keyframes btnBounce{0%,100%{transform:translateY(0)}50%{transform:translateY(-14px)}}
@keyframes btnShake{0%,100%{transform:translateX(0)}20%{transform:translateX(-8px)}40%{transform:translateX(8px)}60%{transform:translateX(-5px)}80%{transform:translateX(5px)}}
@keyframes btnFloat{50%{transform:translateY(-10px)}}
@keyframes heartbeat{0%,40%,80%,100%{transform:scale(1)}20%,60%{transform:scale(1.08)}}
@keyframes swing{20%{transform:rotate(7deg)}40%{transform:rotate(-5deg)}60%{transform:rotate(3deg)}80%{transform:rotate(-2deg)}}
@keyframes jello{30%{transform:skewX(-10deg) skewY(-5deg)}50%{transform:skewX(7deg) skewY(3deg)}70%{transform:skewX(-3deg)}}
@keyframes wobble{25%{transform:translateX(-8%) rotate(-3deg)}50%{transform:translateX(6%) rotate(2deg)}75%{transform:translateX(-3%) rotate(-1deg)}}
@keyframes rotate360{to{transform:rotate(360deg)}}
@keyframes pop{0%,100%{transform:scale(1)}50%{transform:scale(1.12)}}
@keyframes rubber{30%{transform:scaleX(1.2) scaleY(.8)}60%{transform:scaleX(.85) scaleY(1.15)}}
@keyframes tada{10%,20%{transform:scale(.95) rotate(-3deg)}30%,50%,70%,90%{transform:scale(1.05) rotate(3deg)}40%,60%,80%{transform:scale(1.05) rotate(-3deg)}}
@keyframes bgPulse{50%{background:#8178ff}}
@keyframes bgBreathe{50%{background:#252d72}}
@keyframes rainbow{0%{filter:hue-rotate(0)}100%{filter:hue-rotate(360deg)}}
@keyframes gradientMove{to{background-position:300% 0}}
@keyframes textShimmer{to{background-position:-250% 0}}
@keyframes textRainbow{to{filter:hue-rotate(360deg)}}
@keyframes textWave{0%,100%{transform:translateY(0)}50%{transform:translateY(-7px) rotate(-2deg)}}
@keyframes glitch{0%,100%{transform:translate(0)}25%{transform:translate(-2px,1px)}50%{transform:translate(2px,-1px)}75%{transform:translate(-1px,2px)}}
`;

export default function ButtonStudioModalV1({ btn, onClose }) {
  return <div>Archive V1 Copy of ButtonStudioModal</div>;
}
