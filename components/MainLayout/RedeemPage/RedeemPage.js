import styles from '../../../styles/HomePage/RedeemPage.module.scss'
import {useDispatch, useSelector} from "react-redux";
import {showRedeemModal} from "../../../redux/popups/action";
import useWindowScroll from "../../../hooks/useWindowScroll";
import {RedeemInput} from "./RedeemInput";

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
          <div className={styles.redeemTitle1}>
            {t('redeemPage.title2')}
          </div>
          <div className={styles.redeemTitle2}>
            {t('redeemPage.point')}
          </div>
          <div className={styles.redeemTitle3}>
            {t('redeemPage.title3')}
          </div>
          <div className={styles.redeemTitle4}>
            {t('redeemPage.title4')}
          </div>
          <div className={styles.divider}></div>

          <div className={styles.redeemTitle5}>
            {t('redeemPage.title7')}
          </div>
          <RedeemInput mt="30px" mb="30px"/>
          <div className={styles.redeemTitle5}>
            {t('redeemPage.title5')}
          </div>
          <RedeemInput mb="30px"/>
          <div className={styles.redeemTitle5}>
            {t('redeemPage.title6')}
          </div>
          <RedeemInput mb="30px"/>
          <button className={styles.button}>
            {t('redeemPage.button')}
          </button>
        </div>
        <div className={styles.redeemFooter}/>
      </div>
    </div>
  )
}
