import styles from "../../../styles/GamePage/GamePage.module.scss";


export const GameWindow = ({gameUrl}) => {


  return (
    <iframe className={styles.gameWindow} src={gameUrl} frameBorder="0"></iframe>
  )
}

