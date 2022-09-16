import { dateFormatter } from '../../../../helpers/dateTranslator'
import { useRouter } from 'next/router'
import * as math from 'mathjs'
import { chakra } from "@chakra-ui/react"

const Cell = ({children}) => <chakra.td textAlign="left" p="12px 10px">{children}</chakra.td>

export const BetsHistoryRow = ({ betData, index }) => {
  const router = useRouter()

  let currency = betData.currency_abrv
  let game = gameItem(betData.game)
  let bet = `${math.format(math.bignumber(betData.bet_amount), {notation:"fixed"})} ${currency ? currency : ''}`
  let win = `${math.format(math.bignumber(betData.win_amount), {notation:"fixed"})} ${currency ? currency : ''}`
  let date = dateFormatter(betData.time_created, router.locale)

  return (
    <chakra.tr bg={index % 2 ? "#f5f5f5" : "#e1e1e1"}>
      <Cell>
        {betData.game}
      </Cell>
      <Cell>
        {bet}
      </Cell>
      <Cell>
        {win}
      </Cell>
      <Cell>
        {date}
      </Cell>
    </chakra.tr>
  )
}

function gameItem (game) {
  if (game.indexOf('&amp;amp;') === -1) {
    return game
  } else {
    return game.replace('&amp;amp;', '&')
  }
}
