import * as yup from "yup";

export const schemaChangePasswordWindow = yup.object().shape({
  password: yup.string().min(8, 'errors.passwordMinimum').max(32, 'errors.passwordMaximum').matches(
    /^(?=.*[A-Za-z])(?=.*[0-9])(?=.*?[#?!@$%^&*-\.])?.{8,}$/,
    'errors.passwordGeneral'
  ).required('errors.requiredField'),
  passwordConfirmation: yup.string().oneOf([yup.ref('password')], 'errors.passwordsMatch')

})