import { CANVAS_MAX_SIZE } from "../consts";

export const solarize =
  (threshold: number, revert: boolean) =>
  (context: CanvasRenderingContext2D) => {
    const image = context.getImageData(0, 0, CANVAS_MAX_SIZE, CANVAS_MAX_SIZE);
    const pixels = image.data;
    for (let i = 0; i < pixels.length; i += 4) {
      const r = pixels[i];
      const g = pixels[i + 1];
      const b = pixels[i + 2];

      pixels[i] =
        (!revert && r <= threshold) || (revert && r >= threshold) ? 255 - r : r;
      pixels[i + 1] =
        (!revert && g <= threshold) || (revert && g >= threshold) ? 255 - g : g;
      pixels[i + 2] =
        (!revert && b <= threshold) || (revert && b >= threshold) ? 255 - b : b;
    }

    context.putImageData(image, 0, 0);
  };
