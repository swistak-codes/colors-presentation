import { h } from "preact";
import { useEffect, useRef } from "preact/hooks";
import styles from "./Canvas.module.css";
import { CANVAS_MAX_SIZE } from "../consts";

type Props = {
  image: HTMLImageElement | null;
  callback: (ctx: CanvasRenderingContext2D) => void;
};

export const Canvas = ({ image, callback }: Props) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    if (!image) {
      return;
    }

    const canvas = canvasRef.current as HTMLCanvasElement | null;
    if (!canvas) {
      return;
    }

    const context = canvas.getContext("2d");
    if (!context) {
      return;
    }

    const ratio = Math.min(
      CANVAS_MAX_SIZE / image.width,
      CANVAS_MAX_SIZE / image.height
    );
    context.imageSmoothingEnabled = true;
    context.imageSmoothingQuality = "high";
    canvas.height = ratio * image.height;
    canvas.width = ratio * image.width;
    context.drawImage(image, 0, 0, ratio * image.width, ratio * image.height);
    callback(context);

    return () => {
      context.clearRect(0, 0, canvas.width, canvas.height);
    };
  }, [image, callback]);

  return <canvas class={styles.canvas} width={0} height={0} ref={canvasRef} />;
};
