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

  return <iframe id={'currencyIcons'} width="100%" height="100%" src={gameUrl} frameBorder="0"></iframe>
}

