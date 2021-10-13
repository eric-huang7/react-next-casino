import styles from '../../../styles/HomePage/GamesSliderBlock.module.scss'

import Link from "next/link";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {freeGame, playPayGame} from "../../../redux/actions/playGames";

export const GameHoverButtons = ({t, gameData}) => {
  const games = useSelector((state) => state.playGame);
  const user = useSelector((state) => state.authInfo);

  useEffect(() => {
    if (games.startGame?.game_link) {
      window.location.replace(games.startGame.game_link)
    }
    if (games.freeGame?.game_link) {
      window.location.replace(games.freeGame.game_link)
    }
  }, [games])

  const dispatch = useDispatch();

  const playFunClickHandler = () => {
    dispatch(freeGame(gameData.game_provider_id, gameData.game_provided_id))
  }
  const playGameClickHAndler = () => {
    if (user.isAuthenticated && (user.balance.balances.length > 0)) {
      console.log(gameData, 'GAME DATA!!!')
      console.log(user.user.user, "USER!!!S")
      console.log(user, "USER!!!S bonus")
      let is_bonus = false; // default val
      let bonus_id = null; // default val
      // game_provider_id, game_id, user_id, is_bonus, balance_id
      dispatch(playPayGame(gameData.game_provider_id, gameData.game_provided_id, user.user.user.id, is_bonus, user.balance.balances[0].id));
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
        {/*<Link  href={'#'}>*/}
          <span>{t('gameButtons.play')}</span>
        {/*</Link>*/}
      </div>
      <div onClick={playFunClickHandler} className={styles.playForFunButton}>
        {/*<Link href={'#Fun'}>*/}
          <span>{t('gameButtons.playForFun')}</span>
        {/*</Link>*/}
      </div>
    </div>
  )
}