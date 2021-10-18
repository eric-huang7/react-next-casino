import styles from '../../../styles/HomePage/TotalJackpotsAmount.module.scss'
import {urlGen} from "./url";

export const JackpotsInfoBlock = ({isHidden, heading, jackpotsData}) => {
  console.log(jackpotsData, 'inside JAckpots INFO block')
  return(
    <div className={`${styles.winnersBlockWrapper} ${isHidden ? styles.hidden : ''}`}>
      <h1>{heading}</h1>
      <div className={styles.winnersListWrapper}>
        <ul>
          {jackpotsData.map((el, ind) => {
            return (
              <li className={styles.winnersListItem} key={el.game.id}>
                <div className={styles.winnersImageWrapper}>
                  <img src={urlGen(el.game.game.id)} alt={`game ${el.game.game.id}`}/>
                </div>
                <div className={styles.winnersTextblock}>
                  <p className={styles.winnersAmount}>$ {Number(Number(el.jackpot_amount[0].amount).toFixed(2)).toLocaleString('de')}</p>
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