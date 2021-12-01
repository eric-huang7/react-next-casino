import styles from '../../../styles/PaymentsModals/PaymentsWrapper.module.scss';

import Image from "next/image";

export const PaymentsWrapper = ({t}) => {


  return (
    <div className={styles.paymentsMainWrapper}>
      <div className={styles.paymentsInnerWrapper}>
        <div className={styles.paymentsMainContainer}>
          <div className={styles.paymentsHead}>
            <button className={styles.backButton}>

            </button>
            <div className={styles.heading}>
              <Image src={'/assets/img/depositWidget/cards.png'} width={60} height={25} layout={'fixed'} alt={'visa/mastercard icon'}/>
            </div>
            <button className={styles.closeButton}>
              <span className={styles.closeOne}></span>
              <span className={styles.closeTwo}></span>
            </button>
          </div>


        </div>
        <button className={styles.confirmButton}>
          Confirm
        </button>
      </div>
    </div>
  )
}