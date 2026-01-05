import React, { useEffect, useRef, useState } from "react";
import { javascript } from "../../assets";

const GalaxySkills = ({ skills = [] }) => {
  const containerRef = useRef(null);

  /* ---------- Stars (static config) ---------- */
  const [stars] = useState(() =>
    Array.from({ length: 80 }, () => ({
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 2 + 1,
      delay: Math.random() * 3,
      duration: 2 + Math.random() * 2,
    }))
  );

  const [planets, setPlanets] = useState([]);
  const rafRef = useRef(null);
  const lastTsRef = useRef(0);
  const dragRef = useRef(null);

  /* ---------- Init planets ---------- */
  useEffect(() => {
    setPlanets(
      skills.map((skill, i) => ({
        ...skill,
        id: i,
        originalX: 20 + (i % 3) * 25,
        originalY: 25 + Math.floor(i / 3) * 25,
        currentX: 0,
        currentY: 0,
        isDragging: false,
        floatOffsetX: 0,
        floatOffsetY: 0,
      }))
    );
  }, [skills]);

  /* ---------- Floating animation ---------- */
  useEffect(() => {
    const animate = (ts) => {
      if (!lastTsRef.current) lastTsRef.current = ts;
      lastTsRef.current = ts;

      setPlanets((prev) =>
        prev.map((p) => {
          if (p.isDragging) return p;
          const t = ts / 1000 + p.id;
          return {
            ...p,
            floatOffsetX: Math.sin(t) * 6,
            floatOffsetY: Math.cos(t * 0.9) * 6,
          };
        })
      );

      rafRef.current = requestAnimationFrame(animate);
    };

    rafRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(rafRef.current);
  }, []);

  /* ---------- Drag handlers ---------- */
  const handleMouseDown = (e, id) => {
    e.preventDefault();
    const rect = containerRef.current.getBoundingClientRect();

    const startX = e.clientX ?? e.touches?.[0]?.clientX;
    const startY = e.clientY ?? e.touches?.[0]?.clientY;

    const planet = planets.find((p) => p.id === id);

    dragRef.current = {
      id,
      startX,
      startY,
      baseX: planet.currentX,
      baseY: planet.currentY,
      rect,
    };

    setPlanets((prev) =>
      prev.map((p) => (p.id === id ? { ...p, isDragging: true } : p))
    );

    const move = (ev) => {
      const x = ev.clientX ?? ev.touches?.[0]?.clientX;
      const y = ev.clientY ?? ev.touches?.[0]?.clientY;
      if (!x || !y) return;

      const { startX, startY, baseX, baseY, rect } = dragRef.current;

      const dx = ((x - startX) / rect.width) * 100;
      const dy = ((y - startY) / rect.height) * 100;

      setPlanets((prev) =>
        prev.map((p) =>
          p.id === id
            ? { ...p, currentX: baseX + dx, currentY: baseY + dy }
            : p
        )
      );
    };

    const up = () => {
      let sx = 0,
        sy = 0;

      setPlanets((prev) => {
        const p = prev.find((pp) => pp.id === id);
        sx = p.currentX;
        sy = p.currentY;
        return prev;
      });

      const start = performance.now();
      const duration = 600;

      const elasticBack = (ts) => {
        const progress = Math.min(1, (ts - start) / duration);
        const elastic =
          Math.pow(2, -10 * progress) *
            Math.sin(((progress - 0.075) * 2 * Math.PI) / 0.3) +
          1;

        setPlanets((prev) =>
          prev.map((p) =>
            p.id === id
              ? {
                  ...p,
                  currentX: sx * (1 - elastic),
                  currentY: sy * (1 - elastic),
                }
              : p
          )
        );

        if (progress < 1) requestAnimationFrame(elasticBack);
        else
          setPlanets((prev) =>
            prev.map((p) =>
              p.id === id
                ? { ...p, currentX: 0, currentY: 0, isDragging: false }
                : p
            )
          );
      };

      requestAnimationFrame(elasticBack);

      document.removeEventListener("mousemove", move);
      document.removeEventListener("mouseup", up);
      document.removeEventListener("touchmove", move);
      document.removeEventListener("touchend", up);
    };

    document.addEventListener("mousemove", move);
    document.addEventListener("mouseup", up);
    document.addEventListener("touchmove", move, { passive: false });
    document.addEventListener("touchend", up);
  };

  /* ---------- Render ---------- */
  return (
    <div
      ref={containerRef}
      className="relative w-full h-full bg-gradient-to-b from-slate-950 via-purple-950 to-slate-900"
    >
      {/* Stars */}
      {stars.map((s, i) => (
        <div
          key={i}
          className="absolute rounded-full bg-white opacity-80"
          style={{
            left: `${s.x}%`,
            top: `${s.y}%`,
            width: `${s.size}px`,
            height: `${s.size}px`,
            boxShadow: `0 0 ${s.size * 2}px rgba(255,255,255,.8)`,
            animation: `pulse ${s.duration}s ease-in-out ${s.delay}s infinite`,
          }}
        />
      ))}

      {/* Skill Images */}
      {planets.map((p) => (
        <div
          key={p.id}
          className=" cursor-grab active:cursor-grabbing"
          style={{
            left: `${p.originalX}%`,
            top: `${p.originalY}%`,
            transform: `translate(-50%, -50%) translate(${p.currentX + p.floatOffsetX}%, ${p.currentY + p.floatOffsetY}%)`,
            animation: `spin ${8 + (p.id % 5)}s linear infinite`,
            transition: p.isDragging ? "none" : "transform 200ms ease-out",
          }}
          onMouseDown={(e) => handleMouseDown(e, p.id)}
          onTouchStart={(e) => handleMouseDown(e, p.id)}
        >
          <div className="relative group">
            <img
              src={p.icon}
              alt={p.name}
              draggable={false}
              className="w-20 h-20 md:w-28 md:h-28 object-contain 
                         drop-shadow-[0_0_22px_rgba(168,85,247,0.6)]
                         pointer-events-none"
            />

            {/* <span className="absolute -bottom-7 left-1/2 -translate-x-1/2 
                             text-white text-xs md:text-sm font-semibold 
                             opacity-0 group-hover:opacity-100 transition-opacity">
              {p.name}
            </span> */}
          </div>
        </div>
      ))}

      {/* Keyframes */}
      <style>{`
        @keyframes pulse {
          0% { opacity: .6; transform: scale(.9); }
          50% { opacity: 1; transform: scale(1.1); }
          100% { opacity: .6; transform: scale(.9); }
        }
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
};

export default GalaxySkills;
