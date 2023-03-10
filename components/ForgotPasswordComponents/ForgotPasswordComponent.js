import {EmailEnteringContainer} from "./EmailEnteringContainer/EmailEnteringContainer";
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import {schemaEmail} from "../../schemasForms/emailForm";
import {InstructionsSendContainer} from "./InstructionsSendContainer/InstructionsSendContainer";
import {useState} from "react";
import {showForgotPasswordPopup} from "../../redux/popups/action";
import {useDispatch, useSelector} from "react-redux";
import {showLogin} from "../../redux/ui/action";
import {token_url} from "../../redux/url/url";
import {InputContainer} from "./EmailEnteringContainer/InputContainer";
import Connect from "../../helpers/connect";
import SelectModal from "../modal/SelectModal";
import {Box} from "@chakra-ui/react";
import SubmitButton from "../buttons/SubmitButton";

export const ForgotPasswordComponent = ({t}) => {
  const dispatch = useDispatch();

  const {register, handleSubmit, formState: {errors}, reset} = useForm({
    resolver: yupResolver(schemaEmail),
  });

  const userLogin = useSelector((store) => store.authInfo.isAuthenticated);

  const [successSendPswd, setSuccessSendPswd] = useState(false);
  const [successSendEmail, setSuccessSendEmail] = useState(false);
  const [showResendContainer, setShowResendContainer] = useState(false);
  const [requestError, setRequestError] = useState('');

  const onSubmitEmailPswdHandler = (data) => {
    const config = {
      params: {
        type: 2,
        email: data.email
      }
    }
    // setIsLoading(true);
    Connect.get(token_url, config, (status, data) => {
      if (data.success) {
        // setIsLoading(false);
        setSuccessSendPswd(true);
        setRequestError('');
      }
    }).catch((err) => {
      // setIsLoading(false);
      setRequestError('forgotPasswordForm.errors.responseError');
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
    Connect.get(token_url, config, (status, data) => {
      if (data.success) {
        // setIsLoading(false);
        setSuccessSendEmail(true);
        setRequestError('');
      }
    }).catch((err) => {
      // setIsLoading(false);
      setRequestError('forgotPasswordForm.errors.responseError');
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

  return (
    <>
      {successSendPswd && <SelectModal
        isOpen={true}
        onClose={closeForgotPasswordHandler}
        onBack={userLogin ? false : backButtonClickHandler}
        title={t('forgotPasswordForm.headings.instructionsSent')}
      >
        <Box p={4}>
          <InstructionsSendContainer
            t={t}
            text={'forgotPasswordForm.instructionsSentText'}
          />
        </Box>
      </SelectModal>}

      {successSendEmail && <SelectModal
        isOpen={true}
        onClose={closeForgotPasswordHandler}
        onBack={userLogin ? false : backButtonClickHandler}
        title={t('forgotPasswordForm.headings.emailSent')}
      >
        <Box p={4}>
          <InstructionsSendContainer
            t={t}
            text={'forgotPasswordForm.emailConfirmInstructionsSend'}
          />
        </Box>
      </SelectModal>}

      {!(successSendPswd || successSendEmail) && showResendContainer && <SelectModal
        isOpen={true}
        onClose={closeForgotPasswordHandler}
        onBack={showResendContainerClickHandler}
        title={t('forgotPasswordForm.headings.resendEmail')}
        footer={<SubmitButton title={t('forgotPasswordForm.buttonsText.resend')} form="forgotPasswordForm"/>}
      >
        <Box p={4}>
          <InputContainer
            register={register}
            handleSubmit={handleSubmit}
            onSubmitHandler={onSubmitEmailResendHandler}
            errors={errors}
            t={t}
            requestError={requestError}
          />
        </Box>
      </SelectModal>}
      {!(successSendPswd || successSendEmail || showResendContainer) && <SelectModal
        isOpen={true}
        onClose={closeForgotPasswordHandler}
        onBack={userLogin ? false : backButtonClickHandler}
        title={t('forgotPasswordForm.headings.forgotPassword')}
        footer={<SubmitButton title={t('forgotPasswordForm.buttonsText.resetPassword')} form="forgotPasswordForm"/>}
      >
        <Box p={4}>
          <EmailEnteringContainer
            errors={errors}
            handleSubmit={handleSubmit}
            onSubmitHandler={onSubmitEmailPswdHandler}
            register={register}
            showResendContainerClickHandler={showResendContainerClickHandler}
            requestError={requestError}
            t={t}
          />
        </Box>
      </SelectModal>}
    </>
  )
}
