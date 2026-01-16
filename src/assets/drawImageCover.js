export default function drawImageCover(ctx, img, dx, dy, dWidth, dHeight) {
  const imgRatio = img.naturalWidth / img.naturalHeight;
  const canvasRatio = dWidth / dHeight;

  let sx, sy, sWidth, sHeight;

  if (imgRatio > canvasRatio) {
    // Imagen más ancha → recorte horizontal
    sHeight = img.naturalHeight;
    sWidth = sHeight * canvasRatio;
    sx = (img.naturalWidth - sWidth) / 2;
    sy = 0;
  } else {
    // Imagen más alta → recorte vertical
    sWidth = img.naturalWidth;
    sHeight = sWidth / canvasRatio;
    sx = 0;
    sy = (img.naturalHeight - sHeight) / 2;
  }

  ctx.drawImage(
    img,
    sx,
    sy,
    sWidth,
    sHeight,
    dx,
    dy,
    dWidth,
    dHeight
  );
};