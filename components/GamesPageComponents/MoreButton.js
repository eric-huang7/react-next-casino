import styles from "../../styles/GamesPage/GamesPage.module.scss";

export const MoreButton = ({t, setPageCounter, pageCounter, isShowMoreButton}) => {

  const moreButtonClickHAndler = () => {

    setPageCounter(pageCounter + 1)
  }

  if (isShowMoreButton) {
    return (
      <div className={styles.moreWrapper}>
        <button onClick={() => moreButtonClickHAndler()} className={styles.moreButton}>{t("gamesPage.moreButton")}</button>
      </div>
    )
  } else {
    return <></>
  }


}