import styles from '../../styles/FooterArea/FooterArea.module.scss';

import {GameHoverBlock} from "./GameHoverBlock";
import {gameUrl} from "../../helpers/imageUrl";



export const GamesItem = ({t, gameData, userInfo, playFunClickHandler, playGameClickHandler, showFrame}) => {


  return (
    <div className={`${styles.gameItemWrapper} ${showFrame ? styles.frame : ''}`}>
      <img
        src={gameUrl(gameData.id)}
        // layout={"fill"}
        alt={`game image ${gameData.name}`}
      />
      <GameHoverBlock
        t={t}
        gameData={gameData}
        user={userInfo}
        playFunClickHandler={playFunClickHandler}
        playGameClickHAndler={playGameClickHandler}
      />
    </div>
  )
}