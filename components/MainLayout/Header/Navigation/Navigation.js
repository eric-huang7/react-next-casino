import Link from 'next/link'
import {useTranslation} from "next-i18next";

import styles from '../../../../styles/Header/Navigation.module.scss';


export const Navigation = ({t}) => {
  const linksKey = [
    {key: 'home', route: '/'},
    {key: 'promotions', route: '/promotions'},
    {key: 'contactUs', route: '/contactUs'},
    {key: 'termsAndConditions', route: '/termsAndConditions'},
    {key: 'aboutUs', route: '/aboutUs'},
  ]

  return (
    <nav className={styles.headerNavbar}>
      <ul className={styles.headerNavbarList}>
        {linksKey.map((link) => {
          if (link.key === 'termsAndConditions') {
            return (
              <li key={link.key} className={styles.headerNavbarListItem}>
                <a>Terms & conditions</a>
              </li>
            )
          } else {
            return(
              <li key={link.key} className={styles.headerNavbarListItem}>
                <Link  href={link.route}>
                  {
                    t(`header.navbarLinks.${link.key}`)
                  }
                </Link>
              </li>
            )
          }

        })}
      </ul>
    </nav>
  )
}

