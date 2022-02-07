import styles from '../../styles/GamePage/GamePage.module.scss';


export const GamePageMainContainer = ({t}) => {


  return (
    <section className={styles.gamePageMainSection}>
      <div className={`${styles.red} ${styles.redOne}`}></div>
      <div className={`${styles.red} ${styles.redTwo}`}></div>
      <div className={`${styles.red} ${styles.redTree}`}></div>
      <div className={`${styles.blue} ${styles.blueTree}`}></div>
      <div className={`${styles.blue} ${styles.blueTree}`}></div>
      <div className={`${styles.blue} ${styles.blueTree}`}></div>
    </section>
  )
}