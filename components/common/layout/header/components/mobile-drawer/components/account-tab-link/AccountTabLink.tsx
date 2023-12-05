import Link from "next/link";
import {AccountPageTab} from "../../../../../../../pages/account-page/types";
import {FC, MouseEventHandler, ReactNode} from "react";
import {useSearchParams} from "next/navigation";

import styles from './AccountTabLink.module.scss'

interface AccountTabLinkProps {
  href: string,
  text: string,
  icon: ReactNode,
  onClick?: MouseEventHandler<HTMLAnchorElement>;
}

const AccountTabLink: FC<AccountTabLinkProps> =
  ({
     href,
     text,
     icon,
     onClick
  }) => {
  const query = useSearchParams()
  const value = href.split('=')[1] as AccountPageTab
  const currentTab = query.get('tab') as AccountPageTab

  return (
    <Link href={href} className={styles[currentTab === value ? 'activeTabLink' : 'tabLink']} onClick={onClick}>
      {icon}
      {text}
    </Link>
  );
}

export default AccountTabLink;
