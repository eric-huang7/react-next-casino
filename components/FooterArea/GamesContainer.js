import {GamesContainerNavigation} from "./GamesContainerNavigation";
import {useSelector} from "react-redux";
import {GamesSlider} from "./GamesSlider";
import {useRouter} from "next/router";
import GameSliderErrorHandler from "./ErrorHandler/GameSliderErrorHandler";
import usePlayGame from "../../hooks/usePlayGame";
import { HStack, Box } from "@chakra-ui/react";

export const GamesContainer = ({t, activeSlots, activeTime, setActiveSlots, setActiveTime, footerArea}) => {
  const router = useRouter();
  const games = useSelector((store) => store.games);
  const userInfo = useSelector((store) => store.authInfo);
  const {playFun, playGame} = usePlayGame();

  return (
    <HStack
      ref={footerArea}
      overflow="hidden"
      transform={activeSlots || activeTime ? "translateY(-164px)" : "translateY(164px)"}
      opacity={activeSlots || activeTime ? 1 : 0}
      w="100%"
      maxW="1920px"
      h="126px"
      position="absolute"
      bg="#000000"
      alignItems="center"
      transition="transform 0.5s ease-in-out, opacity 0.2s ease-in-out"
    >
      <GamesContainerNavigation
        t={t}
        setActiveSlots={setActiveSlots}
        setActiveTime={setActiveTime}
        activeSlots={activeSlots}
        activeTime={activeTime}
        router={router}
      />
      <Box w="85%" position="relative">
        <GameSliderErrorHandler>
          <GamesSlider
            playFunClickHandler={playFun}
            playGameClickHandler={playGame}
            activeSlots={activeSlots}
            activeTime={activeTime}
            userInfo={userInfo}
            gamesData={games}
            t={t}
          />
        </GameSliderErrorHandler>
      </Box>
    </HStack>
  )
}
