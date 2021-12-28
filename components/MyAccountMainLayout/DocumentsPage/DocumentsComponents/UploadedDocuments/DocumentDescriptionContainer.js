import styles from "../../../../../styles/MyAccount/DocumentsPage/DocumentsPage.module.scss";
import {useRouter} from "next/router";
import {dateFormatter} from "../../../../../helpers/dateTranslator";


export const DocumentDescriptionContainer = ({t, document, showChangeFormHandler, showChangeForm, removeDocumentHandler}) => {
  const router = useRouter();
  let timeStr = dateFormatter(document.time_created, router.locale);


  return (
    <div className={`${styles.documentDescriptionContainer} ${showChangeForm ? styles.hideDescription : ""}`}>
      <p className={styles.descriptionTime}>{"Added at:"} {timeStr}</p>
      <p className={styles.descriptionText}>
        {document.description}
      </p>
      <button className={styles.editDescriptionButton} onClick={() => showChangeFormHandler(true)}>{"Edit Description"}</button>
      <button
        className={styles.removeFileButton}
        onClick={() => removeDocumentHandler(document)}
      >
        <span className={styles.croseOne}></span>
        <span className={styles.croseTwo}></span>
        {"Remove"}
      </button>
    </div>
  )
}