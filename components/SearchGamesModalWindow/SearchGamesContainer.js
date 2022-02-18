import styles from "../../styles/SearchModalWindow/SearchModalWindow.module.scss";
import {GamesItem} from "../GamesPageComponents/GamesItem";
import {useDispatch, useSelector} from "react-redux";
import {useRouter} from "next/router";
import {useEffect} from "react";
import {deleteGameLink, freeGame, playPayGame} from "../../redux/actions/playGames";
import {TextForEmpty} from "./TextForEmpty";
import {GamesPageHeading} from "../GamesPageComponents/GamesPageHeading";
import {showGameWindow} from "../../redux/actions/showGameWindow";
import GamesItemErrorHandler from '../GamesPageComponents/GamesPageErrorHandler/GameItemErrorHandler'
import ErrorEmpty from '../ErrorBoundaryComponents/ErrorEmpty'


export const SearchGamesContainer = ({t, searchGames, searchBar, heading}) => {
  const userInfo = useSelector((store) => store.authInfo);
  const playGames = useSelector((state) => state.playGame);


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


  const playFunClickHandler = (gameData) => {

    let sendData = {
      game_provider_id: gameData.game_provider_id,
      game_id: gameData.game_provided_id
    }

    if (typeof window !== "undefined") {
      let saveData = JSON.stringify({
        data: sendData,
        gameName: gameData.name ? gameData.name : "..."
      })

      localStorage.setItem("user_last_game", saveData);
    }

    dispatch(deleteGameLink());
    dispatch(freeGame({
      data: sendData,
      gameName: gameData.name ? gameData.name : "..."
    }))

    if (window.innerWidth > 1065) {
      router.push(`/game/${gameData.name ? gameData.name : "..."}`).then((data) => {
        dispatch(showGameWindow(true));
      });
    }
  }
  const playGameClickHandler = (gameData, user) => {
    if (user.isAuthenticated && (user.balance.balances.length > 0)) {
      let is_bonus = false; // default val
      let bonus_id = null; // default val
      let userBalance = user.balance.balances.filter((el) => el.is_default !== "0");
      let sendData = {
        game_provider_id: gameData.game_provider_id,
        game_id: gameData.game_provided_id,
        user_id: user.user.user.id,
        is_bonus: is_bonus,
        balance_id: `${userBalance[0].id}`
      }
      if (typeof window !== "undefined") {
        let saveData = JSON.stringify({
          data: {
            game_provider_id: sendData.game_provider_id,
            game_id: sendData.game_provided_id
          },
          gameName: gameData.name ? gameData.name : "..."
        })
        localStorage.setItem("user_last_game", saveData);
      }
      // game_provider_id, game_id, user_id, is_bonus, balance_id

      dispatch(deleteGameLink());
      dispatch(playPayGame({
        data : sendData,
        gameName: gameData.name ? gameData.name : "..."
      }));
      if (window.innerWidth > 1065) {
        router.push(`/game/${gameData.name ? gameData.name : "..."}`).then((data) => {
          dispatch(showGameWindow(true));
        });
      }
    } else {

    }
  }

  let games = searchGames.map((el) => {
    return (
      <GamesItemErrorHandler key={`${el.id} ${el.name} game page`}>
        <GamesItem
          showFrame={false}
          playFunClickHandler={playFunClickHandler}
          playGameClickHandler={playGameClickHandler}
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