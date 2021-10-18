import styles from '../../../styles/HomePage/TotalJackpotsAmount.module.scss'
import {urlGen} from "./url";

export const WinnersInfoBlock = ({isHidden, heading, winnersData}) => {

  return(
    <div className={`${styles.winnersBlockWrapper} ${isHidden ? styles.hidden : ''}`}>
      <h1>{heading}</h1>
      <div className={styles.winnersListWrapper}>
        <ul>
          {winnersData.map((el, ind) => {
            return (
              <li className={styles.winnersListItem} key={ind}>
                <div className={styles.winnersImageWrapper}>
                  <img src={urlGen(el.game_id)} alt={`game ${el.game_id}`}/>
                </div>
                <div className={styles.winnersTextblock}>
                    <p className={styles.winnersAmount}>$ {Number(Number(el.winnings).toFixed(0)).toLocaleString('de')}</p>
                    <p className={styles.winnersName}>{el.game_name}</p>
                </div>
              </li>
            )
          })}
        </ul>
      </div>
    </div>
  )
}