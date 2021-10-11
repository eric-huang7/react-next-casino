import * as yup from "yup";

export const schemaLogin = yup.object().shape({
  username: yup.string().min(4, 'errors.username').required(),
  password: yup.string().min(8, 'errors.passwordMinimum').max(32, 'errors.passwordMinimum').matches(
    /^(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-\.])?.{8,}$/i,
    'errors.passwordGeneral'
  ).required()
})