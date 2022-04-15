import Image from "next/image";

import styles from '../../../styles/HomePage/TotalJackpotsAmount.module.scss'
import {WinnersInfoBlock} from "./WinnersInfoBlock";
import useWindowDimensions from "../../../hooks/useWindowDimensions";
import {useState} from "react";
import {JackpotsInfoBlock} from "./JackpotsInfoBlock";
import {userData} from "../../../redux/user/action";
import ErrorText from "../../ErrorBoundaryComponents/ErrorText";
import Link from "next/link";
import {IoChevronForwardOutline} from "react-icons/io5";

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
    <div className={styles.totalJackpotsMainWrapper}>
      <div className={styles.headingWrapper}>
        <div className={styles.heading}>
          <div className={styles.title}>{title}</div>
        </div>
      </div>
      <div className={styles.totalJackpotsWrapper}>
        <h1 className={styles.totalMountHeading}>{`${currency} ${totalMount}`}</h1>
        <div className={styles.winnersInfoBlockWrapper}>
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
        </div>
      </div>
    </div>
  )
}
