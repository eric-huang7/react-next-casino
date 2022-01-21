import styles from '../../styles/PlaySafe/PlaySafe.module.scss';
import {PlaySafeHeading} from "./PlaySafeHeading";
import {PlaySafeLinksBlock} from "./PlaySafeLinksBlock";
import Link from "next/link";
import {useEffect} from "react";

export const PlaySafeMainWrapper = ({t, isShow}) => {

  useEffect(() => {
    if (isShow) {
      document.body.style.overflowY = "hidden"
    } else {
      document.body.style.overflowY = "auto"
    }
    return  () => {
      document.body.style.overflowY = "auto"
    }
  }, [])

  return (
    <div className={styles.playSafeMainWrapper}>
      <div className={styles.playSafeInfoContainer}>
        <PlaySafeHeading t={t}/>
        <div className={styles.playSafeTextContainer}>
          <p className={styles.firstTextBlock}>
            {t("playSafe.firstBlock")}
          </p>
          <p className={styles.textHading}>{t("playSafe.secondBlockHeading")}</p>
          <p className={styles.secondTextBlock}>
            {t("playSafe.secondBlock")}
            {<Link href={"mailto:support@slotsIdol.com"}><a>support@slotsidol.com</a></Link>}.
          </p>

          <p className={styles.thirdTextBlock}>{t("playSafe.thirdBlock.partOne")}{<Link href={"mailto:support@slotsIdol.com"}><a>support@slotsidol.com</a></Link>}. {t("playSafe.thirdBlock.partTwo")}</p>
          <p className={styles.fourthTextBlock}>{t("playSafe.fourthBlock")}</p>

        </div>
        <PlaySafeLinksBlock t={t}/>
      </div>
    </div>
  )
}