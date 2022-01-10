import styles from '../../../styles/ExitIntentComponent/BonusesContainer/BonusesContainer.module.scss';


export const BonusTittle = ({title, locale}) => {

  return (
    <h3 className={styles[locale]}>{title}</h3>
  )
}