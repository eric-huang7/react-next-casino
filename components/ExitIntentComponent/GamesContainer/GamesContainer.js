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


export const GamesContainer = ({t, exit}) => {
  const dispatch = useDispatch();
  const router = useRouter();
  const gamesList = useSelector((store) => store.games);
  const playGames = useSelector((state) => state.playGame);
  const user = useSelector((state) => state.authInfo);


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
    })).then((res) => {
      if (res?.error) {
        // TODO show notification
      } else if (window.innerWidth > 1065) {
        router.push(`/game/${gameData.name ? gameData.name : "..."}`).then((data) => {
          dispatch(showGameWindow(true));
        });
      }
    });
  }
  const playGameClickHandler = (gameData) => {
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
      })).then((res) => {
        if (res?.error) {
          // TODO show notification
        } else if (window.innerWidth > 1065) {
          router.push(`/game/${gameData.name ? gameData.name : "..."}`).then((data) => {
            dispatch(showGameWindow(true));
          });
        }
      });
    } else {
        dispatch(showRegister(true));
        dispatch(showExitIntentPopup(false));
    }
  }


  if (gamesList?.topGames?.success) {
    let gamesData = gamesList.topGames.results.slice(0, 3);


    return (
      <div className={styles.gamesMainContainer}>
        {gamesData.map((game) => {
          return (
            <GameItemContainer
              playGameClickHandler={playGameClickHandler}
              playFunClickHandler={playFunClickHandler}
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
