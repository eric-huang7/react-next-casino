import { MainBlock } from '../../components/MainLayout/MainBlock'
import { BonusesContainer } from './BonusesContainer/BonusesContainer'
import { useSelector } from 'react-redux'
import {useTranslation} from "next-i18next";

const dataForMainBlock = {
  getAddBonus: {
    upperText: {
      mainText: 'mainBlock.getBonusBlock.upperTextBlock.lineOne',
      addText: 'mainBlock.getBonusBlock.upperTextBlock.lineTwo'
    },
    lowerText: {
      lowerMainText: 'mainBlock.getBonusBlock.lowerTextBlock.lineOne',
      lowerAddText: 'mainBlock.getBonusBlock.lowerTextBlock.lineTwo'
    }
  },
  welcomeBonus: {
    welcomeMainText: 'mainBlock.welcomeBonusBlock.welcomeMainText',
    welcomeValue: 'mainBlock.welcomeBonusBlock.welcomeValue',
    welcomeAddText: 'mainBlock.welcomeBonusBlock.welcomeAddText',
    depositButtonText: 'mainBlock.welcomeBonusBlock.depositButtonText',
    welcomeMainImg: '/assets/img/promotionsPage/welcomeImage.webp',
    welcomeDepositButton: '/assets/img/promotionsPage/welcomeDepositButton.png',
  }
}

export const PromotionsContainer = () => {
  const { t } = useTranslation('promotionsPage')
  const activeBonuses = useSelector((state) => state.bonuses)
  const userCurrency = useSelector((state) => state.userFinance)
  const userData = useSelector((store) => store.authInfo)

  return (
    <div>
      <MainBlock title={t('heading')}/>
      <BonusesContainer userData={userData} userCurrency={userCurrency} activeBonuses={activeBonuses}/>
    </div>
  )
}
