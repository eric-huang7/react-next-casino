import styles from '../../../../../styles/MyAccount/UserInfoPage/PhoneVerification.module.scss';
import {PhoneInputContainer} from "./PhoneInputContainer";
import {VerifyCodeInputContainer} from "./VerifyCodeInputContainer";
import {useDispatch} from "react-redux";
import {useState} from "react";
import axios from "axios";
import {phone_number_url} from "../../../../../redux/url/url";
import {patchUserData} from "../../../../../redux/actions/userData";
import {PhoneAlreadyVerified} from "./PhoneAlreadyVerified";


export const PhoneVerification = ({t, userInfo}) => {
  const dispatch = useDispatch()
  const [phoneNumber, setPhoneNumber] = useState('');
  const [phoneError, setPhoneError] = useState('');
  const [verifyCode, setVerifyCode] = useState('');

  const phoneInputValue = (value) => {
    setPhoneNumber(value);
  }
  const verifyCodeInputHandler = (value) => {
    setVerifyCode(value);
  }

  const sendVerifyCodeHandler = () => {
    console.log(verifyCode);
  }

  const sendPhoneNumberHandler = () => {
    let userData = {
      id: userInfo.user.user.id,
      phone_number: phoneNumber,
    }
    const config = {
      withCredentials: true,
      headers: {
        'Content-Type': 'application/json',
      },
      params: {phone: phoneNumber}
    }
    axios.get(phone_number_url, config).then((data) => {
      console.log(data, "from phone token")
      setPhoneError("");
      dispatch(patchUserData(userData));
    }).catch((e) => {
      console.log(e.response, 'error from phone token')
      setPhoneError(e.response.data.extra_error_info.message);
    })
  }
  const sendAgainVerifyCode = () => {
    if (userInfo.user.user.phone_number) {
      const config = {
        withCredentials: true,
        headers: {
          'Content-Type': 'application/json',
        },
        params: {phone: userInfo.user.user.phone_number}
      }
      axios.get(phone_number_url, config).then((data) => {
        console.log(data, "from phone token")
        setPhoneError("");
        // dispatch(patchUserData(userData));
      }).catch((e) => {
        console.log(e.response, 'error from phone token')
        setPhoneError(e.response.data.extra_error_info.message);
      })
    }
  }

  const removePhoneNumberHandler = () => {
    let userData = {
      id: userInfo.user.user.id,
      phone_number: '',
    }
    dispatch(patchUserData(userData));
  }

  let status = userInfo.user.user.is_verified === 0 ? 'Not verified' : 'Verified';

  if (userInfo.user.user.is_verified === 0 && userInfo.user.user.phone_number) {
    return (
      <div className={styles.phoneVerificationContainer}>
        <VerifyCodeInputContainer
          status={status}
          t={t}
          userInfo={userInfo.user.user}
          sendAgainVerifyCode={sendAgainVerifyCode}
          phoneError={phoneError}
          removePhoneNumberHandler={removePhoneNumberHandler}
          verifyCodeInputHandler={verifyCodeInputHandler}
          verifyCode={verifyCode}
          sendVerifyCodeHandler={sendVerifyCodeHandler}
        />
      </div>
    )
  } else if (userInfo.user.user.is_verified === 0 && !userInfo.user.user.phone_number) {
    return (
      <div className={styles.phoneVerificationContainer}>
        <PhoneInputContainer
          t={t}
          phoneInputValue={phoneInputValue}
          phoneError={phoneError}
          phoneNumber={phoneNumber}
          sendPhoneNumberHandler={sendPhoneNumberHandler}
        />
      </div>
    )
  } else {
    return (
      <div className={styles.phoneVerificationContainer}>
        <PhoneAlreadyVerified
          t={t}
          userInfo={userInfo.user.user}
          removePhoneNumberHandler={removePhoneNumberHandler}
          status={status}
        />
      </div>
    )
  }

}