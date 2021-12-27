import styles from '../../../../styles/MyAccount/DocumentsPage/DocumentsPage.module.scss';


export const FirstTextBlock = ({t}) => {

  return (
    <>
      <p className={styles.textListHeading}>
        Documents necessary to speed up your withdrawal:
      </p>
      <ul className={styles.textList}>
        <li>
          Proof of Identity: Passport, Driving License or official Government issued ID card. More
        </li>
        <li>
          Proof of Address: Utility bill, phone bill or bank statement displaying your name and address in full. More
        </li>
        <li>
          Proof of Deposit: Screenshot or photo from online bank, bank statement, Skrill page, etc. showing the deposit. More
        </li>
      </ul>
    </>

  )
}