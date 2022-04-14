import Link from 'next/link'
import { useTranslation } from 'next-i18next'
import styles from '../../../../styles/Header/Navigation.module.scss'

export const Navigation = ({ isAuthenticated }) => {
  const { t } = useTranslation('common')
  const linksKey = [
    { key: 'home', route: '/' },
    { key: 'promotions', route: '/promotions' },
    { key: 'aboutUs', route: '/aboutUs' },
  ].slice(0, isAuthenticated ? 2 : 3)

  return (
    <nav className={styles.headerNavbar}>
      <ul className={styles.headerNavbarList}>
        {linksKey.map((link) => {
          return (
            <li key={link.key} className={styles.headerNavbarListItem}>
              <Link href={link.route}>
                {
                  t(`header.navbarLinks.${link.key}`)
                }
              </Link>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}
