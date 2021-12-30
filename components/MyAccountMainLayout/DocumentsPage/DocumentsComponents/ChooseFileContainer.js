import styles from "../../../../styles/MyAccount/DocumentsPage/DocumentsPage.module.scss";



export const ChooseFileContainer = ({t, fileInputHandler, selectedFile}) => {


  return (
    <div className={styles.chooseFileBlock}>
      <label htmlFor="chooseFileInput">{t("myAccount.documentsPage.uploadDocumentBlock.attachment")}</label>
      <label htmlFor="chooseFileInput" className={styles.chooseFileFakeInput}>
        {
          selectedFile
            ?
            <span className={styles.chosenFileName}>
              {t("myAccount.documentsPage.uploadDocumentBlock.chosenFile")} {selectedFile.name}
            </span>
            :
            <span className={styles.labelText}>
               {t("myAccount.documentsPage.uploadDocumentBlock.chooseFile")}
            </span>
        }
      </label>
      <input
        onChange={(e) => fileInputHandler(e.target.files[0])}
        type={"file"}
        className={styles.uploadFileInput}
        id={"chooseFileInput"}
        // value={selectedFile}
      />
    </div>
  )

}