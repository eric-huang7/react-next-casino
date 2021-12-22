import styles from '../../../../styles/MyAccount/UserInfoPage/TwoFactorAuthPage.module.scss';
import {TextBlock} from "./TextBlock";
import {TwoFactorCompleteInputsBlock} from "./TwoFactorCompleteInputsBlock";
import {useState} from "react";
import axios from "axios";
import {qr_auth_url} from "../../../../redux/url/url";
import {auth} from "../../../../redux/actions/userData";
import {useDispatch} from "react-redux";


export const TwoFactorAuthCompleteBlock = ({t, authData}) => {
  const dispatch = useDispatch();
  const [deactivateCodeValue, setDeactivateCodeValue] = useState('');
  const [deactivateError, setDeactivateError] = useState('')
  const deactivateInputHandler = (value) => {
    setDeactivateCodeValue(value);
  }
  console.log(authData)
  // eaf2-d069-4294
  const deactivateButtonClickHandler = (e) => {
    e.preventDefault();

    console.log(deactivateCodeValue);
    let googleAuthData = {
      // key: authData.qrAuth.key,
      token: deactivateCodeValue,
      active: false,
    }
    const config = {
      withCredentials: true,
      headers: {
        'Content-Type': 'application/json',
      },
    }
    const body = JSON.stringify(googleAuthData);

    axios.post(qr_auth_url, body, config)
      .then((data) => {
        console.log(data, "<< Post user saved keys");
        dispatch(auth());
        setDeactivateError("")
      })
      .catch((error) => {
        console.log(error.response, "SOME ERROR WHEN Post user saved keys");
        // Не удалось отключить двухфакторную аутентификацию. Пожалуйста, попробуйте еще раз или обратитесь в службу поддержки.
        setDeactivateError("Failed to disable two-factor authentication. Please try again or contact support.")
      })
  }


  return (
    <div className={styles.googleAuthContainer}>
      <TextBlock t={t} />
      <TwoFactorCompleteInputsBlock
        deactivateCodeValue={deactivateCodeValue}
        deactivateInputHandler={deactivateInputHandler}
        deactivateButtonClickHandler={deactivateButtonClickHandler}
        deactivateError={deactivateError}
        t={t}
      />
    </div>
  )
}