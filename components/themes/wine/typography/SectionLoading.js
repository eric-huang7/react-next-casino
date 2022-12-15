import {Text} from "@chakra-ui/layout";

const SectionLoading = ({children, ...props}) => (
  <Text
    as="h2"
    fontSize="24px"
    // fontWeight="bold"
    fontFamily="Arial"
    color="white"
    m="70px auto 30px"
    maxWidth="360px"
    textAlign="center"
    textTransform="uppercase"
    {...props}
  >
    {children}
  </Text>
)

export default SectionLoading;
