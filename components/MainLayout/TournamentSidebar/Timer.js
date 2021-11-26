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


  return (
    <div  className={styles.timeBlock}>
      <p className={styles.timeText}>{router.locale === 'ru' ? `${t("tournaments.timeLeft")} ${timeEnd}` : `${timeEnd} ${t("tournaments.timeLeft")}`}</p>
    </div>
  )
}