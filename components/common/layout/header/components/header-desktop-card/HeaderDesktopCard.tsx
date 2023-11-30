import { FC } from "react";
import {User} from "../../../../../../types/User";
import {Avatar, Box, Typography} from "@mui/material";
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
      {user &&
        <Box sx={styles.userCard}>
          <Box>
            <Typography className="hover-underline" sx={styles.cardUsername}>
              {user.username}
            </Typography>
            <Typography sx={styles.cardBalance}>
              {user.balance}
              <Image src={pesPatron} alt={'patron icon'} style={{width: '20px', height: 'auto', marginLeft: '7px'}}/>
            </Typography>
          </Box>
          <Avatar src={user.avatar} sx={styles.avatar}></Avatar>
        </Box>
      }
    </Link>
  );
}

export default HeaderDesktopCard;
