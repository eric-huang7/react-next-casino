import {Input} from "@chakra-ui/react";
import {InputGroup, InputRightElement} from "@chakra-ui/input";
import {SearchIcon} from "@chakra-ui/icons";

const SearchField = ({
  value, onKeyUp, id, placeholder, fontSize = "15px", width = "155px",
  onChange, ...props
}) => (
  <InputGroup
    bg="accent.500"
    borderColor="accent.500"
    borderRadius={0}
    w={width}
  >
    <Input
      onKeyUp={onKeyUp}
      value={value}
      borderRadius={0}
      focusBorderColor="white"
      color="white"
      onChange={onChange}
      placeholder={placeholder}
      _placeholder={{
        color: "accent.850"
      }}
      {...props}
    />
    <InputRightElement ><SearchIcon color='accent.850' /></InputRightElement>
  </InputGroup>
)

export default SearchField;
