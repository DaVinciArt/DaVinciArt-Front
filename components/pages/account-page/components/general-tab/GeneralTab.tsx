'use client';

import {Avatar, Box, Typography} from "@mui/material";

import * as styles from './GeneralTab.styles'
import {Collection} from "../../../../../types/Collection";
import CollectionCard from "../../../../common/ui/collection-card/CollectionCard";
import {stringAvatar} from "./utils/createNamedAvatar";
import CustomButton from "../../../../common/ui/custom-button/CustomButton";
import {ButtonColor, ButtonVariant} from "../../../../common/ui/custom-button/types";
import {User} from "../../../../../types/User";
import {FC, useContext, useEffect, useState} from "react";
import {UserContext} from "../../../../../lib/hooks/use-authentication/useAuthentication";
import {deleteUser, getUserCollections} from "../../../../../lib/api/api";

interface GeneralTabProps {
  user: User
}

const GeneralTab: FC<GeneralTabProps> = ({user}) => {
  const { logout } = useContext(UserContext);
  const [loading, setLoading] = useState<boolean>(false)
  const [collections, setCollections] = useState<Collection[]>(null)
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const result = await getUserCollections(user.id)
      setCollections(result);
      setLoading(false)
    };

    fetchData();
  }, []);

  const handleClick = () => {
    logout()
  }

  const handleDelete = () => {
    deleteUser(user.id)
    logout()
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
                {user.balance}   PatronCoins
              </Typography>
              <Typography sx={styles.other}>{user.email}</Typography>
              <Box sx={styles.userControls}>
                <CustomButton
                  sx={styles.controlButton}
                  text={'Log out'}
                  variant={ButtonVariant.CONTAINED}
                  color={ButtonColor.INPUT}
                  onClick={handleClick}
                />
                <CustomButton
                  sx={styles.controlButton}
                  text={'Delete'}
                  variant={ButtonVariant.CONTAINED}
                  onClick={handleDelete}
                />
              </Box>
            </Box>
          </Box>
        </Box>
        <Box>
          <Typography sx={styles.collectionsHeader}>Your collections</Typography>
          <Box sx={styles.collectionsContainer}>
            {collections?.length ?
              (
                collections.map((collection, index) => (
                  <CollectionCard key={index} collection={collection} myCollection={true}/>
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
