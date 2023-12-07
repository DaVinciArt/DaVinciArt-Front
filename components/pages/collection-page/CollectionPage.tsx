'use client'

import {FC, useContext, useEffect, useState} from "react";
import {Collection} from "../../../types/Collection";
import {Box, Modal, Popover, ToggleButton, ToggleButtonGroup, Typography} from "@mui/material";
import Image from "next/image";
import {UserContext} from "../../../lib/hooks/use-authentication/useAuthentication";
import CustomButton from "../../common/ui/custom-button/CustomButton";
import {buyCollection, editCollection, getCollection} from "../../../lib/api/api";
import pesPatron from "../../../public/icons/dog.png";
import {ButtonSize, ButtonVariant} from "../../common/ui/custom-button/types";
import PaintingCard from "../../common/ui/painting-card/PaintingCard";
import CustomInput from "../../common/ui/custom-input/CustomInput";
import {checkUpdatedValues} from "./utils/checkUpdatedValues";

import * as styles from './CollectionPage.styles'
import stylesCSS from './CollectionPage.module.scss'
import Link from "next/link";
import {useRouter} from "next/navigation";

interface CollectionPageProps {
  userId: number,
  collectionId: number,
}

const CollectionPage: FC<CollectionPageProps> = ({userId, collectionId}) => {
  const [collection, setCollection] = useState<Collection | null>(null)
  const [isAuthor, setIsAuthor] = useState(false)
  const [collectionData, setCollectionData] = useState({
    price: '',
    tags: '',
  })
  const [status, setStatus] = useState(false);
  const [pageErrors, setPageErrors] = useState([])
  const [openPaintingModal, setOpenPaintingModal] = useState(false)
  const [currentPainting, setCurrentPainting] = useState('')
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);
  const openBuyPopup = Boolean(anchorEl);
  const router = useRouter();
  const { user , update } = useContext(UserContext)

  useEffect(() => {
    const fetchData = async () => {
      const result = await getCollection(userId, collectionId)
      setCollection(result);
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

  const handleOpenModal = (imageUrl: string) => {
    setCurrentPainting(imageUrl)
    setOpenPaintingModal(true);
  }
  const handleCloseModal = () => {
    setCurrentPainting('')
    setOpenPaintingModal(false);
  }

  const openPopup = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClosePopup = () => {
    setAnchorEl(null);
  };

  const handleBuy = async () => {
    const token = await buyCollection(+collection.id, user.id, collection.author_id)
    update(token)
    setAnchorEl(null);
    router.push('/account')
  };

  return (
    <Box>
      {collection &&
        <Box sx={styles.container}>
          <Box sx={styles.collectionBlock}>
            <img
              src={collection.preview_image_url}
              alt={collection.name}
              className={stylesCSS['collectionPreview']}
            />
            <Box sx={styles.textBlock}>
              <Typography sx={styles.collectionHeader}>Collection "{collection.name}"</Typography>
              <Typography sx={styles.otherText}>
                Author:
                <Link href={`/user/${collection.author_id}`} className={stylesCSS['authorLink']}>
                  {collection.author_name}
                </Link>
              </Typography>
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
                  multiline={true}
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
                <Box>
                  <CustomButton
                    text={'Buy'}
                    variant={ButtonVariant.CONTAINED}
                    onClick={openPopup}
                    sx={{width: '100%'}}
                  />
                  <Popover
                    open={openBuyPopup}
                    anchorEl={anchorEl}
                    onClose={handleClosePopup}
                    anchorOrigin={{
                      vertical: 'bottom',
                      horizontal: 'center',
                    }}
                    transformOrigin={{
                      vertical: 'top',
                      horizontal: 'center',
                    }}
                  >
                    <Box sx={{ p: 2 }}>
                      <Typography sx={{mb: '10px'}}>Want to buy this collection?</Typography>
                      <CustomButton
                        text={'I want it'}
                        variant={ButtonVariant.OUTLINED}
                        size={ButtonSize.SMALL}
                        sx={{width: '100%'}}
                        onClick={handleBuy}
                      />
                    </Box>
                  </Popover>
                </Box>
              }
            </Box>
          </Box>
          <Typography sx={styles.divider}>Collection paintings</Typography>
          <Box sx={styles.paintingsBlock}>
            {collection.Paintings && collection.Paintings.map((painting, index) => (
              <Box key={index} onClick={() => handleOpenModal(painting.image_url)}>
                <PaintingCard painting={painting}/>
              </Box>
            ))}
          </Box>
          <Modal
            open={openPaintingModal}
            onClose={handleCloseModal}
          >
            <img src={currentPainting} alt={'painting modal'} className={stylesCSS['modalPainting']}/>
          </Modal>
        </Box>
      }
    </Box>
  );
}

export default CollectionPage;
