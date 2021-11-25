import * as preact from "preact";
import { JSXInternal } from "preact/src/jsx";

type Props = {
  setValue: (img: HTMLImageElement) => void;
};

export const Uploader = ({ setValue }: Props) => {
  const onChange = (e: JSXInternal.TargetedEvent<HTMLInputElement>) => {
    const file = e.currentTarget.files[0];
    const reader = new FileReader();
    reader.onload = () => {
      const image = new Image();
      image.onload = () => setValue(image);
      image.src = reader.result as string;
    };
    reader.readAsDataURL(file);
  };

  return (
    <div>
      <input type="file" accept="image/*" onChange={onChange} />
    </div>
  );
};
