import styles from '../../../styles/WhyUsecrypto/GetStartedInstructionsContainer.module.scss'

export const InstructionsIconItem = ({ t, data }) => {

  return (
    <div className={`${styles.iconItemWrapper} ${styles[data.itemClass]}`}>
      <div className={styles.iconItemPicture}>
        <img src={data.icon} alt={data.itemClass}/>
      </div>
      <h2 className={styles.iconItemHeading}>
        {t(data.heading)}
      </h2>

    </div>
  )
}