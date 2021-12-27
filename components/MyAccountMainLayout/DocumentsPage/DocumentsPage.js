import styles from '../../../styles/MyAccount/DocumentsPage/DocumentsPage.module.scss'
import {Heading} from "../ComponentsForPages/Heading";
import {FirstTextBlock} from "./DocumentsComponents/FirstTextBlock";
import {SecondTextBlock} from "./DocumentsComponents/SecondTextBlock";
import {UploadDocumentsBlock} from "./DocumentsComponents/UploadDocumentsBlock";



export const DocumentsPage = ({t}) => {

  return (
    <div className={styles.mainContainer}>
      <Heading t={t} heading={"myAccount.pageHeadings.documents"}/>
      <FirstTextBlock t={t} />
      <SecondTextBlock t={t} />
      <UploadDocumentsBlock t={t} />
    </div>
  )
}