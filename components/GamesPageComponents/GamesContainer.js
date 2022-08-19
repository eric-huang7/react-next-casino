import {useDispatch, useSelector} from "react-redux";
import React, {useEffect} from "react";
import { HStack } from "@chakra-ui/react";
import GamesItemErrorHandler from "./GameItemErrorHandler";
import preloadImages from "../../helpers/preloadImages";
import {setLoaded} from "../../redux/games/action";
import SectionHeader from "../typography/SectionHeader";
import {keyframes} from "@chakra-ui/react";
import {Text, Box, VStack} from "@chakra-ui/layout";
import {GameItemContainer} from "../HomePageComponents/GamesSliderBlock/GameItemContainer";
import useWindowDimensions from "../../hooks/useWindowDimensions";
import usePlayGame from "../../hooks/usePlayGame";
import {useTranslation} from "next-i18next";

const titles = {
  'all-games': 'gamesPage.headings.allGames',
  'new-games': 'gamesPage.headings.newGames',
  'btc-games': 'gamesPage.headings.btcGames',
  'top-games': 'gamesPage.headings.topGames',
  'jackpot-games': 'gamesPage.headings.jackpotGames',
  'table-games': 'gamesPage.headings.tableGames',
  'tournaments': 'gamesPage.headings.tournaments',
}

const pulse = keyframes`
  0% {
    opacity: 1;
  }
  50% {
    opacity: 0.4;
  }
  100% {
    opacity: 1;
  }
`;

const animation = `${pulse} 1.5s ease-in-out 0.5s infinite`

export const GamesContainer = (props) => {
  const {
    heading,
    gamesData,
    setPageCounter = () => {},
    gamesError,
    searchQuery
  } = props;
  const {t} = useTranslation('common')
  const { width } = useWindowDimensions();
  const dispatch = useDispatch();

  const userInfo = useSelector((store) => store.authInfo);
  const isLoaded = useSelector((store) => store.games.isLoaded)
  const {playFun, playGame} = usePlayGame();

  useEffect(() => {
    return () => {
      setPageCounter(0);
    }
  },[])

  useEffect(() => {
    // Images preload
    let isCancelled = false

    if (gamesData.length > 0) {
      (async () => await preloadImages(gamesData, isCancelled, () => {
        dispatch(setLoaded(true))
      }))();
    }

    return () => {
      isCancelled = true
    }
  }, [isLoaded, gamesData])

  let games = gamesData.map((el, ind) => {
    return (
      <GamesItemErrorHandler key={`${el.id} ${el.name} game page`}>
        <GameItemContainer
          w={{base: "160px", lg: "235px"}}
          h={{base: "125px !important", lg: "160px !important"}}
          m={{base: "5px !important", lg: "10px !important"}}
          playGameClickHAndler={playGame}
          playFunClickHandler={playFun}
          t={t}
          gameData={el}
          user={userInfo}
        />
      </GamesItemErrorHandler>
    )
  })

  return (
    <VStack
      maxW="1360px"
      m={{base: "16px", lg: "30px auto"}}
      p={{base: "0 0 30px", lg: "0 30px 50px"}}
    >
      <SectionHeader px={{base: "16px", lg: "20px"}} fontSize={30} justifyContent={{base: 'center', lg: 'flex-start'}}>
        {t(titles[heading] || heading)}
      </SectionHeader>

      {searchQuery &&
        <Text w="100%" as="h3" fontFamily="Verdana" fontSize={20} textTransform="uppercase"
              textAlign="left" color="white" px={{base: "16px", lg: "20px"}}>
        {`${t("searchGames.gamesMatching")} "${searchQuery}"`}
      </Text>}

      <HStack w="100%" spacing={0} p={{base: 0, lg: "12px 6px 6px 6px"}} flexWrap="wrap"
        pb={!gamesError && !isLoaded ? 60 : 0 }
      >
        {gamesError
          ? <Text as="h2" m="0 auto" fontSize="24px" fontFamily="Arial" color="#ffffff">{t(gamesError)}</Text>
          : (!isLoaded ? (width > 800 ? [0,1,2,3,4] : [0,1]).map(key => (
              <Box m={{base: "5px !important", lg: "10px !important"}} key={key}
                bg="rgba(0, 0, 0, 0.21)"
                borderRadius="0.25rem"
                h={{base: "125px", lg: "160px"}}
                w={{base: "160px", lg: "235px"}}
                animation={animation}
              />
            )) : games)
        }
      </HStack>
    </VStack>
  )
}

