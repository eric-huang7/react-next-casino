import {Input, InputGroup, InputLeftElement} from "@chakra-ui/react";
import {SearchIcon} from "@chakra-ui/icons";

const SearchInput = ({ placeholder, value, onChange }) => (
  <InputGroup>
    <InputLeftElement pointerEvents='none' fontSize={18} h="50px">
      <SearchIcon color="text.200" opacity={.5}/>
    </InputLeftElement>
    <Input
      h="50px"
      type="text"
      placeholder={placeholder}
      _placeholder={{ opacity: .6, fontWeight: 600, fontSize: 18, color: "text.150" }}
      border="none"
      focusBorderColor="transparent"
      fontSize={18}
      fontWeight={600}
      color="text.300"
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
  </InputGroup>
)
export default SearchInput;
