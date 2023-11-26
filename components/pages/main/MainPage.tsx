import {Box, Typography} from "@mui/material";
import CustomCarousel from "../../common/ui/carousel/CustomCarousel";
import {ColectionImage} from "../../../types/ColectionImage";

import * as styles from './MainPage.styles';
import CustomButton from "../../common/ui/custom-button/CustomButton";
import {ButtonColor, ButtonVariant} from "../../common/ui/custom-button/types";
import AboutUsSection from './components/about-us-section/AboutUsSection';
import ArtistCard from './components/artist-card/ArtistCard';
import hands from '../../../public/images/hands.jpeg';
import trees from '../../../public/images/olive-trees.jpeg';
import queen from '../../../public/images/queen.jpeg';

const MainPage = () => {
  let images: ColectionImage[] = [
    {
      url: hands,
      label: 'Hands',
      author: 'Michael Jordan',
    },
    {
      url: trees,
      label: 'Trees',
      author: 'Stephen Curry',
    },
    {
      url: queen,
      label: 'Second',
      author: 'Arsen Martynenko',
    },
  ]

  return (
    <Box sx={styles.mainPageStyles}>
      <AboutUsSection/>
      <Box sx={styles.carouselSection}>
        <CustomCarousel images={images}/>
        <CustomButton
          text={'To other collections'}
          variant={ButtonVariant.OUTLINED}
          color={ButtonColor.LINK}
          href={'/'}
          sx={styles.contactsButton}
        />
      </Box>
      <Box sx={styles.artistsSection}>
        <Typography sx={styles.artistsSectionHeader}>Become better than them!</Typography>
        <Box sx={styles.artistsCards}>
          <ArtistCard
            image={'https://www.leonardodavinci.net/images/leonardo-da-vinci.jpg'}
            name={"Leonardo da Vinci"}
            arts={[
              'Mona Lisa (c. 1519)',
              'Last Supper (c. 1498)',
              'Vitruvian Man (c. 1490)',
              'Self Portrait (c. 1490)',
              'Salvator Mundi (c. 1500)',
            ]}
          />
          <ArtistCard
            image={'https://upload.wikimedia.org/wikipedia/commons/0/02/Michelangelo_Daniele_da_Volterra_%28dettaglio%29.jpg'}
            name={"Michelangelo"}
            arts={[
              'Dono Tondi (c. 1507)',
              'The Last Judgment (c. 1541)',
              'The Creation of Adam (c. 1512)',
              'The Entombment (c. 1501)',
              'David (c. 1504)',
            ]}
          />
          <ArtistCard
            image={'https://mgm-website-production.oss-cn-hongkong.aliyuncs.com/uploads/2018/01/salvador-dali-1024.jpg'}
            name={"Salvador Dali"}
            arts={[
              'The Persistence of Memory (c. 1931)',
              'Vilabertrin (c. 1913)',
              'The Great Masturbator (c. 1929)',
              'The Enigma of William Tell (c. 1933)',
              'Spider of the Evening (c. 1940)',
            ]}
          />

        </Box>
      </Box>
    </Box>
  );
};

export default MainPage;
