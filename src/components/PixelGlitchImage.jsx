import { useEffect, useRef } from "react";
import drawImageCover from "../assets/drawImageCover";
import '../styles/PixelGlitchImage.scss';

export default function PixelGlitchImage({
  imgRef,
  blockSize = 8,
  intensity = 6
}) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const img = imgRef.current;
    const canvas = canvasRef.current;
    if (!img || !canvas) return;

    const ctx = canvas.getContext("2d");

    const draw = () => {
      const { width, height } = img.getBoundingClientRect();
      if (!width || !height) return;

      canvas.width = width;
      canvas.height = height;

      ctx.clearRect(0, 0, width, height);
      drawImageCover(ctx, img, 0, 0, width, height);

      const imageData = ctx.getImageData(0, 0, width, height);
      const data = imageData.data;

      for (let y = 0; y < height; y += blockSize) {
        for (let x = 0; x < width; x += blockSize) {
          const dxR = (Math.random() * intensity - intensity / 2) | 0;
          const dxG = (Math.random() * intensity - intensity / 2) | 0;
          const dxB = (Math.random() * intensity - intensity / 2) | 0;

          for (let by = 0; by < blockSize; by++) {
            for (let bx = 0; bx < blockSize; bx++) {
              const px = x + bx;
              const py = y + by;
              if (px >= width || py >= height) continue;

              const i = (py * width + px) * 4;

              const rx = px + dxR;
              const gx = px + dxG;
              const bx2 = px + dxB;

              if (rx >= 0 && rx < width)
                data[(py * width + rx) * 4] = data[i];

              if (gx >= 0 && gx < width)
                data[(py * width + gx) * 4 + 1] = data[i + 1];

              if (bx2 >= 0 && bx2 < width)
                data[(py * width + bx2) * 4 + 2] = data[i + 2];
            }
          }
        }
      }

      ctx.putImageData(imageData, 0, 0);
    };

    if (img.complete) draw();
    else img.onload = draw;

    const observer = new ResizeObserver(draw);
    observer.observe(img);

    return () => observer.disconnect();
  }, [imgRef, blockSize, intensity]);

  return <canvas ref={canvasRef} className="glitch-canvas" />;
}
