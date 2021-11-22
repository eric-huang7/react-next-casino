import styles from '../../styles/GamesPage/GamesPage.module.scss';
import {urlGen} from "../HomePageComponents/GamesSliderBlock/url";
import {GameHoverButtons} from "../HomePageComponents/GamesSliderBlock/GameHoverButtons";
import {GamesHoverButtons} from "./GamesHoverButtons";

export const GamesItem = ({t, gameData, userInfo, playFunClickHandler, playGameClickHandler, showFrame}) => {


  return (
    <div className={`${styles.gameItemWrapper} ${showFrame ? styles.frame : ''}`}>
        <img
          src={urlGen(gameData.id)}
          // layout={"fill"}
          alt={`game image ${gameData.name}`}
        />
      <GamesHoverButtons playFunClickHandler={playFunClickHandler} playGameClickHAndler={playGameClickHandler} t={t} gameData={gameData} user={userInfo} />
    </div>
  )
}