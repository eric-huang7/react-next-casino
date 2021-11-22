import styles from '../../../styles/HomePage/ChooseCategoryBlock.module.scss'

import Link from "next/link";
import {useState} from "react";
import {useRouter} from "next/router";
import {SearchBar} from "./SearchBar";
import {SearchModalWindowWrapper} from "../../SearchGamesModalWindow/SearchModalWindowWrapper";
import {useSelector} from "react-redux";


export const ChooseCategoryBlock = ({t, isProvidersPage}) => {
  const router = useRouter();
  console.log(router.asPath, '@@@@@@@@@@@@@@@@')

  const linksData = [
    {href: '/games-page/btc-games', name: "btcGames", icon: '/assets/icons/home/btc_games_icon.svg', activeIcon: '/assets/icons/home/btc_games_icon_active.svg'},
    {href: '/games-page/new-games', name: "newGames", icon: '/assets/icons/home/new_games_icon.svg', activeIcon: '/assets/icons/home/new_games_icon_active.svg'},
    {href: '/games-page/top-games', name: "topGames", icon: '/assets/icons/home/top_games_icon.svg', activeIcon: '/assets/icons/home/top_games_icon_active.svg'},
    {href: '/games-page/jackpot-games', name: "jackpotGames", icon: '/assets/icons/home/jackpot_games_icon.svg', activeIcon: '/assets/icons/home/jackpot_games_icon_active.svg'},
    {href: '/games-page/table-games', name: "tableGames", icon: '/assets/icons/home/table_games_icon.svg', activeIcon: '/assets/icons/home/table_games_icon_active.svg'},
  ]

  return (
    <div className={styles.categoryWrapper}>
      <ul className={styles.categoryList}>
        {
          linksData.map((el) => {
            return (
              <li key={el.name} className={styles.categoryListItem }>
                <img className={styles.linkIcon} src={`${router.asPath === el.href ? el.activeIcon : el.icon}`} alt={`${el.name} link icon`}/>
                <Link href={el.href}>
                  <a>{t(`homePage.${el.name}`)}</a>
                </Link>
              </li>
            )
          })
        }
      </ul>
      <div className={styles.categoryInputsWrapper}>
        <div className={`${styles.providersButton} ${isProvidersPage ? styles.isProviders : ''}`}>
          <Link href={'/providers-page'}>
            <a>{t('homePage.providers')}</a>
          </Link>
        </div>
        <SearchBar t={t}/>
      </div>
      <div className={styles.divider}></div>
    </div>
  )
}