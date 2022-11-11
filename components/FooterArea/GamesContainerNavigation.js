import Image from "next/image";
import { Box, Text, VStack } from "@chakra-ui/react";

export const GamesContainerNavigation = ({t, activeSlots, activeTime, setActiveSlots, setActiveTime, router}) => {
  const closeGamesHandler = () => {
    setActiveSlots(false);
    setActiveTime(false);
  }

  return (
    <VStack w="15%" justifyContent="center" spacing={0}>
      <Text fontSize="24px" fontWeight={700} letterSpacing="1px" color="primary.500" textAlign="center"
        textTransform="uppercase" m="0 25px 10px">
        {(activeSlots && t("footerArea.headings.topGames")) || (activeTime && t("footerArea.headings.lastGames"))}
      </Text>
      <Box onClick={closeGamesHandler} w="38px" h="38px" cursor="pointer">
        <Image layout={'fixed'} src={'/assets/img/footerArea/backButton.webp'} height={38} width={38} alt=""/>
      </Box>
    </VStack>
  )
}
