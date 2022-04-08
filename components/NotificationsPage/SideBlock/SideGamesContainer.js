import styles from '../../../styles/NotificationsPage/SideBlockNotifyPage.module.scss'
import { GameItem } from './GameItem'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getLatestGames } from '../../../redux/games/action'
import { useRouter } from 'next/router'
import { deleteGameLink, freeGame, playPayGame } from '../../../redux/playGame/action'
import { showGameWindow } from '../../../redux/actions/showGameWindow'
import ErrorEmpty from '../../ErrorBoundaryComponents/ErrorEmpty'

export const SideGamesContainer = ({ t }) => {
  const dispatch = useDispatch()
  const router = useRouter()
  let userData = useSelector((store) => store.authInfo)
  let gamesStoredData = useSelector((store) => store.games)
  const playGames = useSelector((state) => state.playGame)

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

  const playFunClickHandler = (gameData) => {
    let sendData = {
      game_provider_id: gameData.game_provider_id,
      game_id: gameData.game_provided_id
    }

    if (typeof window !== 'undefined') {
      let saveData = JSON.stringify({
        data: sendData,
        gameName: gameData.name ? gameData.name : '...'
      })

      localStorage.setItem('user_last_game', saveData)
    }

    dispatch(deleteGameLink())
    dispatch(freeGame({
      data: sendData,
      gameName: gameData.name ? gameData.name : '...'
    }))

    if (window.innerWidth > 1065) {
      router.push(`/game/${gameData.name ? gameData.name : '...'}`).then((data) => {
        dispatch(showGameWindow(true))
      })
    }

  }
  const playGameClickHandler = (gameData, user) => {
    if (user.isAuthenticated && (user.balance.balances.length > 0)) {
      let is_bonus = false // default val
      let bonus_id = null // default val
      let userBalance = user.balance.balances.filter((el) => el.is_default !== '0')
      let sendData = {
        game_provider_id: gameData.game_provider_id,
        game_id: gameData.game_provided_id,
        user_id: user.user.user.id,
        is_bonus: is_bonus,
        balance_id: `${userBalance[0].id}`
      }
      if (typeof window !== 'undefined') {
        let saveData = JSON.stringify({
          data: {
            game_provider_id: sendData.game_provider_id,
            game_id: sendData.game_provided_id
          },
          gameName: gameData.name ? gameData.name : '...'
        })
        localStorage.setItem('user_last_game', saveData)
      }
      // game_provider_id, game_id, user_id, is_bonus, balance_id

      dispatch(deleteGameLink())
      dispatch(playPayGame({
        data: sendData,
        gameName: gameData.name ? gameData.name : '...'
      }))
      if (window.innerWidth > 1065) {
        router.push(`/game/${gameData.name ? gameData.name : '...'}`).then((data) => {
          dispatch(showGameWindow(true))
        })
      }
    } else {

    }
  }

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
            playFunClickHandler={playFunClickHandler}
            playGameClickHandler={playGameClickHandler}
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
            playFunClickHandler={playFunClickHandler}
            playGameClickHandler={playGameClickHandler}
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
