import styles from '../../styles/FooterArea/FooterArea.module.scss';
import Image from "next/image";
import {GamesContainerNavigation} from "./GamesContainerNavigation";
import {useDispatch, useSelector} from "react-redux";
import {GamesSlider} from "./GamesSlider";
import {useEffect} from "react";
import {useRouter} from "next/router";
import {deleteGameLink, freeGame, playPayGame} from "../../redux/playGame/action";
import useWindowDimensions from "../../hooks/useWindowDimensions";
import {showGameWindow} from "../../redux/ui/action";
import GameSliderErrorHandler from "./ErrorHandler/GameSliderErrorHandler";

export const GamesContainer = ({t, activeSlots, activeTime, setActiveSlots, setActiveTime, footerArea}) => {
  const games = useSelector((store) => store.games);
  const userInfo = useSelector((store) => store.authInfo);
  const playGames = useSelector((state) => state.playGame);

  const dispatch = useDispatch();
  const router = useRouter();

  const {height, width} = useWindowDimensions();

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
      })).then(() => {
        if (window.innerWidth > 1065) {
          router.push(`/game/${gameData.name ? gameData.name : "..."}`).then((data) => {
            dispatch(showGameWindow(true));
          });
        }
      });
    } else {

    }
  }

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
        <GameSliderErrorHandler>
          <GamesSlider
            playFunClickHandler={playFunClickHandler}
            playGameClickHandler={playGameClickHandler}
            activeSlots={activeSlots}
            activeTime={activeTime}
            userInfo={userInfo}
            gamesData={games}
            t={t}
          />
        </GameSliderErrorHandler>
      </div>
    </div>
  )
}
