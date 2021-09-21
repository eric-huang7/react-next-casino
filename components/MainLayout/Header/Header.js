
import styles from '../../../styles/Header/Header.module.scss'
import {Navigation} from "./Navigation/Navigation";
import {UserBlockNavigation} from "./UserBlock/UserBlock";


export const Header = ({t}) => {
  return (
    <header className={styles.mainHeader}>
      <img className={styles.logo} src={'/static/img/mainLayoutImg/logo.svg'} alt="logo"/>
      <Navigation t={t}/>
      <UserBlockNavigation t={t}/>
    </header>
  )
}