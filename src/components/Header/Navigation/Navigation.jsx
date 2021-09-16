import React from "react";
import { Link } from 'react-router-dom';

import styles from './Navigation.module.css'
import {useTranslation} from "react-i18next";


export const Navigation = () => {
  const { t } = useTranslation();
  const linksKey = [
    {key: 'home', route: '/home'},
    {key: 'promotions', route: '/promotions'},
    {key: 'contactUs', route: '/contactUs'},
    {key: 'terms&conditions', route: '/terms&conditions'},
    {key: 'aboutUs', route: '/aboutUs'},
  ]

  return (
      <nav className={styles.headerNavbar}>
        <ul className={styles.headerNavbarList}>
          {linksKey.map((link) => {
            return(
              <Link key={link.key} to={link.route}>
                <li className={styles.headerNavbarListItem}>
                  {t(`header.navbarLinks.${link.key}`).toUpperCase()}
                </li>
              </Link>
              )
          })}
        </ul>
      </nav>
  )
}