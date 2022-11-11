import {imagesUrl} from "../../envs/url";
import {Box, VStack} from "@chakra-ui/react";
import {HStack, Text} from "@chakra-ui/layout";

export const ProviderItem = ({t, providerData, text, onClick, ...props}) => (
  <VStack
    h={{base: "80px", lg: "144px"}}
    w={{base: "191px", lg: "246px"}}
    m={{base: "5px !important", lg: "5px !important"}}
    position="relative"
    borderRadius={0}
    overflow="hidden"
    cursor="pointer"
    bg="#292f35"
    border="3px solid #696969"
    onClick={() => onClick(providerData)}
    spacing={0}
    {...props}
  >
    <HStack w="100%" h={{base: "45px", lg: "95px"}} justifyContent="center" alignItems="center">
      {text
        ? <Text fontSize={{base: "16px", lg: "24px"}} color="text.500" fontFamily="Verdana"
                textTransform="uppercase">
          {text}
        </Text>
        : <img src={`${imagesUrl}images/${providerData.game_producer}.png`}
             alt={`${t('providersPage.providerItemIconDescription')} ${providerData.game_producer}`}/>
      }
    </HStack>
    <HStack justifyContent="center" alignItems="center" bg="#b9b9b9" flex={1} w="100%">
      <Text fontSize="18px" color="text.500" fontFamily="Verdana" textAlign="center">
        {`${providerData.games} ${t('providersPage.providerItem')}`}
      </Text>
    </HStack>
  </VStack>
)
