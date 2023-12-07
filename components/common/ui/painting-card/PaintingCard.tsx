import * as styles from './PaintingCard.styles'
import stylesCSS from './PaintingCard.module.scss'
import {Box, Typography} from "@mui/material";
import Image from "next/image";
import bin from "../../../../public/icons/bin.png";
import {Dispatch, FC, SetStateAction} from "react";
import {Painting} from "../../../../types/Painting";

interface PaintingCardProps {
  painting: Painting,
  collectionPaintings?: Painting[],
  setCollectionPaintings?: Dispatch<SetStateAction<Painting[]>>,
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
    setCollectionPaintings(collectionPaintings.filter((painting) => painting.id !== id))
  }

  return (
    <Box sx={styles.pictureContainer}>
      <img src={painting.image_url} alt={painting.name} className={stylesCSS['addedPicture']}/>
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
