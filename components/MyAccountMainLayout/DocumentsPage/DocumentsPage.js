import styles from '../../../styles/MyAccount/DocumentsPage/DocumentsPage.module.scss'
import {Heading} from "../ComponentsForPages/Heading";
import {FirstTextBlock} from "./DocumentsComponents/FirstTextBlock";
import {SecondTextBlock} from "./DocumentsComponents/SecondTextBlock";



export const DocumentsPage = ({t}) => {

  return (
    <div>
      <Heading t={t} heading={"myAccount.pageHeadings.documents"}/>
      <FirstTextBlock t={t} />
      <SecondTextBlock t={t} />
    </div>
  )
}