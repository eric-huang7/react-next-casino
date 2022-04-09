import styles from "../../../styles/ManageSubscriptions/ManageSubscriptions.module.scss";
import {useEffect} from "react";



export const SubscriptionsInputsContainer = ({t, userInfo, emailSubscript, smsSubscript, notifySubscript, inputsCheckedHandler}) => {


  return (
    <div className={styles.subscriptions__inputsBlock}>
      <div className={styles.inputItemWrapper}>
        <input
          onChange={(e) => inputsCheckedHandler(e)}
          defaultChecked={userInfo.userSubscriptions.emailSubscribe}
          type="checkbox"
          id='emailSubscript'
          name='emailSubscript'
          className={styles.emailSubscript}
        />
        <label htmlFor="emailSubscript" className={styles.emailSubscriptLabel}>{t("manageSubscriptions.emailSubscript")}</label>
      </div>
      <div className={styles.inputItemWrapper}>
        <input
          onChange={(e) => inputsCheckedHandler(e)}
          defaultChecked={userInfo.userSubscriptions.smsSubscribe}
          type="checkbox"
          id='smsSubscript'
          name='smsSubscript'
          className={styles.smsSubscript}
        />
        <label htmlFor="smsSubscript" className={styles.smsSubscriptLabel}>{t("manageSubscriptions.smsSubscript")}</label>
      </div>
      <div className={styles.inputItemWrapper}>
        <input
          onChange={(e) => inputsCheckedHandler(e)}
          defaultChecked={userInfo.userSubscriptions.notifySubscribe}
          type="checkbox"
          id='notifySubscript'
          name='notifySubscript'
          className={styles.notifySubscript}
        />
        <label htmlFor="notifySubscript" className={styles.notifySubscriptLabel}>{t("manageSubscriptions.notifySubscript")}</label>
      </div>
    </div>
  )
}
