import styles from '../../styles/GamePage/GamePage.module.scss';
import {Background} from "./Background";
import {PlayWindowWrapper} from "./PlayWindowWrapper";
import {useEffect, useState} from "react";


export const GamePageMainContainer = ({t, isShow}) => {

  // useEffect(() => {
  //
  //   const timer = setTimeout(() => {
  //     if (isShow) {
  //       document.body.style.overflowY = "hidden"
  //     } else {
  //       document.body.style.overflowY = "auto"
  //     }
  //   }, 1000);
  //
  //
  //   return () => {
  //     clearTimeout(timer);
  //     document.body.style.overflowY = "auto"
  //   }
  // }, [])


  const [isFullScreen, setIsFullScreen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);

  return (
    <section className={`${styles.gamePageMainSection} ${isFullScreen ? styles.fullScreenMainSection : ""} ${isMinimized ? styles.minimizedMainSection : ''}`}>
      <Background
        isMinimized={isMinimized}
      />
      <PlayWindowWrapper
      isFullScreen={isFullScreen}
      setIsFullScreen={setIsFullScreen}
      setIsMinimized={setIsMinimized}
      isMinimized={isMinimized}
      />
    </section>
  )
}