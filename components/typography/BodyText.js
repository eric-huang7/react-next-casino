import { Text } from "@chakra-ui/react"

const BodyText = ({ children, fontSize = 16, fontWeight = 400, color="text.450", bold, ...props }) => (
  <Text fontSize={fontSize} color={color} fontFamily="Verdana" fontWeight={bold ? 600 : fontWeight} {...props}>
    {children}
  </Text>
)
export default BodyText;
