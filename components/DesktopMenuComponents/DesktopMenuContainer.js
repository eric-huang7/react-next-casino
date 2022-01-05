import styles from '../../styles/DesktopMenu/DesktopMenu.module.scss';
import {LinkItem} from "./LinkItem";
import {SignOutItem} from "./SignOutItem";


export const DesktopMenuContainer = ({t}) => {
  const linksData = [
    {id: 1, name: 'header.userDesktopMenu.myAccount', path: '/accounts/balance', icon: '/assets/icons/desktopMenu/myAccount.png'},
    {id: 1, name: 'header.userDesktopMenu.bonuses', path: '/accounts/bonuses', icon: '/assets/icons/desktopMenu/bonuses.png'},
    {id: 1, name: 'header.userDesktopMenu.myBets', path: '/accounts/history/history/bets', icon: '/assets/icons/desktopMenu/myBets.png'},
    {id: 1, name: 'header.userDesktopMenu.transactions', path: '/accounts/history', icon: '/assets/icons/desktopMenu/transactions.png'},
  ]

  return (
    <div className={styles.desktopMenuContainer}>
      <ul className={styles.menuList}>
        {
          linksData.map((link) => {
            return (
              <LinkItem t={t} name={link.name} icon={link.icon} path={link.path} key={`${link.id} ${link.name} link item`}/>
            )

          })
        }
        <SignOutItem t={t} />
      </ul>
    </div>
  )
}