import styles from '../../../../../styles/MyAccount/DocumentsPage/DocumentsPage.module.scss'
import { ChangeDescriptionContainer } from './ChangeDescriptionContainer'
import { StatusContainer } from './StatusContainer'
import { DocumentDescriptionContainer } from './DocumentDescriptionContainer'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import {Box, Collapse} from '@chakra-ui/react'
import { changeDocuments, deleteDocuments, getDocuments } from '../../../../../redux/user/action'
import ErrorEmpty from '../../../../ErrorBoundaryComponents/ErrorEmpty'
import ErrorText from '../../../../ErrorBoundaryComponents/ErrorText'
import {Text} from "@chakra-ui/layout";

export const DocumentItem = ({ t, document, index }) => {
  const dispatch = useDispatch()
  const [showChangeForm, setShowChangeForm] = useState(false)
  const [newDescription, setNewDescription] = useState(document.description)

  const showChangeFormHandler = (isShow) => {
    setShowChangeForm(isShow)
  }

  const newDescriptionInputHandler = (value) => {
    setNewDescription(value)
  }

  const updateDocumentHandler = (document) => {
    let documentData = {
      id: document.id,
      description: newDescription
    }
    dispatch(changeDocuments(documentData))
      .then((data) => {
        setShowChangeForm(false)
      })
  }

  const removeDocumentHandler = (document) => {
    dispatch(deleteDocuments(document.id))
  }

  return (
    <Box bg={index % 2 === 0 ? '#efeff4' : '#e0e0e0'}
        display="grid"
        gridTemplateColumns={{base: "auto", lg: "1.5fr 4fr 1fr"}}
         gridTemplateRows={{base: "auto auto auto", lg: "auto"}}
        p="20px 15px"
        minW="420px"
         // className={styles.documentItemWrapper}
    >
      <ErrorEmpty>
        <Box order={{base: 1, lg: 1}}>
          <Text fontSize="15px" color="text.450" fontFamily="Verdana" w="150px" overflowX="hidden"
                textOverflow="ellipsis" m={0}>
            {document.name}
          </Text>
        </Box>
      </ErrorEmpty>
      <Box order={{base: 3, lg: 2}}>
        <ErrorEmpty>
          <DocumentDescriptionContainer
            t={t}
            document={document}
            showChangeFormHandler={showChangeFormHandler}
            showChangeForm={showChangeForm}
            removeDocumentHandler={removeDocumentHandler}
          />
        </ErrorEmpty>
        <ErrorText>
          <ChangeDescriptionContainer
            t={t}
            document={document}
            showChangeFormHandler={showChangeFormHandler}
            showChangeForm={showChangeForm}
            newDescription={newDescription}
            newDescriptionInputHandler={newDescriptionInputHandler}
            updateDocumentHandler={updateDocumentHandler}
          />
        </ErrorText>
      </Box>
      <StatusContainer
        t={t}
        status={document.status}
      />
    </Box>
  )
}
