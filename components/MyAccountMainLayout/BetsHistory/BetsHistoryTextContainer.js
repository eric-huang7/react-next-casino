import styles from '../../../styles/MyAccount/BetsHistory/BetsHistory.module.scss';


export const BetsHistoryTextContainer = ({t}) => {

  return (
    <div className={styles.textContainer}>
      <p>
        {t("myAccount.history.bets.textBlock")}
      </p>
    </div>
  )
}