import {FormLabel} from "@chakra-ui/form-control";

const FieldLabel = ({children, id, ...props}) => (
  <FormLabel htmlFor={id} fontFamily="Verdana" mb="5px" fontSize="14px" color="text.250" {...props}>
    {children}
  </FormLabel>
)

export default FieldLabel;
