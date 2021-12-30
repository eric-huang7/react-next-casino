import styles from "../../../../../styles/MyAccount/DocumentsPage/DocumentsPage.module.scss";
import {ChangeDescriptionContainer} from "./ChangeDescriptionContainer";
import {StatusContainer} from "./StatusContainer";
import {DocumentDescriptionContainer} from "./DocumentDescriptionContainer";
import {DocumentNameContainer} from "./DocumentNameContainer";
import {useState} from "react";
import axios from "axios";
import {document_url} from "../../../../../redux/url/url";
import {useDispatch} from "react-redux";
import {changeDocuments, deleteDocuments, getDocuments} from "../../../../../redux/actions/userData";


export const DocumentItem = ({t, document}) => {
  const dispatch = useDispatch();
  const [showChangeForm, setShowChangeForm] = useState(false);
  const [newDescription, setNewDescription] = useState(document.description);

  const showChangeFormHandler = (isShow) => {
    setShowChangeForm(isShow);
  }

  const newDescriptionInputHandler = (value) => {
    setNewDescription(value);
  }

  const updateDocumentHandler = (document) => {
    let documentData = {
      id: document.id,
      description: newDescription
    }
    dispatch(changeDocuments(documentData))
      .then((data) => {
        setShowChangeForm(false);
      })
  }

  const removeDocumentHandler = (document) => {
      dispatch(deleteDocuments(document.id));
  }


  return (
    <div className={styles.documentItemWrapper}>
      <DocumentNameContainer
        t={t}
        name={document.name}
      />
      <div className={styles.documentChangingContainer}>
        <DocumentDescriptionContainer
          t={t}
          document={document}
          showChangeFormHandler={showChangeFormHandler}
          showChangeForm={showChangeForm}
          removeDocumentHandler={removeDocumentHandler}
        />
        <ChangeDescriptionContainer
          t={t}
          document={document}
          showChangeFormHandler={showChangeFormHandler}
          showChangeForm={showChangeForm}
          newDescription={newDescription}
          newDescriptionInputHandler={newDescriptionInputHandler}
          updateDocumentHandler={updateDocumentHandler}
        />
      </div>
      <StatusContainer
        t={t}
        status={document.status}
      />
    </div>
  )
}