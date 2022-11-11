import { Text, HStack } from "@chakra-ui/react"
import {VStack} from "@chakra-ui/layout";

export const InstructionsIconItem = ({ t, data, arrow }) => (
  <VStack w="360px" h="215px" justifyContent="space-between" alignItems="center" zIndex={3} position="relative"
    _after={arrow && {
      content: `""`,
      backgroundImage: "url('/assets/img/whyUseCrypto/itemsIcons/redArrows.svg')",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      backgroundSize: "contain",
      position: "absolute",
      top: "15px",
      right: "-84px",
      width: "58px",
      height: "74px"
    }}
  >
    <HStack justifyContent="center" alignItems="center" w="120px" h="130px">
      <img src={data.icon} alt=""/>
    </HStack>
    <Text as="h2" fontSize={{base: "21px", lg: "30px"}} color="white" fontFamily="Verdana" whiteSpace="nowrap" m={0}>
      {t(data.heading)}
    </Text>
  </VStack>
)
