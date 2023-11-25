import Link from "next/link";
import Image, {StaticImageData} from "next/image";
import {FC} from "react";

import styles from './FooterLink.module.scss'

interface FooterLinkProps {
  href: string;
  image: StaticImageData;
  alt: string;
}

const FooterLink: FC<FooterLinkProps> = ({href, image, alt}) => {
  return (
    <Link className={styles['footerLink']} href={href}>
      <Image
        src={image}
        alt={alt}
        className={styles['linkContent']}
      />
    </Link>
  );
};

export default FooterLink;
