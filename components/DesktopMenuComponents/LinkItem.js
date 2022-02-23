import styles from '../../styles/DesktopMenu/DesktopMenu.module.scss'
import Link from 'next/link'
import { useTranslation } from 'next-i18next'

export const LinkItem = ({ path, name, icon }) => {
  const { t } = useTranslation('common')

  return (
    <li className={styles.linkItem}>
      <div className={styles.iconContainer}>
        <img src={icon} alt={`${name} link icon`}/>
      </div>
      <Link href={path}><a>{t(name)}</a></Link>
    </li>
  )
}