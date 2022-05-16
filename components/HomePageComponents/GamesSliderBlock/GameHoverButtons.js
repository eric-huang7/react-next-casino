import styles from '../../../styles/HomePage/GamesSliderBlock.module.scss'


export const GameHoverButtons = ({t, gameData, playFunClickHandler, playGameClickHAndler, user}) => {
  const playFreeClickHandler = () => {
    playFunClickHandler(gameData);
  }
  const playPaidClickHandler = () => {
    playGameClickHAndler(gameData, user)
  }

  const canPlay = () => {
    return user.isAuthenticated && process.env.NODE_ENV === 'production'
  }

  return (
    <div className={styles.hoverWrapper}>
      <div
        onClick={playPaidClickHandler}
        className={`${styles.playButton} ${canPlay() ? "" : styles.playButtonInactive}`}>
        <span>{t('gameButtons.play')}</span>
      </div>
      <div onClick={playFreeClickHandler} className={styles.playForFunButton}>
        <span>{t('gameButtons.playForFun')}</span>
      </div>
    </div>
  )
}
