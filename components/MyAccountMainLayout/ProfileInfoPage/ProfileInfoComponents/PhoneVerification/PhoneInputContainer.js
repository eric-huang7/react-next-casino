import styles from '../../../../../styles/MyAccount/UserInfoPage/PhoneVerification.module.scss';
import {useState} from "react";
import {useDispatch} from "react-redux";
import {patchUserData} from "../../../../../redux/actions/userData";
import axios from "axios";
import {phone_number_url} from "../../../../../redux/url/url";
import {GET_ACTIVE_PENDING_BONUSES} from "../../../../../redux/actions/types";


export const PhoneInputContainer = ({t, phoneInputValue, phoneNumber, sendPhoneNumberHandler, phoneError}) => {



  return (
    <div className={styles.phoneInputContainer}>
      <div>
        <p className={styles.textFirst}>Add Verified Phone</p>
        <p className={styles.textSecond}>Verification code will be send to your phone.</p>
      </div>
      <form onSubmit={(e) => sendPhoneNumberHandler(e)}>
        <div className={styles.phoneInputWrapper}>
          <input onChange={(e) => phoneInputValue(e.target.value)} value={phoneNumber} type="tel"
                 className={styles.phoneVerifyInput}/>
          <button type={'submit'} onClick={(e) => sendPhoneNumberHandler(e)} className={styles.phoneVerifyButton}>Add</button>
        </div>
      </form>
      <span className={styles.errorMessage}>{phoneError}</span>
    </div>
  )
}