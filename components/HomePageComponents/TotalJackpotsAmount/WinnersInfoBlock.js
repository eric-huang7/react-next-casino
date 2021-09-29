import styles from '../../../styles/HomePage/TotalJackpotsAmount.module.scss'
import {urlGen} from "./url";

export const WinnersInfoBlock = ({heading, winnersData}) => {

  return(
    <div className={styles.winnersBlockWrapper}>
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
                    <p className={styles.winnersAmount}>${el.winnings ? el.winnings : 1000}</p>
                    <p className={styles.winnersName}>{el.username}</p>
                </div>
              </li>
            )
          })}
        </ul>
      </div>
    </div>
  )
}