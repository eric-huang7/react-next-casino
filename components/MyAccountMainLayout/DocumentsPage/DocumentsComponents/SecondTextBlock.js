import styles from '../../../../styles/MyAccount/DocumentsPage/DocumentsPage.module.scss';


export const SecondTextBlock = ({t}) => {

  return (
    <>
      <p className={styles.secondListTextBlock}>
        You will also have to submit documents to verify your Deposit and/or Withdrawal methods depending on the chosen
        method. Please check below information on the methods you have used to find out what you need to send:
      </p>
      <ul className={styles.textList}>
        <li>
          If using Neteller or Skrill: Screenshot of profile page on Neteller or Skrill showing profile with postal
          address visible.
        </li>
        <li>
          If using Credit Card: Front and Back of card used to deposit, with digits 8-12 and CVC/CVV covered. More
        </li>
        <li>
          If using Bank withdrawal: Bank statement dated within the last 90 days showing full name and address. More
        </li>
      </ul>
      <p className={`${styles.secondListTextBlock} ${styles.secondTextBlock}`}>
        Please note that we do our best to verify your documents as soon as possible. With that being said, documents
        are normally verified upon you requesting a withdrawal.
      </p>
    </>

  )
}