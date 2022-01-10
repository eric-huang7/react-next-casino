import styles from '../../../styles/ExitIntentComponent/GamesContainer/GamesContainer.module.scss';
import Image from "next/image";
import {gameUrl} from "../../../helpers/imageUrl";
import {GameImage} from "./GameImage";


export const GameItemContainer = ({t, gameData, playFunClickHandler, playGameClickHandler}) => {

  let imgSrc = gameUrl(gameData.id);

  const playFunHandler = () => {
    playFunClickHandler(gameData);
  }
  const playPaidHandler = () => {
    playGameClickHandler(gameData);
  }

  return (
    <div className={styles.gameItemContainer}>
      <GameImage imgSrc={imgSrc} />

      <div className={styles.gameInfoContainer}>
        <h3>{gameData.name}</h3>
        <div className={styles.gameButtonsContainer}>
          <button onClick={() => playPaidHandler()} className={styles.playNowButton}>{"Play Now"}</button>
          <button onClick={() => playFunHandler()} className={styles.playFunButton}>{"Play For Fun"}</button>
        </div>
      </div>
    </div>
  )
}