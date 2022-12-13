import {Input, InputGroup, InputLeftElement} from "@chakra-ui/react";
import {SearchIcon} from "@chakra-ui/icons";

const SearchInput = ({ placeholder, value, onChange, ...props }) => (
  <InputGroup {...props}>
    <InputLeftElement pointerEvents='none' fontSize={15} h="44px">
      <SearchIcon color="#6D0202" opacity={.5}/>
    </InputLeftElement>
    <Input
      h="44px"
      type="text"
      placeholder={placeholder}
      _placeholder={{ opacity: .6, fontWeight: 400, fontSize: 16, color: "#BE9A93" }}
      focusBorderColor="#73392C"
      fontSize={16}
      fontWeight={400}
      color="#BE9A93"
      value={value}
      bg="white"
      border="1.3px solid"
      borderColor="#EE7272"
      _hover={{borderColor: "#EE7272"}}
      borderRadius="8px"
      onChange={(e) => onChange(e.target.value)}
    />
  </InputGroup>
)
export default SearchInput;
