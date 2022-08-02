import {FormControl, FormErrorMessage, FormLabel} from "@chakra-ui/form-control";
import {chakra, Input} from "@chakra-ui/react";
import {InputGroup, InputRightElement} from "@chakra-ui/input";
import {ViewIcon, ViewOffIcon} from "@chakra-ui/icons";
import {useState} from "react";

const InputField = ({
  value, error, label, onInput, validation, id, placeholder, type = "text", maxLength, fontSize = "15px",
  defaultValue, onChange, px = 4, ...props
}) => {
  const [showPass, setShowPass] = useState(false);

  return (
    <FormControl mb={4} isInvalid={!!error} fontFamily="Verdana" {...props}>
      <FormLabel htmlFor={id} mb="5px" fontSize="14px" color="text.250">{label}</FormLabel>
      <InputGroup>
        <Input
          {...validation}
          onInput={onInput}
          value={value}
          type={showPass && type === "password" ? "text" : type}
          height="51px"
          fontSize={fontSize}
          border="1px solid"
          borderColor="grey.300"
          borderRadius={0}
          bg="grey.100"
          outline="none"
          px={px}
          focusBorderColor="primary.500"
          placeholder={placeholder}
          id={id}
          maxLength={maxLength}
          onChange={onChange}
          defaultValue={defaultValue}
        />
        {type === "password" && <InputRightElement pt="11px">
          {!showPass && <ViewIcon w={6} h={6} color="text.200" opacity={.5} onClick={() => setShowPass(!showPass)}/>}
          {showPass && <ViewOffIcon w={6} h={6} color="text.200" opacity={.5} onClick={() => setShowPass(!showPass)}/>}
        </InputRightElement>}
      </InputGroup>
      <FormErrorMessage fontSize="12px" _invalid={{fontSize: "12px"}}>{error}</FormErrorMessage>
    </FormControl>
  )
}

export default InputField;
