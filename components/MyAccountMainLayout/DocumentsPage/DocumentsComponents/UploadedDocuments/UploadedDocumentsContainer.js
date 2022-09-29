import styles from '../../../../../styles/MyAccount/DocumentsPage/DocumentsPage.module.scss'
import { DocumentItem } from './DocumentItem'
import ErrorText from '../../../../ErrorBoundaryComponents/ErrorText'
import { Box } from '@chakra-ui/react'

export const UploadedDocumentsContainer = ({ t, documentsData }) => (
  <div className={styles.uploadedDocumentsContainerWrapper}>
    <Box border="1px solid #9e9e9e"
         // className={styles.uploadedDocumentsContainer}
    >
      {documentsData.map((document, index) => (
        <ErrorText key={`${document.id} uploaded doc`}>
          <DocumentItem index={index} key={`${document.id} uploaded doc`} t={t} document={document}/>
        </ErrorText>
      ))}
    </Box>
  </div>
)
