import styles from '../../styles/GamePage/GamePage.module.scss';
import {ControlPanel} from "./PlayWindowComponents/ControlPanel";
import {GameWindow} from "./PlayWindowComponents/GameWindow";
import React, {useEffect, useState} from "react";
import {useRouter} from "next/router";
import {useDispatch, useSelector} from "react-redux";
import {minimizeGameWindow, showGameWindow} from "../../redux/actions/showGameWindow";
import {MinimizedControlPanel} from "./PlayWindowComponents/MinimizedControlPanel";
import {MinimizedOpenFullScreenContainer} from "./PlayWindowComponents/MinimizedOpenFullScreenContainer";
import {deleteGameLink, freeGame, playPayGame} from "../../redux/actions/playGames";
import {LoadingComponent} from "../LoadingComponent/LoadingComponent";


export const PlayWindowWrapper = ({t, isFullScreen, setIsFullScreen, isMinimized, minimizedHandler}) => {
  const dispatch = useDispatch();
  const router = useRouter();
  const playGames = useSelector((state) => state.playGame);


  useEffect(() => {
    if (isFullScreen) {
      console.log('full')
      document.body.style.overflowY = "hidden"
    } else {
      document.body.style.overflowY = "auto"
    }
  }, [isFullScreen])

  const closeGameHandler = () => {
    dispatch(showGameWindow(false));
    dispatch(minimizeGameWindow(false));
    dispatch(deleteGameLink());
  }

  console.log(playGames);

  return (
    <div
      className={`${styles.playWindowWrapper} ${isFullScreen ? styles.fullScreenWindow : ''}`}
    >

      {
        isMinimized
          ?
          <>
            <MinimizedControlPanel
              closeGameHandler={closeGameHandler}
            />
            <MinimizedOpenFullScreenContainer
              minimizedHandler={minimizedHandler}
            />
          </>

          :
          <>
            <ControlPanel
              setIsFullScreen={setIsFullScreen}
              closeGameHandler={closeGameHandler}
              minimizedHandler={minimizedHandler}
            />
          </>
      }
      {
        playGames.loading
          ?
          <LoadingComponent t={t} />
          :
          <GameWindow
            gameUrl={playGames.freeGame ? playGames.freeGame.game_link : playGames.startGame ? playGames.startGame.game_link : null}
          />
      }

    </div>
  )
}

// export default React.memo(PlayWindowWrapper);

// https://cimagehost1.sos-ch-gva-2.exoscale-cdn.com/currency/coins.svg.

//https://5for5media-ng-copy.nucleusgaming.com/free/en/launch.jsp?gameId=30243&GAMESERVERURL=games-ng-copy.nucleusgaming.com&gameHistoryUrl=https%3A%2F%2F5for5media-ng-copy.nucleusgaming.com%2Fgamehistory.do%3FsessionId%3D2_71ef5da962c6c13351ae0000017ea611_BAUXBgMCXFcDAktQCFcKCwIDDw4cQ1lFVV5eSxcHAAoaBAIICQ%26bankId%3D6111%26gameId%3D30243%26lang%3Den&autoplayAllowed=true&ShellPath=%252Ffree%252Fmobile%252Ftemplate.jsp&GAMESERVERID=2&LANG=en&BANKID=6111&SID=2_71ef5da962c6c13351ae0000017ea611_BAUXBgMCXFcDAktQCFcKCwIDDw4cQ1lFVV5eSxcHAAoaBAIICQ