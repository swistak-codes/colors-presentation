import { h } from "preact";
import { useState } from "preact/hooks";
import { Uploader } from "../../components/Uploader";
import { Canvas } from "../../components/Canvas";
import { noop } from "../../logic/noop";
import { Slider } from "../../components/Slider";
import { ROUTES } from "../../routes";
import { gammaCorrection } from "../../logic/gammaCorrection";

const Gamma = () => {
  const [image, setImage] = useState<HTMLImageElement | null>(null);
  const [gamma, setGamma] = useState(1);

  return (
    <section>
      <h1>{ROUTES.gamma.title}</h1>
      <Uploader setValue={setImage} />
      <Canvas image={image} callback={noop} />
      <Canvas image={image} callback={gammaCorrection(gamma)} />
      <Slider
        value={gamma}
        setValue={setGamma}
        label="γ"
        min={0}
        max={10}
        realMax={10}
        step={0.01}
        disabled={false}
      />
    </section>
  );
};

export default Gamma;
