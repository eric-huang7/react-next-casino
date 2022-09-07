import { Text } from "@chakra-ui/react";
import {Box} from "@chakra-ui/layout";

const InfoBlock = ({title, text}) => (
  <Box
    maxW="1320px"
    m="0 auto"
    p="30px"
  >
    <Text as="h2"
      fontSize={{base: "21px", lg: "48px"}}
      letterSpacing="4px"
      color="primary.500"
      fontFamily="Verdana"
      textTransform="uppercase"
      mb="30px"
    >
      {title}
    </Text>
    <Text
      fontSize={{base: "16px", lg: "24px"}}
      color="white"
      fontFamily="Verdana"
      maxWidth="1125px"
      whiteSpace="pre-line"
    >
      &#160;&#160;{text}
    </Text>
  </Box>
)

export  default InfoBlock;
