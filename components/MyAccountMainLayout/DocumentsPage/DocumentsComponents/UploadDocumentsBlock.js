import { ChooseFileContainer } from './ChooseFileContainer'
import { FileDescriptionContainer } from './FileDescriptionContainer'
import { useState } from 'react'
import { document_url } from '../../../../redux/url/url'
import { getDocuments } from '../../../../redux/user/action'
import { useDispatch } from 'react-redux'
import Connect from "../../../../helpers/connect";
import RoundButton from "../../../buttons/RoundButton";
import {Text, Box} from "@chakra-ui/react";

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

            Connect.post(document_url, formData, {}, (status, data) => {
              setDescriptionError('')
              setDescription('')
              setSelectedFile('')
              setFileError('')
              dispatch(getDocuments())
              setIsUploading(false)
            }).catch((e) => {
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
    <Box mb="24px">
      <Text fontSize={16} color="text.450" fontFamily="Verdana" py="24px">
        {t('myAccount.documentsPage.uploadDocumentBlock.uploadDocument')}
      </Text>
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
        <Text fontSize={12} color="red.500" ml="140px" mb="20px">{descriptionError}</Text>
      </form>

      <RoundButton
        onClick={submitHandler}
        title={t("myAccount.documentsPage.uploadDocumentBlock.submit")}
        w="auto"
        solid
        fontFamily="Verdana"
        fontSize={15}
        form="downloadDocumentForm"
        type="submit"
        ml="140px"
        mb="60px"
      />
    </Box>
  )
}
