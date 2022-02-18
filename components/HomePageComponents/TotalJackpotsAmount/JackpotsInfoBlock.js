import styles from '../../../styles/HomePage/TotalJackpotsAmount.module.scss'

import {gameUrl} from "../../../helpers/imageUrl";

export const JackpotsInfoBlock = ({isHidden, heading, jackpotsData}) => {

  return(
    <div className={`${styles.winnersBlockWrapper} ${isHidden ? styles.hidden : ''}`}>
      <h1>{heading}</h1>
      <div className={styles.winnersListWrapper}>
        <ul>
          {jackpotsData.map((el, ind) => {
            // Number(el.jackpot_amount[0].amount).toFixed(2).toLocaleString('de')
            let currency = el.jackpot_amount[0].currency;
            let numString = Number(el.jackpot_amount[0].amount).toFixed(2);
            let num = +numString;
            let locale = num.toLocaleString('de');

            if (!locale.includes(',')) {
              locale += ',00'
            }
            if (currency === 'EUR') {
              currency = '€';
            } else if (currency === 'USD') {
              currency = '$';
            }
            return (
              <li className={styles.winnersListItem} key={el.game.id}>
                <div className={styles.winnersImageWrapper}>
                  <img src={gameUrl(el.game.game.id)} alt={`game ${el.game.game.id}`}/>
                </div>
                <div className={styles.winnersTextblock}>
                  <p className={styles.winnersAmount}>{`${currency} ${locale}`}</p>
                  <p className={styles.winnersName}>{el.game.game.name}</p>
                </div>
              </li>
            )
          })}
        </ul>
      </div>
    </div>
  )
}