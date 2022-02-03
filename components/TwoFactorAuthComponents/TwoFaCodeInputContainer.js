import styles from "../../styles/TwoFaAuth/TwoFaAuth.module.scss";
import {InstructionsTextContainer} from "./InstructionsTextContainer";
import {TwoFaCodeInput} from "./FormsConponents/TwoFaCodeInput";
import {useEffect, useRef, useState} from "react";
import axios from "axios";
import {qr_auth_url} from "../../redux/url/url";
import {auth} from "../../redux/actions/userData";
import {useDispatch} from "react-redux";
import {showTwoFaPopup} from "../../redux/actions/showPopups";
import {LoadingComponent} from "../LoadingComponent/LoadingComponent";


export const TwoFaCodeInputContainer = ({t,}) => {
  const dispatch = useDispatch();

  const [authError, setAuthError] = useState('');
  const [value, setValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const codeRef = useRef(undefined);

  const handleChange = (val) => {
    setAuthError('');
    setValue(val);

  }

  useEffect(() => {

    if (value.length === 6) {
      let googleAuthData = {
        token: value,
      }

      setIsLoading(true);
      axios.post(qr_auth_url, googleAuthData)
        .then((data) => {
          setIsLoading(false);
          dispatch(auth());
          setAuthError('');
          codeRef.current.retry();
          setValue('');
          dispatch(showTwoFaPopup(false));

        })
        .catch((err) => {
          setIsLoading(false);
          setAuthError('twoFactorAuthPopup.errorMessage.wrongCode');
          setValue('');
          codeRef.current.retry();
        })
      setValue('');
    }
  }, [value])

  return (
    <div className={styles.inputsBlock}>
      {
        isLoading
          ?
          <div className={styles.loadingWrapper}>
            <LoadingComponent t={t} />
          </div>
          :
          <>
            <InstructionsTextContainer
              text={'twoFactorAuthPopup.instructionText'}
              t={t}
            />
            <TwoFaCodeInput
              error={authError}
              handleChange={handleChange}
              value={value}
              codeRef={codeRef}
            />
            <p
              className={styles.errorMessage}
            >
              {t(authError)}
            </p>
          </>
      }
    </div>
  )
}