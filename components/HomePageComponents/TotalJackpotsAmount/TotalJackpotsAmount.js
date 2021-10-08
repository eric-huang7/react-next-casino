import Image from "next/image";

import styles from '../../../styles/HomePage/TotalJackpotsAmount.module.scss'
import {WinnersInfoBlock} from "./WinnersInfoBlock";
import useWindowDimensions from "../../../hooks/useWindowDimensions";

export const TotalJackpotsAmount = ({t, winners}) => {
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
  let headings = {
    latestWinn: t('totalJackpots.latestWinners'),
    topWinn: t('totalJackpots.topWinners'),
    jackpots: t('totalJackpots.jackpots')
  }
  let totalMount = 0;
  if (winners.loading) {
    console.log('loading');
    return (
      <h1>LOADING...</h1>
    )
  } else {
    winners.winners.results.length = 4;
    // make filters for each arr
    latestWinnersArr = winners.winners.results;
    topWinnersArr = winners.winners.results;
    jackpotsWinnersArr = winners.winners.results;
    totalMount = '12.522.478';
  }
  // console.log(latestWinnersArr, 'winners')
  // console.log(topWinnersArr, 'winners')
  // console.log(jackpotsWinnersArr, 'winners')
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
        <h1 className={styles.totalMountHeading}>${totalMount}</h1>
        <div className={styles.winnersInfoBlockWrapper}>
          <WinnersInfoBlock isHidden={false} heading={headings.latestWinn} winnersData={latestWinnersArr}/>
          <WinnersInfoBlock isHidden={isHidden} heading={headings.topWinn} winnersData={topWinnersArr}/>
          <WinnersInfoBlock isHidden={isHidden} heading={headings.jackpots} winnersData={jackpotsWinnersArr}/>
        </div>
      </div>
    </div>
  )
}