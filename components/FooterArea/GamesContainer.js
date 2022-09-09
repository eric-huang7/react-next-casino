import styles from '../../styles/FooterArea/FooterArea.module.scss';
import Image from "next/image";
import {GamesContainerNavigation} from "./GamesContainerNavigation";
import {useDispatch, useSelector} from "react-redux";
import {GamesSlider} from "./GamesSlider";
import {useEffect} from "react";
import {useRouter} from "next/router";
import {deleteGameLink, freeGame, playPayGame} from "../../redux/playGame/action";
import useWindowDimensions from "../../hooks/useWindowDimensions";
import {showGameWindow} from "../../redux/ui/action";
import GameSliderErrorHandler from "./ErrorHandler/GameSliderErrorHandler";
import usePlayGame from "../../hooks/usePlayGame";

export const GamesContainer = ({t, activeSlots, activeTime, setActiveSlots, setActiveTime, footerArea}) => {
  const games = useSelector((store) => store.games);
  const userInfo = useSelector((store) => store.authInfo);
  const {playFun, playGame} = usePlayGame();

  const router = useRouter();

  return (
    <div ref={footerArea} className={`${styles.gamesWrapper} ${activeSlots || activeTime ? styles.active : ''}`}>
      <GamesContainerNavigation
        t={t}
        setActiveSlots={setActiveSlots}
        setActiveTime={setActiveTime}
        activeSlots={activeSlots}
        activeTime={activeTime}
        router={router}
      />
      <div className={styles.gamesListContainer}>
        <GameSliderErrorHandler>
          <GamesSlider
            playFunClickHandler={playFun}
            playGameClickHandler={playGame}
            activeSlots={activeSlots}
            activeTime={activeTime}
            userInfo={userInfo}
            gamesData={games}
            t={t}
          />
        </GameSliderErrorHandler>
      </div>
    </div>
  )
}
