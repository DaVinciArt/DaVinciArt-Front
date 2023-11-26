import styles from './FormLink.module.scss'
import Link from "next/link";
import {FC} from "react";

interface FormLinkProps {
  text: string;
  href: string;
}

const FormLink: FC<FormLinkProps> = ({text, href, ...rest}) => {
   return (
     <Link href={href} className={styles['formLink']} {...rest}>
       {text}
     </Link>
   );
}

export default FormLink;
