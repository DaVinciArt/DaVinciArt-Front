import Image, {StaticImageData} from "next/image";
import {FC} from "react";

interface FormIconProps {
  src: StaticImageData;
  alt: string;
}

const FormIcon: FC<FormIconProps> = ({src, alt, ...rest}) => {
  return (
    <Image
      src={src}
      alt={alt}
      style={{
        width: '20%',
        maxWidth: '100px',
        height: 'auto',
        margin: '0 auto',
      }}
      {...rest}
    />
  );
};

export default FormIcon;
