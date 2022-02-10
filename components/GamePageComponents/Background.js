import styles from "../../styles/GamePage/GamePage.module.scss";


export const Background = () => {

  return(
    <>
      <div className={`${styles.red} ${styles.redOne}`}/>
      <div className={`${styles.red} ${styles.redTwo}`}/>
      <div className={`${styles.red} ${styles.redTree}`}/>
      <div className={`${styles.blue} ${styles.blueOne}`}/>
      <div className={`${styles.blue} ${styles.blueTwo}`}/>
      <div className={`${styles.blue} ${styles.blueTree}`}/>
      <div className={`${styles.blackBack}`}/>
    </>
  )
}