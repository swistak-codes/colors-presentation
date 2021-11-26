import * as preact from "preact";
import { JSXInternal } from "preact/src/jsx";
import styles from "./Slider.module.css";

type Props = {
  value: number;
  setValue: (val: number) => void;
  label: string;
  min: number;
  max: number;
  realMax: number;
  step: number;
  disabled: boolean;
};

export const Slider = ({
  value,
  setValue,
  label,
  min,
  max,
  realMax,
  step,
  disabled,
}: Props) => {
  const onChange = (e: JSXInternal.TargetedEvent<HTMLInputElement>) =>
    setValue(Math.min(e.currentTarget.valueAsNumber, max));

  const props = {
    value,
    onChange,
    min,
    max,
    step,
    disabled,
    class: styles.input,
  };

  return (
    <div class={styles.container}>
      <label class={styles.label}>{label}</label>
      <input type="range" {...props} max={realMax} />
      <input type="number" {...props} />
    </div>
  );
};
