import styles from "../../../styles/GamePage/GamePage.module.scss";


export const GameWindow = ({gameUrl}) => {


  return (
    <iframe id={'currencyIcons'} className={styles.gameWindow} src={gameUrl} frameBorder="0"></iframe>
  )
}

