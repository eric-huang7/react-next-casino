import styles from '../../../styles/MyAccount/TrxHistory/TrxHistory.module.scss';
import {useSelector} from "react-redux";
import {Heading} from "../ComponentsForPages/Heading";
import {TrxHistoryInputsContainer} from "./TrxHistoryInputsContainer";
import {LoadingComponent} from "../../LoadingComponent/LoadingComponent";
import {TrxHistoryLinksContainer} from "./TrxHistoryLinksContainer";


export const TrxHistory = ({t}) => {
  const balanceInfo = useSelector((store) => store.authInfo);
  const currency = useSelector((store) => store.getCurrency);

  if (balanceInfo?.balance?.success && !currency.loading) {
    return (
      <div className={styles.mainContainer}>
        <Heading t={t} heading={"myAccount.pageHeadings.trxHistory"}/>
        <TrxHistoryLinksContainer t={t}/>
        <TrxHistoryInputsContainer balanceInfo={balanceInfo} currencyData={currency} t={t} />
      </div>
    )
  } else {
    return (
      <div className={styles.mainContainer}>
        <Heading t={t} heading={"myAccount.pageHeadings.trxHistory"}/>
        <LoadingComponent t={t}/>
      </div>
    )
  }

}