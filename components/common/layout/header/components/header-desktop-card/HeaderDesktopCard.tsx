import { FC } from "react";
import {User} from "../../../../../../types/User";
import {Box, Typography} from "@mui/material";
import Image from "next/image";
import pesPatron from "../../../../../../public/icons/dog.png";
import Link from "next/link";

import * as styles from './HeaderDesktopCard.styles'

interface HeaderDesktopCardProps {
  user: User,
}

const HeaderDesktopCard: FC<HeaderDesktopCardProps> = ({user}) => {
  return (
    <Link href='/account' style={{display: 'flex', alignItems: 'center'}}>
      <Box sx={styles.userCard}>
        {user &&
          <Box>
            <Typography className="hover-underline" sx={styles.cardUsername}>
              {user.username}
            </Typography>
            <Typography sx={styles.cardBalance}>
              {user.balance}
              <Image src={pesPatron} alt={'patron icon'} style={{width: '20px', height: 'auto', marginLeft: '7px'}}/>
            </Typography>
          </Box>
        }
        <Box sx={styles.avatar}></Box>
      </Box>
    </Link>
  );
}

export default HeaderDesktopCard;
