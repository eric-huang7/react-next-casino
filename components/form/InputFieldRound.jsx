import {FormControl, FormErrorMessage, FormLabel} from "@chakra-ui/form-control";
import {chakra, Input} from "@chakra-ui/react";
import {InputGroup, InputRightElement} from "@chakra-ui/input";
import {ViewIcon, ViewOffIcon} from "@chakra-ui/icons";

const InputFieldRound = ({value, error, label, onChange, validation, id, placeholder, type = "text", defaultValue, icon, iconStyle, ...props}) => {
  return (
    <FormControl mb={4} isInvalid={!!error} fontFamily="Verdana" {...props}>
      <FormLabel htmlFor={id} mb="5px" fontSize="14px" color="text.250">{label}</FormLabel>
      <InputGroup>
        <Input
          {...validation}
          onInput={onChange}
          value={value}
          type={type}
          height="45px"
          fontSize="14px"
          border="1px solid"
          borderColor="grey.600"
          borderRadius="5px"
          bg="grey.200"
          outline="none"
          px={1}
          color="text.400"
          focusBorderColor="primary.500"
          placeholder={placeholder}
          id={id}
          _placeholder={{
            color: "text.400"
          }}
          _hover={{
            borderColor: "grey.600"
          }}
          defaultValue={defaultValue}
        />
        {icon &&
          <InputRightElement
            p="3px 5px 0"
            sx={iconStyle}
            h="calc(100% - 2px)"
            top="1px"
            right="1px"
            borderRadius="0 5px 5px 0"
            borderColor="grey.600 !important"
          >
            {icon}
          </InputRightElement>
        }
      </InputGroup>
      <FormErrorMessage fontSize="12px" _invalid={{fontSize: "12px"}}>{error}</FormErrorMessage>
    </FormControl>
  )
}

export default InputFieldRound;
