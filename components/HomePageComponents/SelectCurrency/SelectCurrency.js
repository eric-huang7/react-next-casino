import styles from '../../../styles/HomePage/SelectCurrency.module.scss'
import {Header} from "../../MainLayout/Header/Header";
import {SelectCurrencyHoc} from "./SelectCurrencyHoc";




export const SelectCurrency = ({t}) => {


  return (
    <div className={styles.selectCurrencyMainWrapper}>
      <Header t={t}/>
      <div className={styles.selectCurrencyMainContainer}>
        <div className={styles.selectCurrencyHeadingBlock}>
          <div className={styles.selectCurrencyBackButton}>
          </div>
          <h3 className={styles.selectCurrencyHeading}>{'SELECT CURRENCY'}</h3>
          <div className={styles.selectCurrencyCloseButton}>
            <span className={styles.closeOne}></span>
            <span className={styles.closeTwo}></span>
          </div>
        </div>
        <SelectCurrencyHoc t={t}/>
      </div>
    </div>
  )
}