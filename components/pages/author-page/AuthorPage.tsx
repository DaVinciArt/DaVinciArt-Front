'use client'

import {FC, SyntheticEvent, useContext, useEffect, useState} from "react";
import {AccountPageTab} from "../account-page/types";
import {useRouter, useSearchParams} from "next/navigation";
import {getAuthor} from "../../../lib/api/api";
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

  const reviews = [
    {
      author_username: 'Dick1',
      receiver_id: 0,
      creation_date: 'now',
      review_body: 'It is a long established fact that a reader will be distracted by the readable content of a page' +
        ' when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution' +
        ' of letters, as opposed to using \'Content here, content here\', making it look like readable English. Many' +
        'desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search' +
        ' for \'lorem ipsum\' will uncover many web sites still in their infancy. Various versions have evolved over' +
        ' the years, sometimes by accident, sometimes on purpose (injected humour and the like).',
    },
    {
      author_username: 'Dick2',
      receiver_id: 0,
      creation_date: 'now',
      review_body: 'It is a long established fact that a reader will be distracted by the readable content of a page' +
        ' when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution' +
        ' of letters, as opposed to using \'Content here, content here\', making it look like readable English. Many' +
        'desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search' +
        ' for \'lorem ipsum\' will uncover many web sites still in their infancy. Various versions have evolved over' +
        ' the years, sometimes by accident, sometimes on purpose (injected humour and the like).',
    },
    {
      author_username: 'Dick3',
      receiver_id: 0,
      creation_date: 'now',
      review_body: 'DicknCock',
    },
  ]

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
            <AuthorReviewsTab reviews={[]} userId={user?.id}/>
          </TabPanel>
        </Box>
      }
    </Box>
  );
}

export default AuthorPage;