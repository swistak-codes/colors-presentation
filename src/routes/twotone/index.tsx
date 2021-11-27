import { h } from "preact";
import { useState } from "preact/hooks";
import { Uploader } from "../../components/Uploader";
import { Canvas } from "../../components/Canvas";
import { noop } from "../../logic/noop";
import { Slider } from "../../components/Slider";
import { imageToTwoTone } from "../../logic/imageToTwoTone";
import { ROUTES } from "../../routes";

const TwoTone = () => {
  const [image, setImage] = useState<HTMLImageElement | null>(null);
  const [threshold, setThreshold] = useState(128);

  return (
    <section>
      <h1>{ROUTES.twoTone.title}</h1>
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
