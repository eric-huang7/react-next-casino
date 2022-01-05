import styles from '../../styles/DesktopMenu/DesktopMenu.module.scss';
import Link from "next/link";

export const LinkItem = ({t, path, name, icon}) => {

  return (
    <li className={styles.linkItem}>
      <div className={styles.iconContainer}>
        <img src={icon} alt={`${name} link icon`}/>
      </div>
      <Link href={path}><a>{t(name)}</a></Link>
    </li>
  )
}