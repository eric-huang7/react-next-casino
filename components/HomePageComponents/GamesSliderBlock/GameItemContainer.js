import styles from '../../../styles/HomePage/GamesSliderBlock.module.scss';
import {GameHoverButtons} from "./GameHoverButtons";
import Image from "next/image";
import {urlGen} from "./url";


export const GameItemContainer = ({ind, gameData, t, playFunClickHandler, playGameClickHAndler, user}) => {


  return (

      <div className={styles.gameItemWrapper}>
        <GameHoverButtons
          playGameClickHAndler={playGameClickHAndler}
          playFunClickHandler={playFunClickHandler}
          t={t}
          gameData={gameData}
          user={user}
        />
        <Image
          // placeholder={"blur"}
          // blurDataURL={'/assets/img/empty.webp'}
          layout={"fill"}
          key={gameData.id}
          src={urlGen(gameData.id)}
          alt={`Game ${gameData.name}`}/>
      </div>

  )
}

