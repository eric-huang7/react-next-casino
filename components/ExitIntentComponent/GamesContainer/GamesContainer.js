import styles from '../../../styles/ExitIntentComponent/GamesContainer/GamesContainer.module.scss';
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {getTopGames} from "../../../redux/actions/games";
import {LoadingComponent} from "../../LoadingComponent/LoadingComponent";
import {GameItemContainer} from "./GameItemContainer";
import {useRouter} from "next/router";
import {freeGame, playPayGame} from "../../../redux/actions/playGames";


export const GamesContainer = ({t, exit}) => {
  const dispatch = useDispatch();
  const router = useRouter();
  const gamesList = useSelector((store) => store.games);
  const playGames = useSelector((state) => state.playGame);
  const user = useSelector((state) => state.authInfo);


  useEffect(() => {
    if (playGames.startGame?.game_link) {
      router.push(playGames.startGame.game_link);
    }
    if (playGames.freeGame?.game_link) {
      router.push(playGames.freeGame.game_link);
    }
  }, [playGames]);
  const playFunClickHandler = (gameData) => {
    let sendData = {
      game_provider_id: gameData.game_provider_id,
      game_id: gameData.game_provided_id
    }
    dispatch(freeGame(sendData));
  }
  const playGameClickHandler = (gameData) => {
    if (user.isAuthenticated && (user.balance.balances.length > 0)) {
      let is_bonus = false; // default val
      let bonus_id = null; // default val
      // game_provider_id, game_id, user_id, is_bonus, balance_id
      let userBalance = user.balance.balances.filter((el) => el.is_default !== "0");
      let sendData = {
        game_provider_id: gameData.game_provider_id,
        game_id: gameData.game_provided_id,
        user_id: user.user.user.id,
        is_bonus: is_bonus,
        balance_id: `${userBalance[0].id}`
      }
      dispatch(playPayGame(sendData));
    } else {
      console.log(gameData, 'GAME DATA!!!')
      console.log(user, "USER!!!S")
      return
    }
  }


  if (gamesList?.topGames?.success) {
    let gamesData = gamesList.topGames.results.slice(0, 3);


    return (
      <div className={styles.gamesMainContainer}>
        {gamesData.map((game) => {
          return (
            <GameItemContainer playGameClickHandler={playGameClickHandler} playFunClickHandler={playFunClickHandler} key={`${game.name} game key`} t={t} gameData={game} />
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