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

    const lowerJaw = () => {
      ctx.beginPath();

      ctx.bezierCurveTo(1100, 2200, 1100, 2180, 1070, 2300);
      ctx.bezierCurveTo(1060, 2400, 1100, 2400, 1150, 2500);
      ctx.lineTo(940, 2500);

      ctx.bezierCurveTo(940, 2500, 915, 2400, 915, 2400);
      ctx.bezierCurveTo(900, 2300, 880, 2370, 860, 2200);
      ctx.lineTo(840, 2100);
      ctx.bezierCurveTo(830, 2060, 815, 2063, 800, 2065);
      ctx.lineTo(700, 2080);
      ctx.bezierCurveTo(450, 2150, 450, 2150, 402, 2100);
      ctx.bezierCurveTo(410, 2105, 380, 2100, 390, 2000);
      ctx.bezierCurveTo(390, 2000, 370, 1900, 375, 1900);
      ctx.bezierCurveTo(370, 1900, 395, 1850, 310, 1800);

      // Start of the lower lip
      ctx.bezierCurveTo(315, 1770, 330, 1740, 350, 1740);
      ctx.bezierCurveTo(430, 1760, 450, 1760, 460, 1800);

      // gums
      ctx.bezierCurveTo(460, 1800, 465, 1990, 500, 1830);
      ctx.quadraticCurveTo(500, 1820, 515, 1820);

      // lower teeth
      ctx.bezierCurveTo(520, 1805, 515, 1820, 495, 1750);
      ctx.bezierCurveTo(480, 1730, 580, 1790, 560, 1820);
      ctx.bezierCurveTo(560, 1840, 550, 1780, 620, 1870);

      // put tongue positions here

      ctx.stroke();
    };

    lowerJaw();

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
