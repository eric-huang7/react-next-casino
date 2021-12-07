/* eslint-disable react-hooks/exhaustive-deps */
import styles from '../../../styles/MyAccount/BalancePage/BalancePage.module.scss';
import {Heading} from "../ComponentsForPages/Heading";
import {TableContainer} from "./TableContainer";
import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {userBalance} from "../../../redux/actions/login";
import {BalanceInfoContainer} from "./BalanceInfoContainer";


export const BalancePage = ({t}) => {
  const dispatch = useDispatch()


  useEffect(() => {
    dispatch(userBalance());
  }, []);

  const balanceInfo = useSelector((store) => store.authInfo);

  console.log('balance page')

  return (
    <div className={styles.mainContainer}>
      <Heading t={t} heading={"myAccount.pageHeadings.balance"}/>
      <BalanceInfoContainer balanceInfo={balanceInfo} t={t}/>
    </div>

  )
}