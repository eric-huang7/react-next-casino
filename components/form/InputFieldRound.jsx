import {FormControl, FormErrorMessage, FormLabel} from "@chakra-ui/form-control";
import {Input} from "@chakra-ui/react";
import {InputGroup, InputRightElement} from "@chakra-ui/input";

const InputFieldRound = ({
  value, error, label, onChange, validation, id, placeholder, type = "text", defaultValue, icon, iconStyle,
    inputProps = {}, ...props
}) => {
  return (
    <FormControl mb={4} isInvalid={!!error} fontFamily="Montserrat" {...props}>
      <FormLabel htmlFor={id} mb="5px" fontSize="14px" color="text.250">{label}</FormLabel>
      <InputGroup>
        <Input
          {...validation}
          onInput={onChange}
          value={value}
          type={type}
          height="54px"
          fontSize="16px"
          border="1px solid"
          borderColor="accent.860"
          borderRadius="12px"
          bg="transparent"
          outline="none"
          px="20px"
          color="white"
          focusBorderColor="accent.860"
          placeholder={placeholder}
          id={id}
          _placeholder={{
            color: "white",
            opacity: 1,
            fontSize: 16,
            fontFamily: "Montserrat"
          }}
          _hover={{
            borderColor: "accent.860"
          }}
          defaultValue={defaultValue}
          {...inputProps}
        />
        {icon &&
          <InputRightElement
            p="3px 15px 0 0px"
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
