import styles from "../../../styles/MyAccount/MainLayout/MainLayout.module.scss";

import Link from "next/link";



export const SideMenuItem = ({t, data, router}) => {

  return (
    <li className={`${styles.accountLinkItem} ${router.query.pageType === data.pageType ? styles.activeItem : ''}`}>

      <Link href={data.path}><a><img src={router.query.pageType === data.pageType ? data.icon_active : data.icon_disabled} className={styles.linkItemIcon} alt={'link ' + data.name + ' icon'}/>{t(data.name)}</a></Link>
    </li>
  )
}