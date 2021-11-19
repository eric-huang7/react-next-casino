import styles from "../../styles/GamesPage/GamesPage.module.scss";

export const MoreButton = ({t, setPageCounter, pageCounter}) => {

  const moreButtonClickHAndler = () => {

    setPageCounter(pageCounter + 1)
  }

  return (
    <div className={styles.moreWrapper}>
      <button onClick={() => moreButtonClickHAndler()} className={styles.moreButton}>{t("gamesPage.moreButton")}</button>
    </div>
  )
}