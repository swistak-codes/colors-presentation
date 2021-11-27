import { h } from "preact";
import { useState } from "preact/hooks";
import { Uploader } from "../../components/Uploader";
import { Canvas } from "../../components/Canvas";
import { imageToGrayscale } from "../../logic/imageToGrayscale";
import { noop } from "../../logic/noop";
import { ROUTES } from "../../routes";

const Greyscale = () => {
  const [image, setImage] = useState<HTMLImageElement | null>(null);

  return (
    <section>
      <h1>{ROUTES.greyscale.title}</h1>
      <Uploader setValue={setImage} />
      <Canvas image={image} callback={noop} />
      <Canvas image={image} callback={imageToGrayscale} />
    </section>
  );
};

export default Greyscale;
