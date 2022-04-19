import styles from "../../styles/TwoFaAuth/TwoFaAuth.module.scss";
import {InstructionsTextContainer} from "./InstructionsTextContainer";
import {TwoFaCodeInput} from "./FormsConponents/TwoFaCodeInput";
import {useEffect, useRef, useState} from "react";
import {qr_auth_url} from "../../redux/url/url";
import {auth} from "../../redux/user/action";
import {useDispatch} from "react-redux";
import {showTwoFaPopup} from "../../redux/popups/action";
import {LoadingComponent} from "../LoadingComponent/LoadingComponent";
import Connect from "../../helpers/connect";


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
      Connect.post(qr_auth_url, googleAuthData, {}, (status, data) => {
        setIsLoading(false);
        dispatch(auth());
        setAuthError('');
        codeRef.current.retry();
        setValue('');
        dispatch(showTwoFaPopup(false));
      }).catch((err) => {
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
