import styles from "../../../../../styles/MyAccount/DocumentsPage/DocumentsPage.module.scss";
import {useRouter} from "next/router";
import {dateFormatter} from "../../../../../helpers/dateTranslator";


export const DocumentDescriptionContainer = ({t, description, time}) => {
  const router = useRouter();
  let timeStr = dateFormatter(time, router.locale);


  return (
    <div className={styles.documentDescriptionContainer}>
      <p className={styles.descriptionTime}>{"Added at:"} {timeStr}</p>
      <p className={styles.descriptionText}>{description}</p>
      <button className={styles.editDescriptionButton}>{"Edit Description"}</button>
      <button className={styles.removeFileButton}>
        <span className={styles.croseOne}></span>
        <span className={styles.croseTwo}></span>
        {"Remove"}
      </button>
    </div>
  )
}