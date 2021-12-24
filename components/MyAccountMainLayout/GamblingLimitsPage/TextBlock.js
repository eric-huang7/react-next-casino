import styles from '../../../styles/MyAccount/GamblingLimitsPage/GamblingLimitsPage.module.scss';



export const TextBlock = ({t}) => {


  return (
    <p className={styles.textBlock}>
      {t("myAccount.selfExclusionPage.text")}
    </p>
  )
}