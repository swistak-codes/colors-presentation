import * as preact from "preact";
import { useState } from "preact/compat";
import { Uploader } from "../../components/Uploader";
import { Canvas } from "../../components/Canvas";
import { noop } from "../../logic/noop";
import { Slider } from "../../components/Slider";
import { Routes } from "../../routes";
import { solarize } from "../../logic/solarize";

const Solarization = () => {
  const [image, setImage] = useState<HTMLImageElement | null>(null);
  const [threshold, setThreshold] = useState(255);
  const [revert, setRevert] = useState(false);

  return (
    <section>
      <h1>{Routes.solarization.title}</h1>
      <Uploader setValue={setImage} />
      <Canvas image={image} callback={noop} />
      <Canvas image={image} callback={solarize(threshold, revert)} />
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
      <div>
        <input
          id="revert"
          type="checkbox"
          checked={revert}
          onChange={(e) => setRevert(e.currentTarget.checked)}
        />
        <label for="revert">Odwrócona</label>
      </div>
    </section>
  );
};

export default Solarization;
