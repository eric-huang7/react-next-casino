import styles from '../../../styles/HomePage/MainBlock.module.scss'
import useWindowDimensions from '../../../hooks/useWindowDimensions'
import { SlotMachineInterface } from './SlotMachineInterface/SlotMachineInterfase'
import { SubmitButton } from './SlotMachineInterface/SubmitButton'
import { useSelector } from 'react-redux'

export const MainBlock = () => {
  const { width } = useWindowDimensions()
  const userLogin = useSelector((state) => state.authInfo.isAuthenticated)

  return (
    <div className={styles.mainBlockWrapper}>
      <section className={styles.welcomeBonusSection}>
        <div className={styles.welcomeBonusImg}>
          <img
            onDragStart={(e) => e.preventDefault()}
            src={`/assets/img/homeImg/Welcome-Bonus${width <= 1065 ? '-mobile' : ''}.png`}
            alt="greetings words"
          />
        </div>
        <div className={styles.slotsDancerWrapper}>
          <div className={styles.slotsDancer}>
            <div className={styles.slotMachineIng}>
              <SlotMachineInterface userLogin={userLogin}/>
              <img
                onDragStart={(e) => e.preventDefault()}
                src={`/assets/img/homeImg/slot_machine${width <= 1065 ? '-mobile' : ''}.png`}
                alt="slot machine"
              />
              <SubmitButton width={width} userLogin={userLogin}/>
            </div>
            <div className={styles.dancingGirlImg}>
              <img
                onDragStart={(e) => e.preventDefault()}
                src={`/assets/img/homeImg/dance-girl${width <= 1065 ? '-mobile' : ''}.png`}
                alt="dancing girl"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}