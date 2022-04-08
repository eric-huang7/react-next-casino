import styles from "../../styles/TwoFaAuth/TwoFaAuth.module.scss";
import {InstructionsTextContainer} from "./InstructionsTextContainer";
import {BackupCodeInput} from "./FormsConponents/BackupCodeInput";
import {useEffect, useRef, useState} from "react";
import axios from "axios";
import {qr_auth_url} from "../../redux/url/url";
import {auth} from "../../redux/user/action";
import {showTwoFaPopup} from "../../redux/actions/showPopups";
import {useDispatch} from "react-redux";
import {LoadingComponent} from "../LoadingComponent/LoadingComponent";


export const BackupCodeInputContainer = ({t}) => {
  const dispatch = useDispatch();


  const [value, setValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [authError, setAuthError] = useState('');

  const inputCodeHandler = (eValue) => {
    setValue(eValue)
  }

  useEffect(() => {

    if (value.length === 14) {
      let googleAuthData = {
        token: value,
      }

      setIsLoading(true);
      axios.post(qr_auth_url, googleAuthData)
        .then((data) => {
          setIsLoading(false);
          dispatch(auth());
          setAuthError('');
          setValue('');
          dispatch(showTwoFaPopup(false));
        })
        .catch((err) => {
          setIsLoading(false);
          setAuthError('twoFactorAuthPopup.errorMessage.wrongCode');
          setValue('');
        })
      setValue('');
    }
  }, [value])

  const backupCodeFormHandler = (e) => {
    e.preventDefault();
    setAuthError('twoFactorAuthPopup.errorMessage.wrongCode');
  }

  return (
    <div className={styles.inputsBlock}>

      {
        isLoading
          ?
          <div className={styles.loadingWrapper}>
            <LoadingComponent t={t}/>
          </div>
          :
          <>
            <InstructionsTextContainer
              text={'twoFactorAuthPopup.instructionText'}
              t={t}
            />
            <BackupCodeInput
              error={authError}
              value={value}
              inputCodeHandler={inputCodeHandler}
              backupCodeFormHandler={backupCodeFormHandler}
            />
            <p className={styles.errorMessage}>{t(authError)}</p>
          </>
      }
    </div>
  )
}
