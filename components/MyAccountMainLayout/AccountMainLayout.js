import styles from '../../styles/MyAccount/MainLayout/MainLayout.module.scss';
import {Header} from "../MainLayout/Header/Header";
import {SideMenu} from "./AccountLayoutConponents/SideMenu";


export const AccountMainLayout = ({t, children}) => {


  return (
    <div  className={styles.accountMainLayoutWrapper}>
      <Header t={t}/>
      <div className={styles.myAccountContainer}>
        <div className={styles.accountInnerContainer}>
          <SideMenu t={t} />
          <section className={styles.accountMainContainer}>
            {children}
          </section>
        </div>
      </div>
    </div>
  )
}