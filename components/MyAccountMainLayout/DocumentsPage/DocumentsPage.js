import { Heading } from '../ComponentsForPages/Heading'
import { FirstTextBlock } from './DocumentsComponents/FirstTextBlock'
import { SecondTextBlock } from './DocumentsComponents/SecondTextBlock'
import { UploadDocumentsBlock } from './DocumentsComponents/UploadDocumentsBlock'
import { useSelector } from 'react-redux'
import { LoadingComponent } from '../../LoadingComponent/LoadingComponent'
import { UploadedDocumentsContainer } from './DocumentsComponents/UploadedDocuments/UploadedDocumentsContainer'
import ErrorText from '../../ErrorBoundaryComponents/ErrorText'
import { Box } from "@chakra-ui/react"

export const DocumentsPage = ({ t }) => {
  const documentsData = useSelector((store) => store.authInfo)

  return (
    <Box>
      <Heading heading={t('myAccount.pageHeadings.documents')}/>
      {documentsData.loadingDocuments
        ? <LoadingComponent t={t}/>
        : <>
          <FirstTextBlock t={t}/>
          <SecondTextBlock t={t}/>
          {documentsData.userDocuments.results.filter((el) => !el.time_removed).length > 0 && <ErrorText>
            <UploadedDocumentsContainer
              documentsData={documentsData.userDocuments.results.filter((el) => !el.time_removed)}
              t={t}
            />
          </ErrorText>}
          <ErrorText>
            <UploadDocumentsBlock
              t={t}/>
          </ErrorText>
        </>
      }

    </Box>
  )
}
