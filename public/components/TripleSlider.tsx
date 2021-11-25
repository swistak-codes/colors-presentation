import * as preact from "preact";
import { useState } from "preact/compat";
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

const other = {
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
  const otherIds = Object.keys(other[id]);
  const isLocked = locked === id;

  return (
    <div class={styles.container}>
      <input type="radio" checked={isLocked} onChange={() => setLocked(id)} />
      <Slider
        value={value[id]}
        setValue={setValue}
        label={label}
        min={0}
        max={Math.min(1 - value[otherIds[0]] - value[otherIds[1]], 1)}
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
    result[locked] = 1 - val - result[other[id][locked]];
    setValue(result);
  };

  const sliderProps = {
    locked,
    setLocked,
    value,
  };

  return (
    <>
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
    </>
  );
};
