import styles from '../../../styles/HomePage/ChooseCategoryBlock.module.scss'
// import styles from '../../../public/styles/HomePage/ChooseCategoryBlock.module.scss'
import Link from "next/link";
import {useState} from "react";


export const ChooseCategoryBlock = ({t}) => {

  const linksData = [
    {href: '#', name: "btcGames", icon: '/assets/icons/home/btc_games_icon.svg'},
    {href: '#', name: "newGames", icon: '/assets/icons/home/new_games_icon.svg'},
    {href: '#', name: "topGames", icon: '/assets/icons/home/top_games_icon.svg'},
    {href: '#', name: "jackpotGames", icon: '/assets/icons/home/jackpot_games_icon.svg'},
    {href: '#', name: "tableGames", icon: '/assets/icons/home/table_games_icon.svg'},
  ]

  return (
    <div className={styles.categoryWrapper}>
      <ul className={styles.categoryList}>
        {
          linksData.map((el) => {
            return (
              <li key={el.name} className={styles.categoryListItem}>
                <Link href={el.href}>
                  <a>{t(`homePage.${el.name}`)}</a>
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