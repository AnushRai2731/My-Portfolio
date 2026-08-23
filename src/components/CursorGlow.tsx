import React, { useEffect, useState } from 'react';

export const CursorGlow: React.FC = () => {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
      if (!visible) setVisible(true);
    };

    const handleMouseLeave = () => setVisible(false);

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [visible]);

  if (!visible) return null;

  return (
    <>
      <div
        id="cursor-dot"
        className="fixed w-2 h-2 bg-[#22D3EE] rounded-full pointer-events-none z-[9999] transition-transform duration-75 ease-out -translate-x-1/2 -translate-y-1/2 shadow-[0_0_10px_#22D3EE]"
        style={{ left: `${pos.x}px`, top: `${pos.y}px` }}
      />
      <div
        id="cursor-glow"
        className="fixed w-72 h-72 rounded-full pointer-events-none z-[9998] -translate-x-1/2 -translate-y-1/2 mix-blend-screen opacity-60 transition-opacity duration-300"
        style={{
          left: `${pos.x}px`,
          top: `${pos.y}px`,
          background: 'radial-gradient(circle, rgba(34, 211, 238, 0.12) 0%, rgba(167, 139, 250, 0.05) 50%, transparent 70%)',
        }}
      />
    </>
  );
};
