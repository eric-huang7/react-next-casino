import styles from '../../../styles/PromotionsPage/MainBlock.module.scss';
import {GetABonusBlock} from "./GetABonusBlock";
import {WelcomeBlock} from "./WelcomeBlock";
import {useRouter} from "next/router";

export const MainBlock = ({t, dataForMainBlock, userData}) => {
  const router = useRouter()
  let locale = router.locale

  return (
    <div className={styles.MainBlockWrapper}>
      <GetABonusBlock t={t} dataForMainBlock={dataForMainBlock.getAddBonus}/>
      <WelcomeBlock t={t} locale={locale} userData={userData} dataForMainBlock={dataForMainBlock.welcomeBonus}/>
    </div>
  )
}