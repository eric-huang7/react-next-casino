import Image from "next/image";

import styles from '../../../styles/HomePage/MainBlock.module.scss'

export const MainBlock = () => {

  return  (
    <div className={styles.mainBlockWrapper}>
      <section className={styles.welcomeBonusSection}
       // style={{
       //    backgroundImage: `url('/static/img/homeImg/home_header_bckgr.png')`,
       //    backgroundPosition: '',
       //    backgroundSize: 'cover',
       //    backgroundRepeat: 'no-repeat',
       //  }}
      >
        <div className={styles.welcomeBonusImg}>
          <Image
            src={'/static/img/homeImg/Welcome_Bonus.svg'}
            width={'1021px'}
            height={'129px'}
            alt="greetings words"
          />
        </div>
        <div className={styles.slotsDancerWrapper}>
          <div className={styles.slotMachineIng}>
            <Image src={'/static/img/homeImg/slot_machine.png'} width={'662px'} height={'620px'} alt="slot machine"/>
          </div>
          <div className={styles.dancingGirlImg}>
            <Image src={'/static/img/homeImg/dance.png'} width={'404px'} height={'634px'} alt="dancing girl"/>
          </div>
        </div>
      </section>
    </div>
  )
}