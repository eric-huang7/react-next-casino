import {useEffect, useState} from "react";
import {deleteGameLink, freeGame, playPayGame} from "../redux/playGame/action";
import {showGameWindow} from "../redux/ui/action";
import {useDispatch, useSelector} from "react-redux";
import {useRouter} from "next/router";
import {useMediaQuery} from "@chakra-ui/media-query";

export default function usePlayGame() {
  const [isMobile] = useMediaQuery('(max-width: 30em)')

  const dispatch = useDispatch();
  const playGames = useSelector((state) => state.playGame);
  const user = useSelector((state) => state.authInfo);

  const router = useRouter()

  useEffect(() => {
    if (playGames.startGame?.game_link) {
      if (isMobile) {
        router.push(playGames.startGame.game_link);
      }
    }

    if (playGames.freeGame?.game_link) {
      if (isMobile) {
        router.push(playGames.freeGame.game_link);
      }
    }
  }, [playGames]);

  const playFun = (gameData) => {

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
      } else if (!isMobile) {
        router.push(`/game/${gameData.name ? gameData.name : "..."}`).then((data) => {
          dispatch(showGameWindow(true));
        });
      }
    });
  }
  const playGame = (gameData, user) => {
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
        } else if (!isMobile) {
          router.push(`/game/${gameData.name ? gameData.name : "..."}`).then((data) => {
            dispatch(showGameWindow(true));
          });
        }
      });
    } else {

    }
  }

  return {playFun, playGame}
}
