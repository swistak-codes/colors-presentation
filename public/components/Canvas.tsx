import * as preact from "preact";
import styles from "./Canvas.module.css";
import { useEffect, useRef } from "preact/compat";

type Props = {
  image: HTMLImageElement;
  callback: (ctx: CanvasRenderingContext2D) => void;
};

const CANVAS_SIZE = 500;

export const Canvas = ({ image, callback }: Props) => {
  const canvasRef = useRef<HTMLCanvasElement>();

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    const ratio = Math.min(
      CANVAS_SIZE / image.width,
      CANVAS_SIZE / image.height
    );
    context.imageSmoothingEnabled = true;
    context.imageSmoothingQuality = "high";
    context.drawImage(
      image,
      0,
      0,
      image.width,
      image.height,
      0,
      0,
      ratio * image.width,
      ratio * image.height
    );
    callback(context);

    return () => {
      context.clearRect(0, 0, canvas.width, canvas.height);
    };
  }, [image, callback]);

  return <canvas class={styles.canvas} ref={canvasRef} />;
};
