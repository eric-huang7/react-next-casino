import styles from '../../../../styles/MyAccount/TrxHistory/TrxHistory.module.scss';
import {currencyInfo} from "../../../../helpers/currencyInfo";
import {dateFormatter} from "../../../../helpers/dateTranslator";
import {useRouter} from "next/router";


export const TrxTableRow = ({t, paymentData, currencyData, action, date, amount, currency, paymentSystem, status}) => {


  return (
    <tr className={styles.dataRow}>
      <td>
        {date}
      </td>
      <td style={status === "Error" ? {color: "red"} : status === "Success" ? {color: "green"} : {color: "#595656"}}>
        {t(status)}
      </td>
      <td>
        {action}
      </td>
      <td>
        {t(paymentSystem)}
      </td>
      <td>
        {`${amount} ${currency}`}
      </td>
    </tr>
  )
}

