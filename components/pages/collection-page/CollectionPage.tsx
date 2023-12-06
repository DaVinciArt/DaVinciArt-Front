'use client'

import {FC, useContext, useEffect, useState} from "react";
import {Collection} from "../../../types/Collection";
import {Box, Typography} from "@mui/material";
import Image from "next/image";
import {UserContext} from "../../../lib/hooks/use-authentication/useAuthentication";

import * as styles from './CollectionPage.styles'
import CustomButton from "../../common/ui/custom-button/CustomButton";
import {getCollection} from "../../../lib/api/api";
import pesPatron from "../../../public/icons/dog.png";
import {ButtonVariant} from "../../common/ui/custom-button/types";
import stylesCSS from "../account-page/components/add-collection-tab/AddCollectionTab.module.scss";

interface CollectionPageProps {
  collectionId: number
}

const CollectionPage: FC<CollectionPageProps> = ({collectionId}) => {
  const [collection, setCollection] = useState<Collection | null>(null)
  const [loading, setLoading] = useState<boolean>(false)
  const {user} = useContext(UserContext);
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const result = await getCollection(collectionId, user?.id)
      setCollection(result);
      setLoading(false)
    };

    fetchData();
  }, []);
  const author = user?.id === collection?.author_id;

  return (
    <Box>
      {collection &&
        <Box sx={styles.container}>
          <Box sx={styles.collectionBlock}>
            <img
              src={collection.preview_image_url}
              alt={collection.name}
              style={{width: 'auto', height: '320px', borderRadius: '10px'}}
            />
            <Box sx={styles.textBlock}>
              <Typography sx={styles.collectionHeader}>Collection "{collection.name}"</Typography>
              <Typography sx={styles.otherText}>Author: {collection.author_name} </Typography>
              <Typography sx={styles.otherText}>Creation date: {collection.upload_date}</Typography>
              <Typography sx={styles.otherText}>
                Price: {collection.price}
                <Image src={pesPatron} alt={'patron icon'} style={{width: '20px', height: 'auto', marginLeft: '7px'}}/>
              </Typography>
              <Typography sx={styles.otherText}>Tags: {collection.tags.join(' ')}</Typography>
              <CustomButton text={'Buy'} variant={ButtonVariant.CONTAINED}/>
            </Box>
          </Box>
          <Typography sx={styles.divider}>Collection paintings</Typography>
          <Box sx={styles.paintingsBlock}>
            {collection.Paintings && collection.Paintings.map((painting, index) => (
              <Box key={index} sx={styles.paintingContainer}>
                <img src={painting.image_url} alt={painting.name} className={stylesCSS['addedPicture']}/>
                <Box className='overlay' sx={styles.overlay}>
                  <Typography sx={styles.paintingName}>{painting.name}</Typography>
                </Box>
              </Box>
            ))}
          </Box>
        </Box>
      }
    </Box>
  );
}

export default CollectionPage;
