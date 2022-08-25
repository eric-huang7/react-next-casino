import {gameUrl} from "../../../helpers/imageUrl";
import { HStack, Text, Box, Image, Button } from "@chakra-ui/react";

const CustomButton = ({children, ...props}) => (
  <Button
    w="fit-content"
    p="10px"
    fontSize="14px"
    fontWeight={600}
    color="accent.850"
    fontFamily="Lithograph"
    textTransform="uppercase"
    // background: rgb(255,195,84);
    bg="linear-gradient(141deg, rgba(255,195,84,1) 0%, rgba(254,236,202,1) 100%)"
    cursor="pointer"
    border="none"
    outline="none"
    borderRadius="10px"
    {...props}
  >
    {children}
  </Button>
)

export const GameItemContainer = ({t, gameData, playFunClickHandler, playGameClickHandler}) => {
  let imgSrc = gameUrl(gameData.id);

  const playFunHandler = () => {
    playFunClickHandler(gameData);
  }
  const playPaidHandler = () => {
    playGameClickHandler(gameData);
  }

  return (
    <HStack alignItems="center" mb="9px">
      <Image w="110px" minH="65px" mr="15px" alt="" src={imgSrc}/>

      <Box w="100%" pb="10px">
        <Text as="h3" fontSize="20px" color="accent.850" fontWeight={600} fontFamily="Lithograph"
              textTransform="uppercase" textAlign="center" m="0 0 9px 0">
          {gameData.name}
        </Text>
        <HStack
          backgroundColor="#f2f6f9"
          alignItems="center"
          justifyContent="center"
          minH="70px"
          border="5px solid #f9b14a"
          backgroundImage="url('/assets/img/modals/gift_bg.webp')"
          spacing={2}
          p="5px"
        >
          <CustomButton onClick={playPaidHandler}>{t("exitIntentPopup.gamesContainer.playNow")}</CustomButton>
          <CustomButton onClick={playFunHandler}>{t("exitIntentPopup.gamesContainer.playFun")}</CustomButton>
        </HStack>
      </Box>
    </HStack>
  )
}
