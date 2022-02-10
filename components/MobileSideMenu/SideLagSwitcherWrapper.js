import styles from "../../styles/MobileSideMenu/MobileSideMenu.module.scss";
import {MobileSideLangSwitcher} from "./MobileSideLangswitcher";


export const SideLagSwitcherWrapper = ({t, openLanguagesClickHandler, isOpenLanguages}) => {

  return (
    <div className={`${styles.mobileSideLangSwitcherButton} ${isOpenLanguages ? styles.activeLangMenu : ""}`}>
      <img src={'/assets/img/mobileSideMenu/globe.svg'} alt="language icon"/>
      <div className={styles.languageWrapper}>
        <p onClick={() => openLanguagesClickHandler()}>{t('mobileSideMenu.listMenu.language')}</p>
        <MobileSideLangSwitcher isOpenLanguages={isOpenLanguages}/>
      </div>
    </div>
  )
}