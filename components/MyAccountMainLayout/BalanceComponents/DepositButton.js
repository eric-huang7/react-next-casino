import styles from '../../../styles/MyAccount/BalancePage/BalancePage.module.scss';



export const DepositButton = ({t}) => {


  return (
    <button className={styles.depositButton}>{t("myAccount.balance.buttons.deposit")}</button>
  )
}