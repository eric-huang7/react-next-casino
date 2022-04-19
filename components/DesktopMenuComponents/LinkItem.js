import styles from '../../styles/DesktopMenu/DesktopMenu.module.scss'
import Link from 'next/link'
import { useTranslation } from 'next-i18next'

export const LinkItem = ({ path, name, icon }) => {
  const { t } = useTranslation('common')

  return (
    <li className={styles.linkItem}>
      <Link href={path}>
        <a>
          <div className={styles.iconContainer}>
            <img src={icon} alt=''/>
          </div>
          {t(name)}
        </a>
      </Link>
    </li>
  )
}
