import FloatingLabelField from "../../form/FloatingLabelField";
import {Text, Box} from "@chakra-ui/layout";

export const InputContainer = ({t, register, handleSubmit, errors, onSubmitHandler, requestError}) => (
  <Box position="relative" maxW="100%" w="100%" flexShrink={0}>
    <form id={'forgotPasswordForm'} onSubmit={handleSubmit(onSubmitHandler)}>
      <FloatingLabelField
        validation={{...register("email")}}
        label={t('forgotPasswordForm.emailLabel')}
        placeholder=" "
        error={t(errors.email?.message)}
        id={'forgotPasswordEmail'}
      />
    </form>
    <Text fontSize={12} color="red.500">{t(requestError)}</Text>
  </Box>
)
