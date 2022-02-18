import styles from '../../../styles/NotificationsPage/SideBlockNotifyPage.module.scss';

import {PlayGameHoverButtons} from "./PlayGameHoverButtons";
import {gameUrl} from "../../../helpers/imageUrl";


export const GameItem = ({gameData, isLoading, t, user, playFunClickHandler, playGameClickHandler}) => {

  return (
    <div className={styles.gameItemWrapper}>
      <div className={styles.gameImgBlock}>
        <img src={gameUrl(gameData.id)} alt={`game image ${gameData.name}`}/>
      </div>
      <div className={styles.gameNameBlock}>
        <p>{gameData.name}</p>
      </div>
      <PlayGameHoverButtons
        gameData={gameData}
        playFunClickHandler={playFunClickHandler}
        playGameClickHandler={playGameClickHandler}
        user={user}
        t={t}
      />
    </div>
  )
}