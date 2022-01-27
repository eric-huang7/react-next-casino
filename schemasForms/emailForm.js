import * as yup from "yup";

export const schemaEmail = yup.object().shape({
  email: yup.string().email('errors.email').required('errors.emailRequired'), //
})