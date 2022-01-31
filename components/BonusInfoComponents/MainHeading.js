import styles from "../../styles/BonusInfoComponent/BonusInfoComponent.module.scss";


export const MainHeading = ({text}) => {



  return (
    <h3 className={styles.mainHeading}>
      {"Deposit $100 and get $200"}
    </h3>
  )
}