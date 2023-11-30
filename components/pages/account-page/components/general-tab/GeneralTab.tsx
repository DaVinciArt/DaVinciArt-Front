'use client';

import {Avatar, Box, Typography} from "@mui/material";
import Image from "next/image";
import pesPatron from '../../../../../public/icons/dog.png';

import * as styles from './GeneralTab.styles'
import hands from "../../../../../public/images/hands.jpeg";
import {Collection, CollectionStatus} from "../../../../../types/Collection";
import CollectionCard from "../../../../common/ui/collection-card/CollectionCard";
import {stringAvatar} from "./utils/createNamedAvatar";
import CustomButton from "../../../../common/ui/custom-button/CustomButton";
import {ButtonColor, ButtonVariant} from "../../../../common/ui/custom-button/types";
import StorageUtil from "../../../../../lib/utils/StorageUtil";
import {useRouter} from "next/navigation";
import {User} from "../../../../../types/User";
import {FC} from "react";

interface GeneralTabProps {
  user: User
}

const GeneralTab: FC<GeneralTabProps> = ({user}) => {
  const router = useRouter();

  let collections: Collection[] = [
    {
      name: 'Hands',
      authorID: 0,
      previewImage: hands,
      creationDate: 0,
      price: 1,
      status: CollectionStatus.FOR_SALE
    },
    {
      name: 'Hands',
      authorID: 0,
      previewImage: hands,
      creationDate: 0,
      price: 1,
      status: CollectionStatus.FOR_SALE
    },
    {
      name: 'Hands',
      authorID: 0,
      previewImage: hands,
      creationDate: 0,
      price: 1,
      status: CollectionStatus.FOR_SALE
    },
  ]

  const handleClick = () => {
    StorageUtil.removeAccessToken();
    router.push('/login')
  }

  return (
    user &&
    (
      <Box>
        <Box sx={styles.userInformationContainer}>
          {user.avatar ?
            <Avatar src={user.avatar} sx={styles.avatar}/>
            :
            <Avatar {...stringAvatar(user.first_name + ' ' + user.last_name)} sx={styles.avatar}/>
          }
          <Box sx={styles.textInformation}>
            <Typography sx={styles.username}>{user.username}</Typography>
            <Box sx={styles.textBox}>
              <Typography sx={styles.other}>{user.first_name + ' ' + user.last_name}</Typography>
              <Typography sx={styles.other}>
                <Image src={pesPatron} alt={'patron icon'} style={{width: '20px', height: 'auto', marginRight: '7px'}}/>
                {user.balance} PatronCoins
              </Typography>
              <Typography sx={styles.other}>{user.email}</Typography>
              <CustomButton
                sx={styles.logOutButton}
                text={'Log out'}
                variant={ButtonVariant.CONTAINED}
                color={ButtonColor.INPUT}
                onClick={handleClick}
              />
            </Box>
          </Box>
        </Box>
        <Box>
          <Typography sx={styles.collectionsHeader}>Your collections</Typography>
          <Box sx={styles.collectionsContainer}>
            {collections ?
              (
                collections.map((collection, index) => (
                  <CollectionCard key={index} collection={collection}/>
                ))
              )
              :
              <Typography sx={styles.noCollections}>You have no collections :(</Typography>
            }
          </Box>
        </Box>
      </Box>
    )
  );
};

export default GeneralTab;
