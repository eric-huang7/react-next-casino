import styles from "../../../../../styles/MyAccount/DocumentsPage/DocumentsPage.module.scss";
import {ChangeDescriptionContainer} from "./ChangeDescriptionContainer";
import {StatusContainer} from "./StatusContainer";
import {DocumentDescriptionContainer} from "./DocumentDescriptionContainer";
import {DocumentNameContainer} from "./DocumentNameContainer";


export const DocumentItem = ({t, document}) => {


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
        />
        <ChangeDescriptionContainer
          t={t}
          document={document}
        />
      </div>
      <StatusContainer
        t={t}
        status={document.status}
      />
    </div>
  )
}