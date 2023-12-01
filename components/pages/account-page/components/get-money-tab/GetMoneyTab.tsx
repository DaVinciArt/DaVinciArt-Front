import {ChangeEvent, DragEvent, FC, useContext, useRef, useState} from "react";
import {Box, Typography} from "@mui/material";

import * as styles from './GetMoneyTab.styles'
import {editUser} from "../../../../../lib/api/api";
import {UserContext} from "../../../../../lib/hooks/use-authentication/useAuthentication";
import StorageUtil from "../../../../../lib/utils/StorageUtil";
import {useRouter} from "next/navigation";

interface GetMoneyTabProps {
  userID: number
}

const GetMoneyTab: FC<GetMoneyTabProps> = ({userID}) => {
  const router = useRouter()
  const [isPatronSatisfied, setIsPatronSatisfied] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const { user, logout} = useContext(UserContext)

  const handleDragEnter = (event: DragEvent) => {
    event.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (event: DragEvent) => {
    event.preventDefault();
    setIsDragging(false);
  };

  const sho = () => {
    router.push('/login')
    logout()
  }

  const handleDropOrFileChange = (event: DragEvent | ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    setIsDragging(false);

    const file =
      'dataTransfer' in event
        ? event.dataTransfer.files[0]
        : event.target.files && event.target.files[0];

    if (file) {
      editUser({
        username: user.username,
        balance: user.balance + 200,
      })
      setIsPatronSatisfied(true);
      setTimeout( sho, 5000)

    }
  };

  return (
    <Box sx={styles.container}>
      {isPatronSatisfied ?
        <Box sx={{width: '100%'}}>
          <img
            src={'https://res.cloudinary.com/dncmx4fay/image/upload/v1701395799/balance/ayg4avgbolhvkpffw2iz.png'}
            alt={'satisfied pes patron'}
            style={{width: '100%', height: 'auto', borderRadius: '15px'}}
          />
          <Typography sx={styles.text}>Patron thanked you. And now let him rest</Typography>
        </Box>
        :
        <Box sx={styles.waitingpatronContainer}>
          <img
            src={'https://res.cloudinary.com/dncmx4fay/image/upload/v1701395796/balance/lgcvulwhlp6r05adkwyo.jpg'}
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
            src={'https://res.cloudinary.com/dncmx4fay/image/upload/v1701395746/balance/lreak3dcgqjxy4z2c01e.png'}
            alt={'satisfied pes patron'}
            style={{width: '45%', height: 'auto', marginTop: '10px'}}
          />
        </Box>
      }
    </Box>
  );
}

export default GetMoneyTab;
