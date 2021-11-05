import styles from '../../styles/PromotionsPage/PromotionsPage.module.scss';
import {MainBlock} from "./MainBlock/MainBlock";
import {useTranslation} from "next-i18next";
import {BonusesContainer} from "./BonusesContainer/BonusesContainer";
import {useSelector} from "react-redux";



const dataForMainBlock = {
  getAddBonus: {
    upperText: {
      mainText: "mainBlock.getBonusBlock.upperTextBlock.lineOne",
      addText: "mainBlock.getBonusBlock.upperTextBlock.lineTwo"
    },
    lowerText: {
      lowerMainText: "mainBlock.getBonusBlock.lowerTextBlock.lineOne",
      lowerAddText: "mainBlock.getBonusBlock.lowerTextBlock.lineTwo"
    }
  },
  welcomeBonus: {
    welcomeMainText: "mainBlock.welcomeBonusBlock.welcomeMainText",
    welcomeValue: "mainBlock.welcomeBonusBlock.welcomeValue",
    welcomeAddText: "mainBlock.welcomeBonusBlock.welcomeAddText",
    depositButtonText: "mainBlock.welcomeBonusBlock.depositButtonText",
    welcomeMainImg: "/assets/img/promotionsPage/welcomeImage.png",
    welcomeDepositButton: "/assets/img/promotionsPage/welcomeDepositButton.png",
  }
}

export const PromotionsContainer = ({}) => {
  const { t, i18n } = useTranslation('promotionsPage');
  // console.log(t, i18n, 'container translate')
  const store = useSelector((store) => store);

  console.log(store, 'promotions store')

  return (
    <div className={styles.promotionsWrapper}>
      <MainBlock dataForMainBlock={dataForMainBlock} t={t}/>
      <BonusesContainer t={t}/>
    </div>
  )
}