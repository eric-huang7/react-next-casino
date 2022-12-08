import {Input, Text} from "@chakra-ui/react";
import {InputGroup, InputRightElement} from "@chakra-ui/input";
import {SearchIcon, CloseIcon} from "@chakra-ui/icons";

const SearchField = ({
  value, onKeyUp, id, placeholder, onClear, fontSize = "15px", width = "155px",
  onChange, ...props
}) => (
  <InputGroup
    border="1px solid"
    borderColor="grey.300"
    borderRadius={0}
    w={width}
  >
    <Input
      onKeyUp={onKeyUp}
      value={value}
      h="33px"
      borderRadius={0}
      focusBorderColor="grey.700"
      color="grey.300"
      onChange={onChange}
      placeholder={placeholder}
      _placeholder={{
        color: "grey.700"
      }}
      {...props}
    />
    <InputRightElement >
      {value ? <CloseIcon color='white' cursor="pointer" onClick={onClear} /> : <SearchIcon color='grey.300' />}
    </InputRightElement>
  </InputGroup>
)

export default SearchField;
