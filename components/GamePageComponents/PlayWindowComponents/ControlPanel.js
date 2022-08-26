import { Box, VStack } from "@chakra-ui/react"

const Button = ({children, ...props}) => (
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
export const ControlPanel = ({fullscreenClickHandler, closeGameHandler, minimizedHandler, isFullScreen}) => (
  <VStack
    w={isFullScreen ? "50px" : "30px"}
    minW={isFullScreen ? "35px" : "25px"}
    h="18%"
    minH="100px"
    bg="rgba(0,0,0, 0.5)"
    position="absolute"
    top={0}
    right={isFullScreen ? 0: "-30px"}
    alignItems="center"
    p="5px"
    spacing={2}
  >
    <Button onClick={closeGameHandler} backgroundImage="url('/assets/img/gamePage/close.png')" />
    <Button onClick={fullscreenClickHandler} backgroundImage="url('/assets/img/gamePage/full.png')" />
    <Button onClick={minimizedHandler} display="flex">
      <Box w="10px" h="10px" borderTop="1px solid white" borderRight="1px solid white" transform="rotateZ(135deg)" mb="5px"/>
    </Button>
  </VStack>
)
