import styles from "../../styles/TwoFaAuth/TwoFaAuth.module.scss";
import {useEffect, useRef, useState} from "react";
import {Heading} from "./Heading";
import {ChangeWindowButton} from "./ChangeWindowButton";
import {TwoFaCodeInputContainer} from "./TwoFaCodeInputContainer";
import {BackupCodeInputContainer} from "./BackupCodeInputContainer";
import {useDispatch} from "react-redux";
import {showTwoFaPopup} from "../../redux/actions/showPopups";



export const TwoFactorAutContainer = ({t}) => {
  const dispatch = useDispatch();

  const [showTwoFaInputCode, setShowTwoFaInputCode] = useState(true);

  const twoFaAuthRef = useRef();
  const handleOutsideClick = (event) => {
    const path = event.path || (event.composedPath && event.composedPath());
    if (!path.includes(twoFaAuthRef.current)) {
      dispatch(showTwoFaPopup(false));
    }
  };
  useEffect(() => {
    document.body.addEventListener("click", handleOutsideClick);
    return () => {

      document.body.removeEventListener('click', handleOutsideClick);
    }
  }, []);

  const closeTwoFaAuthHandler = () => {
    dispatch(showTwoFaPopup(false));
  }

  const changeWindowAction = () => {
    setShowTwoFaInputCode((prevState => !prevState));
  }

  return (
    <div className={styles.twoFaAuthWrapper}>
      <div className={styles.innerWrapper}>
        <div ref={twoFaAuthRef} className={styles.mainContainer}>
          <Heading
            t={t}
            text={showTwoFaInputCode ? 'twoFactorAuthPopup.headings.twoFaCode' : 'twoFactorAuthPopup.headings.backupCode'}
            closeHandler={closeTwoFaAuthHandler}
          />
          {
            showTwoFaInputCode
              ?
              <TwoFaCodeInputContainer
                t={t}
              />
              :
              <BackupCodeInputContainer
                t={t}
              />
          }
          <ChangeWindowButton
            t={t}
            text={showTwoFaInputCode ? 'twoFactorAuthPopup.buttons.useBackupCode' : 'twoFactorAuthPopup.buttons.useTwoFaCode'}
            changeWindowAction={changeWindowAction}
          />
        </div>
      </div>
    </div>
  )
}