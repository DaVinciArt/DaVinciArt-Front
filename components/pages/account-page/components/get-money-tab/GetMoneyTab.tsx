import {ChangeEvent, DragEvent, FC, useRef, useState} from "react";
import {Box, Typography} from "@mui/material";

import * as styles from './GetMoneyTab.styles'

interface GetMoneyTabProps {
  userID: number
}

const GetMoneyTab: FC<GetMoneyTabProps> = ({userID}) => {
  const [isPatronSatisfied, setIsPatronSatisfied] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const handleDragEnter = (event: DragEvent) => {
    event.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (event: DragEvent) => {
    event.preventDefault();
    setIsDragging(false);
  };

  const handleDropOrFileChange = (event: DragEvent | ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    setIsDragging(false);

    const file =
      'dataTransfer' in event
        ? event.dataTransfer.files[0]
        : event.target.files && event.target.files[0];

    if (file) {
      setIsPatronSatisfied(true);
    }
  };

  return (
    <Box sx={styles.container}>
      {isPatronSatisfied ?
        <Box sx={{width: '100%'}}>
          <img
            src={'https://res.cloudinary.com/dncmx4fay/image/upload/v1701373522/balance/oyvpp38es4heqv3wyqpm.png'}
            alt={'satisfied pes patron'}
            style={{width: '100%', height: 'auto', borderRadius: '15px'}}
          />
          <Typography sx={styles.text}>Patron thanked you. And now let him rest</Typography>
        </Box>
        :
        <Box sx={styles.waitingpatronContainer}>
          <img
            src={'https://res.cloudinary.com/dncmx4fay/image/upload/v1701373525/balance/n0eh03qjysxxxhweb3nj.jpg'}
            alt={'waiting pes patron'}
            style={{width: '85%', height: 'auto', borderRadius: '15px', marginBottom: '20px'}}
            onDragEnter={handleDragEnter}
            onDragLeave={handleDragLeave}
            onDragOver={event => event.preventDefault()}
            onDrop={handleDropOrFileChange}
          />
          <input
            ref={fileInputRef}
            accept=".png, .jpg, .jpeg, .webp"
            type="file"
            style={{display: 'none'}}
            onChange={handleDropOrFileChange}
          />
          <img
            src={'https://res.cloudinary.com/dncmx4fay/image/upload/v1701373714/balance/uzrhunbp2p9t4p5joeyw.png'}
            alt={'satisfied pes patron'}
            style={{width: '45%', height: 'auto', marginTop: '10px'}}
          />
        </Box>
      }
    </Box>
  );
}

export default GetMoneyTab;
