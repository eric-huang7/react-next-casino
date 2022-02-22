import styles from '../../../../styles/MyAccount/TrxHistory/TrxHistory.module.scss'
import { RecallButton } from './RecallButton'
import { post_withdraw_url } from '../../../../redux/url/url'
import axios from 'axios'
import { getUserPayments } from '../../../../redux/actions/userData'
import { useDispatch } from 'react-redux'

export const TrxTableRow = ({
  t,
  paymentData,
  action,
  date,
  amount,
  currency,
  paymentSystem,
  status,
  userInfo
}) => {
  const dispatch = useDispatch()

  const recallClickHandler = () => {

    let params = { user_id: Number(userInfo?.user?.user?.id) }
    axios.defaults.withCredentials = true
    axios.delete(post_withdraw_url + `/${paymentData.id}`)
      .then((data) => {
        dispatch(getUserPayments(params))
      })
      .catch((e) => {
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

