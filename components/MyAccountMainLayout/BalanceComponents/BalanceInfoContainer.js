import styles from "../../../styles/MyAccount/BalancePage/BalancePage.module.scss";
import {TableContainer} from "./TableContainer";
import {useSelector} from "react-redux";
import {LoadingComponent} from "../../LoadingComponent/LoadingComponent";


export const BalanceInfoContainer = ({t, balanceInfo}) => {


  console.log(balanceInfo);

  if (balanceInfo?.balance?.success) {
    return (
      <>
        <div className={styles.tableContainerWrapper}>
          <TableContainer t={t}/>
        </div>
        <button className={styles.addCurrencyButton}>
          {t("myAccount.balance.buttons.addCurrency")}
        </button>
      </>
    )
  } else {
    return (
      <LoadingComponent t={t}/>
    )
  }


}