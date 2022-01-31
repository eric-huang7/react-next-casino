import styles from '../../styles/ForgotPassword/ForgotPassword.module.scss';
import {HeadingBlock} from "./HeadingBlock";
import {ResetPasswordButton} from "./ResetPasswordButton";
import {EmailEnteringContainer} from "./EmailEnteringContainer/EmailEnteringContainer";
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import {schemaEmail} from "../../schemasForms/emailForm";
import {InstructionsSendContainer} from "./InstructionsSendContainer/InstructionsSendContainer";
import {useEffect, useRef, useState} from "react";
// import {ResendEmailContainer} from "./ResendEmailContainer/ResendEmailContainer";
import {showForgotPasswordPopup, showTournaments} from "../../redux/actions/showPopups";
import {useDispatch} from "react-redux";
import {showLogin} from "../../redux/actions/loginShow";
import axios from "axios";
import {token_url} from "../../redux/url/url";
// import {LoadingComponent} from "../LoadingComponent/LoadingComponent";
import {InputContainer} from "./EmailEnteringContainer/InputContainer";


export const ForgotPasswordComponent = ({t}) => {
  const dispatch = useDispatch();

  const {register, handleSubmit, formState: {errors}, reset} = useForm({
    resolver: yupResolver(schemaEmail),
  });

  const [successSendPswd, setSuccessSendPswd] = useState(false);
  const [successSendEmail, setSuccessSendEmail] = useState(false);
  const [showResendContainer, setShowResendContainer] = useState(false);
  const [requestError, setRequestError] = useState('');
  // const [isLoading, setIsLoading] = useState(false);

  const onSubmitEmailPswdHandler = (data) => {
    const config = {
      params: {
        type: 2,
        email: data.email
      }
    }
    // setIsLoading(true);
    axios.get(token_url, config)
      .then((res) => {
        if (res.data.success) {
          // setIsLoading(false);
          setSuccessSendPswd(true);
          setRequestError('');
        }
        console.log(res, 'response data');
      })
      .catch((err) => {
        // setIsLoading(false);

        setRequestError('forgotPasswordForm.errors.responseError');
        // console.log(err.response, 'response err');
      })
  }
  const onSubmitEmailResendHandler = (data) => {
    const config = {
      params: {
        type: 1,
        email: data.email
      }
    }
    // setIsLoading(true);
    axios.get(token_url, config)
      .then((res) => {
        if (res.data.success) {
          // setIsLoading(false);
          setSuccessSendEmail(true);
          setRequestError('');
        }
      })
      .catch((err) => {
        // setIsLoading(false);
        setRequestError('forgotPasswordForm.errors.responseError');
      })
  }

  const forgotPswdWrapperRef = useRef();

  const closeForgotPasswordHandler = () => {
    dispatch(showForgotPasswordPopup(false));
  }
  const showResendContainerClickHandler = () => {
    reset();
    setRequestError('');
    setShowResendContainer((prevState => !prevState));
  }

  const backButtonClickHandler = () => {
    dispatch(showForgotPasswordPopup(false));
    dispatch(showLogin(true));
  }

  const handleOutsideClick = (event) => {
    const path = event.path || (event.composedPath && event.composedPath());
    if (!path.includes(forgotPswdWrapperRef.current)) {
      dispatch(showForgotPasswordPopup(false));
    }
  };
  useEffect(() => {
    document.body.addEventListener("click", handleOutsideClick);
    return () => {
      // dispatch(showTournaments(true));
      document.body.removeEventListener('click', handleOutsideClick);
    }
  }, []);



  if (successSendPswd) {
    return (
      <div className={`${styles.forgotPasswordWrapper} `}>
        <div ref={forgotPswdWrapperRef} className={styles.mainContainer}>
          <div className={styles.instructionsBlock}>
            <HeadingBlock
              t={t}
              closeForgotPasswordHandler={closeForgotPasswordHandler}
              whatDoBackButton={backButtonClickHandler}
              text={'forgotPasswordForm.headings.instructionsSent'}
              isShowBackButton={true}
            />
            <InstructionsSendContainer
              t={t}
              text={'forgotPasswordForm.instructionsSentText'}
            />
          </div>
        </div>
      </div>
    )
  }

  if (successSendEmail) {
    return (
      <div className={`${styles.forgotPasswordWrapper} `}>
        <div ref={forgotPswdWrapperRef} className={styles.mainContainer}>
          <div className={styles.instructionsBlock}>
            <HeadingBlock
              t={t}
              closeForgotPasswordHandler={closeForgotPasswordHandler}
              whatDoBackButton={backButtonClickHandler}
              text={'forgotPasswordForm.headings.emailSent'}
              isShowBackButton={true}
            />
            <InstructionsSendContainer
              t={t}
              text={'forgotPasswordForm.emailConfirmInstructionsSend'}
            />
          </div>
        </div>
      </div>
    )
  }

    if (showResendContainer) {
      return (
        <div className={`${styles.forgotPasswordWrapper} `}>
          <div ref={forgotPswdWrapperRef} className={styles.mainContainer}>
            <div className={styles.instructionsBlock}>
              <HeadingBlock
                t={t}
                whatDoBackButton={showResendContainerClickHandler}
                closeForgotPasswordHandler={closeForgotPasswordHandler}
                text={'forgotPasswordForm.headings.resendEmail'}
                isShowBackButton={true}
              />
              <div className={`${styles.innerContainer} ${styles.resendContainer}`}>
                <InputContainer
                  register={register}
                  handleSubmit={handleSubmit}
                  onSubmitHandler={onSubmitEmailResendHandler}
                  errors={errors}
                  t={t}
                  requestError={requestError}
                />
              </div>
            </div>
            <ResetPasswordButton
              t={t}
              text={'forgotPasswordForm.buttonsText.resend'}
              whichForm={'forgotPasswordForm'}
            />
          </div>
        </div>
      )
    } else {
      return (
        <div className={`${styles.forgotPasswordWrapper} `}>
          <div ref={forgotPswdWrapperRef} className={styles.mainContainer}>
            <div className={styles.instructionsBlock}>
              <HeadingBlock
                t={t}
                closeForgotPasswordHandler={closeForgotPasswordHandler}
                whatDoBackButton={backButtonClickHandler}
                isShowBackButton={true}
                text={'forgotPasswordForm.headings.forgotPassword'}
              />
              <div className={styles.innerContainer}>
                <EmailEnteringContainer
                  errors={errors}
                  handleSubmit={handleSubmit}
                  onSubmitHandler={onSubmitEmailPswdHandler}
                  register={register}
                  showResendContainerClickHandler={showResendContainerClickHandler}
                  requestError={requestError}
                  t={t}
                />
              </div>
            </div>
            <ResetPasswordButton
              t={t}
              text={'forgotPasswordForm.buttonsText.resetPassword'}
              whichForm={'forgotPasswordForm'}
            />
          </div>
        </div>
      )
    }
}