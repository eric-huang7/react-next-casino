import { Text } from "@chakra-ui/react"

const ErrorMessage = ({ children, fontSize = 12, fontWeight = 400, bold, ...props }) => (
  <Text fontSize={fontSize} color="red" fontFamily="Verdana" fontWeight={bold ? 600 : fontWeight} {...props}>
    {children}
  </Text>
)
export default ErrorMessage;
