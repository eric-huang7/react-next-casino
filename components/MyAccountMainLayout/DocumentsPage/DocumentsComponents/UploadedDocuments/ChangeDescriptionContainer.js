import styles from "../../../../../styles/MyAccount/DocumentsPage/DocumentsPage.module.scss";


export const ChangeDescriptionContainer = ({t, document, setShowChangeForm, showChangeForm}) => {



  return (
    <div className={`${styles.documentChangeContainer} ${showChangeForm ? "" : styles.hideForm}`}>
      <form id={`${'changeDocumentForm'}${document.id}`}>
            <textarea
              name={`${'changeDocumentDescription'}${document.id}`}
              className={styles.changeDocumentDescription}
            />
      </form>
      <button type={"submit"} className={styles.updateButton}>Update Document</button>
      <button
        className={styles.cancelButton}
        onClick={() => setShowChangeForm(false)}
      >Cancel</button>
    </div>
  )
}