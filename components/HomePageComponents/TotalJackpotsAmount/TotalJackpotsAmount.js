import Image from "next/image";

import styles from '../../../styles/HomePage/TotalJackpotsAmount.module.scss'
import {WinnersInfoBlock} from "./WinnersInfoBlock";
import useWindowDimensions from "../../../hooks/useWindowDimensions";
import {useState} from "react";
import {JackpotsInfoBlock} from "./JackpotsInfoBlock";
import {userData} from "../../../redux/actions/userData";

export const TotalJackpotsAmount = ({t, winners, jackpots}) => {
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

  if (winners.loading || jackpots.loading || winners.loadingLatestWinners) {
    return (
      <h1 className={'loadingHeader'}>LOADING...</h1>
    )
  } else {
    // ########### TOTAL JACKPOT MOUNT
    let allNumber = 0

    let allMount = jackpots.jackpots.results.map((el) => {
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
    let slicedTopWinners = winners.winners.results.slice();
    let sortedWinners = slicedTopWinners.sort((a,b) => Number(b.winnings) - Number(a.winnings));
    topWinnersArr = sortedWinners.slice(0, 4); // no filter

    // ######### LATEST WINNERS
    let slicedLatestWinners = winners.latestWinners.results.slice();
    latestWinnersArr = slicedLatestWinners.slice(0, 4) // latest winner came empty data

    // ######### JACKPOTS
    let jackpotSlicedArr = jackpots.jackpots.results.slice();
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
      <div className={styles.flamingo}></div>
      <div className={styles.leaf}></div>
      <div className={styles.cherry}></div>
      <div className={styles.moveFlamingo}></div>
      <div className={styles.moveLeaf}></div>
      <div className={styles.moveCherry}></div>

      <div className={styles.totalJackpotsHeading}>
        <Image width={598} height={113} className={styles.totalJackpotsHeading} src={'/assets/img/totalJackpot/total_jackpot_heading.png'} alt="total jackpot heading"/>
      </div>
      <div className={styles.totalJackpotsWrapper}>
        <h1 className={styles.totalMountHeading}>{`${currency} ${totalMount}`}</h1>
        <div className={styles.winnersInfoBlockWrapper}>
          <WinnersInfoBlock isHidden={isHidden} heading={headings.latestWinn} winnersData={latestWinnersArr}/>
          <WinnersInfoBlock isHidden={isHidden} heading={headings.topWinn} winnersData={topWinnersArr}/>
          {/*<WinnersInfoBlock isHidden={isHidden} heading={headings.jackpots} winnersData={jackpotsWinnersArr}/>*/}
          <JackpotsInfoBlock isHidden={false} heading={headings.jackpots} jackpotsData={jackpotsWinnersArr}/>
        </div>
      </div>
    </div>
  )
}