import Image from "next/image";

import styles from '../../../styles/HomePage/TotalJackpotsAmount.module.scss'
import {WinnersInfoBlock} from "./WinnersInfoBlock";

export const TotalJackpotsAmount = ({t, winners}) => {

  let latestWinnersArr = [];
  let topWinnersArr = [];
  let jackpotsWinnersArr = [];
  let headings = {
    latestWinn: 'latest winners',
    topWinn: 'top winners',
    jackpots: 'jackpots'
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
  console.log(latestWinnersArr, 'winners')
  console.log(topWinnersArr, 'winners')
  console.log(jackpotsWinnersArr, 'winners')
  return (
    <div className={styles.totalJackpotsMainWrapper}>
      <div className={styles.totalJackpotsHeading}>
        <Image width={598} height={113} className={styles.totalJackpotsHeading} src={'/assets/img/totalJackpot/total_jackpot_heading.svg'} alt="total jackpot heading"/>
      </div>
      <div className={styles.totalJackpotsWrapper}>
        <h1 className={styles.totalMountHeading}>${totalMount}</h1>
        <div className={styles.winnersInfoBlockWrapper}>
          <WinnersInfoBlock heading={headings.latestWinn} winnersData={latestWinnersArr}/>
          <WinnersInfoBlock heading={headings.topWinn} winnersData={topWinnersArr}/>
          <WinnersInfoBlock heading={headings.jackpots} winnersData={jackpotsWinnersArr}/>
        </div>
      </div>
    </div>
  )
}