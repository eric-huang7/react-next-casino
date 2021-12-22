import * as yup from "yup";

export const schemaChangePassword = yup.object().shape({
  password: yup.string().min(8, 'errors.passwordMinimum').max(32, 'errors.passwordMinimum').matches(
    /^(?=.*[A-Za-z])(?=.*[0-9])(?=.*?[#?!@$%^&*-\.])?.{8,}$/,
    'errors.passwordGeneral'
  ).required()
})
// old => ^(?=.*?[a-zA-Z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-\.])?.{8,}$
// ^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$