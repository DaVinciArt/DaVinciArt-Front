'use client'

import {FC, SyntheticEvent, useContext, useEffect, useState} from "react";
import {AccountPageTab} from "../account-page/types";
import {useRouter, useSearchParams} from "next/navigation";
import {getAllReview, getAuthor} from "../../../lib/api/api";
import {Box, Tab, Tabs} from "@mui/material";
import * as styles from "../account-page/AccountPage.styles";
import {HomeIcon, PencilSquareIcon} from "@heroicons/react/24/outline";
import TabPanel from "../../common/ui/tab-panel/TabPanel";
import ReviewsTab from "../account-page/components/reviews-tab/ReviewsTab";
import AuthorGeneralTab from "./components/author-general-tab/AuthorGeneralTab";
import AuthorReviewsTab from "./components/author-reviews-page/AuthorReviewsTab";
import {UserContext} from "../../../lib/hooks/use-authentication/useAuthentication";

interface AuthorPageProps {
  authorId: number,
}

const AuthorPage: FC<AuthorPageProps> = ({authorId}) => {
  const [index, setIndex] = useState<AccountPageTab>(AccountPageTab.GENERAL);
  const [author, setAuthor] = useState(null);

  const router = useRouter();
  const query = useSearchParams();
  const { user } = useContext(UserContext);



  useEffect(() => {
    const fetchData = async () => {
      const result = await getAuthor(authorId)
      setAuthor(result)
    };

    fetchData();

    if (!query.has('tab')) {
      router.push(`/user/${authorId}?tab=GENERAL`)
    } else {
      setIndex(query.get('tab') as AccountPageTab)
    }
  }, []);

  useEffect(() => {
    if (query.has('tab')) {
      setIndex(query.get('tab') as AccountPageTab)
    }
  }, [query])

  const handleChange = async (event: SyntheticEvent, value: AccountPageTab) => {
    setIndex(value);
    router.push(`/user/${authorId}?tab=${value}`)
  }

  return (
    <Box>
      <Tabs
        value={index}
        onChange={handleChange}
        centered
        sx={styles.tabs}
      >
        <Tab
          label="General"
          value={AccountPageTab.GENERAL}
          icon={<HomeIcon width={20} />}
          iconPosition={"start"}
          sx={{fontSize: '16px'}}
        />
        <Tab
          label="Reviews"
          value={AccountPageTab.REVIEWS}
          icon={<PencilSquareIcon width={20} />}
          iconPosition={"start"}
          sx={{fontSize: '16px'}}
        />
      </Tabs>

      {author &&
        <Box sx={styles.tabPanelContainer}>
          <TabPanel value={AccountPageTab.GENERAL} currentValue={index}>
            <AuthorGeneralTab author={author}/>
          </TabPanel>
          <TabPanel value={AccountPageTab.REVIEWS} currentValue={index}>
            <AuthorReviewsTab userId={user?.id}/>
          </TabPanel>
        </Box>
      }
    </Box>
  );
}

export default AuthorPage;