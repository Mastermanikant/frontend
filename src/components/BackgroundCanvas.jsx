import React, { useEffect, useRef } from 'react';

export default function BackgroundCanvas({ theme = 'aurora', speed = 1, density = 50, glowIntensity = 50 }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    const particleCount = Math.floor((density / 100) * 100);
    const speedFactor = speed * 0.8;
    const glowAlpha = glowIntensity / 100;

    const particles = Array.from({ length: particleCount }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * speedFactor,
      vy: (Math.random() - 0.5) * speedFactor,
      radius: Math.random() * 3 + 1,
      alpha: Math.random() * glowAlpha + 0.2
    }));

    let step = 0;

    const render = () => {
      ctx.clearRect(0, 0, width, height);
      step += 0.01 * speed;

      // Draw background glow nodes
      particles.forEach(p => {
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0 || p.x > width) p.vx *= -1;
        if (p.y < 0 || p.y > height) p.vy *= -1;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius * (glowIntensity / 30), 0, Math.PI * 2);
        
        if (theme === 'cyberpunk') {
          ctx.fillStyle = `rgba(0, 242, 254, ${p.alpha * 0.8})`;
        } else if (theme === 'aurora') {
          ctx.fillStyle = `rgba(157, 78, 221, ${p.alpha * 0.8})`;
        } else if (theme === 'mesh') {
          ctx.fillStyle = `rgba(255, 42, 133, ${p.alpha * 0.8})`;
        } else {
          ctx.fillStyle = `rgba(255, 255, 255, ${p.alpha * 0.5})`;
        }
        ctx.fill();
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [theme, speed, density, glowIntensity]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0 opacity-70"
    />
  );
}
