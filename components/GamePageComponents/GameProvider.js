import {GamePageMainContainer} from "./GamePageMainContainer";
import {useTranslation} from "next-i18next";
import {useDispatch, useSelector} from "react-redux";
import {useRouter} from "next/router";
import {useEffect, useRef, useState} from "react";
import {minimizeGameWindow, showGameWindow} from "../../redux/actions/showGameWindow";
import {PlayWindowWrapper} from "./PlayWindowWrapper";
import {deleteGameLink} from "../../redux/actions/playGames";


export const GameProvider = ({children}) => {
  const {t} = useTranslation('common');
  const router = useRouter();
  const dispatch = useDispatch();

  const showPlayWindow = useSelector((store) => store.showPlayWindowReducer);
  const playGames = useSelector((state) => state.playGame);

  console.log(showPlayWindow, playGames, '$$$$$$$$$$')
  const [isFullScreen, setIsFullScreen] = useState(false);

  const minimizeHandler = () => {
    dispatch(minimizeGameWindow(!showPlayWindow.isMinimizePlayWindow));

    if (showPlayWindow.isMinimizePlayWindow) {
      setIsFullScreen(false);
      router.push(`/game/${playGames.gameName}`)
    }
  }
  const closeGameHandler = () => {
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
      setIsFullScreen(false);
    }
    if (router.pathname.slice(1).split('/')[0] === 'game') {
      dispatch(minimizeGameWindow(false));
    }
    console.log(router.pathname.slice(1).split('/'), '%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%');
  }, [router])


  return (
    <>
      {children}
      {
        showPlayWindow.isShowPlayWindow
          ?
          <PlayWindowWrapper
            isFullScreen={isFullScreen}
            setIsFullScreen={setIsFullScreen}
            minimizedHandler={minimizeHandler}
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