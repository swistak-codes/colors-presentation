import * as preact from "preact";
import { useState } from "preact/compat";
import { Uploader } from "../../components/Uploader";
import { Canvas } from "../../components/Canvas";
import { noop } from "../../logic/noop";
import { Slider } from "../../components/Slider";
import { changeBrightness } from "../../logic/changeBrightness";
import { Routes } from "../../routes";

const Brightness = () => {
  const [image, setImage] = useState<HTMLImageElement | null>(null);
  const [brightness, setBrightness] = useState(0);

  return (
    <section>
      <h1>{Routes.brightness.title}</h1>
      <Uploader setValue={setImage} />
      <Canvas image={image} callback={noop} />
      <Canvas image={image} callback={changeBrightness(brightness)} />
      <Slider
        value={brightness}
        setValue={setBrightness}
        label="I"
        min={-255}
        max={255}
        realMax={255}
        step={1}
        disabled={false}
      />
    </section>
  );
};

export default Brightness;
