import {TextContainer} from "./TextContainer";
import {InputContainer} from "./InputContainer";
import LinkButton from "../../buttons/LinkButton";

export const EmailEnteringContainer = ({
  t, handleSubmit, register, onSubmitHandler, errors, showResendContainerClickHandler, requestError
}) => (
  <>
    <TextContainer t={t}/>
    <InputContainer
      register={register}
      handleSubmit={handleSubmit}
      onSubmitHandler={onSubmitHandler}
      errors={errors}
      requestError={requestError}
      t={t}
    />
    <LinkButton onClick={showResendContainerClickHandler} fontSize="14px">
      {t('forgotPasswordForm.buttonsText.resendConfirmation')}
    </LinkButton>
  </>
)
