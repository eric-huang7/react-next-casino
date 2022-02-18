import styles from '../../styles/GamesPage/GamesPage.module.scss';

import {GamesHoverButtons} from "./GamesHoverButtons";
import {gameUrl} from "../../helpers/imageUrl";

export const GamesItem = ({t, gameData, userInfo, playFunClickHandler, playGameClickHandler, showFrame}) => {


  return (
    <div className={`${styles.gameItemWrapper} ${showFrame ? styles.frame : ''}`}>
        <img
          src={gameUrl(gameData.id)}
          // layout={"fill"}
          alt={`game image ${gameData.name}`}
        />
      <GamesHoverButtons playFunClickHandler={playFunClickHandler} playGameClickHAndler={playGameClickHandler} t={t} gameData={gameData} user={userInfo} />
    </div>
  )
}