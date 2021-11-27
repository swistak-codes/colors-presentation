import { CANVAS_MAX_SIZE } from "../consts";

export const invert = (context: CanvasRenderingContext2D) => {
  const image = context.getImageData(0, 0, CANVAS_MAX_SIZE, CANVAS_MAX_SIZE);
  const pixels = image.data;
  for (let i = 0; i < pixels.length; i += 4) {
    const r = pixels[i];
    const g = pixels[i + 1];
    const b = pixels[i + 2];

    pixels[i] = 255 - r;
    pixels[i + 1] = 255 - g;
    pixels[i + 2] = 255 - b;
  }

  context.putImageData(image, 0, 0);
};
