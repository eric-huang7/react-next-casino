import styles from "../../../styles/ExitIntentComponent/BonusesContainer/BonusesContainer.module.scss";
import {useTranslation} from "next-i18next";


export const BonusSubmitButton = ({submitBonusHandler, userData}) => {
  const {t} = useTranslation('common');

  return (
    <button
      onClick={() => submitBonusHandler()}
      className={styles.submitBonusButton}
    >
      {userData ? t("exitIntentPopup.bonusesContainer.claimButton") : t("exitIntentPopup.bonusesContainer.signUpButton")}
    </button>
  )
}