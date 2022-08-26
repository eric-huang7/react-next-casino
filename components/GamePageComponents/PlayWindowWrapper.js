import styles from '../../styles/GamePage/GamePage.module.scss';
import {ControlPanel} from "./PlayWindowComponents/ControlPanel";
import {GameWindow} from "./PlayWindowComponents/GameWindow";
import {LoadingComponent} from "../LoadingComponent/LoadingComponent";

export const PlayWindowWrapper = ({
  t, isFullScreen, fullscreenClickHandler, isMinimized, minimizedHandler, closeGameHandler, playGames, maximizeHandler
}) => (
  <div
    className={`${styles.playWindowWrapper} ${isFullScreen ? styles.fullScreenWindow : ''} ${isMinimized ? styles.minimizedPlayWindow : ""}`}
  >
    {isMinimized ? <>
      <div className={styles.minimizedControlPanel}>
        <p>{`${playGames.gameName}`}</p>
        <button
          onClick={closeGameHandler}
          className={styles.closeButton}
        />
      </div>
      <div className={styles.openFullScreenContainer} onClick={maximizeHandler} />
    </> : <>
      <ControlPanel
        isFullScreen={isFullScreen}
        fullscreenClickHandler={fullscreenClickHandler}
        closeGameHandler={closeGameHandler}
        minimizedHandler={minimizedHandler}
      />
    </>}

    {playGames.loading
      ? <LoadingComponent t={t} />
      : <GameWindow
          closeGameHandler={closeGameHandler}
          gameUrl={playGames.freeGame ? playGames.freeGame.game_link : playGames.startGame ? playGames.startGame.game_link : null}
        />
    }
  </div>
)
