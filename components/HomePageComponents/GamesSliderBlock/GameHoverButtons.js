import styles from '../../../styles/HomePage/GamesSliderBlock.module.scss'

import Link from "next/link";

export const GameHoverButtons = ({t, gameData}) => {

  const playFunClickHandler = () => {
    console.log(gameData, 'gameData')
  }

  return (
    <div className={styles.hoverWrapper}>
      <div className={styles.playButton}>
        <Link  href={'#'}>
          <span>{t('gameButtons.play')}</span>
        </Link>
      </div>
      <div onClick={playFunClickHandler} className={styles.playForFunButton}>
        <Link href={'#Fun'}>
          <span>{t('gameButtons.playForFun')}</span>
        </Link>
      </div>
    </div>
  )
}