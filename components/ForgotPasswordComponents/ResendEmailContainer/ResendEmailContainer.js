import {ResetPasswordButton} from "../ResetPasswordButton";
import {InputContainer} from "../EmailEnteringContainer/InputContainer";
import {Box} from "@chakra-ui/react";
import SelectModal from "../../modal/SelectModal";

export const ResendEmailContainer = ({
  t, register, handleSubmit, onSubmitHandler, errors, whatDoBackButton, closeForgotPasswordHandler, requestError
}) => (
  <SelectModal
    isOpen={true}
    width={380}
    height={100}
    onClose={closeForgotPasswordHandler}
    onBack={whatDoBackButton}
    title={t('forgotPasswordForm.headings.resendEmail')}
    footer={<ResetPasswordButton
      text={t('forgotPasswordForm.buttonsText.resend')}
      whichForm={'forgotPasswordForm'}
    />}
  >
    <Box p={4}>
      <InputContainer
        register={register}
        handleSubmit={handleSubmit}
        onSubmitHandler={onSubmitHandler}
        errors={errors}
        t={t}
        requestError={requestError}
      />
    </Box>
  </SelectModal>
)
