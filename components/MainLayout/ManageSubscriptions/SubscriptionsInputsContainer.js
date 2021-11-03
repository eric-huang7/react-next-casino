import styles from "../../../styles/ManageSubscriptions/ManageSubscriptions.module.scss";
import {useState} from "react";


export const SubscriptionsInputsContainer = ({t, userInfo}) => {
  console.log(userInfo.authInfo.user.user.transactional_email_opt_in, "email");
  console.log(userInfo.authInfo.user.user.transactional_sms_opt_in, 'sms');
  console.log(userInfo.authInfo.user.user.browser_opt_in, "browser");
  const [emailSubscript, setEmailSubscript] = useState(userInfo.authInfo.user.user.transactional_email_opt_in);
  const [smsSubscript, setSmsSubscript] = useState(userInfo.authInfo.user.user.transactional_sms_opt_in);
  const [notifySubscript, setNotifySubscript] = useState(userInfo.authInfo.user.user.browser_opt_in);

  const inputsCheckedHandler = (e) => {

    console.log(e.target, e.target.checked, 'input change');
  }

  return (
    <div className={styles.subscriptions__inputsBlock}>
      <div className={styles.inputItemWrapper}>
        <input onChange={(e) => inputsCheckedHandler(e)} defaultChecked={emailSubscript} type="checkbox" id='emailSubscript' name='emailSubscript' className={styles.emailSubscript}/>
        <label htmlFor="emailSubscript" className={styles.emailSubscriptLabel}>Reseive Email Promos</label>
      </div>
      <div className={styles.inputItemWrapper}>
        <input defaultChecked={smsSubscript} type="checkbox" id='smsSubscript' name='smsSubscript' className={styles.smsSubscript}/>
        <label htmlFor="smsSubscript" className={styles.smsSubscriptLabel}>Reseive SMS Promos</label>
      </div>
      <div className={styles.inputItemWrapper}>
        <input defaultChecked={notifySubscript} type="checkbox" id='notifySubscript' name='notifySubscript' className={styles.notifySubscript}/>
        <label htmlFor="notifySubscript" className={styles.notifySubscriptLabel}>Reseive Browser Notifications</label>
      </div>
    </div>
  )
}