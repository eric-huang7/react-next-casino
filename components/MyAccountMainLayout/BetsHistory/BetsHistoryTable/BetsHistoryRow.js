import styles from '../../../../styles/MyAccount/BetsHistory/BetsHistory.module.scss';
import {dateFormatter} from "../../../../helpers/dateTranslator";
import {useRouter} from "next/router";

export const BetsHistoryRow = ({t, betData}) => {
  // console.log(betData, "bet data+++++++++++")
  const router = useRouter();

  let currency = betData.currency_abrv;
  let game = gameItem(betData.game);
  let bet = `${Number(betData.bet_amount)} ${currency ? currency : ""}`;
  let win = `${Number(betData.win_amount)} ${currency ? currency : ""}`;
  let date = dateFormatter(betData.time_created, router.locale);

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

function gameItem (game){
  console.log(game.indexOf('&amp;amp;'))
  if (game.indexOf('&amp;amp;') === -1) {
    return game;
  } else {
    return game.replace("&amp;amp;", "&")
  }

}