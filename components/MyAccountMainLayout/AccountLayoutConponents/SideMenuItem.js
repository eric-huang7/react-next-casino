import styles from "../../../styles/MyAccount/MainLayout/MainLayout.module.scss";

import Link from "next/link";



export const SideMenuItem = ({t, data, router, userInform}) => {


  if (data.pageType === 'bonuses') {

    let countOfBonuses = '';
    if (userInform.loadingActivePendingBonuses) {
      countOfBonuses = ''
    } else {
      countOfBonuses = userInform.activePendingBonuses.bonuses.length > 0 ? userInform.activePendingBonuses.bonuses.filter((el) => el.status === '1') : [];
    }

    return (
      <li className={`${styles.accountLinkItem} ${router.query.pageType === data.pageType ? styles.activeItem : ''}`}>
        <Link href={data.path}>
          <a>
            <img src={router.query.pageType === data.pageType ? data.icon_active : data.icon_disabled} className={styles.linkItemIcon} alt={'link ' + data.name + ' icon'}/>
            <span className={styles.linkText}>{t(data.name)}</span>
            {userInform.loadingActivePendingBonuses ? <></> : <span className={styles.bonusCounter}>{countOfBonuses.length}</span> }
          </a>
        </Link>
      </li>
    )
  } else {
    return (
      <li className={`${styles.accountLinkItem} ${router.query.pageType === data.pageType ? styles.activeItem : ''}`}>
        <Link href={data.path}>
          <a>
            <img src={router.query.pageType === data.pageType ? data.icon_active : data.icon_disabled} className={styles.linkItemIcon} alt={'link ' + data.name + ' icon'}/>
            <span className={styles.linkText}>{t(data.name)}</span>
          </a>
        </Link>
      </li>
    )
  }

}