import InputField from "../../form/InputField";
import {Text, Box} from "@chakra-ui/layout";

export const PasswordInputsContainer = ({t, handleSubmit, onSubmitHandler, register, errors, requestError}) => (
  <Box w="100%" maxW="100%">
    <form
      id={'changePasswordWindowForm'}
      onSubmit={handleSubmit(onSubmitHandler)}
    >
      <InputField
        label={t('forgotPasswordForm.newPasswordLabel')}
        error={t(errors?.password?.message)}
        validation={{...register("password")}}
        id={'changePasswordWindowInput'}
        type="password"
      />

      <InputField
        label={t('forgotPasswordForm.confirmNewPasswordLabel')}
        error={t(errors?.password?.message)}
        validation={{...register("passwordConfirmation")}}
        id={'confirmPasswordWindowInput'}
        type="password"
      />

    </form>
    {requestError && <Text fontSize={12} my={1} color="red.500">{t(requestError)}</Text>}
  </Box>
)
