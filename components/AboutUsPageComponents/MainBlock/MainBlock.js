import styles from '../../../styles/AboutUs/MainBlock.module.scss'
import {Trans} from "next-i18next";
import {useEffect, useState} from "react";

export const MainBlock = ({t}) => {

  return (
    <section className={styles.mainSectionWrapper}>
      <div className={styles.mainItemsWrapper}>
        <div className={styles.arrProvider}></div>
        <div className={styles.arrGames}></div>
        <div className={styles.arrFlexible}></div>
        <div className={styles.providerImg}>
          <p>{t("aboutUsPage.mainBlock.providers")}</p>
        </div>
        <div className={styles.gamesImg}>
          <p>{t("aboutUsPage.mainBlock.games")}</p>
        </div>
        <div className={styles.flexibleSystemImg}>
          <p>
            <span className={styles.bigSpan}>{t("aboutUsPage.mainBlock.flexibleSystem.flexible")} </span>
            <span className={styles.smallSpan}>{t("aboutUsPage.mainBlock.flexibleSystem.cryptocurrency")} </span>
            <span className={styles.bigSpan}>{t("aboutUsPage.mainBlock.flexibleSystem.system")} </span>
          </p>
        </div>
        <div className={styles.instantCashoutsImg}>
          <p>{t("aboutUsPage.mainBlock.cashouts")}</p>
        </div>
      </div>
    </section>
  )
}