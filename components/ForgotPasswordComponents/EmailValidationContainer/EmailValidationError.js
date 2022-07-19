import {useDispatch} from "react-redux";
import {useEffect, useRef} from "react";
import {showEmailValidationErrorPopup, showForgotPasswordPopup} from "../../../redux/popups/action";
import styles from "../../../styles/ForgotPassword/ForgotPassword.module.scss";
import {ResendButton} from "../EmailEnteringContainer/ResendButton";
import {ErrorTextBlock} from "./ErrorTextBlock";
import {Box} from "@chakra-ui/react";
import SelectModal from "../../modal/SelectModal";

export const EmailValidationError = ({t, emailError}) => {
  const dispatch = useDispatch();
  const emailValidationErrorRef = useRef();

  const handleOutsideClick = (event) => {
    const path = event.path || (event.composedPath && event.composedPath());
    if (!path.includes(emailValidationErrorRef.current)) {
      dispatch(showEmailValidationErrorPopup(false));
    }
  };

  useEffect(() => {
    document.body.addEventListener("click", handleOutsideClick);
    return () => {

      document.body.removeEventListener('click', handleOutsideClick);
    }
  }, []);

  const closeButtonClickHandler = () => {
    dispatch(showEmailValidationErrorPopup(false));
  }

  const showResendContainerClickHandler = () => {
    dispatch(showEmailValidationErrorPopup(false));
    dispatch(showForgotPasswordPopup(true));
  }

  return (
    <SelectModal
      isOpen={true}
      width={380}
      onClose={closeButtonClickHandler}
      title={t('forgotPasswordForm.headings.error')}
    >
      <Box p={4}>
        <ErrorTextBlock
          text={emailError === 'used_token' ? 'forgotPasswordForm.errors.errorEmailValidationToken' : 'forgotPasswordForm.errors.errorEmailValidationOther'}
          t={t}
        />
        <div className={styles.resendButtonContainer}>
          <ResendButton
            t={t}
            showResendContainerClickHandler={showResendContainerClickHandler}
          />
        </div>
      </Box>
    </SelectModal>
  )
}
