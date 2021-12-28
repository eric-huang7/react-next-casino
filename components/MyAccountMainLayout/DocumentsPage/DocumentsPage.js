import styles from '../../../styles/MyAccount/DocumentsPage/DocumentsPage.module.scss'
import {Heading} from "../ComponentsForPages/Heading";
import {FirstTextBlock} from "./DocumentsComponents/FirstTextBlock";
import {SecondTextBlock} from "./DocumentsComponents/SecondTextBlock";
import {UploadDocumentsBlock} from "./DocumentsComponents/UploadDocumentsBlock";
import {useSelector} from "react-redux";
import {LoadingComponent} from "../../LoadingComponent/LoadingComponent";
import {UploadedDocumentsContainer} from "./DocumentsComponents/UploadedDocuments/UploadedDocumentsContainer";


export const DocumentsPage = ({t}) => {
  const documentsData = useSelector((store) => store.authInfo);

  console.log(documentsData, '<<<<<<,')

  if (documentsData.loadingDocuments) {
    return (
      <div className={styles.mainContainer}>
        <Heading t={t} heading={"myAccount.pageHeadings.documents"}/>
        <LoadingComponent t={t}/>
      </div>
    )
  } else {
    return (
      <div className={styles.mainContainer}>
        <Heading
          t={t}
          heading={"myAccount.pageHeadings.documents"}
        />
        <FirstTextBlock t={t}/>
        <SecondTextBlock t={t}/>
        {
          documentsData.userDocuments.results.length > 0
            ?
            <UploadedDocumentsContainer
              documentsData={documentsData.userDocuments.results}
              t={t}
            />
            :
            <></>
        }
        <UploadDocumentsBlock
          t={t}/>
      </div>
    )
  }
}