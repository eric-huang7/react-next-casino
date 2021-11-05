import styles from '../../styles/PromotionsPage/PromotionsPage.module.scss';
import {MainBlock} from "./MainBlock/MainBlock";
import {useTranslation} from "next-i18next";



const dataForMainBlock = {
  getAddBonus: {
    upperText: {
      mainText: "Get a 100%",
      addText: "match bonus"
    },
    lowerText: {
      lowerMainText: "up to $300 and 50",
      lowerAddText: "free spins"
    }
  },
  welcomeBonus: {
    welcomeMainText: "welcome",
    welcomeValue: "$500",
    welcomeAddText: "150 free spin",
    depositButtonText: "deposit now",
    welcomeMainImg: "/assets/img/promotionsPage/welcomeImage.png",
    welcomeDepositButton: "/assets/img/promotionsPage/welcomeDepositButton.png",
  }
}

export const PromotionsContainer = ({}) => {
  const { t, i18n } = useTranslation('promotionsPage');
  console.log(t, i18n, 'container translate')

  return (
    <div className={styles.promotionsWrapper}>
      <MainBlock dataForMainBlock={dataForMainBlock} t={t}/>
      <p>asdsafd gsd gsdfg sdfg sd gsdf {213123} {t("1.description.lineOne", {key: '9999'})}</p>
    </div>
  )
}