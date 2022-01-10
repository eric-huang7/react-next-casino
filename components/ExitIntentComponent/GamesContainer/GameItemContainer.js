import styles from '../../../styles/ExitIntentComponent/GamesContainer/GamesContainer.module.scss';
import Image from "next/image";
import {gameUrl} from "../../../helpers/ImageUrl";


export const GameItemContainer = ({t, gameData, playFunClickHandler, playGameClickHandler}) => {

  let ImgSrc = gameUrl(gameData.id);

  const playFunHandler = () => {
    playFunClickHandler(gameData);
  }
  const playPaidHandler = () => {
    playGameClickHandler(gameData);
  }

  return (
    <div className={styles.gameItemContainer}>
      <div className={styles.gameImageContainer}>
        <img
          alt={'game image'}
          // layout={'fill'}
          // height={30}
          // width={30}
          src={ImgSrc}
        />
      </div>

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