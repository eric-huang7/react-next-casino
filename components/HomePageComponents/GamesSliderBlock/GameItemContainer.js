import Image from "next/image";
import {gameUrl} from "../../../helpers/imageUrl";
import {Button, VStack, Box} from "@chakra-ui/react";
import {Text} from "@chakra-ui/layout";
import {useState} from "react";

export const GameItemContainer = ({
  gameData, t, playFunClickHandler, playGameClickHAndler, fontSize={base: "9px", lg: "17px"}, user, ...props
}) => {
  const [hover, setHover] = useState(false);

  const playFreeClickHandler = () => {
    playFunClickHandler(gameData);
  }
  const playPaidClickHandler = () => {
    playGameClickHAndler(gameData, user)
  }

  const canPlay = () => {
    return user.isAuthenticated && process.env.NODE_ENV === 'production'
  }

  const onEnter = () => { setHover(true) }

  const onLeave = () => { setHover(false) }

  return (
    <Box h={{base: "95px", lg: "180px"}}
         w={{base: "145px", lg: "275px"}}
         m="0 4px" position="relative" borderRadius="0.25rem" overflow="hidden"
         onMouseEnter={onEnter} onMouseLeave={onLeave} {...props}>
      {hover && <VStack
        spacing={2}
        backgroundColor="rgba(0,0,0,0.5)"
        position="absolute"
        zIndex="10"
        w="100%"
        h="100%"
        justifyContent="center"
        alignItems="center"
        onMouseLeave={onLeave}
      >
        <Button
          isDisabled={!canPlay()}
          w="55%"
          h="20%"
          _disabled={{color: '#7e7e7e', bg: '#452222', cursor: 'default'}}
          _hover={{bg: 'primary.500', _disabled: {bg: "#452222", color: '#7e7e7e'}}}
          fontWeight={400}
          m="0 auto 5px auto"
          bg="primary.500"
          borderRadius={0}
          color="#1e2127"
          onClick={playPaidClickHandler}
        >
          <Text as="span" fontSize={fontSize} textTransform="uppercase">
            {t('gameButtons.play')}
          </Text>
        </Button>

        <Button
          w="55%"
          h="20%"
          color="white"
          fontWeight={400}
          m="0 auto 5px auto"
          bg="#333333"
          _hover={{bg: "#333333"}}
          borderRadius={0}
          border="1px solid #909091"
          onClick={playFreeClickHandler}
        >
          <Text as="span" fontSize={fontSize} color="#fff" textTransform="uppercase">
            {t('gameButtons.playForFun')}
          </Text>
        </Button>
      </VStack>}

      <Image
        layout={"fill"}
        key={gameData.id}
        src={gameUrl(gameData.id)}
        alt={`Game ${gameData.name}`}/>
    </Box>
  )
}

