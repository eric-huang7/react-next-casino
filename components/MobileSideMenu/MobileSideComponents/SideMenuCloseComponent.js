import styles from "../../../styles/MobileSideMenu/MobileSideMenu.module.scss";


export const SideMenuCloseComponent = ({closeClickHandler}) => {


  return (
    <div className={styles.sideMenuCloseButton} onClick={() => closeClickHandler()}>
      <span></span>
      <span></span>
    </div>
  )
}