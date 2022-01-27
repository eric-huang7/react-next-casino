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


export const ForgotPasswordComponent = ({t}) => {
  const dispatch = useDispatch();

  const {register, handleSubmit, formState: {errors}, reset} = useForm({
    resolver: yupResolver(schemaEmail),
  });

  const [successSend, setSuccessSend] = useState(false);
  const [showResendContainer, setShowResendContainer] = useState(false);

  const onSubmitHandler = (data) => {
    console.log(data, 'USER EMAIL');
    setSuccessSend(true);
  }

  const closeForgotPasswordHandler = () => {
    dispatch(showForgotPasswordPopup(false));
  }
  const showResendContainerClickHandler = () => {
    reset();
    setShowResendContainer((prevState => !prevState));
  }

  const backButtonClickHandler = () => {
    dispatch(showForgotPasswordPopup(false));
    dispatch(showLogin(true));
  }

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
      />
    )
  } else {
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
              />
            </div>
          </div>
        </div>
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