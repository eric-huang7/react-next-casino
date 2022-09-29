import { DocumentItem } from './DocumentItem'
import ErrorText from '../../../../ErrorBoundaryComponents/ErrorText'
import { Box } from '@chakra-ui/react'

export const UploadedDocumentsContainer = ({ t, documentsData }) => (
  <Box p="30px 0" borderTop="1px dotted #9e9e9e" borderBottom="1px dotted #9e9e9e">
    <Box border="1px solid #9e9e9e">
      {documentsData.map((document, index) => (
        <ErrorText key={`${document.id} uploaded doc`}>
          <DocumentItem index={index} key={`${document.id} uploaded doc`} t={t} document={document}/>
        </ErrorText>
      ))}
    </Box>
  </Box>
)
