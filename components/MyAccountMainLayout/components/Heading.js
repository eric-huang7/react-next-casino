import {HStack, Text} from "@chakra-ui/layout";

const Heading = ({ title }) => (
  <HStack borderBottom="1px solid #b6b6b6" mb="30px !important" mx={{base: "25px", lg: 0}} alignItems="center" h="93px">
    <Text as='h2' fontSize="24px" fontWeight={500} letterSpacing="1px" color="primary.500" fontFamily="Verdana">
      {title}
    </Text>
  </HStack>
)

export default Heading;
