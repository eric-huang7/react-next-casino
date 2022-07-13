import styles from '../../../styles/HomePage/SelectCurrency.module.scss'
import {Header} from "../../MainLayout/Header/Header";
import {SelectCurrencyHoc} from "./SelectCurrencyHoc";
import {useDispatch, useSelector} from "react-redux";
import {backButtonShouldDo} from "../../../redux/popups/action";
import useWindowScroll from "../../../hooks/useWindowScroll";
import {setCurrencySelectorType} from "../../../redux/userFinance/action";




export const SelectCurrency = ({t}) => {
  let scrollHeight = useWindowScroll();
  const dispatch = useDispatch();
  const isShowCurrencySwitcher = useSelector(({popups}) => popups?.isShowCurrencySwitcher);
  const backButtonShouldDoState = useSelector((state) => state.popups.actionForBackButton);
  const actionCurrencySelector = useSelector((store) => store.userFinance);

  const closeCurrenciesClickHandler = () => {
    dispatch(setCurrencySelectorType(true));
    if (backButtonShouldDoState !== null) {
      dispatch(backButtonShouldDo(false));
    }
  }

  const backButtonClickHandler = () => {
    if (backButtonShouldDoState !== false) {
      backButtonShouldDoState();
    }
    dispatch(setCurrencySelectorType(true));
  }


  return (
    <div className={`${styles.selectCurrencyMainWrapper} ${isShowCurrencySwitcher ? "" : styles.hidden}`}>
      {/*<Header t={t}/>*/}
      <div className={`${styles.selectCurrencyMainContainer} ${scrollHeight > 100 ? styles.marginNull : ''}`}>
        <div className={styles.selectCurrencyHeadingBlock}>
          <div
            onClick={() => backButtonClickHandler()}
            className={styles.selectCurrencyBackButton}
          >
          </div>
          <h3 className={styles.selectCurrencyHeading}>{t("selectCurrency.heading")}</h3>
          <div
            className={styles.selectCurrencyCloseButton}
            onClick={() => closeCurrenciesClickHandler()}
          >
            <span className={styles.closeOne}></span>
            <span className={styles.closeTwo}></span>
          </div>
        </div>
        <SelectCurrencyHoc actionCurrencySelector={actionCurrencySelector} t={t}/>
      </div>
    </div>
  )
}
