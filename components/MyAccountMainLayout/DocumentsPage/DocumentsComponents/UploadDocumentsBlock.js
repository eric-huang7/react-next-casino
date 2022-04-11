import styles from '../../../../styles/MyAccount/DocumentsPage/DocumentsPage.module.scss'
import { ChooseFileContainer } from './ChooseFileContainer'
import { FileDescriptionContainer } from './FileDescriptionContainer'
import { SubmitButton } from './SubmitButton'
import { useState } from 'react'
import axios from 'axios'
import { document_url } from '../../../../redux/url/url'
import { getDocuments } from '../../../../redux/user/action'
import { useDispatch } from 'react-redux'

const fileTypes = ['image/jpeg', 'image/png', 'image/svg+xml', 'application/pdf', 'image/webp']

export const UploadDocumentsBlock = ({ t }) => {
  const dispatch = useDispatch()
  const [description, setDescription] = useState('')
  const [descriptionError, setDescriptionError] = useState('')
  const [selectedFile, setSelectedFile] = useState('')
  const [isUploading, setIsUploading] = useState(false)
  const [fileError, setFileError] = useState('')

  const descriptionInputHandler = (value) => {
    setDescription(value)
  }
  const fileInputHandler = (file) => {
    setSelectedFile(file)
  }

  const submitHandler = (e) => {
    e.preventDefault()
    if (selectedFile) {
      if (description) {
        let validFile = fileTypes.includes(selectedFile.type)
        setDescriptionError('')
        if (validFile) {
          let fileSize = 10485760
          if (fileSize >= selectedFile.size) {
            setIsUploading(true)
            const formData = new FormData()
            formData.append('file', selectedFile)
            formData.append('description', description)
            formData.append('type', '1')

            axios.post(document_url, formData)
              .then((res) => {

                setDescriptionError('')
                setDescription('')
                setSelectedFile('')
                setFileError('')
                dispatch(getDocuments())
                setIsUploading(false)
              })
              .catch((e) => {
                setIsUploading(false)
                setDescriptionError(t('myAccount.documentsPage.uploadDocumentBlock.errors.fileNotUpload'))
              })
          } else {
            setFileError(t('myAccount.documentsPage.uploadDocumentBlock.errors.bigFile'))
          }
        } else {
          setFileError(t('myAccount.documentsPage.uploadDocumentBlock.errors.wrongType'))
        }
      } else {
        setDescriptionError(t('myAccount.documentsPage.uploadDocumentBlock.errors.describeFile'))
      }
    } else {
      setDescriptionError(t('myAccount.documentsPage.uploadDocumentBlock.errors.selectFile'))
    }
  }

  return (
    <div className={styles.uploadDocumentsContainer}>
      <p className={styles.uploadDocumentHeading}>{t('myAccount.documentsPage.uploadDocumentBlock.uploadDocument')}</p>
      <form
        id={'downloadDocumentForm'}
        onSubmit={(e) => submitHandler(e)}
      >
        <ChooseFileContainer
          t={t}
          fileInputHandler={fileInputHandler}
          selectedFile={selectedFile}
          isUploading={isUploading}
          fileError={fileError}
        />
        <FileDescriptionContainer
          t={t}
          descriptionInputHandler={descriptionInputHandler}
          description={description}
          descriptionError={descriptionError}
        />
        <span className={styles.errorMessage}>{descriptionError}</span>
      </form>

      <SubmitButton
        submitHandler={submitHandler}
        t={t}
      />
    </div>
  )
}
