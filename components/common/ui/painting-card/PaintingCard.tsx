import * as styles from './PaintingCard.styles'
import stylesCSS from './PaintingCard.module.scss'
import {Box, Typography} from "@mui/material";
import Image from "next/image";
import bin from "../../../../public/icons/bin.png";
import {NewPainting} from "../../../../types/NewPainting";
import {Dispatch, FC, SetStateAction} from "react";

interface PaintingCardProps {
  painting: NewPainting,
  collectionPaintings: NewPainting[],
  setCollectionPaintings: Dispatch<SetStateAction<NewPainting[]>>,
  isNewPainting?: boolean,
}

const PaintingCard: FC<PaintingCardProps> =
  ({
     painting,
     collectionPaintings,
     setCollectionPaintings,
     isNewPainting = false,
   }) => {

  const handleDelete = (id: number) => {
    setCollectionPaintings(collectionPaintings.filter((picture) => picture.id !== id))
  }

  return (
    <Box sx={styles.pictureContainer}>
      <img src={painting.link} alt={painting.name} className={stylesCSS['addedPicture']}/>
      <Box className='overlay' sx={styles.overlay}>
        <Typography sx={styles.pictureLabel}>{painting.name}</Typography>
        {isNewPainting &&
          <Image
            src={bin}
            alt={"delete icon"}
            className={stylesCSS['deleteIcon']}
            onClick={() => handleDelete(painting.id)}
          />
        }
      </Box>
    </Box>
  );
}

export default PaintingCard;
