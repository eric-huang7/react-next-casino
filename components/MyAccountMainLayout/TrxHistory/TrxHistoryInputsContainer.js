import styles from '../../../styles/MyAccount/TrxHistory/TrxHistory.module.scss';
import {currencyInfo} from "../../../helpers/currencyInfo";
import {CurrencySelector} from "./Selectors/CurrencySelector";
import {ActionSelector} from "./Selectors/ActionSelector";
import {StatusSelector} from "./Selectors/StatusSelector";
import {FilterButton} from "./Selectors/FilterButton";
import {useState} from "react";
import {useDispatch} from "react-redux";
import {getUserPayments} from "../../../redux/actions/userData";


export const TrxHistoryInputsContainer = ({t, userInfo, currencyData}) => {
  console.log(userInfo, currencyData, '<<<<< TrxHistory')
  const dispatch = useDispatch()
  const [currencyFilter, setCurrencyFilter] = useState(null);
  const [actionFilter, setActionFilter] = useState(null);
  const [statusFilter, setStatusFilter] = useState(null);


  const filterButtonClickHandler = () => {
    console.log(typeof statusFilter, statusFilter, typeof actionFilter, actionFilter, typeof currencyFilter, currencyFilter);
    let params = {user_id: Number(userInfo?.user?.user?.id)};
    let arrRequest = [
      {status: statusFilter, type: "status"},
      {status: actionFilter, type: "action"},
      {status: currencyFilter, type: "currency_id"}
    ].map((el) => {
      if (el.status !== null && el.status !== '') {
        params[el.type] = Number(el.status) ? Number(el.status) : el.status;
        return el
      }
      return el
    });

    dispatch(getUserPayments(params));
  }

  return (
    <div className={styles.inputsContainer}>
      <CurrencySelector
        setCurrencyFilter={setCurrencyFilter}
        t={t}
        currencyData={currencyData}
        userInfo={userInfo}
      />
      <ActionSelector
        setActionFilter={setActionFilter}
        t={t}
      />
      <div className={styles.lastSelectorButtonWrapper}>
        <StatusSelector
          setStatusFilter={setStatusFilter}
          t={t}
        />
        <FilterButton
          filterButtonClickHandler={filterButtonClickHandler}
          statusFilter={statusFilter}
          actionFilter={actionFilter}
          currencyFilter={currencyFilter}
          t={t}
        />
      </div>
    </div>
  )
}