import styles from "../../styles/FooterArea/FooterArea.module.scss";
import Image from "next/image";


export const ImgContainer = ({activeSlots, setActiveSlots, activeTime, setActiveTime, slotRef, timeref}) => {
  const slotsClickHandler = () => {
    setActiveSlots(!activeSlots)
    setActiveTime(false);
  }
  const timeClickHandler = () => {
    setActiveTime(!activeTime)
    setActiveSlots(false)
  }


  return (
    <div className={styles.imgContainer}>
      <div ref={slotRef} onClick={() => slotsClickHandler()} className={styles.slotsImg}>
        <Image layout='fixed' src={`/assets/img/footerArea/slot_${activeSlots ? 'active' : 'dis'}.png`} width={34} height={23} alt={'icon of popular games'}/>
      </div>
      <div ref={timeref} onClick={() => timeClickHandler()} className={styles.timeImg}>
        <Image layout='fixed' src={`/assets/img/footerArea/time_${activeTime ? 'active' : 'dis'}.png`} width={20} height={19} alt={'icon of last games'}/>
      </div>
    </div>
  )
}