import { CANVAS_MAX_SIZE } from "../consts";
import { trunc } from "./trunc";

export const changeContrast =
  (contrast: number) => (context: CanvasRenderingContext2D) => {
    const image = context.getImageData(0, 0, CANVAS_MAX_SIZE, CANVAS_MAX_SIZE);
    const pixels = image.data;
    for (let i = 0; i < pixels.length; i += 4) {
      const r = pixels[i];
      const g = pixels[i + 1];
      const b = pixels[i + 2];
      const factor = (259 * (contrast + 255)) / (255 * (259 - contrast));

      pixels[i] = trunc(factor * (r - 128) + 128);
      pixels[i + 1] = trunc(factor * (g - 128) + 128);
      pixels[i + 2] = trunc(factor * (b - 128) + 128);
    }

    context.putImageData(image, 0, 0);
  };
