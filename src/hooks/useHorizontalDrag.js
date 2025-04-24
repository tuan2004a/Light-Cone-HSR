// src/hooks/useDraggableX.js
import { useRef, useEffect, useState } from 'react';

const useDraggableX = () => {
  const elementRef = useRef(null);
  const [offsetX, setOffsetX] = useState(0);
  const isDragging = useRef(false);
  const startX = useRef(0);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const onMouseDown = (e) => {
      isDragging.current = true;
      startX.current = e.clientX - offsetX;
      element.style.cursor = 'grabbing';
    };

    const onMouseMove = (e) => {
      if (!isDragging.current) return;
      const x = e.clientX - startX.current;
      setOffsetX(x);
    };

    const onMouseUp = () => {
      isDragging.current = false;
      element.style.cursor = 'grab';
    };

    element.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseup', onMouseUp);

    return () => {
      element.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseup', onMouseUp);
    };
  }, [offsetX]);

  return { elementRef, offsetX };
};

export default useDraggableX;
