import styles from '../../../styles/NotificationsPage/SideBlockNotifyPage.module.scss';

export const PlayGameHoverButtons = ({t, user, gameData, playFunClickHandler, playGameClickHandler}) => {

  const playFreeClickHandler = () => {
    playFunClickHandler(gameData);
  }
  const playPaidClickHandler = () => {
    playGameClickHandler(gameData, user);
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
      <div
        onClick={playFreeClickHandler}
        className={styles.playForFunButton}>
        <span>{t('gameButtons.playForFun')}</span>
      </div>
    </div>
  )
}
