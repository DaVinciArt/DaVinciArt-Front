'use client'

import {User} from "../../../../../types/User";
import {FC, useEffect, useState} from "react";
import {Collection} from "../../../../../types/Collection";
import {getUserCollections} from "../../../../../lib/api/api";
import {Avatar, Box, Typography} from "@mui/material";
import * as styles from "./AuthorGeneralTab.styles";
import {stringAvatar} from "../../../account-page/components/general-tab/utils/createNamedAvatar";
import CollectionCard from "../../../../common/ui/collection-card/CollectionCard";

interface AuthorGeneralTabProps {
  author: User
}

const AuthorGeneralTab: FC<AuthorGeneralTabProps> = ({author}) => {
  const [loading, setLoading] = useState<boolean>(false)
  const [collections, setCollections] = useState<Collection[]>(null)
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const result = await getUserCollections(author.id)
      setCollections(result.filter(collection => collection.on_sale));
      setLoading(false)
    };

    fetchData();
  }, []);

  return (
    author &&
    (
      <Box>
        <Box sx={styles.userInformationContainer}>
          {author.avatar ?
            <Avatar src={author.avatar} sx={styles.avatar}/>
            :
            <Avatar {...stringAvatar(author.first_name + ' ' + author.last_name)} sx={styles.avatar}/>
          }
          <Box sx={styles.textInformation}>
            <Typography sx={styles.username}>{author.username}</Typography>
            <Box sx={styles.textBox}>
              <Typography sx={styles.other}>{author.first_name + ' ' + author.last_name}</Typography>
            </Box>
          </Box>
        </Box>
        <Box>
          <Typography sx={styles.collectionsHeader}>Your collections</Typography>
          <Box sx={styles.collectionsContainer}>
            {collections?.length ?
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
}

export default AuthorGeneralTab;
