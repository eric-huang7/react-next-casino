import styles from '../../../styles/NotificationsPage/SideBlockNotifyPage.module.scss'
import { GameItem } from './GameItem'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getLatestGames } from '../../../redux/games/action'
import { useRouter } from 'next/router'
import { deleteGameLink, freeGame, playPayGame } from '../../../redux/playGame/action'
import { showGameWindow } from '../../../redux/ui/action'
import ErrorEmpty from '../../ErrorBoundaryComponents/ErrorEmpty'
import usePlayGame from "../../../hooks/usePlayGame";

export const SideGamesContainer = ({ t }) => {
  const dispatch = useDispatch()
  const router = useRouter()
  let userData = useSelector((store) => store.authInfo)
  let gamesStoredData = useSelector((store) => store.games)
  const playGames = useSelector((state) => state.playGame)
  const {playFun, playGame} = usePlayGame();

  useEffect(() => {
    if (playGames.startGame?.game_link) {
      if (typeof window !== 'undefined') {
        if (window.innerWidth <= 1065) {
          router.push(playGames.startGame.game_link)
        }
      }
    }

    if (playGames.freeGame?.game_link) {
      if (typeof window !== 'undefined') {
        if (window.innerWidth <= 1065) {
          router.push(playGames.freeGame.game_link)
        }
      }
    }

  }, [playGames])

  useEffect(() => {
    if (userData.isAuthenticated) {
      dispatch(getLatestGames(userData.user.user.id))
    }

  }, [userData.isAuthenticated])

  let gamesArr = []
  if (gamesStoredData?.latestGames?.results?.length === 0) {
    gamesArr = gamesStoredData?.games?.results.map((el) => {
      return (
        <ErrorEmpty key={`game id key ${el.id}`}>
          <GameItem
            t={t}
            user={userData}
            key={`game id key ${el.id}`}
            gameData={el}
            isLoading={gamesStoredData.loadingLatestGames}
            playFunClickHandler={playFun}
            playGameClickHandler={playGame}
          />
        </ErrorEmpty>

      )
    }).slice(0, 3)
  } else {
    gamesArr = gamesStoredData?.games?.results.map((el) => {
      return (
        <ErrorEmpty key={`game id key ${el.id}`}>
          <GameItem
            t={t}
            user={userData}
            key={`game id key ${el.id}`}
            gameData={el}
            isLoading={gamesStoredData.loadingLatestGames}
            playFunClickHandler={playFun}
            playGameClickHandler={playGame}
          />
        </ErrorEmpty>
      )
    }).slice(0, 3)
  }

  return (
    <div className={styles.sideGamesWrapper}>
      {
        gamesArr
      }
    </div>
  )
}
