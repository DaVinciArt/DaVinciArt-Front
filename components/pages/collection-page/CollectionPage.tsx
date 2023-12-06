'use client'

import {FC, useContext, useEffect, useState} from "react";
import {Collection} from "../../../types/Collection";
import {Box, ToggleButton, ToggleButtonGroup, Typography} from "@mui/material";
import Image from "next/image";
import {UserContext} from "../../../lib/hooks/use-authentication/useAuthentication";

import * as styles from './CollectionPage.styles'
import CustomButton from "../../common/ui/custom-button/CustomButton";
import {editCollection, getCollection} from "../../../lib/api/api";
import pesPatron from "../../../public/icons/dog.png";
import {ButtonVariant} from "../../common/ui/custom-button/types";
import PaintingCard from "../../common/ui/painting-card/PaintingCard";
import CustomInput from "../../common/ui/custom-input/CustomInput";
import { checkUpdatedValues } from "./utils/checkUpdatedValues";

interface CollectionPageProps {
  userId: number,
  collectionId: number,
}

const CollectionPage: FC<CollectionPageProps> = ({userId, collectionId}) => {
  const [collection, setCollection] = useState<Collection | null>(null)
  const [loading, setLoading] = useState<boolean>(false)
  const [isAuthor, setIsAuthor] = useState(false)
  const [collectionData, setCollectionData] = useState({
    price: '',
    tags: '',
  })
  const [status, setStatus] = useState(false);
  const [pageErrors, setPageErrors] = useState([])
  const { user } = useContext(UserContext)

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const result = await getCollection(userId, collectionId)
      setCollection(result);
      setLoading(false)
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (collection) {
      setIsAuthor(user?.id === collection?.author_id)
      setCollectionData({
        price: collection?.price.toString(),
        tags: collection?.tags.join(' '),
      })
      setStatus(collection?.on_sale)
    }
  }, [collection]);

  const handleChangeStatus = (
    event: React.MouseEvent<HTMLElement>,
    newStatus: boolean,
  ) => {
    setStatus(newStatus);
  };

   const handleUpdate = async () => {
     const errors = checkUpdatedValues(collectionData, status)
     if (errors.length === 0) {
       const newCollection = await editCollection(collection, collectionData, status)
       newCollection && setCollection(newCollection);
     } else {
       setPageErrors(errors)
       console.log(pageErrors)
       setTimeout(() => setPageErrors([]), 5000)
     }
   }

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
              <Typography sx={styles.otherText}>Author: {collection.author_name}</Typography>
              <Typography sx={styles.otherText}>Creation date: {collection.upload_date}</Typography>
              {isAuthor ?
                <CustomInput
                  label={"Price"}
                  name={"price"}
                  value={collectionData.price}
                  object={collectionData}
                  setObject={setCollectionData}
                  sx={{mb: '8px'}}
                />
                :
                <Typography sx={styles.otherText}>
                  Price: {collection.price}
                  <Image src={pesPatron} alt={'patron icon'} style={{width: '20px', height: 'auto', marginLeft: '7px'}}/>
                </Typography>
              }
              {isAuthor ?
                <CustomInput
                  label={"Tags"}
                  name={"tags"}
                  value={collectionData.tags}
                  object={collectionData}
                  setObject={setCollectionData}
                  sx={{mb: '8px'}}
                />
                :
                <Typography sx={styles.otherText}>Tags: {collection.tags.join(' ')}</Typography>
              }
              {isAuthor ?
                <Box><ToggleButtonGroup
                  color="secondary"
                  value={status}
                  exclusive
                  onChange={handleChangeStatus}
                  sx={styles.statusToggle}
                >
                  <ToggleButton value={true} sx={styles.statusToggleButton}>On sale</ToggleButton>
                  <ToggleButton value={false} sx={styles.statusToggleButton}>Private</ToggleButton>
                </ToggleButtonGroup>
                  <CustomButton text={"Update"} sx={{width: '100%'}} onClick={handleUpdate}/>
                  {pageErrors.length > 0 && pageErrors.map((error, index) => (
                    <Typography key={index} sx={{color: 'red'}}> {error}</Typography>
                  ))}
                </Box>
                :
                <CustomButton text={'Buy'} variant={ButtonVariant.CONTAINED}/>
              }
            </Box>
          </Box>
          <Typography sx={styles.divider}>Collection paintings</Typography>
          <Box sx={styles.paintingsBlock}>
            {collection.Paintings && collection.Paintings.map((painting, index) => (
              <Box key={index}>
                <PaintingCard painting={painting}/>
              </Box>
            ))}
          </Box>
        </Box>
      }
    </Box>
  );
}

export default CollectionPage;
