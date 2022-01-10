import styles from '../../styles/FooterArea/FooterArea.module.scss';
import Image from "next/image";
import {GamesContainerNavigation} from "./GamesContainerNavigation";
import {useDispatch, useSelector} from "react-redux";
import {GamesSlider} from "./GamesSlider";
import {useEffect} from "react";
import {useRouter} from "next/router";
import {freeGame, playPayGame} from "../../redux/actions/playGames";

export const GamesContainer = ({t, activeSlots, activeTime, setActiveSlots, setActiveTime, footerArea}) => {
  const games = useSelector((store) => store.games);
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

  // console.log(games)
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
        <GamesSlider
          playFunClickHandler={playFunClickHandler}
          playGameClickHandler={playGameClickHandler}
          activeSlots={activeSlots}
          activeTime={activeTime}
          userInfo={userInfo}
          gamesData={games}
          t={t}
        />
      </div>
    </div>
  )
}