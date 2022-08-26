import styles from "../../../styles/GamePage/GamePage.module.scss";
import {useEffect} from "react";

export const GameWindow = ({gameUrl, closeGameHandler}) => {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('message', handleMessage)

      return () => {
        window.removeEventListener('message', handleMessage)
      }
    }
  }, [])

  const handleMessage = (event) => {
    const message = event.data
    if (
      message === "closeInnerFrame" ||
      message === "closeGame" || // endorphina
      message?.exi_fMessageType_str === "exi_onHomeUserAction" // nucleus
    ) {
      closeGameHandler()
    }
  }

  return <iframe id={'currencyIcons'} className={styles.gameWindow} src={gameUrl} frameBorder="0"></iframe>
}

