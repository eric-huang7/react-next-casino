import styles from '../../../styles/ExitIntentComponent/GamesContainer/GamesContainer.module.scss';
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {LoadingComponent} from "../../LoadingComponent/LoadingComponent";
import {GameItemContainer} from "./GameItemContainer";
import {useRouter} from "next/router";
import {deleteGameLink, freeGame, playPayGame} from "../../../redux/playGame/action";
import {showRegister} from "../../../redux/ui/action";
import {showExitIntentPopup} from "../../../redux/popups/action";
import {showGameWindow} from "../../../redux/ui/action";
import usePlayGame from "../../../hooks/usePlayGame";

export const GamesContainer = ({t, exit}) => {
  const dispatch = useDispatch();
  const router = useRouter();
  const gamesList = useSelector((store) => store.games);
  const playGames = useSelector((state) => state.playGame);
  const user = useSelector((state) => state.authInfo);
  const {playFun, playGame} = usePlayGame();

  useEffect(() => {
    if (playGames.startGame?.game_link) {
      if (typeof window !== 'undefined') {
        if (window.innerWidth <= 1065) {
          router.push(playGames.startGame.game_link);
        }
      }
    }

    if (playGames.freeGame?.game_link) {
      if (typeof window !== 'undefined') {
        if (window.innerWidth <= 1065) {
          router.push(playGames.freeGame.game_link);
        }
      }
    }
  }, [playGames]);

  if (gamesList?.topGames?.success) {
    let gamesData = gamesList.topGames.results.slice(0, 3);


    return (
      <div className={styles.gamesMainContainer}>
        {gamesData.map((game) => {
          return (
            <GameItemContainer
              playGameClickHandler={playGame}
              playFunClickHandler={playFun}
              key={`${game.name} game key`}
              t={t}
              gameData={game}
            />
          )
        })}
      </div>
    )
  } else {
    return (
      <div className={styles.gamesMainContainer}>
        <LoadingComponent t={t} />
      </div>
    )
  }


}
