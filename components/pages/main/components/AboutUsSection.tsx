import * as sxStyles from "./AboutUsSection.styles";
import styles from './AboutUsSection.module.scss';
import {Box, Typography} from "@mui/material";
import Link from "next/link";

const AboutUsSection = () => {
  return (
    <Box sx={sxStyles.wrapper}>
      <Box sx={sxStyles.aboutContent}>
        <Typography variant='h3' sx={sxStyles.aboutHeader}>About Us</Typography>
        <Typography sx={sxStyles.aboutText}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate nisl ac facilisis euismod.
          Suspendisse potenti. Ut sed pharetra odio. Sed tincidunt consectetur neque, eget pretium lectus hendrerit sit
          amet. Nunc sit amet turpis molestie, mollis magna blandit, porta urna. In venenatis arcu et lorem molestie egestas.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ultrices rutrum nisl ac sagittis.
          Maecenas ultricies tempor nisl ac fringilla. Nullam metus ex, tincidunt et purus vitae,
          sollicitudin suscipit ante. Nunc non laoreet ipsum. Aenean tempus vel est nec egestas. Quisque luctus diam id
          urna scelerisque, non fringilla massa porttitor. Aenean ac felis quis tellus malesuada tempus.
          Cras porta hendrerit laoreet. Nulla egestas mi odio, et pretium lectus iaculis vel.
          Sed egestas pretium risus, viverra egestas ante varius eget. Nullam dapibus tristique nulla a pellentesque.
          Sed gravida leo quis neque maximus, in ornare magna blandit. Fusce bibendum posuere condimentum. Nam scelerisque
          quam lobortis sollicitudin ullamcorper. Etiam sem justo, efficitur at nibh sed, egestas scelerisque est. Morbi
          condimentum malesuada libero, id vestibulum nisi posuere et. Etiam egestas laoreet commodo. Maecenas ante sem,
          pretium vitae elit tempus, euismod viverra mauris. Nulla venenatis vel dui ac viverra. Integer dignissim
          porttitor quam, sed condimentum risus venenatis a. Sed quis finibus ligula. Duis lacinia in dolor eget ornare.
        </Typography>
        <Link href={'/'} className={styles['contactsLink']}>
          Contact info
        </Link>
      </Box>
    </Box>
  );
};

export default AboutUsSection;
