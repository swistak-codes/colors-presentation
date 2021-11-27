import { CANVAS_MAX_SIZE } from "../consts";

export const imageToTwoTone =
  (threshold: number) => (context: CanvasRenderingContext2D) => {
    const image = context.getImageData(0, 0, CANVAS_MAX_SIZE, CANVAS_MAX_SIZE);
    const pixels = image.data;
    for (let i = 0; i < pixels.length; i += 4) {
      const r = pixels[i];
      const g = pixels[i + 1];
      const b = pixels[i + 2];
      const gray = (r + g + b) / 3 > threshold ? 0 : 255;

      pixels[i] = gray;
      pixels[i + 1] = gray;
      pixels[i + 2] = gray;
    }

    context.putImageData(image, 0, 0);
  };
