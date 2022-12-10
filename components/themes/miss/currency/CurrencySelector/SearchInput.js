import {Input, InputGroup, InputLeftElement} from "@chakra-ui/react";
import {SearchIcon} from "@chakra-ui/icons";

const SearchInput = ({ placeholder, value, onChange, ...props }) => (
  <InputGroup {...props}>
    <InputLeftElement pointerEvents='none' fontSize={15} h="30px">
      <SearchIcon color="white" opacity={.5}/>
    </InputLeftElement>
    <Input
      h="30px"
      type="text"
      placeholder={placeholder}
      _placeholder={{ opacity: .6, fontWeight: 400, fontSize: 16, color: "white" }}
      focusBorderColor="#BD6D86"
      fontSize={16}
      fontWeight={400}
      color="white"
      value={value}
      bg="#BD6D86"
      border="1.3px solid"
      borderColor="#BD6D86"
      _hover={{borderColor: "#BD6D86"}}
      borderRadius="8px"
      onChange={(e) => onChange(e.target.value)}
    />
  </InputGroup>
)
export default SearchInput;
