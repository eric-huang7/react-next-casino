import styles from "../../../styles/TournamentSidebar/TournamentSidebar.module.scss";
import {useEffect, useState} from "react";
import {dateTimer} from "../../../helpers/timer";


export const Timer = ({t, router, time}) => {
const [timeEnd, setTime] = useState('')

  useEffect(() => {
    let timer;
    timer = setInterval(() => setTime(dateTimer(time, router.locale)), 1000);

    return () => {
      if (timer) {
        clearInterval(timer);
      }
    }
  }, [timeEnd]);

// let res = '';
// console.log('6 years 3 months 24 days 6 hours 8 minutes 54 seconds');


  return (
    <div  className={styles.timeBlock}>
      <p className={styles.timeText}>{timeEnd} left</p>
    </div>
  )
}