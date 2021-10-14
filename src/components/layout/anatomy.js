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

    const upperJaw = () => {
      ctx.beginPath();

      ctx.bezierCurveTo(360, 1480, 390, 1430, 600, 1440);
      ctx.bezierCurveTo(700, 1440, 800, 1430, 900, 1440);
      ctx.bezierCurveTo(1000, 1440, 1100, 1430, 1200, 1560);
      ctx.bezierCurveTo(1250, 1600, 1280, 1750, 1100, 1580);

      ctx.bezierCurveTo(980, 1530, 950, 1520, 900, 1520);
      ctx.bezierCurveTo(900, 1520, 850, 1530, 650, 1520);

      ctx.bezierCurveTo(650, 1520, 510, 1600, 520, 1560);

      ctx.bezierCurveTo(520, 1580, 500, 1600, 490, 1640);
      ctx.bezierCurveTo(500, 1690, 420, 1530, 460, 1520);

      ctx.bezierCurveTo(470, 1520, 410, 1500, 420, 1530);
      ctx.bezierCurveTo(430, 1610, 470, 1640, 410, 1640);
      ctx.bezierCurveTo(360, 1640, 370, 1640, 360, 1640);
      ctx.bezierCurveTo(310, 1635, 380, 1660, 360, 1480);

      ctx.stroke();
    };

    const skull = () => {
      ctx.beginPath();

      ctx.bezierCurveTo(1380, 2500, 1180, 1900, 1390, 1450);
      ctx.bezierCurveTo(1400, 1400, 1250, 1300, 1100, 1290);

      ctx.bezierCurveTo(1050, 1290, 1010, 1350, 960, 1180);
      ctx.bezierCurveTo(930, 1110, 880, 1190, 630, 1110);
      ctx.bezierCurveTo(580, 1100, 510, 1100, 340, 1300);
      ctx.bezierCurveTo(290, 1330, 300, 1330, 270, 1390);
      ctx.bezierCurveTo(250, 1420, 260, 1460, 200, 1430);
      ctx.bezierCurveTo(170, 1390, 180, 1400, 180, 1360);
      ctx.bezierCurveTo(180, 1300, 175, 1340, 180, 1300);
      ctx.bezierCurveTo(180, 1300, 175, 1280, 460, 1020);

      ctx.bezierCurveTo(460, 1020, 400, 950, 440, 880);
      ctx.quadraticCurveTo(650, 320, 1250, 150);
      ctx.lineTo(1285, 145);
      ctx.quadraticCurveTo(2400, 100, 2250, 1150);

      ctx.bezierCurveTo(2255, 1140, 2200, 1300, 2050, 1400);
      ctx.bezierCurveTo(2050, 1400, 1600, 1900, 2000, 2500);
      ctx.lineTo(1380, 2500);

      ctx.stroke();
    };

    lowerJaw();
    upperJaw();
    skull();

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
