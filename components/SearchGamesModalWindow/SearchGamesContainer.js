import styles from "../../styles/SearchModalWindow/SearchModalWindow.module.scss";
import {GamesItem} from "../GamesPageComponents/GamesItem";
import {useDispatch, useSelector} from "react-redux";
import {useRouter} from "next/router";
import {useEffect} from "react";
import {freeGame, playPayGame} from "../../redux/actions/playGames";
import {TextForEmpty} from "./TextForEmpty";
import {GamesPageHeading} from "../GamesPageComponents/GamesPageHeading";


export const SearchGamesContainer = ({t, searchGames, searchBar, heading}) => {
  const userInfo = useSelector((store) => store.authInfo);
  const playGames = useSelector((state) => state.playGame);


  const dispatch = useDispatch();
  const router = useRouter();

  useEffect(() => {
    if (playGames.startGame?.game_link) {
      router.push(playGames.startGame.game_link);
      console.log(playGames.startGame.game_link)
    }
    if (playGames.freeGame?.game_link) {
      router.push(playGames.freeGame.game_link);
      console.log(playGames.freeGame.game_link)
    }
  }, [playGames]);
  const playFunClickHandler = (gameData) => {
    let sendData = {
      game_provider_id: gameData.game_provider_id,
      game_id: gameData.game_provided_id
    }
    dispatch(freeGame(sendData));
  }
  const playGameClickHandler = (gameData, user) => {
    if ((user.balance.balances.length > 0)) {
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
      console.log('ERROR no balance', user.balance);
      console.log(user, "USER!!!S")
      return
    }
  }

  console.log(searchGames, 'modal window');

  let games = searchGames.map((el) => {
    return <GamesItem showFrame={false} playFunClickHandler={playFunClickHandler}
                      playGameClickHandler={playGameClickHandler} key={`${el.id} ${el.name} game page`}
                      userInfo={userInfo} t={t} gameData={el}/>
  })

  if (searchBar.current.value !== "" && games.length === 0) {
    return (
      <TextForEmpty t={t} text={"searchGames.nothingFound"}/>
    )
  } else {
    return (
      <div className={styles.gamesWrapper}>
        <div className={styles.searchContainer}>
          <GamesPageHeading t={t} heading={heading}/>
          <h3 className={styles.gamesMatchingHeading}>{`${t("searchGames.gamesMatching")} "${searchBar.current.value}"`}</h3>
          <div className={styles.gamesList}>
            {games}
          </div>
        </div>
      </div>
    )
  }

}