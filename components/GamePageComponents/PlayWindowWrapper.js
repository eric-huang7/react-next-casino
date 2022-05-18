import styles from '../../styles/GamePage/GamePage.module.scss';
import {ControlPanel} from "./PlayWindowComponents/ControlPanel";
import {GameWindow} from "./PlayWindowComponents/GameWindow";
import {MinimizedControlPanel} from "./PlayWindowComponents/MinimizedControlPanel";
import {MinimizedOpenFullScreenContainer} from "./PlayWindowComponents/MinimizedOpenFullScreenContainer";
import {LoadingComponent} from "../LoadingComponent/LoadingComponent";


export const PlayWindowWrapper = ({t, isFullScreen, fullscreenClickHandler, isMinimized, minimizedHandler, closeGameHandler, playGames, maximizeHandler}) => {


  return (
    <div
      className={`${styles.playWindowWrapper} ${isFullScreen ? styles.fullScreenWindow : ''} ${isMinimized ? styles.minimizedPlayWindow : ""}`}
    >

      {
        isMinimized
          ?
          <>
            <MinimizedControlPanel
              gameInfo={playGames}
              closeGameHandler={closeGameHandler}
            />
            <MinimizedOpenFullScreenContainer
              maximizeHandler={maximizeHandler}
            />
          </>

          :
          <>
            <ControlPanel
              fullscreenClickHandler={fullscreenClickHandler}
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
            closeGameHandler={closeGameHandler}
            gameUrl={playGames.freeGame ? playGames.freeGame.game_link : playGames.startGame ? playGames.startGame.game_link : null}
          />
      }

    </div>
  )
}
