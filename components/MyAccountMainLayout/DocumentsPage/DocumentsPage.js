import styles from '../../../styles/MyAccount/DocumentsPage/DocumentsPage.module.scss'
import {Heading} from "../ComponentsForPages/Heading";
import {FirstTextBlock} from "./DocumentsComponents/FirstTextBlock";
import {SecondTextBlock} from "./DocumentsComponents/SecondTextBlock";
import {UploadDocumentsBlock} from "./DocumentsComponents/UploadDocumentsBlock";
import {LoadingComponent} from "../../LoadingComponent/LoadingComponent";
import {useEffect, useState} from "react";




export const DocumentsPage = ({t}) => {
  const [show, Setshow] = useState(false)

  function doSom() {
    console.log('close');
    return true;
  }



  const message = (e) => {
    // e.preventDefault();

    (e || window.event).returnValue = doSom(); //Gecko + IE

    console.log('unload');
    return doSom();                          //Webkit, Safari, Chrome
  }

  function setEvent() {
    window.addEventListener("beforeunload", message);
  }
  function retirn() {
    window.removeEventListener("beforeunload", message);
  }

  useEffect(() => {
    setEvent();
    return retirn();
  }, [])




  return (
    <div className={styles.mainContainer}>
      <Heading t={t} heading={"myAccount.pageHeadings.documents"}/>
      <LoadingComponent t={t}/>
      {
        show ? <FirstTextBlock t={t} /> : <></>
      }
      {/*<FirstTextBlock t={t} />*/}
      {/*<SecondTextBlock t={t} />*/}
      {/*<UploadDocumentsBlock t={t} />*/}
    </div>
  )
}