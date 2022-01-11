import styles from "../../styles/ExitIntentComponent/ExitInentPopup.module.scss";
import {Heading} from "./Heading";
import {InnerHeading} from "./InnerHeading";
import {SeeAllButton} from "./SeeAllButton";
import {GamesContainer} from "./GamesContainer/GamesContainer";
import {BonusesContainer} from "./BonusesContainer/BonusesContainer";
import {LoadingComponent} from "../LoadingComponent/LoadingComponent";


export const ExitIntentMainComponent = ({t, showPopup, exit, type, isShowExitIntent}) => {



  if (type === "bonus") {
    let path = type === "bonus" ? "/promotions" : "/games-page/top-games";
    let innerHeadingText = type === "bonus" ? t("exitIntentPopup.innerHeadingBonus") : t("exitIntentPopup.innerHeadingGames");
    let linkText = type === "bonus" ? t("exitIntentPopup.seeAllPromo") : t("exitIntentPopup.seeAllGames");

    return (
      <div className={`${styles.exit_intent_popup} ${showPopup && isShowExitIntent ? styles.visible : ""}`}>
        <div className={styles.exitMainContainer}>
          <div className={styles.innerWrapper}>
            <Heading closeHandler={exit} t={t}/>
            <InnerHeading t={t} text={innerHeadingText}/>
            <BonusesContainer exit={exit} t={t}/>
          </div>
          <SeeAllButton t={t} path={path} exit={exit} text={linkText}/>
        </div>
      </div>
    )
  } else if (type === "games") {
    let path = type === "bonus" ? "/promotions" : "/games-page/top-games";
    let innerHeadingText = type === "bonus" ? t("exitIntentPopup.innerHeadingBonus") : t("exitIntentPopup.innerHeadingGames");
    let linkText = type === "bonus" ? t("exitIntentPopup.seeAllPromo") : t("exitIntentPopup.seeAllGames");

    return (
      <div className={`${styles.exit_intent_popup} ${showPopup && isShowExitIntent ? styles.visible : ""}`}>
        <div className={styles.exitMainContainer}>
          <div className={styles.innerWrapper}>
            <Heading closeHandler={exit} t={t}/>
            <InnerHeading t={t} text={innerHeadingText}/>
            {
              type === "bonus" ? <BonusesContainer exit={exit} t={t}/> : <GamesContainer exit={exit} t={t}/>
            }
          </div>
          <SeeAllButton t={t} path={path} exit={exit} text={linkText}/>
        </div>
      </div>
    )
  } else {

    return (
      <div className={`${styles.exit_intent_popup} ${showPopup && isShowExitIntent ? styles.visible : ""}`}>
        <div className={styles.exitMainContainer}>
          <div className={styles.innerWrapper}>
            <Heading closeHandler={exit} t={t}/>
            <LoadingComponent t={t} />
          </div>
        </div>
      </div>
    )
  }
}