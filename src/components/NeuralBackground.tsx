import { useEffect, useRef } from "react";

const NeuralBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    
    let animationId: number;
    let mouseX = -1000;
    let mouseY = -1000;
    const nodes: { x: number; y: number; vx: number; vy: number; baseSize: number }[] = [];
    const nodeCount = 80;
    
    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);
    
    const handleMouse = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };
    window.addEventListener("mousemove", handleMouse);
    
    for (let i = 0; i < nodeCount; i++) {
      nodes.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        baseSize: Math.random() * 1.5 + 1,
      });
    }
    
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 180) {
            ctx.beginPath();
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.strokeStyle = `hsla(210, 100%, 56%, ${0.12 * (1 - dist / 180)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }
      
      nodes.forEach((node) => {
        const dxMouse = node.x - mouseX;
        const dyMouse = node.y - mouseY;
        const distMouse = Math.sqrt(dxMouse * dxMouse + dyMouse * dyMouse);
        const isNearMouse = distMouse < 150;
        const glowIntensity = isNearMouse ? 0.8 : 0.4;
        const size = isNearMouse ? node.baseSize * 2 : node.baseSize;
        
        // Repel from mouse
        if (isNearMouse && distMouse > 0) {
          node.vx += (dxMouse / distMouse) * 0.05;
          node.vy += (dyMouse / distMouse) * 0.05;
        }
        
        ctx.beginPath();
        ctx.arc(node.x, node.y, size, 0, Math.PI * 2);
        ctx.fillStyle = isNearMouse ? "hsla(150, 80%, 45%, 0.8)" : `hsla(210, 100%, 56%, ${glowIntensity})`;
        ctx.fill();
        
        const glowRadius = isNearMouse ? 12 : 6;
        ctx.beginPath();
        ctx.arc(node.x, node.y, glowRadius, 0, Math.PI * 2);
        const gradient = ctx.createRadialGradient(node.x, node.y, 0, node.x, node.y, glowRadius);
        gradient.addColorStop(0, isNearMouse ? "hsla(150, 80%, 45%, 0.4)" : "hsla(210, 100%, 56%, 0.3)");
        gradient.addColorStop(1, "hsla(210, 100%, 56%, 0)");
        ctx.fillStyle = gradient;
        ctx.fill();
        
        node.x += node.vx;
        node.y += node.vy;
        node.vx *= 0.99;
        node.vy *= 0.99;
        node.vx += (Math.random() - 0.5) * 0.02;
        node.vy += (Math.random() - 0.5) * 0.02;
        if (node.x < 0 || node.x > canvas.width) node.vx *= -1;
        if (node.y < 0 || node.y > canvas.height) node.vy *= -1;
      });
      animationId = requestAnimationFrame(draw);
    };
    draw();
    
    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", handleMouse);
    };
  }, []);
  
  return <canvas ref={canvasRef} className="absolute inset-0 z-0" />;
};

export default NeuralBackground;
