import {Box, Typography} from "@mui/material";
import CustomCarousel from "../../common/carousel/CustomCarousel";
import {ColectionImage} from "../../../types/ColectionImage";

import * as styles from './MainPage.styles';
import CustomButton from "../../ui/custom-button/CustomButton";
import {ButtonColor, ButtonVariant} from "../../ui/custom-button/types";
import AboutUsSection from "./components/about-us-section/AboutUsSection";
import ArtistCard from "./components/artist-card/ArtistCard";

const MainPage = () => {
  let images: ColectionImage[] = [
    {
      url: 'https://images.panda.org/assets/images/pages/welcome/orangutan_1600x1000_279157.jpg',
      label: 'First',
    },
    {
      url: 'https://deep-image.ai/blog/content/images/2022/09/underwater-magic-world-8tyxt9yz.jpeg',
      label: 'Second',
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
          color={ButtonColor.SECONDARY}
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
              'Mona Lisa (c. 1503–19)',
              'Last Supper (c. 1495–98)',
              'Vitruvian Man (c. 1490)',
              'Self Portrait (c. 1490)',
              'Salvator Mundi (c. 1500)',
            ]}
          />
          <ArtistCard
            image={'https://upload.wikimedia.org/wikipedia/commons/0/02/Michelangelo_Daniele_da_Volterra_%28dettaglio%29.jpg'}
            name={"Michelangelo"}
            arts={[
              'Dono Tondi (c. 1506-1507)',
              'The Last Judgment (c. 1536-1541)',
              'The Creation of Adam (c. 1508-1512)',
              'The Entombment (c. 1500-1501)',
              'David (c. 1501-1504)',
            ]}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default MainPage;
