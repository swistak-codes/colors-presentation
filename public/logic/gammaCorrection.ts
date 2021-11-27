import { CANVAS_MAX_SIZE } from "../consts";

export const gammaCorrection =
  (gamma: number) => (context: CanvasRenderingContext2D) => {
    const image = context.getImageData(0, 0, CANVAS_MAX_SIZE, CANVAS_MAX_SIZE);
    const pixels = image.data;
    for (let i = 0; i < pixels.length; i += 4) {
      const r = pixels[i];
      const g = pixels[i + 1];
      const b = pixels[i + 2];
      const factor = 1 / gamma;

      pixels[i] = 255 * Math.pow(r / 255, factor);
      pixels[i + 1] = 255 * Math.pow(g / 255, factor);
      pixels[i + 2] = 255 * Math.pow(b / 255, factor);
    }

    context.putImageData(image, 0, 0);
  };
