import React, { useEffect } from 'react'
import { VStack, Box, Text } from '@chakra-ui/react'
import { useDispatch, useSelector } from 'react-redux'
import { getLatestGames } from '../../../redux/games/action'
import ErrorEmpty from '../../ErrorBoundaryComponents/ErrorEmpty'
import usePlayGame from "../../../hooks/usePlayGame";
import {GameItemContainer} from "../../HomePageComponents/GamesSliderBlock/GameItemContainer";

export const SideGamesContainer = ({ t }) => {
  const dispatch = useDispatch()
  let userData = useSelector((store) => store.authInfo)
  let gamesStoredData = useSelector((store) => store.games)
  const {playFun, playGame} = usePlayGame();

  useEffect(() => {
    if (userData.isAuthenticated) {
      dispatch(getLatestGames(userData.user.user.id))
    }
  }, [userData.isAuthenticated])

  let gamesArr = gamesStoredData?.latestGames?.results?.length === 0
    ? gamesStoredData?.games?.results
    : gamesStoredData?.latestGames?.results

  return (
    <VStack
      display={{base: 'none', lg: 'flex'}}
      alignItems="center"
      justifyContent="center"
      w="305px"
      p="14px"
      spacing={3}
    >
      {gamesArr?.slice(0,3)?.map((el) => (
        <ErrorEmpty key={`game id key ${el.id}`}>
          <VStack bg="black" spacing={0}>
            <GameItemContainer
              w="285px"
              h="190px"
              m={0}
              playGameClickHAndler={playGame}
              playFunClickHandler={playFun}
              t={t}
              gameData={el}
              user={userData}
              borderRadius={0}
            />
            <Box w="100%" textAlign="center" p="10px">
              <Text fontSize="14px" color="grey.370" fontFamily="Verdana" textTransform="uppercase" textAlign="center">
                {el.name}
              </Text>
            </Box>
          </VStack>
        </ErrorEmpty>
        )
      )}
    </VStack>
  )
}
