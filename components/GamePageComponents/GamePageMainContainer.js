import styles from '../../styles/GamePage/GamePage.module.scss';
import {Background} from "./Background";
import {PlayWindowWrapper} from "./PlayWindowWrapper";
import {useEffect, useRef, useState} from "react";
import {useDispatch} from "react-redux";
import {minimizeGameWindow} from "../../redux/actions/showGameWindow";
import {Header} from "../MainLayout/Header/Header";


export const GamePageMainContainer = ({t, isMinimized}) => {
  const dispatch = useDispatch();


  const [isFullScreen, setIsFullScreen] = useState(false);

  const minimizeHandler = () => {
    dispatch(minimizeGameWindow(!isMinimized));

    if (isMinimized) {
      setIsFullScreen(false);
    }
  }
  const gameWrapperRef = useRef();
  const handleOutsideClick = () => {
    const path = event.path || (event.composedPath && event.composedPath());
    if (!path.includes(gameWrapperRef.current)) {
      dispatch(minimizeGameWindow(true));
    }
  }

  useEffect(() => {
    document.body.addEventListener("click", handleOutsideClick);
    return () => {
      document.body.removeEventListener('click', handleOutsideClick);
    }
  }, []);

  return (
    <>
      <section ref={gameWrapperRef} className={`${styles.gamePageMainSection} ${isFullScreen ? styles.fullScreenMainSection : ""} ${isMinimized ? styles.minimizedMainSection : ''}`}>
        <Background
          isMinimized={isMinimized}
        />
        <PlayWindowWrapper
          isFullScreen={isFullScreen}
          setIsFullScreen={setIsFullScreen}
          minimizedHandler={minimizeHandler}
          isMinimized={isMinimized}
          t={t}
        />
      </section>
    </>

  )
}