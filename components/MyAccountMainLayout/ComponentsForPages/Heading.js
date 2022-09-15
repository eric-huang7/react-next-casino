import {HStack, Text} from "@chakra-ui/layout";

export const Heading = ({ t, heading }) => (
  <HStack borderBottom="1px solid #b6b6b6" mb="30px !important" alignItems="center" h="93px">
    <Text as='h2' fontSize="24px" fontWeight={500} letterSpacing="1px" color="primary.500" fontFamily="Verdana">
      {t(heading)}
    </Text>
  </HStack>
)
