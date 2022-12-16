import {WinnersInfoBlock} from "./WinnersInfoBlock";
import useWindowDimensions from "/hooks/useWindowDimensions";
import React, {useState} from "react";
import {JackpotsInfoBlock} from "./JackpotsInfoBlock";
import ErrorText from "/components/ErrorBoundaryComponents/ErrorText";
import {Box} from "@chakra-ui/react";
import {HStack, Stack, Text} from "@chakra-ui/layout";
import {assetsPath} from "../../../../../envs/theme";

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
    <Box w="100%"  pb={{base: "50px", lg: "100px"}} overflow="hidden" bg="#E5E5E5">
      <Text pt={{base: '20px', lg: "30px"}} pb="10px" textAlign="center" color="primary.500"
        fontSize={{base: '20px', lg: "48px"}} fontFamily="Trebuchet" fontWeight={700}
        bg={{base: 'white', lg: 'transparent'}}>
        {title.toUpperCase()}
      </Text>
      <Box position="relative" zIndex={4} w="100%" pb="30px" bg={`url('${assetsPath}/img/jackpotBlock/jackpot-bg.jpg')`}
        >
        <Box
          backgroundColor="#920116" h={{base: '111px', lg: "197px"}}
          pt={{base: '32px', lg: "60px"}} backgroundImage={`url('${assetsPath}/img/jackpotBlock/jackpot-bg.jpg')`}
          backgroundBlendMode="multiply"
        >
          <Text
            as="h1"
            fontSize={{base: "40px", lg: "90px"}}
            letterSpacing="2px"
            lineHeight={1}
            pt="0"
            pb="0"
            color="white"
            fontWeight="bold"
            fontFamily="Gobold"
            textAlign="center"
          >
            {`${currency} ${totalMount}`}
          </Text>
        </Box>

        <Stack
          direction={{base: 'column', lg: 'row'}}
          alignItems="stretch"
          justifyContent="center"
          w="76%"
          m="0 auto"
          pt="25px"
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
        </Stack>
      </Box>
    </Box>
  )
}
