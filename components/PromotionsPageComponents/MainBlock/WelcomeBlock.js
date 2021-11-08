import styles from '../../../styles/PromotionsPage/MainBlock.module.scss';
import {showDepositModal} from "../../../redux/actions/showPopups";
import {useDispatch, useSelector} from "react-redux";

export const WelcomeBlock = ({t, dataForMainBlock, locale}) => {
  const dispatch = useDispatch();
  const isShowDepositModal = useSelector((state) => state.showPopupsReducer.isShowDepositModal);

  const closeDepositModalHandler = () => {
    if (!isShowDepositModal) {
      dispatch(showDepositModal(true));
    }
  }


  return (
    <div className={styles.welcomeWrapper}>
      <span className={`${styles.welcomeMainText} ${styles[locale]}`}>{t(dataForMainBlock.welcomeMainText)}</span>
      <div className={styles.imageWrapper}>
        <img className={styles.welcomeImage} src={t(dataForMainBlock.welcomeMainImg)} alt="welcome bonus image"/>
        <span className={styles.welcomeValue}>{t(dataForMainBlock.welcomeValue)}</span>
        <span className={`${styles.welcomeAddText} ${styles[locale]}`}>{t(dataForMainBlock.welcomeAddText)}</span>
      </div>
      <div onClick={() => closeDepositModalHandler()} className={styles.depositButton}>
        <span className={styles.welcomeDepositButton}>{t(dataForMainBlock.depositButtonText)}</span>
        {/*<img className={styles.welcomeDepositButton} src={dataForMainBlock.welcomeDepositButton} alt="deposit button"/>*/}
      </div>
    </div>
  )
}