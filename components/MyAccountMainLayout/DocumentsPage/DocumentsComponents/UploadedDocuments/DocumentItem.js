import styles from "../../../../../styles/MyAccount/DocumentsPage/DocumentsPage.module.scss";
import {ChangeDescriptionContainer} from "./ChangeDescriptionContainer";
import {StatusContainer} from "./StatusContainer";
import {DocumentDescriptionContainer} from "./DocumentDescriptionContainer";
import {DocumentNameContainer} from "./DocumentNameContainer";
import {useState} from "react";


export const DocumentItem = ({t, document}) => {
   const [showChangeForm, setShowChangeForm] = useState(false);

  return (
    <div className={styles.documentItemWrapper}>
      <DocumentNameContainer
        t={t}
        name={document.name}
      />
      <div className={styles.documentChangingContainer}>
        <DocumentDescriptionContainer
          t={t}
          description={document.description}
          time={document.time_created}
          setShowChangeForm={setShowChangeForm}
          showChangeForm={showChangeForm}
        />
        <ChangeDescriptionContainer
          t={t}
          document={document}
          showChangeForm={showChangeForm}
          setShowChangeForm={setShowChangeForm}
        />
      </div>
      <StatusContainer
        t={t}
        status={document.status}
      />
    </div>
  )
}