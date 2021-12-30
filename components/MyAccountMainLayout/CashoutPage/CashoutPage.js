import styles from "../../../styles/MyAccount/DocumentsPage/DocumentsPage.module.scss";
import {Heading} from "../ComponentsForPages/Heading";
import {SecontHeading} from "./PageComponents/SecontHeading";
import {LinksBlock} from "./PageComponents/LinksBlock";
import {AvailableToCashoutBlock} from "./PageComponents/AvailableToCashoutBlock";
import {TryBitcoinContainer} from "./PageComponents/TryBitcoinContainer";
import {SelectPaymentContainer} from "./PageComponents/SelectPaymentContainer/SelectPaymentContainer";
import {useSelector} from "react-redux";
import {LoadingComponent} from "../../LoadingComponent/LoadingComponent";


export const CashoutPage = ({t, activeLink}) => {
  const balanceInfo = useSelector((store) => store.authInfo);
  const currency = useSelector((store) => store.getCurrency);
  const data = useSelector((store) => store);

  // console.log(data, "data")

  if (balanceInfo.balance && currency.currency) {

    let typeOfCurrency = currency.currency.results.find((el) => el.abbreviation === activeLink);

    return (
      <div className={styles.mainContainer}>
        <Heading
          t={t}
          heading={"myAccount.pageHeadings.cashoutPage"}
        />
        <SecontHeading t={t} />
        <LinksBlock
          balanceData={balanceInfo.balance.balances}
          currencyData={currency.currency.results}
          t={t}
          activeLink={activeLink}
        />
        <AvailableToCashoutBlock
          typeOfCurrency={typeOfCurrency}
          balanceData={balanceInfo.balance.balances}
          t={t}
        />
        <SelectPaymentContainer
          t={t}
          typeOfCurrency={typeOfCurrency}
          currencyData={currency.currency.results}
          balanceData={balanceInfo.balance.balances}
          userInfo={balanceInfo.user.user}
        />
        {
          typeOfCurrency.type === 3 ? <TryBitcoinContainer currency={currency.currency.results.find((el) => el.abbreviation === "BTC")} t={t}/> : <></>
        }

      </div>
    )
  } else {

    return (
      <div className={styles.mainContainer}>
        <Heading
          t={t}
          heading={"myAccount.pageHeadings.cashoutPage"}
        />
        <LoadingComponent t={t} />
      </div>
    )
  }


}