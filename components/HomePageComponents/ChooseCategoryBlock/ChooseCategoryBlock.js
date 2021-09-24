import styles from '../../../styles/HomePage/ChooseCategoryBlock.module.scss'
import Link from "next/link";
import {useState} from "react";


export const ChooseCategoryBlock = () => {

  const linksData = [
    {href: '#', name: "btc games", icon: '/assets/icons/home/btc_games_icon.svg'},
    {href: '#', name: "new games", icon: '/assets/icons/home/new_games_icon.svg'},
    {href: '#', name: "top games", icon: '/assets/icons/home/top_games_icon.svg'},
    {href: '#', name: "jackpot games", icon: '/assets/icons/home/jackpot_games_icon.svg'},
    {href: '#', name: "table games", icon: '/assets/icons/home/table_games_icon.svg'},
  ]

  const chooseListData = [
    { value: 'USA', name: 'USA' },
    { value: 'CANADA', name: 'CANADA' }
  ]

  const [listData, setListData] = useState(chooseListData);

  return (
    <div className={styles.categoryWrapper}>
      <ul className={styles.categoryList}>
        {
          linksData.map((el) => {
            return (
              <li key={el.name} className={styles.categoryListItem}>
                <Link href={el.href}>
                  <a>{el.name}</a>
                </Link>
              </li>
            )
          })
        }
      </ul>
      <div className={styles.categoryInputsWrapper}>
        <select name="country" className={styles.categorySelect}>
          {listData.map((e, key) => {
            return <option key={key} value={e.value}>{e.name}</option>;
          })}
        </select>
      </div>
    </div>
  )
}