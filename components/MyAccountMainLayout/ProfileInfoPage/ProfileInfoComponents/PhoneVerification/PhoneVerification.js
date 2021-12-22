import styles from '../../../../../styles/MyAccount/UserInfoPage/PhoneVerification.module.scss';
import {PhoneInputContainer} from "./PhoneInputContainer";
import {VerifyCodeInputContainer} from "./VerifyCodeInputContainer";
import {useDispatch} from "react-redux";
import {useState} from "react";
import axios from "axios";
import {phone_number_url, user_url} from "../../../../../redux/url/url";
import {auth, patchUserData} from "../../../../../redux/actions/userData";
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

  const sendVerifyCodeHandler = (e) => {
    e.preventDefault();
    if (verifyCode === '') {
      setPhoneError('Invalid code entered. Please try again.');
    } else {
      let userData = {
        type: 5,
        token: verifyCode,
      }
      const config = {
        withCredentials: true,
        headers: {
          'Content-Type': 'application/json',
        },
      }
      const body = JSON.stringify(userData)
      axios.patch(phone_number_url, body, config).then((data) => {
        if (data.data.extra_error_info) {
          //Введен неверный код. Пожалуйста попробуйте еще раз.
          setPhoneError('Invalid code entered. Please try again.');
        } else {
          setPhoneError('');
        }
        console.log(data, '<<<<data from sending verify code');
        dispatch(auth());
      }).catch((e) => {
        //Введен неверный код. Пожалуйста попробуйте еще раз.
        setPhoneError('Invalid code entered. Please try again.');
        console.log(e.response, '<<<< error from verify code error')
      })
    }
  }

  const sendPhoneNumberHandler = (e) => {
    e.preventDefault();

    let userData = {
      id: userInfo.user.user.id,
      phone_number: phoneNumber,
    }
    const config = {
      withCredentials: true,
      headers: {
        'Content-Type': 'application/json',
      },
      params: {
        type: 5,
        phone: phoneNumber
      }
    }
    axios.get(phone_number_url, config).then((data) => {
      console.log(data, "from phone token")
      setPhoneError("");
      dispatch(auth());
      // dispatch(patchUserData(userData));
    }).catch((e) => {
      console.log(e.response, 'error from phone token')
      // Ошибка в валидации номера телефона. Пожалуйста свяжитесь с службой поддержки.
      setPhoneError("Phone number validation error. Please contact support.");
    })
  }
  const sendAgainVerifyCode = () => {
    if (userInfo.user.user.unconfirmed_phone) {
      const config = {
        withCredentials: true,
        headers: {
          'Content-Type': 'application/json',
        },
        params: {
          type: 5,
          phone: userInfo.user.user.unconfirmed_phone
        }
      }
      axios.get(phone_number_url, config).then((data) => {
        console.log(data, "from phone token")
        setPhoneError("");
        // dispatch(patchUserData(userData));
      }).catch((e) => {
        console.log(e.response, 'error from phone token')
        // Ошибка при отправке кода. Пожалуйста свяжитесь с службой поддержки.
        setPhoneError("Error sending code. Please contact support.");
      })
    }
  }

  const removePhoneNumberHandler = () => {
    let userData = {
      id: userInfo.user.user.id,
      phone_number: '',
      unconfirmed_phone: ''
    }
    setPhoneError("");
    dispatch(patchUserData(userData));
  }

  let status = userInfo.user.user.phone_number ? 'Verified' : 'Not verified';

  if (userInfo.user.user.unconfirmed_phone && !userInfo.user.user.phone_number) {
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
  } else if (!userInfo.user.user.unconfirmed_phone) {
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
  } else if (userInfo.user.user.phone_number && (!userInfo.user.user.unconfirmed_phone || userInfo.user.user.unconfirmed_phone)) {
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