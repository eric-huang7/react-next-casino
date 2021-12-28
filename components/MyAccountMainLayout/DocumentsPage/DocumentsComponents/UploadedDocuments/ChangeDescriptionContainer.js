import styles from "../../../../../styles/MyAccount/DocumentsPage/DocumentsPage.module.scss";


export const ChangeDescriptionContainer = ({t, document}) => {



  return (
    <div className={styles.documentChangeContainer}>
      <form id={`${'changeDocumentForm'}${document.id}`}>
            <textarea
              name={`${'changeDocumentDescription'}${document.id}`}
              className={styles.changeDocumentDescription}
            />
      </form>
      <button type={"submit"} className={styles.updateButton}>Update Document</button>
      <button className={styles.cancelButton}>Cancel</button>
    </div>
  )
}