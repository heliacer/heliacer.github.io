import React, { useEffect, useState } from 'react';

const CustomCursor: React.FC = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updatePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', updatePosition);
    return () => {
      window.removeEventListener('mousemove', updatePosition);
    };
  }, []);

  return <div className='cursor' style={{
    background:`radial-gradient(300px circle at ${position.x}px ${position.y}px, var(--primary), transparent 100%)`,
  }}></div>;
};

export default CustomCursor;
