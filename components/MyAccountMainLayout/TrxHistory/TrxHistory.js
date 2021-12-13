import styles from '../../../styles/MyAccount/TrxHistory/TrxHistory.module.scss';
import {useSelector} from "react-redux";
import {Heading} from "../ComponentsForPages/Heading";
import {TrxHistoryInputsContainer} from "./TrxHistoryInputsContainer";
import {LoadingComponent} from "../../LoadingComponent/LoadingComponent";
import {TrxHistoryLinksContainer} from "./TrxHistoryLinksContainer";
import {TrxHistoryTableContainer} from "./TrxHistoryTableContainer";
import {useState} from "react";


export const TrxHistory = ({t}) => {
  const userInfo = useSelector((store) => store.authInfo);
  const currency = useSelector((store) => store.getCurrency);

  const [wasFiltering, setWasFiltering] = useState(false);

  if (userInfo?.balance?.success && !currency.loading) {
    return (
      <div className={styles.mainContainer}>
        <Heading t={t} heading={"myAccount.pageHeadings.trxHistory"}/>
        <TrxHistoryLinksContainer  t={t}/>
        <TrxHistoryInputsContainer userInfo={userInfo} currencyData={currency} t={t} setWasFiltering={setWasFiltering} />
        {userInfo.loadingUserPayments ? <LoadingComponent t={t}/> : <TrxHistoryTableContainer wasFiltering={wasFiltering} userInfo={userInfo} currencyData={currency} t={t}/>}
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