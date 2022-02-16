import styles from '../../../styles/MyAccount/UserInfoPage/TwoFactorAuthPage.module.scss';
import {TextBlock} from "./GoogleAuthComponents/TextBlock";
import {QrcodeContainer} from "./GoogleAuthComponents/QrcodeContainer";
import {AuthCodeInputBlock} from "./GoogleAuthComponents/AuthCodeInputBlock";
import {useDispatch} from "react-redux";
import {LoadingComponent} from "../../LoadingComponent/LoadingComponent";
import {useState} from "react";
import axios from "axios";
import {qr_auth_url} from "../../../redux/url/url";
import { mayYwoFactorAuth} from "../../../redux/actions/userData";


export const GoogleAuthContainer = ({t, authData, setIsShowSavedKeys, setSavedKeys}) => {
  const dispatch = useDispatch();
  const [googleKeyValue, setGoogleKeyValue] = useState('');
  const [googleAuthError, setGoogleAuthError] = useState('');
  const googleKEyInputHandler = (value) => {
    setGoogleKeyValue(value);
  }

  const confirmButtonClickHandler = (e) => {
    e.preventDefault();

    let googleAuthData = {
      key: authData.qrAuth.key,
      token: googleKeyValue,
      active: true,
    }
    const config = {
      withCredentials: true,
      headers: {
        'Content-Type': 'application/json',
      },
    }
    const body = JSON.stringify(googleAuthData);

       axios.post(qr_auth_url, body, config).then((data) => {

           setSavedKeys(data.data.backup_codes);
           setIsShowSavedKeys(true);
           dispatch(mayYwoFactorAuth(true));
           setGoogleAuthError("");
       }).catch((error) => {

           // Введен неверный код. Пожалуйста попробуйте еще раз или свяжитесь со службой поддержки.
           setGoogleAuthError(t("myAccount.twoFactorAuthPage.twoFaNOTCompleteContainer.errors.invalidCode"))
       })


  }


  if (authData.qrAuthLoading) {
    return (
      <LoadingComponent t={t}/>
    )
  } else {
    return (
      <div className={styles.googleAuthContainer}>
        <TextBlock t={t} />
        <QrcodeContainer  authData={authData.qrAuth} t={t} />
        <AuthCodeInputBlock
          googleAuthError={googleAuthError}
          googleKeyValue={googleKeyValue}
          confirmButtonClickHandler={confirmButtonClickHandler}
          googleKEyInputHandler={googleKEyInputHandler}
          t={t}
        />
        <p className={styles.lastText}>{t("myAccount.twoFactorAuthPage.twoFaNOTCompleteContainer.lowerText")}</p>
      </div>
    )
  }

}