import {GameWindow} from "./GameWindow";
import {LoadingComponent} from "../LoadingComponent/LoadingComponent";
import {HStack, Text, VStack} from "@chakra-ui/react";
import {GameCloseButton, GameFullButton, GameMinimizeButton} from "../buttons/GameControlButtons";
import {Box} from "@chakra-ui/layout";

export const PlayWindowWrapper = ({
  t, isFullScreen, fullscreenClickHandler, isMinimized, minimizedHandler, closeGameHandler, playGames, maximizeHandler
}) => (
  <Box
    position={isMinimized ? "fixed" : "absolute"}
    top={isMinimized ? "auto" : (isFullScreen ? 0 : "130px")}
    bottom={isMinimized ? "90px" : "auto"}
    left={isMinimized ? "30px" : (isFullScreen ? 0 : "50%")}
    zIndex={isMinimized ? 19 : (isFullScreen ? 30 : 11)}
    transform={isFullScreen || isMinimized ? "translateX(0%)" : "translateX(-50%)"}
    w={isFullScreen || isMinimized ? "100%" : "calc((100vh - 154px)*16/9)"}
    maxW={isMinimized ? "417px" : (isFullScreen ? "100vw" : "calc(100% - 78px)")}
    h={isMinimized ? "235px" : (isFullScreen ? "100vh" : "55vw")}
    maxH={isMinimized ? "235px" : (isFullScreen ? "100vh" : "calc(100vh - 205px)")}
    transition=".3s ease"
    backgroundColor="rgba(0,0,0, 1)"
  >
    {isMinimized ? <>
      <HStack alignItems="center" justifyContent="space-between" p="0 10px" h="24px" minH="24px" bg="#2b2b2b">
        <Text m={0} fontSize="16px" color="#b1b3b4" fontFamily="Verdana" textAlign="center">
          {`${playGames.gameName}`}
        </Text>
        <GameCloseButton onClick={closeGameHandler} />
      </HStack>
      <Box
        position="absolute"
        top="24px"
        bottom={0}
        left={0}
        right={0}
        backgroundColor="transparent"
        opacity={0}
        backgroundImage="url('/assets/img/gamePage/fullscreen.svg')"
        backgroundRepeat="no-repeat"
        backgroundPosition="center"
        transition="opacity 0.3s ease-in-out"
        // className={styles.openFullScreenContainer}
        onClick={maximizeHandler}
        _hover={{
          backgroundColor: "rgba(0,0,0, 0.8)",
          height: "100%",
          opacity: 1,
          cursor: "pointer",
        }}
      />
    </> : <>
      <VStack h="18%" minH="100px" bg="rgba(0,0,0, 0.5)" position="absolute" top={0} alignItems="center" p="5px" spacing={2}
              w={isFullScreen ? "50px" : "30px"} minW={isFullScreen ? "35px" : "25px"} right={isFullScreen ? 0: "-30px"}>
        <GameCloseButton onClick={closeGameHandler} />
        <GameFullButton onClick={fullscreenClickHandler} />
        <GameMinimizeButton onClick={minimizedHandler} />
      </VStack>
    </>}

    {playGames.loading
      ? <LoadingComponent t={t} />
      : <GameWindow
          closeGameHandler={closeGameHandler}
          gameUrl={playGames.freeGame ? playGames.freeGame.game_link : playGames.startGame ? playGames.startGame.game_link : null}
        />
    }
  </Box>
)
