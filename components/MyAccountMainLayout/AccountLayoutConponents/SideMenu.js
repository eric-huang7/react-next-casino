import styles from "../../../styles/MyAccount/MainLayout/MainLayout.module.scss";
import {SideMenuItem} from "./SideMenuItem";
import {useRouter} from "next/router";

const sideMenuListData = [
  {id: 1, name: 'Balance', icon_active: "/assets/img/myAccount/balance_active.png", icon_disabled: "/assets/img/myAccount/balance.png", path: '/accounts/balance', pageType: "balance"},
  {id: 2, name: 'History', icon_active: "/assets/img/myAccount/history_active.png", icon_disabled: "/assets/img/myAccount/history.png", path: '/accounts/history', pageType: "history"},
  {id: 3, name: 'Bonuses', icon_active: "/assets/img/myAccount/bonuses_active.png", icon_disabled: "/assets/img/myAccount/bonuses.png", path: '/accounts/bonuses', pageType: "bonuses"},
  {id: 4, name: 'Profile Info', icon_active: "/assets/img/myAccount/profile_info_active.png", icon_disabled: "/assets/img/myAccount/profile_info.png", path: '/accounts/profile-info', pageType: "profile-info"},
  {id: 5, name: 'Gambling Limits', icon_active: "/assets/img/myAccount/gambling_limits_active.png", icon_disabled: "/assets/img/myAccount/gambling_limits.png", path: '/accounts/gambling-limits', pageType: "gambling-limits"},
  {id: 6, name: 'Documents', icon_active: "/assets/img/myAccount/documents_active.png", icon_disabled: "/assets/img/myAccount/documents.png", path: '/accounts/documents', pageType: "documents"},
]

export const SideMenu = ({t}) => {
  const router = useRouter();

  return (
    <aside  className={styles.accountSideBlock}>
      <h2 className={styles.accountHeading}>{t("myAccount.heading")}</h2>
      <ul className={styles.accountLinksList}>
        {
          sideMenuListData.map((el) => {
            return (
              <SideMenuItem key={`${el.id} account link item`} t={t} data={el} router={router}/>
            )
          })
        }
      </ul>
    </aside>
  )
}