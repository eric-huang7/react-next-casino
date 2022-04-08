import {GamePageMainContainer} from "./GamePageMainContainer";
import {useTranslation} from "next-i18next";
import {useDispatch, useSelector} from "react-redux";
import {useRouter} from "next/router";
import {useEffect, useRef, useState} from "react";
import {fullScreenGameWindow, minimizeGameWindow, showGameWindow} from "../../redux/actions/showGameWindow";
import {PlayWindowWrapper} from "./PlayWindowWrapper";
import {deleteGameLink} from "../../redux/playGame/action";


export const GameProvider = ({children}) => {
  const {t} = useTranslation('common');
  const router = useRouter();
  const dispatch = useDispatch();

  const showPlayWindow = useSelector((store) => store.showPlayWindowReducer);
  const playGames = useSelector((state) => state.playGame);

  const fullscreenClickHandler = () => {
    dispatch(fullScreenGameWindow(!showPlayWindow.isFullScreen));
  }

  const minimizeHandler = () => {
    router.back();
    dispatch(minimizeGameWindow(true));
    dispatch(fullScreenGameWindow(false));
  }

  const maximizeHandler = () => {
    router.push(`/game/${playGames.gameName}`);
  }

  const closeGameHandler = () => {
    if (router.pathname.slice(1).split('/')[0] === 'game') {
      router.back();
    }

    dispatch(showGameWindow(false));
    dispatch(minimizeGameWindow(false));
    dispatch(deleteGameLink());
  }

  useEffect(() => {
    if (router.pathname.slice(1).split('/')[0] === 'accounts') {
      closeGameHandler();
    }
    if (router.pathname.slice(1).split('/')[0] !== 'game') {
      dispatch(minimizeGameWindow(true));
      dispatch(fullScreenGameWindow(false));
    }
    if (router.pathname.slice(1).split('/')[0] === 'game') {
      dispatch(minimizeGameWindow(false));
    }
  }, [router])


  return (
    <>
      {children}
      {
        showPlayWindow.isShowPlayWindow
          ?
          <PlayWindowWrapper
            isFullScreen={showPlayWindow.isFullScreen}
            fullscreenClickHandler={fullscreenClickHandler}
            minimizedHandler={minimizeHandler}
            maximizeHandler={maximizeHandler}
            isMinimized={showPlayWindow.isMinimizePlayWindow}
            closeGameHandler={closeGameHandler}
            t={t}
            playGames={playGames}
          />
          :
          <></>
      }

    </>
  )

}
