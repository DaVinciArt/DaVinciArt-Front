'use client';

import {Box, Tab, Tabs} from "@mui/material";
import {FC, SyntheticEvent, useContext, useEffect, useState} from "react";
import {AccountPageTab} from "./types";
import {CurrencyDollarIcon, HomeIcon, PencilSquareIcon, PlusIcon} from "@heroicons/react/24/outline";
import TabPanel from "../../common/ui/tab-panel/TabPanel";

import * as styles from './AccountPage.styles';
import GeneralTab from "./components/general-tab/GeneralTab";
import AddCollectionTab from "./components/add-collection-tab/AddCollectionTab";
import GetMoneyTab from "./components/get-money-tab/GetMoneyTab";
import {UserContext} from "../../../lib/hooks/use-authentication/useAuthentication";
import ReviewsTab from "./components/reviews-tab/ReviewsTab";
import {useRouter, useSearchParams} from "next/navigation";

const AccountPage = () => {
  const [index, setIndex] = useState<AccountPageTab>(AccountPageTab.GENERAL);
  const { user } = useContext(UserContext)
  const router = useRouter()
  const query = useSearchParams()

  useEffect(() => {
    if (!query.has('tab')) {
      router.push(`/account?tab=GENERAL`)
    } else {
      setIndex(query.get('tab') as AccountPageTab)
    }
  }, [])

  useEffect(() => {
    if (query.has('tab')) {
      setIndex(query.get('tab') as AccountPageTab)
    }
  }, [query])

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
          label="Add collection"
          value={AccountPageTab.ADD_COLLECTION}
          icon={<PlusIcon width={20} />}
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
        <Tab
          label="Get money"
          value={AccountPageTab.GET_MONEY}
          icon={<CurrencyDollarIcon width={20} />}
          iconPosition={"start"}
          sx={{fontSize: '16px'}}
        />
      </Tabs>
      {user &&
        <Box sx={styles.tabPanelContainer}>
          <TabPanel value={AccountPageTab.GENERAL} currentValue={index}>
            <GeneralTab user={user}/>
          </TabPanel>
          <TabPanel value={AccountPageTab.ADD_COLLECTION} currentValue={index}>
            <AddCollectionTab userID={user.id}/>
          </TabPanel>
          <TabPanel value={AccountPageTab.REVIEWS} currentValue={index}>
            <ReviewsTab userId={user.id}/>
          </TabPanel>
          <TabPanel value={AccountPageTab.GET_MONEY} currentValue={index}>
            <GetMoneyTab userID={user.id}/>
          </TabPanel>
        </Box>
      }
    </Box>
  );
};

export default AccountPage
