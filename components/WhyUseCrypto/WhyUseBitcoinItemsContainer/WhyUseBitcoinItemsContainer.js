import whyUseBitcoinData from './whyUsebitcoinData';
import { Box, HStack, Text } from "@chakra-ui/react";

export const WhyUseBitcoinItemsContainer = ({t}) => (
  <Box bg="white" w="100%">
    <HStack
      maxW={{base: "100%", lg: "1400px"}}
      m="0 auto"
      justifyContent="center"
      alignItems="stretch"
      flexWrap="wrap"
      p={{base: 0, lg: "40px"}}
      spacing={0}
    >
      {whyUseBitcoinData.map(item => (
        <Box key={item.id} maxW={{base: "100%", lg: "620px"}} w={{base: "100%", lg: "calc(50% - 50px)"}} p="25px">
          <HStack pl="35px" pb="20px" alignItems="flex-end" maxW={{base: "calc(100% - 30px)", lg: "450px"}} h="75px">
            <Text as="h3" fontSize={{base: "18px", lg: "24px"}} color="accent.850" fontFamily="Verdana"
                  textTransform="uppercase">
              {t(item.heading)}
            </Text>
          </HStack>
          <Box bg="accent.400" borderRadius="35px" borderTop="10px solid" borderColor="accent.500" p="85px 45px 40px 35px"
               position="relative" minH="400px">
            <Box position="absolute" top={{base: "-71px", lg: "-81px"}} right={{base: "-51px", lg: "-52px"}}
                 w={{base: "120px", lg: "150px"}} h={{base: "120px", lg: "150px"}} borderRadius="50%" bg="white"/>
            <Box position="absolute" sx={item.styles}>
              <img src={item.icon} alt=""/>
            </Box>
            <Text fontSize={{base: "18px", lg: "22px"}} color="accent.850" fontFamily="Verdana" whiteSpace="pre-line" m={0}>
              {t(item.textInfo)}
            </Text>
          </Box>
        </Box>
      ))}
    </HStack>
  </Box>
)
