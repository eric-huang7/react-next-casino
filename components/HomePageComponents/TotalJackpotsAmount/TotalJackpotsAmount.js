import Image from "next/image";

import styles from '../../../styles/HomePage/TotalJackpotsAmount.module.scss'
import {WinnersInfoBlock} from "./WinnersInfoBlock";
import useWindowDimensions from "../../../hooks/useWindowDimensions";
import {useState} from "react";
import {JackpotsInfoBlock} from "./JackpotsInfoBlock";

export const TotalJackpotsAmount = ({t, winners, jackpots}) => {
  const {height, width} = useWindowDimensions();

  // console.log(winners, 'WINNERS INFO BLOCK!');
  // console.log(jackpots, 'jackpots INFO BLOCK!');

  let isHidden = false;
  if (width <= 1165) {
    isHidden = true;
  } else {
    isHidden = false;
  }

  let latestWinnersArr = [];
  let topWinnersArr = [];
  let jackpotsWinnersArr = [];

  let JAC = [];
  let countGames = 0;
  let totalMount = 0;

  let headings = {
    latestWinn: t('totalJackpots.latestWinners'),
    topWinn: t('totalJackpots.topWinners'),
    jackpots: t('totalJackpots.jackpots')
  }

  if (winners.loading || jackpots.loading) {
    return (
      <h1 className={'loadingHeader'}>LOADING...</h1>
    )
  } else {

    let sortedWinners = winners.winners.results.sort((a,b) => Number(b.winnings) - Number(a.winnings));
    let allNumber = 0
    let allMount = sortedWinners.filter((item) => item.winnings !== null && Number(item.winnings) > 0).map((item) => {
      allNumber += Number(item.winnings);
    })
    totalMount = Number(allNumber.toFixed(0)).toLocaleString('de');

    // make filters for each arr
    latestWinnersArr = sortedWinners.slice(0, 4); // filter by begin_date
    topWinnersArr = sortedWinners.slice(0, 4); // no filter
    // jackpotsWinnersArr = sortedWinners.slice(0, 4);

    JAC = jackpots.jackpots.results.filter((item) => {
      if (item.games.length > 0) {
        return true;
      } else {
        return false;
      }
    })
    JAC.map((el) => {
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
        <h1 className={styles.totalMountHeading}>$ {totalMount}</h1>
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