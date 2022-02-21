import styles from '../../../../../styles/MyAccount/DocumentsPage/DocumentsPage.module.scss'
import { DocumentItem } from './DocumentItem'
import ErrorText from '../../../../ErrorBoundaryComponents/ErrorText'

export const UploadedDocumentsContainer = ({ t, documentsData }) => {

  return (
    <div className={styles.uploadedDocumentsContainerWrapper}>
      <div className={styles.uploadedDocumentsContainer}>
        {
          documentsData.map((document) => {

            return (
              <ErrorText key={`${document.id} uploaded doc`}>
                <DocumentItem key={`${document.id} uploaded doc`} t={t} document={document}/>
              </ErrorText>
            )
          })
        }
      </div>
    </div>
  )
}