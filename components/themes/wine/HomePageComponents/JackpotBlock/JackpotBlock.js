import Image from "next/image";

import styles from '/styles/HomePage/JackpotBlock.module.scss';
import {JackpotsItems} from "./JackpotsItems/JackpotsItems";

const dataJackpot = {
  mini: '25.225.00',
  minor: '88.684.00',
  major: '124.33.00',
  mega:   '588.458.00'
  }


export const JackpotBlock = () => {

  return (
    <div className={styles.jackpotWrapper}>
        <div className={styles.jackpotHeader}>
          <Image height={120} width={209} src={'/assets/img/jackpotBlock/jackpot_head.png'} alt={'Jackpot'}/>
        </div>
        <JackpotsItems data={dataJackpot}/>

    </div>
  )
}