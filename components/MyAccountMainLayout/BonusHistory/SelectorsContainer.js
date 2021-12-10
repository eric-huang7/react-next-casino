import styles from '../../../styles/MyAccount/BonusHistory/BonusHistory.module.scss';

import {StatusSelector} from "./Selectors/StatusSelector";
import {useState} from "react";
import {FromDateSelector} from "./Selectors/FromDateSelector";
import {FilterButton} from "./FilterButton";
import {CurrencyBonusSelector} from "./Selectors/CurrencyBonusSelector";


export const SelectorsContainer = ({t, userInfo, currencyData}) => {


const [currencyFilter, setCurrencyFilter] = useState();
const [statusFilter, setStatusFilter] = useState();

const filterButtonClickHandler = () => {
  console.log(currencyFilter)
  console.log(statusFilter)
}

  return (
    <div className={styles.inputsContainer}>
      <CurrencyBonusSelector
        setCurrencyFilter={setCurrencyFilter}
        t={t}
        currencyData={currencyData}
        userInfo={userInfo}
      />
      <StatusSelector t={t} setStatusFilter={setStatusFilter}/>
      <FromDateSelector t={t}/>
      <FilterButton t={t} filterButtonClickHandler={filterButtonClickHandler}/>
    </div>
  )
}