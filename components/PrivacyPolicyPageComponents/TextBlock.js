import styles from '../../styles/PrivacyPolicy/PrivacyTextBlock.module.scss';
import {useTranslation} from "next-i18next";

export const TextBlock = ({ textData, textHeading}) => {
const {t} = useTranslation("privacyPolicy")

  return (
    <section className={styles.textBlockWrapper}>
      <div className={styles.textBlockInnerWrapper}>
        <div className={styles.textBlockFrame}>
          <h2 className={styles.textBlockHeading}>{t(textHeading)}</h2>
          <div className={styles.textInfoBlock}>
            <p>
              {textData}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}