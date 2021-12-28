import styles from "../../../../styles/MyAccount/DocumentsPage/DocumentsPage.module.scss";



export const ChooseFileContainer = ({t, fileInputHandler, selectedFile}) => {


  return (
    <div className={styles.chooseFileBlock}>
      <label htmlFor="chooseFileInput">Attachment*</label>
      <label htmlFor="chooseFileInput" className={styles.chooseFileFakeInput}>
        {
          selectedFile
            ?
            <span className={styles.chosenFileName}>
              Chosen file: {selectedFile.name}
            </span>
            :
            <span className={styles.labelText}>
               Choose file
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