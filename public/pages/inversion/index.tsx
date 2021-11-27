import * as preact from "preact";
import { useState } from "preact/compat";
import { Uploader } from "../../components/Uploader";
import { Canvas } from "../../components/Canvas";
import { imageToGrayscale } from "../../logic/imageToGrayscale";
import { noop } from "../../logic/noop";
import { Routes } from "../../routes";
import { invert } from "../../logic/invert";

const Inversion = () => {
  const [image, setImage] = useState<HTMLImageElement | null>(null);

  return (
    <section>
      <h1>{Routes.inversion.title}</h1>
      <Uploader setValue={setImage} />
      <Canvas image={image} callback={noop} />
      <Canvas image={image} callback={invert} />
    </section>
  );
};

export default Inversion;
