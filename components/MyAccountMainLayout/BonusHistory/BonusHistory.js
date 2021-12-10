import styles from '../../../styles/MyAccount/BonusHistory/BonusHistory.module.scss';
import {Heading} from "../ComponentsForPages/Heading";
import {useSelector} from "react-redux";
import {TrxHistoryLinksContainer} from "../TrxHistory/TrxHistoryLinksContainer";
import {TrxHistoryInputsContainer} from "../TrxHistory/TrxHistoryInputsContainer";
import {LoadingComponent} from "../../LoadingComponent/LoadingComponent";
import {TrxHistoryTableContainer} from "../TrxHistory/TrxHistoryTableContainer";
import {SelectorsContainer} from "./SelectorsContainer";
import {BonusTableContainer} from "./BonusTable/BonusTableContainer";


export const BonusHistory = ({t, router}) => {
  const userInfo = useSelector((store) => store.authInfo);
  const currency = useSelector((store) => store.getCurrency);


  if (userInfo?.balance?.success && !currency.loading) {
    return (
      <div className={styles.mainContainer}>
        <Heading t={t} heading={"myAccount.pageHeadings.bonusHistory"}/>
        <TrxHistoryLinksContainer router={router} t={t}/>
        <SelectorsContainer t={t} currencyData={currency} userInfo={userInfo}/>
        {userInfo?.loadingBonusesHistory ? <LoadingComponent t={t}/> : <BonusTableContainer currencyData={currency} userInfo={userInfo} t={t}/>}
      </div>
    )
  } else {
    return (
      <div className={styles.mainContainer}>
        <Heading t={t} heading={"myAccount.pageHeadings.bonusHistory"}/>
        <LoadingComponent t={t}/>
      </div>
    )
  }
}