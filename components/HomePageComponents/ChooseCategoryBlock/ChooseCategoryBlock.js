import styles from '../../../styles/HomePage/ChooseCategoryBlock.module.scss'
import Link from "next/link";
import {useState} from "react";


export const ChooseCategoryBlock = ({t}) => {

  const linksData = [
    {href: '#', name: "btc games", icon: '/assets/icons/home/btc_games_icon.svg'},
    {href: '#', name: "new games", icon: '/assets/icons/home/new_games_icon.svg'},
    {href: '#', name: "top games", icon: '/assets/icons/home/top_games_icon.svg'},
    {href: '#', name: "jackpot games", icon: '/assets/icons/home/jackpot_games_icon.svg'},
    {href: '#', name: "table games", icon: '/assets/icons/home/table_games_icon.svg'},
  ]

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
        <div className={styles.providersButton}>
          <span>{t('homePage.providers')}</span>
        </div>
        <label className={styles.searchInputLabel}>
          <input placeholder={t("homePage.searchBar")} className={styles.searchInput}/>
        </label>
      </div>
      <div className={styles.divider}></div>
    </div>
  )
}