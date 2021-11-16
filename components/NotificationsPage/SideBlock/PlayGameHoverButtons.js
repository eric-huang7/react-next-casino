import styles from '../../../styles/NotificationsPage/SideBlockNotifyPage.module.scss';

export const PlayGameHoverButtons = ({t, user, gameData, playFunClickHandler, playGameClickHandler}) => {

  const playFreeClickHandler = () => {
    playFunClickHandler(gameData);
  }
  const playPaidClickHandler = () => {
    playGameClickHandler(gameData, user);
  }

  return (
    <div className={styles.hoverWrapper}>
      <div
        onClick={playPaidClickHandler}
        className={`${styles.playButton}`}>
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