import styles from '../../styles/GamesPage/GamesPage.module.scss';
import {GamesItem} from "./GamesItem";
import {useDispatch, useSelector} from "react-redux";
import {GamesPageHeading} from "./GamesPageHeading";
import {MoreButton} from "./MoreButton";
import {useRouter} from "next/router";
import {useEffect, useState} from "react";
import {deleteGameLink, freeGame, playPayGame} from "../../redux/actions/playGames";
import {
  allProvidersURL,
  chosenProviderURL,
  jackpotGames_url,
  newGames_url,
  tableGames_url,
  topGames_url
} from "../../helpers/gamesURL";
import {setGames} from "../../redux/actions/games";
import {showGameWindow} from "../../redux/actions/showGameWindow";
import {showRegister} from "../../redux/actions/registerShow";
import {showExitIntentPopup} from "../../redux/actions/showPopups";


export const GamesContainer = ({t, gamesData, heading, setRequestGamesData, pageCounter, setPageCounter, isShowMoreButton, setIsShowMoreButton, totalRows, setTotal_rows, gamesError}) => {
  const userInfo = useSelector((store) => store.authInfo);
  const playGames = useSelector((state) => state.playGame);


  const dispatch = useDispatch();
  const router = useRouter();

  useEffect(() => {
    return () => {
      setPageCounter(0);
      setIsShowMoreButton(true);
    }
  },[])

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



  let games = gamesData.map((el, ind) => {
    return <GamesItem
      showFrame={false}
      playFunClickHandler={playFunClickHandler}
      playGameClickHandler={playGameClickHandler}
      key={`${el.id} ${el.name} game page`}
      userInfo={userInfo}
      t={t}
      gameData={el}
    />
  })

if (gamesError) {
  return (
      <div className={styles.gamesMainContainer}>
        <GamesPageHeading heading={heading} t={t} />
        <div className={styles.gamesItemsContainer}>
          <h2 className={styles.errorMessage}>{t(gamesError)}</h2>
        </div>
      </div>
  )
} else {
  return (
    <>
      <div className={styles.gamesMainContainer}>
        <GamesPageHeading heading={heading} t={t} />
        <div className={styles.gamesItemsContainer}>
          {games}
        </div>
      </div>
      <MoreButton
        heading={heading}
        setRequestGamesData={setRequestGamesData}
        gamesData={gamesData}
        isShowMoreButton={isShowMoreButton}
        pageCounter={pageCounter}
        setPageCounter={setPageCounter}
        t={t}
        setTotal_rows={setTotal_rows}
      />
    </>
  )
}

}

