import styles from '../../../../styles/MyAccount/DocumentsPage/DocumentsPage.module.scss';


export const FirstTextBlock = ({t}) => {

  return (
    <>
      <p className={styles.textListHeading}>
        {t("myAccount.documentsPage.firstTextBlock.textListHeading")}
      </p>
      <ul className={styles.textList}>
        <li>
          {t("myAccount.documentsPage.firstTextBlock.proofIdentity")}
        </li>
        <li>
          {t("myAccount.documentsPage.firstTextBlock.proofAddress")}
        </li>
        <li>
          {t("myAccount.documentsPage.firstTextBlock.proofDeposit")}
        </li>
      </ul>
    </>

  )
}