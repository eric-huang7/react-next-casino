import styles from "../../styles/FooterArea/FooterArea.module.scss";
import Image from "next/image";


export const GamesContainerNavigation = ({t, activeSlots, activeTime, setActiveSlots, setActiveTime}) => {
  const closeGamesHandler = () => {
    setActiveSlots(false);
    setActiveTime(false);
  }

  return (
    <div  className={styles.navigationContainer}>
      <p className={styles.typeOfGames}>{(activeSlots && 'Top Games') || (activeTime && 'Last Games')}</p>
      <div onClick={() => closeGamesHandler()} className={styles.backButton}>
        <Image layout={'fixed'} src={'/assets/img/footerArea/backButton.png'} height={38} width={38}/>
      </div>
    </div>
  )
}