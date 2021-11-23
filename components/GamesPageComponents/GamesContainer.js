import styles from '../../styles/GamesPage/GamesPage.module.scss';
import {GamesItem} from "./GamesItem";
import {useDispatch, useSelector} from "react-redux";
import {GamesPageHeading} from "./GamesPageHeading";
import {MoreButton} from "./MoreButton";
import {useRouter} from "next/router";
import {useEffect, useState} from "react";
import {freeGame, playPayGame} from "../../redux/actions/playGames";
import {
  allProvidersURL,
  chosenProviderURL,
  jackpotGames_url,
  newGames_url,
  tableGames_url,
  topGames_url
} from "../../helpers/gamesURL";
import {setGames} from "../../redux/actions/games";


export const GamesContainer = ({t, gamesData, heading, setRequestGamesData, pageCounter, setPageCounter, isShowMoreButton, setIsShowMoreButton, totalRows}) => {
  const userInfo = useSelector((store) => store.authInfo);
  const playGames = useSelector((state) => state.playGame);


  const dispatch = useDispatch();
  const router = useRouter();
  console.log(pageCounter, totalRows, "###################")
  useEffect(() => {
    return () => {
      console.log(heading)
      setPageCounter(0);
      setIsShowMoreButton(true);
    }
  },[])

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
    dispatch(freeGame(gameData.game_provider_id, gameData.game_provided_id));
  }
  const playGameClickHandler = (gameData, user) => {
    if ((user.balance.balances.length > 0)) {
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

  // useEffect(async () => {
  //
  //   if (pageCounter > 0) {
  //
  //   }
  //
  // }, [pageCounter])





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
      />
    </>
  )
}

