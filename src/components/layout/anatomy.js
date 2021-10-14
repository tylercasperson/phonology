import React, { useEffect, useRef } from 'react';

const Anatomy = () => {
  const canvas = useRef();

  useEffect(() => {
    let ctx = canvas.current.getContext('2d');

    const border = () => {
      ctx.lineWidth = 5;
      ctx.beginPath();
      ctx.rect(0, 0, canvas.current.width, canvas.current.height);
      ctx.stroke();
    };

    const grid = () => {
      ctx.lineWidth = 1;
      ctx.beginPath();

      ctx.moveTo(100, 0);
      ctx.lineTo(100, canvas.current.height);
      ctx.moveTo(200, 0);
      ctx.lineTo(200, canvas.current.height);
      ctx.moveTo(300, 0);
      ctx.lineTo(300, canvas.current.height);
      ctx.moveTo(400, 0);
      ctx.lineTo(400, canvas.current.height);
      ctx.moveTo(500, 0);
      ctx.lineTo(500, canvas.current.height);
      ctx.moveTo(600, 0);
      ctx.lineTo(600, canvas.current.height);
      ctx.moveTo(700, 0);
      ctx.lineTo(700, canvas.current.height);
      ctx.moveTo(800, 0);
      ctx.lineTo(800, canvas.current.height);
      ctx.moveTo(900, 0);
      ctx.lineTo(900, canvas.current.height);
      ctx.moveTo(1000, 0);
      ctx.lineTo(1000, canvas.current.height);
      ctx.moveTo(1100, 0);
      ctx.lineTo(1100, canvas.current.height);
      ctx.moveTo(1200, 0);
      ctx.lineTo(1200, canvas.current.height);
      ctx.moveTo(1300, 0);
      ctx.lineTo(1300, canvas.current.height);
      ctx.moveTo(1400, 0);
      ctx.lineTo(1400, canvas.current.height);
      ctx.moveTo(1500, 0);
      ctx.lineTo(1500, canvas.current.height);
      ctx.moveTo(1600, 0);
      ctx.lineTo(1600, canvas.current.height);
      ctx.moveTo(1700, 0);
      ctx.lineTo(1700, canvas.current.height);
      ctx.moveTo(1800, 0);
      ctx.lineTo(1800, canvas.current.height);
      ctx.moveTo(1900, 0);
      ctx.lineTo(1900, canvas.current.height);
      ctx.moveTo(2000, 0);
      ctx.lineTo(2000, canvas.current.height);
      ctx.moveTo(2100, 0);
      ctx.lineTo(2100, canvas.current.height);
      ctx.moveTo(2200, 0);
      ctx.lineTo(2200, canvas.current.height);
      ctx.moveTo(2300, 0);
      ctx.lineTo(2300, canvas.current.height);
      ctx.moveTo(2400, 0);
      ctx.lineTo(2400, canvas.current.height);

      ctx.moveTo(0, 100);
      ctx.lineTo(canvas.current.width, 100);
      ctx.moveTo(0, 200);
      ctx.lineTo(canvas.current.width, 200);
      ctx.moveTo(0, 300);
      ctx.lineTo(canvas.current.width, 300);
      ctx.moveTo(0, 400);
      ctx.lineTo(canvas.current.width, 400);
      ctx.moveTo(0, 500);
      ctx.lineTo(canvas.current.width, 500);
      ctx.moveTo(0, 600);
      ctx.lineTo(canvas.current.width, 600);
      ctx.moveTo(0, 700);
      ctx.lineTo(canvas.current.width, 700);
      ctx.moveTo(0, 800);
      ctx.lineTo(canvas.current.width, 800);
      ctx.moveTo(0, 900);
      ctx.lineTo(canvas.current.width, 900);
      ctx.moveTo(0, 1000);
      ctx.lineTo(canvas.current.width, 1000);
      ctx.moveTo(0, 1100);
      ctx.lineTo(canvas.current.width, 1100);
      ctx.moveTo(0, 1200);
      ctx.lineTo(canvas.current.width, 1200);
      ctx.moveTo(0, 1300);
      ctx.lineTo(canvas.current.width, 1300);
      ctx.moveTo(0, 1400);
      ctx.lineTo(canvas.current.width, 1400);
      ctx.moveTo(0, 1500);
      ctx.lineTo(canvas.current.width, 1500);
      ctx.moveTo(0, 1600);
      ctx.lineTo(canvas.current.width, 1600);
      ctx.moveTo(0, 1700);
      ctx.lineTo(canvas.current.width, 1700);
      ctx.moveTo(0, 1800);
      ctx.lineTo(canvas.current.width, 1800);
      ctx.moveTo(0, 1900);
      ctx.lineTo(canvas.current.width, 1900);
      ctx.moveTo(0, 2000);
      ctx.lineTo(canvas.current.width, 2000);
      ctx.moveTo(0, 2100);
      ctx.lineTo(canvas.current.width, 2100);
      ctx.moveTo(0, 2200);
      ctx.lineTo(canvas.current.width, 2200);
      ctx.moveTo(0, 2300);
      ctx.lineTo(canvas.current.width, 2300);
      ctx.moveTo(0, 2400);
      ctx.lineTo(canvas.current.width, 2400);
      ctx.moveTo(0, 2500);
      ctx.lineTo(canvas.current.width, 2500);
      ctx.moveTo(0, 2600);
      ctx.lineTo(canvas.current.width, 2600);

      ctx.stroke();
    };

    border();
    grid();
  }, []);

  return (
    <div style={{ margin: '100px' }}>
      <canvas ref={canvas} height='2600' width='2400' />
    </div>
  );
};

export default Anatomy;
