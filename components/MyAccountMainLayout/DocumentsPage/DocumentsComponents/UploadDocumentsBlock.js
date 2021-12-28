import styles from '../../../../styles/MyAccount/DocumentsPage/DocumentsPage.module.scss';
import {ChooseFileContainer} from "./ChooseFileContainer";
import {FileDescriptionContainer} from "./FileDescriptionContainer";
import {SubmitButton} from "./SubmitButton";
import {useState} from "react";
import axios from "axios";
import {document_url} from "../../../../redux/url/url";
import {getDocuments} from "../../../../redux/actions/userData";
import {useDispatch} from "react-redux";


export const UploadDocumentsBlock = ({t}) => {
  const dispatch = useDispatch();
  const [description, setDescription] = useState("");
  const [descriptionError, setDescriptionError] = useState("");
  const [selectedFile, setSelectedFile] = useState("");
  const descriptionInputHandler = (value) => {
    setDescription(value);
  }
  const fileInputHandler = (file) => {
    setSelectedFile(file);
  }

  const submitHandler = (e) => {
    e.preventDefault();
    if (selectedFile) {
      if (description) {
        const formData = new FormData();
        formData.append("file", selectedFile);
        formData.append("description", description);
        formData.append("type", "1");

        axios.post(document_url, formData)
          .then((res) => {
            console.log(res, 'file Upload');
            setDescriptionError("")
            setDescription('');
            setSelectedFile("");
            dispatch(getDocuments());
          })
          .catch((e) => {
            setDescriptionError("File upload error. Please try again.");
            console.log(e.response, 'Some error when upload file!');
          })
      } else {
        setDescriptionError("Describe the file you are sending.");
      }
    } else {
      setDescriptionError("Please select and describe the file you are sending.");
    }
  }

  return (
    <div className={styles.uploadDocumentsContainer}>
      <p className={styles.uploadDocumentHeading}>Upload a Document</p>
      <form
        id={'downloadDocumentForm'}
        onSubmit={(e) => submitHandler(e)}
      >
        <ChooseFileContainer
          t={t}
          fileInputHandler={fileInputHandler}
          selectedFile={selectedFile}
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