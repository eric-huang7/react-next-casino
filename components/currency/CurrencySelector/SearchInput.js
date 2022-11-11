import {Input, InputGroup, InputLeftElement} from "@chakra-ui/react";
import {SearchIcon} from "@chakra-ui/icons";

const SearchInput = ({ placeholder, value, onChange, ...props }) => (
  <InputGroup {...props}>
    <InputLeftElement pointerEvents='none' fontSize={15} h="30px">
      <SearchIcon color="text.200" opacity={.5}/>
    </InputLeftElement>
    <Input
      h="30px"
      type="text"
      placeholder={placeholder}
      _placeholder={{ opacity: .6, fontWeight: 400, fontSize: 16, color: "#BE9A93" }}
      focusBorderColor="#73392C"
      fontSize={16}
      fontWeight={400}
      color="#BE9A93"
      value={value}
      bg="#472018"
      border="1.3px solid"
      borderColor="#73392C"
      _hover={{borderColor: "#73392C"}}
      borderRadius="8px"
      onChange={(e) => onChange(e.target.value)}
    />
  </InputGroup>
)
export default SearchInput;
