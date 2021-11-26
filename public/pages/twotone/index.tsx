import * as preact from "preact";
import { useState } from "preact/compat";
import { Uploader } from "../../components/Uploader";
import { Canvas } from "../../components/Canvas";
import { imageToGrayscale } from "../../logic/imageToGrayscale";
import { noop } from "../../logic/noop";
import { Slider } from "../../components/Slider";
import { imageToTwoTone } from "../../logic/imageToTwoTone";

const TwoTone = () => {
  const [image, setImage] = useState<HTMLImageElement | null>(null);
  const [threshold, setThreshold] = useState(128);

  return (
    <section>
      <h1>Tryb dwukolorowy</h1>
      <Uploader setValue={setImage} />
      <Canvas image={image} callback={noop} />
      <Canvas image={image} callback={imageToTwoTone(threshold)} />
      <Slider
        value={threshold}
        setValue={setThreshold}
        label="Próg"
        min={0}
        max={255}
        realMax={255}
        step={1}
        disabled={false}
      />
    </section>
  );
};

export default TwoTone;
