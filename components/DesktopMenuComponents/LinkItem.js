import styles from '../../styles/DesktopMenu/DesktopMenu.module.scss'
import Link from 'next/link'
import { useTranslation } from 'next-i18next'

export const LinkItem = ({ path, name, icon, onClick }) => {
  const { t } = useTranslation('common')

  const item = (<>
    <div className={styles.iconContainer}>
      <img src={icon} alt=''/>
    </div>
    {t(name)}
  </>)

  return (
    <li className={styles.linkItem}>
      {path ? <Link href={path}>
        <a>
          {item}
        </a>
      </Link> : <button onClick={onClick}>
        {item}
      </button>}
    </li>
  )
}
