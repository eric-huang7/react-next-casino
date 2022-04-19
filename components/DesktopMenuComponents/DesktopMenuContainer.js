import styles from '../../styles/DesktopMenu/DesktopMenu.module.scss';
import {LinkItem} from "./LinkItem";
import {SignOutItem} from "./SignOutItem";

export const DesktopMenuContainer = () => {
  const linksData = [
    {id: 1, name: 'header.userDesktopMenu.myAccount', path: '/accounts/balance', icon: '/assets/icons/desktopMenu/account-icon.png'},
    {id: 1, name: 'header.userDesktopMenu.bonuses', path: '/accounts/bonuses', icon: '/assets/icons/desktopMenu/bonus-icon.png'},
    {id: 1, name: 'header.userDesktopMenu.myBets', path: '/accounts/history/history/bets', icon: '/assets/icons/desktopMenu/activity-icon.png'},
    {id: 1, name: 'header.userDesktopMenu.transactions', path: '/accounts/history', icon: '/assets/icons/desktopMenu/history-icon.png'},
  ]

  return (
    <div className={styles.desktopMenuContainer}>
      <ul className={styles.menuList}>
        {
          linksData.map((link) => {
            return (
              <LinkItem name={link.name} icon={link.icon} path={link.path} key={`${link.id} ${link.name} link item`}/>
            )
          })
        }
        <SignOutItem />
      </ul>
    </div>
  )
}
