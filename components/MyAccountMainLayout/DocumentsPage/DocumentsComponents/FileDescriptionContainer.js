import styles from "../../../../styles/MyAccount/DocumentsPage/DocumentsPage.module.scss";


export const FileDescriptionContainer = ({t, descriptionInputHandler, description}) => {


  return (
    <div className={styles.descriptionContainer}>
      <label htmlFor="fileDescriptionField">{t("myAccount.documentsPage.uploadDocumentBlock.description")}</label>
      <textarea
        id={"fileDescriptionField"}
        value={description}
        onChange={(e) => descriptionInputHandler(e.target.value)}
      />

      <div className={styles.divider}></div>
    </div>
  )
}