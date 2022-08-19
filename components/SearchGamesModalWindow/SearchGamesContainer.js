import styles from "../../styles/SearchModalWindow/SearchModalWindow.module.scss";
import {GamesItem} from "../GamesPageComponents/GamesItem";
import {useDispatch, useSelector} from "react-redux";
import {useRouter} from "next/router";
import {useEffect} from "react";
import {deleteGameLink, freeGame, playPayGame} from "../../redux/playGame/action";
import {TextForEmpty} from "./TextForEmpty";
import {GamesPageHeading} from "../GamesPageComponents/GamesPageHeading";
import {showGameWindow} from "../../redux/ui/action";
import GamesItemErrorHandler from '../GamesPageComponents/GamesPageErrorHandler/GameItemErrorHandler'
import ErrorEmpty from '../ErrorBoundaryComponents/ErrorEmpty'
import usePlayGame from "../../hooks/usePlayGame";


export const SearchGamesContainer = ({t, searchGames, searchBar, heading}) => {
  const userInfo = useSelector((store) => store.authInfo);
  const playGames = useSelector((state) => state.playGame);
  const {playFun, playGame} = usePlayGame();

  const dispatch = useDispatch();
  const router = useRouter();

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

  let games = searchGames.map((el) => {
    return (
      <GamesItemErrorHandler key={`${el.id} ${el.name} game page`}>
        <GamesItem
          showFrame={false}
          playFunClickHandler={playFun}
          playGameClickHandler={playGame}
          key={`${el.id} ${el.name} game page`}
          userInfo={userInfo}
          t={t}
          gameData={el}
        />
      </GamesItemErrorHandler>
    )
  })

  if (searchBar.current.value !== "" && games.length === 0) {
    return (
      <TextForEmpty t={t} text={"searchGames.nothingFound"}/>
    )
  } else {
    return (
      <div className={styles.gamesWrapper}>
        <div className={styles.searchContainer}>
          <ErrorEmpty>
            <GamesPageHeading t={t} heading={heading}/>
          </ErrorEmpty>
          <h3 className={styles.gamesMatchingHeading}>{`${t("searchGames.gamesMatching")} "${searchBar.current.value}"`}</h3>
          <div className={styles.gamesList}>
            {games}
          </div>
        </div>
      </div>
    )
  }

}
