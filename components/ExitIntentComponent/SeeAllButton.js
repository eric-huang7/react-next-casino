import styles from "../../styles/ExitIntentComponent/ExitInentPopup.module.scss";
import Link from "next/link";


export const SeeAllButton = ({t, path, text, exit}) => {


  return (
    <div onClick={() => exit()} className={styles.seeAllButton}>
      <Link href={path}><a>{text}</a></Link>
    </div>
  )
}