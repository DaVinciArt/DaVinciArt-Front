import React from "react";
import {AccountPageTab} from "../../../pages/account-page/types";


interface TabPanelProps {
  children?: React.ReactNode;
  value: AccountPageTab;
  currentValue: AccountPageTab;
}

const TabPanel = (props: TabPanelProps) => {
  const { children, value, currentValue, ...rest } = props;

  return (
    <div
      role='tabpanel'
      hidden={value !== currentValue}
      {...rest}
    >
      {children}
    </div>
  );
}

export default TabPanel;
