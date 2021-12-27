import styles from "../../../../styles/MyAccount/DocumentsPage/DocumentsPage.module.scss";
import {useState} from "react";


export const ChooseFileContainer = ({t}) => {
  const [fileData, setFileData] = useState('');

  const chooseFilesHandler = (e) => {
    setFileData(e.target.files[0]);
    console.log(e.target.files[0]);
  }

  return (
    <div className={styles.chooseFileBlock}>
      <label htmlFor="chooseFileInput">Attachment*</label>
      <label htmlFor="chooseFileInput" className={styles.chooseFileFakeInput}>
        {
          fileData
            ?
            <span className={styles.chosenFileName}>
              Chosen file: {fileData.name}
            </span>
            :
            <span className={styles.labelText}>
               Choose file
            </span>
        }
      </label>
      <input onChange={(e) => chooseFilesHandler(e)} type={"file"} className={styles.uploadFileInput} id={"chooseFileInput"}/>
    </div>
  )

}