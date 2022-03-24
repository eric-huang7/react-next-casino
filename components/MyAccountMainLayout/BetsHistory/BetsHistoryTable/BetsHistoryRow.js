import styles from '../../../../styles/MyAccount/BetsHistory/BetsHistory.module.scss'
import { dateFormatter } from '../../../../helpers/dateTranslator'
import { useRouter } from 'next/router'
import * as math from 'mathjs'
export const BetsHistoryRow = ({ betData }) => {

  const router = useRouter()

  let currency = betData.currency_abrv
  let game = gameItem(betData.game)
  let bet = `${math.format(math.bignumber(betData.bet_amount), {notation:"fixed"})} ${currency ? currency : ''}`
  let win = `${math.format(math.bignumber(betData.win_amount), {notation:"fixed"})} ${currency ? currency : ''}`
  let date = dateFormatter(betData.time_created, router.locale)

  return (
    <tr className={styles.betTableRow}>
      <td>
        {betData.game}
      </td>
      <td>
        {bet}
      </td>
      <td>
        {win}
      </td>
      <td>
        {date}
      </td>
    </tr>
  )
}

function gameItem (game) {

  if (game.indexOf('&amp;amp;') === -1) {
    return game
  } else {
    return game.replace('&amp;amp;', '&')
  }

}
