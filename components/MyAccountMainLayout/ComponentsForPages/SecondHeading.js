import {HStack, Text} from "@chakra-ui/layout";

const SecondHeading = ({ title, ...props }) => (
  <HStack borderBottom="1px solid #b6b6b6" pb="30px !important" ml="10px !important" alignItems="flex-start" {...props}>
    <Text as='h3' fontSize="16px" color="text.450" fontFamily="Verdana" m={0} >
      {title}
    </Text>
  </HStack>
)

export default SecondHeading;
