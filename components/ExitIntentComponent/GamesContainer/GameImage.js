import styles from "../../../styles/ExitIntentComponent/GamesContainer/GamesContainer.module.scss";


export const GameImage = ({imgSrc}) => {


  return (
    <div className={styles.gameImageContainer}>
      <img
        alt={'game image'}
        // layout={'fill'}
        // height={30}
        // width={30}
        src={imgSrc}
      />
    </div>
  )
}