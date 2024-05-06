import { useEffect, useRef } from 'react';
import style from './NoiseBg.module.scss';
import { useLocation } from 'react-router-dom';

class Grain {
  constructor(el, alpha) {
    /**
     * Options
     * Increase the pattern size if visible pattern
     */
    this.patternSize = 150;
    this.patternScaleX = 1;
    this.patternScaleY = 1;
    this.patternRefreshInterval = 3; // 8
    this.patternAlpha = alpha; // int between 0 and 255,

    /**
     * Create canvas
     */
    this.canvas = el;
    this.ctx = this.canvas.getContext('2d');
    this.ctx.scale(this.patternScaleX, this.patternScaleY);

    /**
     * Create a canvas that will be used to generate grain and used as a
     * pattern on the main canvas.
     */
    this.patternCanvas = document.createElement('canvas');
    this.patternCanvas.width = this.patternSize;
    this.patternCanvas.height = this.patternSize;
    this.patternCtx = this.patternCanvas.getContext('2d');
    this.patternData = this.patternCtx.createImageData(
      this.patternSize,
      this.patternSize
    );
    this.patternPixelDataLength = this.patternSize * this.patternSize * 4; // rgba = 4

    /**
     * Prebind prototype function, so later its easier to user
     */
    this.resize = this.resize.bind(this);
    this.loop = this.loop.bind(this);

    this.frame = 0;

    window.addEventListener('resize', this.resize);
    this.resize();

    window.requestAnimationFrame(this.loop);
  }

  resize() {
    this.canvas.width = window.innerWidth * devicePixelRatio;
    this.canvas.height = window.innerHeight * devicePixelRatio;
    // this.canvas.height = Math.max(
    //   document.body.scrollHeight,
    //   document.documentElement.scrollHeight,
    //   document.body.offsetHeight,
    //   document.documentElement.offsetHeight,
    //   document.body.clientHeight,
    //   document.documentElement.clientHeight
    // );
  }

  update() {
    const { patternPixelDataLength, patternData, patternAlpha, patternCtx } =
      this;

    // put a random shade of gray into every pixel of the pattern
    for (let i = 0; i < patternPixelDataLength; i += 4) {
      // const value = (Math.random() * 255) | 0;
      const value = Math.random() * 255;

      patternData.data[i] = value;
      patternData.data[i + 1] = value;
      patternData.data[i + 2] = value;
      patternData.data[i + 3] = patternAlpha;
    }

    patternCtx.putImageData(patternData, 0, 0);
  }

  draw() {
    const { ctx, patternCanvas, canvas, viewHeight } = this;
    const { width, height } = canvas;

    // clear canvas
    ctx.clearRect(0, 0, width, height);

    // fill the canvas using the pattern
    ctx.fillStyle = ctx.createPattern(patternCanvas, 'repeat');
    ctx.fillRect(0, 0, width, height);
  }

  loop() {
    // only update grain every n frames
    const shouldDraw = ++this.frame % this.patternRefreshInterval === 0;
    if (shouldDraw) {
      this.update();
      this.draw();
    }

    window.requestAnimationFrame(this.loop);
  }
}

const NoiseBg = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    /**
     * Initiate Grain
     */
    const el = canvasRef.current;
    const grain = new Grain(el, 16);
  });

  return (
    <canvas id='noise-bg' ref={canvasRef} className={`${style.noise}`}></canvas>
  );
};

export default NoiseBg;
