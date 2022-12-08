import Image from "next/image";

import styles from '/styles/HomePage/JackpotsItems.module.scss'

export const JackpotsItems = ({data}) => {
  let dataArr = Object.entries(data);

  return (
    <ul className={styles.jackpotList}>
      {dataArr.map((el) => {
        return (
          <li className={styles.jackpotItem} key={el[0]}>
            <div className={styles.jackpotItemImage}>
              <Image width={120} height={72} src={`/assets/img/jackpotBlock/${el[0]}.png`} alt={`jackpot ${el[0]}`}/>
            </div>
            <div className={styles.jackpotItemData}>
              <span>{el[1]}</span>
            </div>
          </li>
        )
      })}
    </ul>
  )
}