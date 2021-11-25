// import styles from "./style.module.css";
import * as preact from "preact";
import { useState } from "preact/compat";
import { Uploader } from "../../components/Uploader";
import { Canvas } from "../../components/Canvas";

const Greyscale = () => {
  const [image, setImage] = useState<HTMLImageElement | null>(null);

  return (
    <section>
      <h1>Skala szarości</h1>
      <Uploader setValue={setImage} />
      <Canvas image={image} callback={() => {}} />
    </section>
  );
};

export default Greyscale;
