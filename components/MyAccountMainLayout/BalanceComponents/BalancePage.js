/* eslint-disable react-hooks/exhaustive-deps */
import styles from '../../../styles/MyAccount/BalancePage/BalancePage.module.scss';
import {Heading} from "../ComponentsForPages/Heading";
import {TableContainer} from "./TableContainer";
import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {userBalance} from "../../../redux/actions/userData";
import {BalanceInfoContainer} from "./BalanceInfoContainer";


export const BalancePage = ({t}) => {

  const balanceInfo = useSelector((store) => store.authInfo);
  const currency = useSelector((store) => store.getCurrency)

  // console.log('balance page', currency, balanceInfo)

  return (
    <div className={styles.mainContainer}>
      <Heading t={t} heading={"myAccount.pageHeadings.balance"}/>
      <BalanceInfoContainer balanceInfo={balanceInfo} currency={currency} t={t}/>
    </div>

  )
}