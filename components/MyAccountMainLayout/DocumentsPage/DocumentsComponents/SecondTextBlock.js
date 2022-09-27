import styles from '../../../../styles/MyAccount/DocumentsPage/DocumentsPage.module.scss';
import {useState} from "react";
import {Text} from "@chakra-ui/react";

const list1 = [
  "myAccount.documentsPage.secondTextBlock.creditCardInnerTextBlock.text1",
  "myAccount.documentsPage.secondTextBlock.creditCardInnerTextBlock.text2",
  "myAccount.documentsPage.secondTextBlock.creditCardInnerTextBlock.text3",
  "myAccount.documentsPage.secondTextBlock.creditCardInnerTextBlock.text4",
  "myAccount.documentsPage.secondTextBlock.creditCardInnerTextBlock.text5",
];
const list2 = [
  "myAccount.documentsPage.secondTextBlock.bankWithdrawalInnerTextBlock.text1",
  "myAccount.documentsPage.secondTextBlock.bankWithdrawalInnerTextBlock.text2",
  "myAccount.documentsPage.secondTextBlock.bankWithdrawalInnerTextBlock.text3",
  "myAccount.documentsPage.secondTextBlock.bankWithdrawalInnerTextBlock.text4",
  "myAccount.documentsPage.secondTextBlock.bankWithdrawalInnerTextBlock.text5",
];
export const SecondTextBlock = ({t}) => {
  const [closeFirstBlock, setCloseFirstBlock] = useState(false);
  const [closeSecondBlock, setCloseSecondBlock] = useState(false);


  return (
    <>
      <p className={styles.secondListTextBlock}>
        {t("myAccount.documentsPage.secondTextBlock.textHeading")}
      </p>
      <ul className={styles.textList}>
        <li>
          {t("myAccount.documentsPage.secondTextBlock.netellerOrSkrill")}
        </li>
        <li className={closeFirstBlock ? styles.upIndicator : ""}>
          {t("myAccount.documentsPage.secondTextBlock.creditCard")} <span onClick={() => setCloseFirstBlock(!closeFirstBlock)}>{t("myAccount.documentsPage.more")}</span>
          <ul className={`${styles.textList} ${styles.innerTextList} ${closeFirstBlock ? "" : styles.hideTextList}`}>
            {list1.map((item, index) => (<Text key={index} as="li">
              {t(item)}
            </Text>))}
          </ul>
        </li>
        <li className={closeSecondBlock ? styles.upIndicator : ""}>
          {t("myAccount.documentsPage.secondTextBlock.bankWithdrawal")} <span onClick={() => setCloseSecondBlock(!closeSecondBlock)}>{t("myAccount.documentsPage.more")}</span>
          <ul className={`${styles.textList} ${styles.innerTextList} ${closeSecondBlock ? "" : styles.hideTextList}`}>
            {list2.map((item, index) => (<Text key={index} as="li">
              {t(item)}
            </Text>))}
          </ul>
        </li>
      </ul>
      <p className={`${styles.secondListTextBlock} ${styles.secondTextBlock}`}>
        {t("myAccount.documentsPage.secondTextBlock.pleaseNote")}
      </p>
    </>

  )
}
