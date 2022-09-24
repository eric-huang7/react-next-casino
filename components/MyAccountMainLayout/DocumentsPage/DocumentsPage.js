import styles from '../../../styles/MyAccount/DocumentsPage/DocumentsPage.module.scss'
import { Heading } from '../ComponentsForPages/Heading'
import { FirstTextBlock } from './DocumentsComponents/FirstTextBlock'
import { SecondTextBlock } from './DocumentsComponents/SecondTextBlock'
import { UploadDocumentsBlock } from './DocumentsComponents/UploadDocumentsBlock'
import { useSelector } from 'react-redux'
import { LoadingComponent } from '../../LoadingComponent/LoadingComponent'
import { UploadedDocumentsContainer } from './DocumentsComponents/UploadedDocuments/UploadedDocumentsContainer'
import ErrorText from '../../ErrorBoundaryComponents/ErrorText'

export const DocumentsPage = ({ t }) => {
  const documentsData = useSelector((store) => store.authInfo)

  if (documentsData.loadingDocuments) {
    return (
      <div className={styles.mainContainer}>
        <Heading heading={t('myAccount.pageHeadings.documents')}/>
        <LoadingComponent t={t}/>
      </div>
    )
  } else {
    return (
      <div className={styles.mainContainer}>
        <Heading heading={t('myAccount.pageHeadings.documents')}/>
        <FirstTextBlock t={t}/>
        <SecondTextBlock t={t}/>
        {
          documentsData.userDocuments.results.filter((el) => !el.time_removed).length > 0
            ?
            <ErrorText>
              <UploadedDocumentsContainer
                documentsData={documentsData.userDocuments.results.filter((el) => !el.time_removed)}
                t={t}
              />
            </ErrorText>
            :
            <></>
        }
        <ErrorText>
          <UploadDocumentsBlock
            t={t}/>
        </ErrorText>
      </div>
    )
  }
}
