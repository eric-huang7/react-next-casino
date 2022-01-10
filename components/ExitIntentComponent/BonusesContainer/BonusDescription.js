import styles from "../../../styles/ExitIntentComponent/BonusesContainer/BonusesContainer.module.scss";


export const BonusDescription = ({description, locale}) => {


  return (
    <p className={`${styles.bonusDescription} ${styles[locale]}`}>{description}</p>
  )

}