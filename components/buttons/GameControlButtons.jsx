import {Box, VStack} from "@chakra-ui/react";

export const GameControlButton = ({children, ...props}) => (
  <Box
    backgroundColor="rgba(53, 69, 72, 0.5)"
    w="24px"
    h="24px"
    minH="24px"
    borderRadius="50%"
    cursor="pointer"
    transition="background-color 0.2s ease"
    backgroundRepeat="no-repeat"
    backgroundPosition="center"
    backgroundSize="50%"
    alignItems="center"
    justifyContent="center"
    _hover={{
      backgroundColor: "rgba(83, 104, 110, 0.5)"
    }}
    {...props}
  >
    {children}
  </Box>
)

export const GameCloseButton = (props) =>
  <GameControlButton backgroundImage="url('/assets/img/gamePage/close.png')" {...props} />

export const GameFullButton = (props) =>
  <GameControlButton backgroundImage="url('/assets/img/gamePage/full.png')" {...props} />

export const GameMinimizeButton = (props) =>
  <GameControlButton display="flex" {...props}>
    <Box w="10px" h="10px" borderTop="1px solid white" borderRight="1px solid white" transform="rotateZ(135deg)" mb="5px"/>
  </GameControlButton>
