import styles from '../../../styles/PromotionsPage/MainBlock.module.scss'
import { GetABonusBlock } from './GetABonusBlock'
import { WelcomeBlock } from './WelcomeBlock'
import { useRouter } from 'next/router'
import { useTranslation } from 'next-i18next'

export const MainBlock = ({ dataForMainBlock, userData }) => {

  const router = useRouter()
  let locale = router.locale

  return (
    <div className={styles.MainBlockWrapper}>
      <GetABonusBlock dataForMainBlock={dataForMainBlock.getAddBonus}/>
      <WelcomeBlock locale={locale} userData={userData} dataForMainBlock={dataForMainBlock.welcomeBonus}/>
    </div>
  )
}