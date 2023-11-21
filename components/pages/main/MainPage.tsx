import {Box} from "@mui/material";
import Carousel from "../../carousel/Carousel";
import {ColectionImage} from "../../../types/ColectionImage";

import * as styles from './MainPage.styles';
import CustomButton from "../../ui/custom-button/CustomButton";
import {ButtonColor, ButtonVariant} from "../../ui/custom-button/types";
import AboutUsSection from "./components/AboutUsSection";

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
        <Carousel images={images}/>
        <CustomButton
          text={'To other collections'}
          variant={ButtonVariant.OUTLINED}
          color={ButtonColor.SECONDARY}
          href={'/'}
          sx={styles.contactsButton}
        />
      </Box>
    </Box>
  );
};

export default MainPage;
