import styles from "../../styles/FooterArea/FooterArea.module.scss";
import Image from "next/image";


export const GamesContainerNavigation = ({t, activeSlots, activeTime, setActiveSlots, setActiveTime, router}) => {
  const closeGamesHandler = () => {
    setActiveSlots(false);
    setActiveTime(false);
  }

  return (
    <div  className={styles.navigationContainer}>
      <p className={`${styles.typeOfGames} ${styles[router.locale]}`}>{(activeSlots && t("footerArea.headings.topGames")) || (activeTime && t("footerArea.headings.lastGames"))}</p>
      <div onClick={() => closeGamesHandler()} className={styles.backButton}>
        <Image layout={'fixed'} src={'/assets/img/footerArea/backButton.png'} height={38} width={38}/>
      </div>
    </div>
  )
}