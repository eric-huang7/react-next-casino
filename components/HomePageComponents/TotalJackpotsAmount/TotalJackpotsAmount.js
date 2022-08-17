import {WinnersInfoBlock} from "./WinnersInfoBlock";
import useWindowDimensions from "../../../hooks/useWindowDimensions";
import React, {useState} from "react";
import {JackpotsInfoBlock} from "./JackpotsInfoBlock";
import ErrorText from "../../ErrorBoundaryComponents/ErrorText";
import SectionHeaderCenter from "../../typography/SectionHeaderCenter";
import {Box} from "@chakra-ui/react";
import {HStack, Text} from "@chakra-ui/layout";

export const TotalJackpotsAmount = ({t, title, gameData}) => {
  const {height, width} = useWindowDimensions();

  let isHidden = false;
  if (width <= 1165) {
    isHidden = true;
  } else {
    isHidden = false;
  }

  let latestWinnersArr = [];
  let topWinnersArr = [];
  let jackpotsWinnersArr = [];

  let jackpotsFilteredArr = [];
  let countGames = 0;
  let totalMount = 0;
  let currency = '';

  let headings = {
    latestWinn: t('totalJackpots.latestWinners'),
    topWinn: t('totalJackpots.topWinners'),
    jackpots: t('totalJackpots.jackpots')
  }

  if (gameData?.loading || gameData?.loading || gameData?.loadingLatestWinners) {
    return (
      <h1 className={'loadingHeader'}>LOADING...</h1>
    )
  } else {
    // ########### TOTAL JACKPOT MOUNT
    let allNumber = 0

    let allMount = gameData?.jackpots?.results.map((el) => {
      currency = el.jackpot_amounts[0].currency;
      if (currency === 'EUR') {
        currency = '€';
      } else if (currency === 'USD') {
        currency = '$';
      }
      allNumber += Number(el.jackpot_amounts[0].amount);
    })
    totalMount = Number(allNumber.toFixed(0)).toLocaleString('de');

    // ########## TOP WINNERS
    let slicedTopWinners = gameData?.winners?.results?.slice() || [];
    let sortedWinners = slicedTopWinners.sort((a,b) => Number(b.winnings) - Number(a.winnings));
    topWinnersArr = sortedWinners.slice(0, 4); // no filter

    // ######### LATEST WINNERS
    let slicedLatestWinners = gameData?.latestWinners?.results?.slice() || [];
    latestWinnersArr = slicedLatestWinners.slice(0, 4) // latest winner came empty data

    // ######### JACKPOTS
    let jackpotSlicedArr = gameData?.jackpots?.results?.slice() || [];
    jackpotsFilteredArr = jackpotSlicedArr.filter((item) => {
      if (item.games.length > 0) {
        return true;
      } else {
        return false;
      }
    })
    jackpotsFilteredArr.map((el) => {
      el.games.map((game) => {
        if (countGames > 3) {
          return game;
        } else {
          jackpotsWinnersArr.push({game: game, jackpot_amount: el.jackpot_amounts});
          countGames += 1;
          return game;
        }
      })
    })
  }

  return (
    <Box w="100%" bg="url('assets/img/mainLayoutImg/section-bg-2.webp')" pb="100px" overflow="hidden">
      <SectionHeaderCenter pt="30px">{title}</SectionHeaderCenter>
      <Box position="relative" zIndex={4} w="100%" pb="30px">
        <Text
          as="h1"
          fontSize="90px"
          letterSpacing="2px"
          lineHeight={1}
          pt="30px"
          pb="50px"
          color="primary.500"
          fontWeight="bold"
          fontFamily="Gobold"
          textAlign="center"
        >
          {`${currency} ${totalMount}`}
        </Text>
        <HStack
          alignItems="stretch"
          justifyContent="center"
          w="76%"
          m="0 auto"
        >
          <ErrorText>
            <WinnersInfoBlock isHidden={isHidden} heading={headings.latestWinn} winnersData={latestWinnersArr}/>
          </ErrorText>
          <ErrorText>
            <WinnersInfoBlock isHidden={isHidden} heading={headings.topWinn} winnersData={topWinnersArr}/>
          </ErrorText>
          {/*<WinnersInfoBlock isHidden={isHidden} heading={headings.jackpots} winnersData={jackpotsWinnersArr}/>*/}
          <ErrorText>
            <JackpotsInfoBlock isHidden={false} heading={headings.jackpots} jackpotsData={jackpotsWinnersArr}/>
          </ErrorText>
        </HStack>
      </Box>
    </Box>
  )
}
