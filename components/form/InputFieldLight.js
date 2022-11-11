import { Input } from "@chakra-ui/react";

const InputFieldLight = ({onChange, value, type = "text", ...props}) => (
  <Input
    onChange={(e) => onChange(e.target.value)}
    value={value}
    type={type}
    w="229px"
    h="38px"
    borderRadius="5px" bg="white"
    border="none"
    outline="none"
    mr="10px"
    fontSize="15px"
    color="text.450"
    fontFamily="Verdana"
    {...props}
  />
)

export default InputFieldLight;
