import styles from '../../../../../styles/MyAccount/DocumentsPage/DocumentsPage.module.scss'
import { ChangeDescriptionContainer } from './ChangeDescriptionContainer'
import { StatusContainer } from './StatusContainer'
import { DocumentDescriptionContainer } from './DocumentDescriptionContainer'
import { DocumentNameContainer } from './DocumentNameContainer'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { changeDocuments, deleteDocuments, getDocuments } from '../../../../../redux/actions/userData'
import ErrorEmpty from '../../../../ErrorBoundaryComponents/ErrorEmpty'
import ErrorText from '../../../../ErrorBoundaryComponents/ErrorText'

export const DocumentItem = ({ t, document }) => {
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
    <div className={styles.documentItemWrapper}>
      <ErrorEmpty>
        <DocumentNameContainer
          t={t}
          name={document.name}
        />
      </ErrorEmpty>
      <div className={styles.documentChangingContainer}>
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
      </div>
      <StatusContainer
        t={t}
        status={document.status}
      />
    </div>
  )
}