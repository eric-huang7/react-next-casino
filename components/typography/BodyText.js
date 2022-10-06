import { Text } from "@chakra-ui/react"

const BodyText = ({ children, fontSize = 16, fontWeight = 400, bold, ...props }) => (
  <Text fontSize={fontSize} color="text.450" fontFamily="Verdana" fontWeight={bold ? 600 : fontWeight} {...props}>
    {children}
  </Text>
)
export default BodyText;
