import styles from "../../../../../styles/MyAccount/DocumentsPage/DocumentsPage.module.scss";


export const ChangeDescriptionContainer = ({t, showChangeFormHandler, document, showChangeForm, newDescription, newDescriptionInputHandler, updateDocumentHandler}) => {



  return (
    <div className={`${styles.documentChangeContainer} ${showChangeForm ? "" : styles.hideForm}`}>
      <form id={`${'changeDocumentForm'}${document.id}`}>
            <textarea
              name={`${'changeDocumentDescription'}${document.id}`}
              className={styles.changeDocumentDescription}
              value={newDescription}
              onChange={(e) => newDescriptionInputHandler(e.target.value)}
            />
      </form>
      <button
        type={"submit"}
        className={styles.updateButton}
        onClick={() => updateDocumentHandler(document)}
      >
        Update Document
      </button>
      <button
        className={styles.cancelButton}
        onClick={() => showChangeFormHandler(false)}
      >Cancel</button>
    </div>
  )
}