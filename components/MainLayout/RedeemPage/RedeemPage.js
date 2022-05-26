import styles from '../../../styles/HomePage/RedeemPage.module.scss'
import {useDispatch, useSelector} from "react-redux";
import {showRedeemModal} from "../../../redux/popups/action";
import useWindowScroll from "../../../hooks/useWindowScroll";

export const RedeemPage = ({t}) => {
  let scrollHeight = useWindowScroll();
  const dispatch = useDispatch();
  const isShowRedeemModal = useSelector(({popups}) => popups?.isShowRedeemModal);

  const closeModal = () => {
    dispatch(showRedeemModal(false));
  }

  return (
    <div className={`${styles.redeemMainWrapper} ${isShowRedeemModal ? "" : styles.hidden}`}>
      <div className={`${styles.redeemMainContainer} ${scrollHeight > 100 ? styles.marginNull : ''}`}>
        <div className={styles.redeemHeadingBlock}>
          <h3 className={styles.redeemHeading}>{t("redeemPage.heading")}</h3>
          <div
            className={styles.redeemCloseButton}
            onClick={() => closeModal()}
          >
            <span className={styles.closeOne}></span>
            <span className={styles.closeTwo}></span>
          </div>
        </div>
        <div className={styles.redeemBody}>
          <div className={styles.redeemTitle}>
            {t('redeemPage.title1')}
          </div>
          <div className={styles.redeemTitle}>
            {t('redeemPage.title2')}
          </div>
          <div className={styles.redeemTitle}>
            {t('redeemPage.point')}
          </div>
          <div className={styles.redeemTitle}>
            {t('redeemPage.title3')}
          </div>
          <div className={styles.redeemTitle}>
            {t('redeemPage.title4')}
          </div>
          <div className={styles.redeemTitle}>
            {t('redeemPage.title5')}
          </div>
          <div className={styles.redeemTitle}>
            {t('redeemPage.title6')}
          </div>
          <button className={styles.button}>
            {t('redeemPage.button')}
          </button>
        </div>
        <div className={styles.redeemFooter}/>
      </div>
    </div>
  )
}
