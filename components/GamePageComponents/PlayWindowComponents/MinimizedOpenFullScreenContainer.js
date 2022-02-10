import styles from "../../../styles/GamePage/GamePage.module.scss";


export const MinimizedOpenFullScreenContainer = ({maximizeHandler}) => {



  return (
    <div
      className={styles.openFullScreenContainer}
      onClick={() => maximizeHandler()}
    >

    </div>
  )
}