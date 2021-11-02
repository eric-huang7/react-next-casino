import styles from '../../../styles/WhyUsecrypto/GetStartedInstructionsContainer.module.scss';


export const InstructionsIconItem = ({t, data}) => {

  return (
    <div className={styles.iconItemWrapper}>
      <div className={styles.iconItemPicture}>
        <img src={data.icon} alt={data.itemClass}/>
      </div>
      <h2 className={styles.iconItemHeading}>
        {data.heading}
      </h2>
    </div>
  )
}