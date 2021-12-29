import styles from "../../../styles/MyAccount/DocumentsPage/DocumentsPage.module.scss";
import {Heading} from "../ComponentsForPages/Heading";
import {SecontHeading} from "./PageComponents/SecontHeading";
import {LinksBlock} from "./PageComponents/LinksBlock";
import {AvailableToCashoutBlock} from "./PageComponents/AvailableToCashoutBlock";
import {TryBitcoinContainer} from "./PageComponents/TryBitcoinContainer";
import {SelectPaymentContainer} from "./PageComponents/SelectPaymentContainer/SelectPaymentContainer";


export const CashoutPage = ({t}) => {


  return (
    <div className={styles.mainContainer}>
      <Heading
        t={t}
        heading={"myAccount.pageHeadings.cashoutPage"}
      />
      <SecontHeading t={t} />
      <LinksBlock t={t} />
      <AvailableToCashoutBlock t={t} />
      <SelectPaymentContainer t={t} />
      <TryBitcoinContainer t={t}/>
    </div>
  )
}