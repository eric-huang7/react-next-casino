import styles from '../../styles/FooterArea/FooterArea.module.scss';
import Image from "next/image";
import {GamesContainerNavigation} from "./GamesContainerNavigation";
import {useSelector} from "react-redux";
import {GamesSlider} from "./GamesSlider";

export const GamesContainer = ({t, activeSlots, activeTime, setActiveSlots, setActiveTime}) => {
  const games = useSelector((store) => store.games);

  console.log(games)
  return (
    <div className={`${styles.gamesWrapper} ${activeSlots || activeTime ? styles.active : ''}`}>
      <GamesContainerNavigation
        t={t}
        setActiveSlots={setActiveSlots}
        setActiveTime={setActiveTime}
        activeSlots={activeSlots}
        activeTime={activeTime}
      />
      <div className={styles.gamesListContainer}>
        <GamesSlider t={t} />
      </div>
    </div>
  )
}