import * as yup from "yup";

export const schemaLogin = yup.object().shape({
  username: yup.string().min(4, 'errors.username').required(),
  password: yup.string().required()
})