import styles from '../../styles/ForgotPassword/ForgotPassword.module.scss';
import {HeadingBlock} from "./HeadingBlock";
import {ResetPasswordButton} from "./ResetPasswordButton";
import {EmailEnteringContainer} from "./EmailEnteringContainer/EmailEnteringContainer";
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import {schemaEmail} from "../../schemasForms/emailForm";
import {InstructionsSendContainer} from "./InstructionsSendContainer/InstructionsSendContainer";
import {useState} from "react";
import {ResendEmailContainer} from "./ResendEmailContainer/ResendEmailContainer";
import {showForgotPasswordPopup} from "../../redux/actions/showPopups";
import {useDispatch} from "react-redux";
import {showLogin} from "../../redux/actions/loginShow";
import axios from "axios";
import {phone_number_url} from "../../redux/url/url";
import {LoadingComponent} from "../LoadingComponent/LoadingComponent";


export const ForgotPasswordComponent = ({t}) => {
  const dispatch = useDispatch();

  const {register, handleSubmit, formState: {errors}, reset} = useForm({
    resolver: yupResolver(schemaEmail),
  });

  const [successSend, setSuccessSend] = useState(false);
  const [showResendContainer, setShowResendContainer] = useState(false);
  const [requestError, setRequestError] = useState('');
  // const [isLoading, setIsLoading] = useState(false);

  const onSubmitHandler = (data) => {
    const config = {
      params: {
        type: 2,
        email: data.email
      }
    }
    // setIsLoading(true);
    axios.get(phone_number_url, config)
      .then((res) => {
        if (res.data.success) {
          // setIsLoading(false);
          setSuccessSend(true);
          setRequestError('');
        }
        console.log(res, 'response data');
      })
      .catch((err) => {
        // setIsLoading(false);
        setRequestError('forgotPasswordForm.errors.responseError');
        console.log(err.response, 'response err');
      })
  }

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


  if (successSend) {
    return (
      <div className={`${styles.forgotPasswordWrapper} `}>
        <div className={styles.mainContainer}>
          <div className={styles.instructionsBlock}>
            <HeadingBlock
              t={t}
              closeForgotPasswordHandler={closeForgotPasswordHandler}
              whatDoBackButton={backButtonClickHandler}
              text={'forgotPasswordForm.headings.instructionsSent'}
            />
            <InstructionsSendContainer
              t={t}
              text={'forgotPasswordForm.instructionsSentText'}
            />
          </div>
        </div>
      </div>
    )
  } else {
    if (showResendContainer) {
      return (
        <ResendEmailContainer
          t={t}
          register={register}
          onSubmitHandler={onSubmitHandler}
          handleSubmit={handleSubmit}
          errors={errors}
          whatDoBackButton={showResendContainerClickHandler}
          closeForgotPasswordHandler={closeForgotPasswordHandler}
          requestError={requestError}
        />
      )
    } else {
      return (
        <div className={`${styles.forgotPasswordWrapper} `}>
          <div className={styles.mainContainer}>
            <div className={styles.instructionsBlock}>
              <HeadingBlock
                t={t}
                closeForgotPasswordHandler={closeForgotPasswordHandler}
                whatDoBackButton={backButtonClickHandler}
                text={'forgotPasswordForm.headings.forgotPassword'}
              />
              <div className={styles.innerContainer}>
                <EmailEnteringContainer
                  errors={errors}
                  handleSubmit={handleSubmit}
                  onSubmitHandler={onSubmitHandler}
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
            />
          </div>
        </div>
      )
    }
  }
}