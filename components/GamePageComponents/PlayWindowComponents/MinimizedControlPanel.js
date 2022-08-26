import { Text, HStack } from "@chakra-ui/react";
import {GameCloseButton} from "../../buttons/GameControlButtons";

export const MinimizedControlPanel = ({closeGameHandler, gameInfo}) => (
  <HStack alignItems="center" justifyContent="space-between" p="0 10px" h="20px" minH="20px" bg="#2b2b2b">
    <Text m={0} fontSize="16px" color="#b1b3b4" fontFamily="Verdana" textAlign="center">
      {`${gameInfo.gameName}`}
    </Text>
    <GameCloseButton onClick={closeGameHandler} />
  </HStack>
)
