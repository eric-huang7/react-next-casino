import styles from "../../../styles/GamePage/GamePage.module.scss";


export const MinimizedOpenFullScreenContainer = ({minimizedHandler}) => {



  return (
    <div
      className={styles.openFullScreenContainer}
      onClick={() => minimizedHandler()}
    >

    </div>
  )
}