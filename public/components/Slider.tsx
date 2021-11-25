import * as preact from "preact";
import { JSXInternal } from "preact/src/jsx";
import styles from "./Slider.module.css";

type Props = {
  value: number;
  setValue: (val: number) => void;
  label: string;
  min: number;
  max: number;
  disabled: boolean;
};

export const Slider = ({
  value,
  setValue,
  label,
  min,
  max,
  disabled,
}: Props) => {
  const onChange = (e: JSXInternal.TargetedEvent<HTMLInputElement>) =>
    setValue(e.currentTarget.valueAsNumber);

  const props = {
    value,
    onChange,
    min,
    max,
    disabled,
  };

  return (
    <div class={styles.container}>
      <label>{label}</label>
      <input type="slider" {...props} />
      <input type="number" {...props} />
    </div>
  );
};
