import styles from "../../styles/BonusInfoComponent/BonusInfoComponent.module.scss";


export const MainHeading = ({text}) => {



  return (
    <h3 className={styles.mainHeading}>
      {text}
    </h3>
  )
}