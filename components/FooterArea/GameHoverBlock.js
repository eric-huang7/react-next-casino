import styles from '../../styles/FooterArea/FooterArea.module.scss';


export const GameHoverBlock = ({t, user, playFunClickHandler, playGameClickHAndler, gameData}) => {

  const playFreeClickHandler = () => {
    playFunClickHandler(gameData);
    console.log(gameData, "play fan");
  }
  const playPaidClickHandler = () => {
    playGameClickHAndler(gameData, user)
    console.log(gameData, "play paid");
  }

  return (
    <div className={styles.hoverWrapper}>
      <div
        onClick={playPaidClickHandler}
        className={`${styles.playButton} ${user.isAuthenticated ? "" : styles.playButtonInactive}`}>
        <span>{t('gameButtons.play')}</span>
      </div>
      <div onClick={playFreeClickHandler} className={styles.playForFunButton}>
        <span>{t('gameButtons.playForFun')}</span>
      </div>
    </div>
  )
}