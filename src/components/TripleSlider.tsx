import { h } from "preact";
import { useState } from "preact/hooks";
import { Slider } from "./Slider";
import styles from "./TripleSlider.module.css";

type Props = {
  value: [number, number, number];
  setValue: (val: [number, number, number]) => void;
};

type SingleProps = {
  id: number;
  locked: number;
  value: [number, number, number];
  setValue: (val: number) => void;
  setLocked: (id: number) => void;
  label: string;
};

const other: Record<number, Record<number, number>> = {
  0: {
    1: 2,
    2: 1,
  },
  1: {
    0: 2,
    2: 0,
  },
  2: {
    1: 0,
    0: 1,
  },
};

const SingleSlider = ({
  id,
  value,
  setValue,
  locked,
  setLocked,
  label,
}: SingleProps) => {
  const otherId = Object.values(other[id]).filter((x) => x !== locked)[0];
  const isLocked = locked === id;

  return (
    <div class={styles.container}>
      <input type="radio" checked={isLocked} onChange={() => setLocked(id)} />
      <Slider
        value={value[id]}
        setValue={setValue}
        label={label}
        min={0}
        max={Math.min(1 - value[otherId], 1)}
        realMax={1}
        step={0.01}
        disabled={isLocked}
      />
    </div>
  );
};

export const TripleSlider = ({ value, setValue }: Props) => {
  const [locked, setLocked] = useState(1);

  const updateValues = (id: number) => (val: number) => {
    const result: [number, number, number] = [...value];
    result[id] = val;
    result[locked] = parseFloat(
      (1 - val - result[other[id][locked]]).toPrecision(4)
    );
    if (result[locked] < 0.0001) {
      result[locked] = 0;
    }
    setValue(result);
  };

  const sliderProps = {
    locked,
    setLocked,
    value,
  };

  return (
    <div>
      <SingleSlider
        id={0}
        setValue={updateValues(0)}
        label="Kr"
        {...sliderProps}
      />
      <SingleSlider
        id={1}
        setValue={updateValues(1)}
        label="Kg"
        {...sliderProps}
      />
      <SingleSlider
        id={2}
        setValue={updateValues(2)}
        label="Kb"
        {...sliderProps}
      />
    </div>
  );
};
