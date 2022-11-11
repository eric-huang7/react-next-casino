import {FormControl, FormErrorMessage, FormLabel} from "@chakra-ui/form-control";
import {Input} from "@chakra-ui/react";

const FloatingLabelField = ({value, error, label, onInput, validation, id, placeholder, type = "text", ...props}) => (
  <FormControl mb={4} isInvalid={!!error} fontFamily="Verdana" variant="floating" {...props}>
    <Input
      {...validation}
      onInput={onInput}
      value={value}
      type={type}
      height="51px"
      fontSize="15px"
      border="1px solid"
      borderColor="grey.300"
      borderRadius={0}
      bg="grey.100"
      // outline="none"
      px={4}
      focusBorderColor="primary.500"
      placeholder={placeholder}
      id={id}
    />
    <FormLabel mb="5px" fontSize="14px" color="text.250">{label}</FormLabel>
    <FormErrorMessage fontSize="12px" _invalid={{fontSize: "12px"}}>{error}</FormErrorMessage>
  </FormControl>
)

export default FloatingLabelField;
