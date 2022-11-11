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
import LoadingItems from "./LoadingItems";
import GamesFilterMenu from "./GamesFilterMenu";

const titles = {
  'all-games': 'gamesPage.headings.allGames',
  'new-games': 'gamesPage.headings.newGames',
  'btc-games': 'gamesPage.headings.btcGames',
  'top-games': 'gamesPage.headings.topGames',
  'jackpot-games': 'gamesPage.headings.jackpotGames',
  'table-games': 'gamesPage.headings.tableGames',
  'tournaments': 'gamesPage.headings.tournaments',
}

export const GamesContainer = (props) => {
  const {
    heading,
    gamesData,
    setPageCounter = () => {},
    gamesError,
    searchQuery
  } = props;
  const {t} = useTranslation('common')
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
          w={{base: "145px", lg: "235px"}}
          h={{base: "95px !important", lg: "160px !important"}}
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

      <GamesFilterMenu px={{base: 0, lg: "20px"}} pb={5} />

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
          : (!isLoaded ? <LoadingItems /> : games)
        }
      </HStack>
    </VStack>
  )
}

