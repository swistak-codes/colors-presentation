import { h } from "preact";
import { useState } from "preact/hooks";
import { Uploader } from "../../components/Uploader";
import { Canvas } from "../../components/Canvas";
import { noop } from "../../logic/noop";
import { ROUTES } from "../../routes";
import { invert } from "../../logic/invert";

const Inversion = () => {
  const [image, setImage] = useState<HTMLImageElement | null>(null);

  return (
    <section>
      <h1>{ROUTES.inversion.title}</h1>
      <Uploader setValue={setImage} />
      <Canvas image={image} callback={noop} />
      <Canvas image={image} callback={invert} />
    </section>
  );
};

export default Inversion;
