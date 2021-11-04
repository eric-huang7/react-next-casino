import styles from '../../../styles/PromotionsPage/MainBlock.module.scss';
import {GetABonusBlock} from "./GetABonusBlock";
import {WelcomeBlock} from "./WelcomeBlock";

export const MainBlock = ({t, dataForMainBlock}) => {

  return (
    <div className={styles.MainBlockWrapper}>
      <GetABonusBlock t={t} dataForMainBlock={dataForMainBlock.getAddBonus}/>
      <WelcomeBlock t={t} dataForMainBlock={dataForMainBlock.welcomeBonus}/>
    </div>
  )
}