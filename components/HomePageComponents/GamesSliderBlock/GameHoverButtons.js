import styles from '../../../styles/HomePage/GamesSliderBlock.module.scss'

import Link from "next/link";
import Router, {useRouter} from 'next/router'
import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {freeGame, playPayGame} from "../../../redux/actions/playGames";
import {login} from "../../../redux/actions/login";

export const GameHoverButtons = ({t, gameData}) => {
  const dispatch = useDispatch();
  const games = useSelector((state) => state.playGame);
  const user = useSelector((state) => state.authInfo);


  const router = useRouter()

  useEffect(() => {
    if (games.startGame?.game_link) {
      // router.push(games.startGame.game_link);
      window.location.replace(games.startGame.game_link)
      console.log(games.startGame.game_link)
    }
    if (games.freeGame?.game_link) {
      // router.push(games.freeGame.game_link);
      // window.open(games.freeGame.game_link);
      console.log(games.freeGame.game_link)
      window.location.replace(games.freeGame.game_link)
    }
  }, [games]);


  const playFunClickHandler = () => {

    dispatch(freeGame(gameData.game_provider_id, gameData.game_provided_id));

    console.log(games.freeGame)
  }
  const playGameClickHAndler = () => {
    if (user.isAuthenticated && (user.balance.balances.length > 0)) {
      console.log(gameData, 'GAME DATA!!!')
      console.log(user.user.user, "USER!!!S")
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

  return (
    <div className={styles.hoverWrapper}>
      <div
        onClick={playGameClickHAndler}
        className={`${styles.playButton} ${user.isAuthenticated ? "" : styles.playButtonInactive}`}>
          <span>{t('gameButtons.play')}</span>
      </div>
      <div onClick={playFunClickHandler} className={styles.playForFunButton}>
          <span>{t('gameButtons.playForFun')}</span>
      </div>
    </div>
  )
}