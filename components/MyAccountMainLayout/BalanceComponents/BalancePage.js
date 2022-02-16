/* eslint-disable react-hooks/exhaustive-deps */
import styles from '../../../styles/MyAccount/BalancePage/BalancePage.module.scss';
import {Heading} from "../ComponentsForPages/Heading";
import {useDispatch, useSelector} from "react-redux";
import {BalanceInfoContainer} from "./BalanceInfoContainer";


export const BalancePage = ({t}) => {

  const balanceInfo = useSelector((store) => store.authInfo);
  const currency = useSelector((store) => store.getCurrency);


  return (
    <div className={styles.mainContainer}>
      <Heading t={t} heading={"myAccount.pageHeadings.balance"}/>
      <BalanceInfoContainer balanceInfo={balanceInfo} currency={currency} t={t}/>
    </div>

  )
}