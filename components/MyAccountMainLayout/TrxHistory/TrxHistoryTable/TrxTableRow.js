import styles from '../../../../styles/MyAccount/TrxHistory/TrxHistory.module.scss';
import {currencyInfo} from "../../../../helpers/currencyInfo";
import {dateFormatter} from "../../../../helpers/dateTranslator";
import {useRouter} from "next/router";


export const TrxTableRow = ({t, paymentData, currencyData}) => {
  const router = useRouter()

  let date = dateFormatter(paymentData.timestamp, router.locale);

  let status = paymentData.status;
  let action = paymentData.type;
  let paymentSystem = paymentData.provider;
  let amount = Number(paymentData.amount);

  return (
    <tr className={styles.dataRow}>
      <td>
        {date}
      </td>
      <td
        style={status === 2 ? {color: "green"} : status === 3 ? {color: "red"} : ""}
      >
        {statusValue(status)}
      </td>
      <td>
        {action}
      </td>
      <td>
        {paymentSystemValue(paymentSystem)}
      </td>
      <td>
        {`${amount} ${currencyInfo(currencyData.currency.results, paymentData.currency_id)[0].abbreviation}`}
      </td>
    </tr>
  )
}

function statusValue(status) {
  switch (status) {
    case 1:
      return 'Pending';
    case 2:
      return 'Success';
    case 3:
      return 'Error';
    default:
      return 'Undefined';
  }
}
function paymentSystemValue(provider) {
  switch (provider) {
    case 1:
      return 'Exchange';
    case 2:
      return 'CoinsPaid';
    case 3:
      return 'Credit Card';
    default:
      return 'Unknown';
  }
}
