import styles from '../../../../styles/MyAccount/DocumentsPage/DocumentsPage.module.scss';
import {ChooseFileContainer} from "./ChooseFileContainer";
import {FileDescriptionContainer} from "./FileDescriptionContainer";
import {SubmitButton} from "./SubmitButton";


export const UploadDocumentsBlock = ({t}) => {

  return (
    <div className={styles.uploadDocumentsContainer}>
      <p className={styles.uploadDocumentHeading}>Upload a Document</p>
      <form id={'downloadDocumentForm'}>
        <ChooseFileContainer t={t} />
        <FileDescriptionContainer t={t} />
      </form>
      <SubmitButton t={t} />
    </div>
  )
}