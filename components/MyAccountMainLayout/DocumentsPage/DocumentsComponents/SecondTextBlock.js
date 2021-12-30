import styles from '../../../../styles/MyAccount/DocumentsPage/DocumentsPage.module.scss';


export const SecondTextBlock = ({t}) => {

  return (
    <>
      <p className={styles.secondListTextBlock}>
        {t("myAccount.documentsPage.secondTextBlock.textHeading")}
      </p>
      <ul className={styles.textList}>
        <li>
          {t("myAccount.documentsPage.secondTextBlock.netellerOrSkrill")}
        </li>
        <li>
          {t("myAccount.documentsPage.secondTextBlock.creditCard")}
        </li>
        <li>
          {t("myAccount.documentsPage.secondTextBlock.bankWithdrawal")}
        </li>
      </ul>
      <p className={`${styles.secondListTextBlock} ${styles.secondTextBlock}`}>
        {t("myAccount.documentsPage.secondTextBlock.pleaseNote")}
      </p>
    </>

  )
}