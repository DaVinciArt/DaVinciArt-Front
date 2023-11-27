'use client';

import { Box, Tab, Tabs } from "@mui/material";
import {SyntheticEvent, useState } from "react";
import { AccountPageTab } from "./types";
import {CurrencyDollarIcon, HomeIcon, PlusIcon} from "@heroicons/react/24/outline";
import TabPanel from "./components/tab-panel/TabPanel";

import * as styles from './AccountPage.styles';
import GeneralTab from "./components/general-tab/GeneralTab";

const AccountPage = () => {
  const [index, setIndex] = useState<AccountPageTab>(AccountPageTab.GENERAL);

  const handleChange = async (event: SyntheticEvent, value: AccountPageTab) => {
    setIndex(value);
  }

  return (
    <Box>
      <Tabs
        value={index}
        onChange={handleChange}
        centered>
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
          label="Get money"
          value={AccountPageTab.GET_MONEY}
          icon={<CurrencyDollarIcon width={20} />}
          iconPosition={"start"}
          sx={{fontSize: '16px'}}
        />
      </Tabs>
      <Box sx={styles.tabPanelContainer}>
        <TabPanel value={AccountPageTab.GENERAL} currentValue={index}>
          <GeneralTab/>
        </TabPanel>
        <TabPanel value={AccountPageTab.ADD_COLLECTION} currentValue={index}>Add collection</TabPanel>
        <TabPanel value={AccountPageTab.GET_MONEY} currentValue={index}>Get money</TabPanel>
      </Box>
    </Box>
  );
};

export default AccountPage
