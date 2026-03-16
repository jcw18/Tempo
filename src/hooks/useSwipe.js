import { useState, useRef, useCallback } from 'react';

const THRESHOLD = 60;

export function useSwipe(onSwipeLeft) {
  const [offset, setOffset] = useState(0);
  const [exitDir, setExitDir] = useState(null);
  const startX = useRef(0);
  const startY = useRef(0);
  const isHorizontal = useRef(null);

  const onTouchStart = useCallback((e) => {
    startX.current = e.touches[0].clientX;
    startY.current = e.touches[0].clientY;
    isHorizontal.current = null;
    setExitDir(null);
    setOffset(0);
  }, []);

  const onTouchMove = useCallback((e) => {
    const dx = e.touches[0].clientX - startX.current;
    const dy = e.touches[0].clientY - startY.current;

    if (isHorizontal.current === null && (Math.abs(dx) > 10 || Math.abs(dy) > 10)) {
      isHorizontal.current = Math.abs(dx) > Math.abs(dy);
    }

    if (isHorizontal.current) {
      e.preventDefault();
      // Only allow dragging left (negative offset)
      setOffset(Math.min(0, dx));
    }
  }, []);

  const onTouchEnd = useCallback(() => {
    if (!isHorizontal.current) {
      setOffset(0);
      return;
    }
    if (offset < -THRESHOLD) {
      setExitDir('left');
      setTimeout(() => {
        onSwipeLeft?.();
        setExitDir(null);
        setOffset(0);
      }, 250);
    } else {
      setOffset(0);
    }
  }, [offset, onSwipeLeft]);

  const handlers = { onTouchStart, onTouchMove, onTouchEnd };

  let transform;
  let transition = 'none';
  let opacity = 1;

  if (exitDir === 'left') {
    transform = 'translateX(-110%)';
    transition = 'transform 0.25s ease-in, opacity 0.25s ease-in';
    opacity = 0;
  } else if (offset !== 0) {
    transform = `translateX(${offset}px)`;
    opacity = 1 - Math.min(Math.abs(offset) / 400, 0.3);
  } else {
    transform = 'translateX(0)';
    transition = 'transform 0.2s ease-out, opacity 0.2s ease-out';
  }

  const style = { transform, transition, opacity };

  return { handlers, style };
}
