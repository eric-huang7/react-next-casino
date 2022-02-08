import styles from "../../styles/GamePage/GamePage.module.scss";


export const Background = ({isMinimized}) => {

  return(
    <>
      <div className={`${styles.red} ${styles.redOne} ${isMinimized ? styles.backgroundMinimized : ''}`}/>
      <div className={`${styles.red} ${styles.redTwo} ${isMinimized ? styles.backgroundMinimized : ''}`}/>
      <div className={`${styles.red} ${styles.redTree} ${isMinimized ? styles.backgroundMinimized : ''}`}/>
      <div className={`${styles.blue} ${styles.blueOne} ${isMinimized ? styles.backgroundMinimized : ''}`}/>
      <div className={`${styles.blue} ${styles.blueTwo} ${isMinimized ? styles.backgroundMinimized : ''}`}/>
      <div className={`${styles.blue} ${styles.blueTree} ${isMinimized ? styles.backgroundMinimized : ''}`}/>
      <div className={`${styles.blackBack} ${isMinimized ? styles.backgroundMinimized : ''}`}/>
    </>
  )
}