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
        <div className={styles.slotsDancerWrapper}>
          <div className={styles.slotsDancer}>
            <div className={styles.slotMachineIng}>
              <img
                onDragStart={(e) => e.preventDefault()}
                src={`/assets/img/homeImg/slot_machine${width <= 1065 ? '-mobile' : ''}.png`}
                alt="slot machine"
              />
            </div>
            {width > 1065 && <div className={styles.dancingGirlImg}>
              <img
                onDragStart={(e) => e.preventDefault()}
                src={`/assets/img/homeImg/home-banner-title.png`}
                alt="dancing girl"
              />
            </div>}
          </div>
        </div>
      </section>
    </div>
  )
}
