import { h } from "preact";
import { useState } from "preact/hooks";
import { Uploader } from "../../components/Uploader";
import { Canvas } from "../../components/Canvas";
import { noop } from "../../logic/noop";
import { TripleSlider } from "../../components/TripleSlider";
import { imageToGrayscaleAdjusted } from "../../logic/imageToGrayscaleAdjusted";
import { ROUTES } from "../../routes";

const GreyscaleAdjusted = () => {
  const [image, setImage] = useState<HTMLImageElement | null>(null);
  const [values, setValues] = useState<[number, number, number]>([
    0.299, 0.587, 0.114,
  ]);

  return (
    <section>
      <h1>{ROUTES.greyscaleAdjusted.title}</h1>
      <Uploader setValue={setImage} />
      <Canvas image={image} callback={noop} />
      <Canvas image={image} callback={imageToGrayscaleAdjusted(values)} />
      <TripleSlider value={values} setValue={setValues} />
    </section>
  );
};

export default GreyscaleAdjusted;
