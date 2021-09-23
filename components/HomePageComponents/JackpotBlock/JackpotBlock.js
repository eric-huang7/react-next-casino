import Image from "next/image";

import styles from '../../../styles/HomePage/JackpotBlock.module.scss'

export const JackpotBlock = () => {

  return (
    <div className={styles.jackpotWrapper}>
        <div className={styles.jackpotHeader}>
          <Image height={120} width={209} src={'/assets/img/jackpotBlock/jackpot_head.png'} alt={'Jackpot'}/>
        </div>
      <div className={styles.jackpotInfoblock}>
        <ul>

        </ul>
      </div>
    </div>
  )
}