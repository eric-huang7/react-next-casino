import styles from '../../../../styles/MyAccount/TrxHistory/TrxHistory.module.scss'
import { RecallButton } from './RecallButton'
import { post_withdraw_url } from '../../../../redux/url/url'
import { getUserPayments } from '../../../../redux/user/action'
import { useDispatch } from 'react-redux'
import { dateFormatter } from '../../../../helpers/dateTranslator'
import { currencyInfo } from '../../../../helpers/currencyInfo'
import { useRouter } from 'next/router'
import Connect from "../../../../helpers/connect";

export const TrxTableRow = ({
  t,
  paymentData,
  currencyData,
  userInfo
}) => {

  const dispatch = useDispatch()
  const router = useRouter()

  let date = dateFormatter(paymentData.timestamp, router.locale)
  let status = statusValue(paymentData.status)
  let action = `myAccount.history.transactions.table.actions.${paymentData.type}`
  let paymentSystem = paymentSystemValue(paymentData.provider)
  let amount = Number(paymentData.amount)
  let currency = currencyInfo(currencyData.currency.results, paymentData.currency_id)[0].abbreviation


  const recallClickHandler = () => {
    let params = { user_id: Number(userInfo?.user?.user?.id) }
    Connect.delete(`${post_withdraw_url}/${paymentData.id}`,  {}, (status, data) => {
      dispatch(getUserPayments(params))
    }).catch((e) => {
      dispatch(getUserPayments(params))
    })
  }

  return (
    <tr className={styles.dataRow}>
      <td>
        {date}
      </td>
      <td
        style={paymentData.status === 3 || paymentData.status === 4 ? { color: 'red' } : paymentData.status === 2 ? { color: 'green' } : { color: '#595656' }}>
        {t(status)}
        {
          paymentData.status === 1 && <RecallButton recallClickHandler={recallClickHandler} t={t}/>
        }
      </td>
      <td>
        {t(action)}
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

function statusValue (status) {
  switch (status) {
    case 1:
      return 'myAccount.history.transactions.inputsItems.status.pending'
    case 2:
      return 'myAccount.history.transactions.inputsItems.status.success'
    case 3:
      return 'myAccount.history.transactions.inputsItems.status.error'
    case 4:
      return 'myAccount.history.transactions.inputsItems.status.discarded'
    default:
      return 'Undefined'
  }
}

function paymentSystemValue (provider) {
  switch (provider) {
    case 1:
      return 'myAccount.history.transactions.table.paymentSystem.exchange'
    case 2:
      return 'myAccount.history.transactions.table.paymentSystem.coinsPaid'
    case 3:
      return 'myAccount.history.transactions.table.paymentSystem.creditCard'
    default:
      return 'Unknown'
  }
}
