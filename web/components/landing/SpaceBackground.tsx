"use client";

import { useEffect, useRef } from "react";

export default function SpaceBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    // Star field configuration with colors
    const starColors = [
      { r: 255, g: 255, b: 255 }, // White
      { r: 0, g: 208, b: 132 }, // Money green (brand color)
      { r: 200, g: 180, b: 255 }, // Light purple
      { r: 180, g: 220, b: 255 }, // Light blue
      { r: 255, g: 200, b: 220 }, // Light pink
      { r: 220, g: 255, b: 220 }, // Light green
      { r: 255, g: 240, b: 200 }, // Light yellow
    ];

    const stars: Array<{
      x: number;
      y: number;
      radius: number;
      speed: number;
      opacity: number;
      twinkleSpeed: number;
      color: { r: number; g: number; b: number };
    }> = [];

    // Create stars
    const numStars = 150;
    for (let i = 0; i < numStars; i++) {
      stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 1.5 + 0.5,
        speed: Math.random() * 0.5 + 0.1,
        opacity: Math.random() * 0.5 + 0.3,
        twinkleSpeed: Math.random() * 0.02 + 0.01,
        color: starColors[Math.floor(Math.random() * starColors.length)],
      });
    }

    // Particles for depth
    const particles: Array<{
      x: number;
      y: number;
      radius: number;
      speed: number;
      opacity: number;
    }> = [];

    const numParticles = 30;
    for (let i = 0; i < numParticles; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 2 + 1,
        speed: Math.random() * 2 + 1,
        opacity: Math.random() * 0.3 + 0.1,
      });
    }

    let animationFrameId: number;
    let time = 0;

    const animate = () => {
      time += 0.01;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw stars with twinkling effect
      stars.forEach((star) => {
        star.opacity += Math.sin(time * 50 + star.x) * star.twinkleSpeed;
        star.opacity = Math.max(0.2, Math.min(0.8, star.opacity));

        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${star.color.r}, ${star.color.g}, ${star.color.b}, ${star.opacity})`;
        ctx.fill();

        // Add glow effect for some stars
        if (star.opacity > 0.6) {
          ctx.shadowBlur = 10;
          ctx.shadowColor = `rgba(${star.color.r}, ${star.color.g}, ${star.color.b}, 0.8)`;
          ctx.fill();
          ctx.shadowBlur = 0;
        }
      });
      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
        style={{
          background:
            "radial-gradient(ellipse at center, hsl(var(--background)) 0%, hsl(var(--background)) 100%)",
        }}
      />
      {/* Gradient overlay for depth */}
      <div className="absolute inset-0 bg-linear-to-b from-transparent via-transparent to-background/30" />
    </div>
  );
}
