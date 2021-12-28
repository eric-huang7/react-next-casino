import styles from '../../../../../styles/MyAccount/DocumentsPage/DocumentsPage.module.scss'
import {DocumentItem} from "./DocumentItem";


export const UploadedDocumentsContainer = ({t, documentsData}) => {

  console.log(documentsData);

  return (
    <div className={styles.uploadedDocumentsContainerWrapper}>
      <div  className={styles.uploadedDocumentsContainer}>
        {
          documentsData.map((document) => {

            return (
              <DocumentItem key={`${document.id} uploaded doc`} t={t} document={document}/>
            )
          })
        }
      </div>
    </div>
  )
}