import { VStack } from "@chakra-ui/react"
import {GameCloseButton, GameFullButton, GameMinimizeButton} from "../../buttons/GameControlButtons";

export const ControlPanel = ({fullscreenClickHandler, closeGameHandler, minimizedHandler, isFullScreen}) => (
  <VStack h="18%" minH="100px" bg="rgba(0,0,0, 0.5)" position="absolute" top={0} alignItems="center" p="5px" spacing={2}
          w={isFullScreen ? "50px" : "30px"} minW={isFullScreen ? "35px" : "25px"} right={isFullScreen ? 0: "-30px"}>
    <GameCloseButton onClick={closeGameHandler} />
    <GameFullButton onClick={fullscreenClickHandler} />
    <GameMinimizeButton onClick={minimizedHandler} />
  </VStack>
)
