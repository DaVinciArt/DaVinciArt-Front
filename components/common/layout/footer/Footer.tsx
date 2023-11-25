import {Box} from "@mui/material";
import phone from '../../../../public/icons/phone-call.png';
import mail from '../../../../public/icons/open-mail.png';
import telegram from '../../../../public/icons/telegram.png';
import viber from '../../../../public/icons/viber.png';

import * as sxStyles from './Footer.styles';
import styles from './components/FooterLink.module.scss';
import FooterLink from "./components/FooterLink";
import Link from "next/link";

const Footer = () => {
  return (
    <footer>
      <Box sx={sxStyles.footer}>
        <FooterLink href={'tel:0975708873'} image={phone} alt={'phone'}/>
        <FooterLink href={'mailto:dnlablonskyi@gmail.com'} image={mail} alt={'mail'}/>
        <FooterLink href={'https://t.me/DeathisN0tDefeat'} image={telegram} alt={'telegram'}/>
        <FooterLink href={'viber://chat?number=0975708873'} image={viber} alt={'viber'}/>
        <Link href={'/'} className={styles['faqLink']}>F.A.Q.</Link>
      </Box>
    </footer>
  )
};

export default Footer;
