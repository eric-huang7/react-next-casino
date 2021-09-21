import styles from './Header.module.css'
import {Navigation} from "./Navigation/Navigation";
import {UserBlockNavigation} from "./UserBlockNavigation/UserBlockNavigation";

export const Header = () => {
  return (
    <header className={styles.mainHeader}>
      <img className={styles.logo} src={logo} alt="logo"/>
      <Navigation />
      <UserBlockNavigation />
    </header>
  )
}