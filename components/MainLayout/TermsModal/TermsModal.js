import styles from '../../../styles/TermsModal.module.scss'
import {useDispatch, useSelector} from "react-redux";
import {showTermsModal} from "../../../redux/popups/action";
import useWindowScroll from "../../../hooks/useWindowScroll";
import {useTranslation} from "next-i18next";

export const TermsModal = ({t}) => {
  // const { t } = useTranslation('termsAndConditions');
  let scrollHeight = useWindowScroll();
  const dispatch = useDispatch();
  const isShowTermsModal = useSelector(({popups}) => popups?.isShowTermsModal);

  const closeModal = () => {
    dispatch(showTermsModal(false));
  }

  const getCloseButton = (dark = false) => <div
    className={styles.termsCloseButton}
    onClick={closeModal}
  >
    <img src={`/assets/icons/close-icon${dark ? "-dark" : ""}.svg`} alt=""/>
  </div>

  if (!isShowTermsModal) return <div></div>

  return (
    <div className={`${styles.termsMainWrapper}`}>
        <div className={`${styles.termsMainContainer} ${scrollHeight > 100 ? styles.marginNull : ''}`}>
          <div className={styles.termsHeadingBlock}>
            <h3 className={styles.termsHeading}>{t("heading")}</h3>
            {getCloseButton(true)}
          </div>
          <div className={styles.termsBody}>
            <div dangerouslySetInnerHTML={{ __html: t('text') }}/>
          </div>
          <div className={styles.termsFooter}/>
        </div>
    </div>
  )
}
