import * as preact from "preact";
import { useState } from "preact/compat";
import { Uploader } from "../../components/Uploader";
import { Canvas } from "../../components/Canvas";
import { noop } from "../../logic/noop";
import { Slider } from "../../components/Slider";
import { Routes } from "../../routes";
import { changeContrast } from "../../logic/changeContrast";

const Contrast = () => {
  const [image, setImage] = useState<HTMLImageElement | null>(null);
  const [contrast, setContrast] = useState(0);

  return (
    <section>
      <h1>{Routes.contrast.title}</h1>
      <Uploader setValue={setImage} />
      <Canvas image={image} callback={noop} />
      <Canvas image={image} callback={changeContrast(contrast)} />
      <Slider
        value={contrast}
        setValue={setContrast}
        label="C"
        min={-255}
        max={255}
        realMax={255}
        step={1}
        disabled={false}
      />
    </section>
  );
};

export default Contrast;
