import { Text } from "@chakra-ui/react";
import {VStack, Box} from "@chakra-ui/layout";

const Heading = ({children, ...props}) => (
  <Text
    as="h2"
    textAlign="center"
    fontSize={{base: "22px", lg: "32px"}}
    letterSpacing="2px"
    lineHeight={{base: "36px", lg: "78px"}}
    color="primary.500"
    fontWeight="bold"
    fontFamily="Lithograph"
    textTransform="uppercase"
    maxW={{base: "80%", lg: "65%"}}
    w="556px"
    mb={{base: "30px !important", lg: "44px !important"}}
    mt={0}
    border="5px solid white"
    bg="rgba(58, 25, 18, 0.44)"
    borderRadius="35px"
    h={{base: "auto", lg: "78px"}}
    {...props}
  >
    {children}
  </Text>
)

const HeadersBlock = ({t}) => (
  <Box w="100%" p="50px 10px 30px 10px">
    <VStack maxW="1300px" m="0 auto" alignItems="center" spacing={0}>
      <Heading mr="10% !important">{t('contactUsPage.headers.hoursAday')}</Heading>
      <Heading mr="20% !important">{t('contactUsPage.headers.daysAweek')}</Heading>
      <Heading mr="10% !important">{t('contactUsPage.headers.daysAyear')}</Heading>
    </VStack>
    <Text
      maxW="460px"
      m="90px auto 0 auto"
      fontSize="16px"
      letterSpacing="-1px"
      lineHeight="30px"
      color="#77250F"
      fontFamily="Verdana"
      textAlign="center"
    >
      {t('contactUsPage.headers.textBottom')}
    </Text>
  </Box>
)

export default HeadersBlock;
