import { useEffect, useRef } from 'react';

export const useCursor = () => {
  const cursorDot = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const trailRef = useRef<Array<{ x: number; y: number; life: number }>>([]);
  const animationRef = useRef<number | undefined>(undefined);

  useEffect(() => {
    const cursor = cursorDot.current;
    const canvas = canvasRef.current;
    if (!cursor || !canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    let mouseX = 0;
    let mouseY = 0;
    const TRAIL_LENGTH = 22;

    const getAccentColor = () => {
      return getComputedStyle(document.documentElement).getPropertyValue('--accent').trim();
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      
      cursor.style.left = mouseX + 'px';
      cursor.style.top = mouseY + 'px';
      
      trailRef.current.push({ x: mouseX, y: mouseY, life: 1.0 });
      if (trailRef.current.length > TRAIL_LENGTH) {
        trailRef.current.shift();
      }
    };

    const animateTrail = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const color = getAccentColor();
      
      for (let i = 0; i < trailRef.current.length; i++) {
        const p = trailRef.current[i];
        p.life -= 0.04;
        if (p.life <= 0) continue;
        
        const ratio = i / trailRef.current.length;
        const radius = ratio * 5;
        const alpha = p.life * ratio * 0.7;
        
        ctx.beginPath();
        ctx.arc(p.x, p.y, Math.max(radius, 0.5), 0, Math.PI * 2);
        ctx.fillStyle = color;
        ctx.globalAlpha = alpha;
        ctx.fill();
      }
      ctx.globalAlpha = 1;
      animationRef.current = requestAnimationFrame(animateTrail);
    };

    document.addEventListener('mousemove', handleMouseMove);
    animateTrail();

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', resizeCanvas);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  return { cursorDot, canvasRef };
};
