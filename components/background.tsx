"use client";

import { useEffect, useRef } from 'react';
import p5 from 'p5';

export function Background() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const sketch = (p: p5) => {
      const rows = 10;
      const columns = 10;
      const fadeSpeed = 1;
      let cells: number[][] = [];

      p.setup = () => {
        const canvas = p.createCanvas(p.windowWidth, p.windowHeight);
        canvas.position(0, 0);
        canvas.style('z-index', '-1');

        for (let r = 0; r < rows; r++) {
          cells[r] = [];
          for (let c = 0; c < columns; c++) {
            cells[r][c] = p.random(255);
          }
        }
      };

      p.draw = () => {
        const cellWidth = p.width / columns;
        const cellHeight = p.height / rows;

        if (p.mouseX > 0 && p.mouseX < p.width &&
            p.mouseY > 0 && p.mouseY < p.height) {
          const mouseR = p.floor(rows * (p.mouseY / p.height));
          const mouseC = p.floor(columns * (p.mouseX / p.width));
          if (cells[mouseR] && cells[mouseR][mouseC] !== undefined) {
            cells[mouseR][mouseC] = 255;
          }
        }

        for (let r = 0; r < rows; r++) {
          for (let c = 0; c < columns; c++) {
            cells[r][c] -= fadeSpeed;
            cells[r][c] = p.constrain(cells[r][c], 0, 255);

            const y = p.height * (r / rows);
            const x = p.width * (c / columns);

            p.noStroke();
            p.fill(cells[r][c], 0, 128, 50);
            p.rect(x, y, cellWidth, cellHeight);
          }
        }
      };

      p.windowResized = () => {
        p.resizeCanvas(p.windowWidth, p.windowHeight);
      };
    };

    const p5Instance = new p5(sketch, containerRef.current);
    return () => p5Instance.remove();
  }, []);

  return <div ref={containerRef} className="fixed inset-0 -z-10" />;
}