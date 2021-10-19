import styles from '../../../styles/HomePage/TotalJackpotsAmount.module.scss'
import {urlGen} from "./url";

export const WinnersInfoBlock = ({isHidden, heading, winnersData}) => {

  return(
    <div className={`${styles.winnersBlockWrapper} ${isHidden ? styles.hidden : ''}`}>
      <h1>{heading}</h1>
      <div className={styles.winnersListWrapper}>
        <ul>
          {(winnersData.length > 0) ? winnersData.map((el, ind) => {
            let numString = Number(el.winnings).toFixed(2);
            let num = +numString;
            let locale = num.toLocaleString('de');

            if (!locale.includes(',')) {
              locale += ',00'
            }
            return (
              <li className={styles.winnersListItem} key={ind}>
                <div className={styles.winnersImageWrapper}>
                  <img src={urlGen(el.game_id)} alt={`game ${el.game_id}`}/>
                </div>
                <div className={styles.winnersTextblock}>
                    <p className={styles.winnersAmount}>$ {locale}</p>
                    <p className={styles.winnersName}>{el.game_name}</p>
                </div>
              </li>
            )
          }) : <h2 className={'loadingHeader'}>Loading...</h2>}
        </ul>
      </div>
    </div>
  )
}