import {FC, SyntheticEvent, useEffect, useState} from "react";
import {AccountPageTab} from "../account-page/types";
import {useRouter, useSearchParams} from "next/navigation";
import {getAuthor} from "../../../lib/api/api";
import {Box, Tab, Tabs} from "@mui/material";
import * as styles from "../account-page/AccountPage.styles";
import {CurrencyDollarIcon, HomeIcon, PencilSquareIcon, PlusIcon} from "@heroicons/react/24/outline";
import TabPanel from "../../common/ui/tab-panel/TabPanel";
import GeneralTab from "../account-page/components/general-tab/GeneralTab";
import AddCollectionTab from "../account-page/components/add-collection-tab/AddCollectionTab";
import ReviewsTab from "../account-page/components/reviews-tab/ReviewsTab";
import GetMoneyTab from "../account-page/components/get-money-tab/GetMoneyTab";

interface AuthorPageProps {
  authorId: number,
}

const AuthorPage: FC<AuthorPageProps> = ({authorId}) => {
  const [index, setIndex] = useState<AccountPageTab>(AccountPageTab.GENERAL);
  const [author, setAuthor] = useState(null);
  const router = useRouter();
  const query = useSearchParams();

  useEffect(() => {
    const fetchData = async () => {
      const result = await getAuthor(authorId)
      setAuthor(author)
    };

    fetchData();
  }, []);

  const handleChange = async (event: SyntheticEvent, value: AccountPageTab) => {
    setIndex(value);
    router.push(`/account?tab=${value}`)
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
            <GeneralTab user={author}/>
          </TabPanel>
          <TabPanel value={AccountPageTab.REVIEWS} currentValue={index}>
            <ReviewsTab reviews={reviews} userId={0}/>
          </TabPanel>
        </Box>
      }
    </Box>
  );
}

export default AuthorPage;