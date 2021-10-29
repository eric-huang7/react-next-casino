import styles from '../../../styles/HomePage/SelectCurrency.module.scss'
import {Header} from "../../MainLayout/Header/Header";
import {SelectCurrencyHoc} from "./SelectCurrencyHoc";
import {useDispatch, useSelector} from "react-redux";
import {backButtonShouldDo, showCurrencySwitcher} from "../../../redux/actions/showPopups";




export const SelectCurrency = ({t}) => {
  const dispatch = useDispatch();
  const isShowCurrencySwitcher = useSelector(({showPopupsReducer}) => showPopupsReducer.isShowCurrencySwitcher);
  const backButtonShouldDoState = useSelector((state) => state.showPopupsReducer.actionForBackButton);

  const closeCurrenciesClickHandler = () => {
    dispatch(showCurrencySwitcher(false));
    if (backButtonShouldDoState !== null) {
      dispatch(backButtonShouldDo(false));
    }

  }
  const backButtonClickHandler = () => {
    if (backButtonShouldDoState !== false) {
      backButtonShouldDoState();
    } else {
      dispatch(showCurrencySwitcher(false));
    }
  }


  return (
    <div className={`${styles.selectCurrencyMainWrapper} ${isShowCurrencySwitcher ? "" : styles.hidden}`}>
      {/*<Header t={t}/>*/}
      <div className={styles.selectCurrencyMainContainer}>
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
        <SelectCurrencyHoc t={t}/>
      </div>
    </div>
  )
}