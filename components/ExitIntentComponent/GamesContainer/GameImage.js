import styles from "../../../styles/ExitIntentComponent/GamesContainer/GamesContainer.module.scss";


export const GameImage = ({imgSrc}) => {


  return (
    <div className={styles.gameImageContainer}>
      <img
        alt={'game image'}
        src={imgSrc}
      />
    </div>
  )
}