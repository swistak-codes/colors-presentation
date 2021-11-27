import { CANVAS_MAX_SIZE } from "../consts";
import { trunc } from "./trunc";

export const changeBrightness =
  (brightness: number) => (context: CanvasRenderingContext2D) => {
    const image = context.getImageData(0, 0, CANVAS_MAX_SIZE, CANVAS_MAX_SIZE);
    const pixels = image.data;
    for (let i = 0; i < pixels.length; i += 4) {
      const r = pixels[i];
      const g = pixels[i + 1];
      const b = pixels[i + 2];

      pixels[i] = trunc(r + brightness);
      pixels[i + 1] = trunc(g + brightness);
      pixels[i + 2] = trunc(b + brightness);
    }

    context.putImageData(image, 0, 0);
  };
