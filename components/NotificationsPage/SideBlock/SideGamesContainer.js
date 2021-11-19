import styles from '../../../styles/NotificationsPage/SideBlockNotifyPage.module.scss';
import {GameItem} from "./GameItem";
import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getGames, getLatestGames} from "../../../redux/actions/games";
import {useRouter} from "next/router";
import {freeGame, playPayGame} from "../../../redux/actions/playGames";


export const SideGamesContainer = ({t}) => {
  const dispatch = useDispatch();
  const router = useRouter();
  let userData = useSelector((store) => store.authInfo);
  let gamesStoredData = useSelector((store) => store.games);
  const playGames = useSelector((state) => state.playGame);

  useEffect(() => {
    if (playGames.startGame?.game_link) {
      router.push(playGames.startGame.game_link);
      // window.location.replace(games.startGame.game_link)
      console.log(playGames.startGame.game_link)
    }
    if (playGames.freeGame?.game_link) {
      router.push(playGames.freeGame.game_link);
      // window.open(games.freeGame.game_link);
      console.log(playGames.freeGame.game_link)
      // window.location.replace(games.freeGame.game_link)
    }
  }, [playGames]);
  const playFunClickHandler = (gameData) => {
    dispatch(freeGame(gameData.game_provider_id, gameData.game_provided_id));
  }
  const playGameClickHandler = (gameData, user) => {
    if ((user.balance.balances.length > 0)) {
      console.log(gameData, 'GAME DATA!!!!!')
      console.log(user.user.user, "USER!!!!!S")
      console.log(user, "USER!!!S bonus");
      console.log(user.balance.balances, 'balances ID')
      let is_bonus = false; // default val
      let bonus_id = null; // default val
      // game_provider_id, game_id, user_id, is_bonus, balance_id
      dispatch(playPayGame(gameData.game_provider_id, gameData.game_provided_id, user.user.user.id, is_bonus, `${user.balance.balances[0].id}`));
    } else {
      console.log(gameData, 'GAME DATA!!!')
      console.log('ERROR no balance', user.balance);
      console.log(user, "USER!!!S")
      return
    }
  }

  const [gamesData, setGamesData] = useState([])
  useEffect(() => {
    if (userData.isAuthenticated) {
      dispatch(getLatestGames(userData.user.user.id));
    }

  },[userData.isAuthenticated])


let gamesArr = [];
  if (gamesStoredData.latestGames?.results.length === 0) {
    gamesArr = gamesStoredData.games.results.map((el) => {
      return (
        <GameItem
          t={t}
          user={userData}
          key={`game id key ${el.id}`}
          gameData={el}
          isLoading={gamesStoredData.loadingLatestGames}
          playFunClickHandler={playFunClickHandler}
          playGameClickHandler={playGameClickHandler}
        />
      )
    }).slice(0, 3);
  } else {
    gamesArr = gamesStoredData.games?.results.map((el) => {
      return (
        <GameItem
          t={t}
          user={userData}
          key={`game id key ${el.id}`}
          gameData={el}
          isLoading={gamesStoredData.loadingLatestGames}
          playFunClickHandler={playFunClickHandler}
          playGameClickHandler={playGameClickHandler}
        />
      )
    }).slice(0, 3);
  }

  return (
    <div className={styles.sideGamesWrapper}>
      {
        gamesArr
      }
    </div>
  )
}