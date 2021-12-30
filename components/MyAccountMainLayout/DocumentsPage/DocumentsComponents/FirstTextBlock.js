import styles from '../../../../styles/MyAccount/DocumentsPage/DocumentsPage.module.scss';
import {useState} from "react";


export const FirstTextBlock = ({t}) => {
  const [closeFirstBlock, setCloseFirstBlock] = useState(false);
  const [closeSecondBlock, setCloseSecondBlock] = useState(false);
  const [closeThirdBlock, setCloseThirdBlock] = useState(false);

  return (
    <>
      <p className={styles.textListHeading}>
        {t("myAccount.documentsPage.firstTextBlock.textListHeading")}
      </p>
      <ul className={styles.textList}>
        <li className={closeFirstBlock ? styles.upIndicator : ""}>
          {t("myAccount.documentsPage.firstTextBlock.proofIdentity")} <span onClick={() => setCloseFirstBlock(!closeFirstBlock)}>{t("myAccount.documentsPage.more")}</span>
          <ul className={`${styles.textList} ${styles.innerTextList} ${closeFirstBlock ? "" : styles.hideTextList}`}>
            <li>
              {t("myAccount.documentsPage.firstTextBlock.proofIdentityInnerTextBlock.text1")}
            </li>
            <li>
              {t("myAccount.documentsPage.firstTextBlock.proofIdentityInnerTextBlock.text2")}
            </li>
            <li>
              {t("myAccount.documentsPage.firstTextBlock.proofIdentityInnerTextBlock.text3")}
            </li>
            <li>
              {t("myAccount.documentsPage.firstTextBlock.proofIdentityInnerTextBlock.text4")}
            </li>
            <li>
              {t("myAccount.documentsPage.firstTextBlock.proofIdentityInnerTextBlock.text5")}
            </li>
            <li>
              {t("myAccount.documentsPage.firstTextBlock.proofIdentityInnerTextBlock.text6")}
            </li>
            <li>
              {t("myAccount.documentsPage.firstTextBlock.proofIdentityInnerTextBlock.text7")}
            </li>
          </ul>
        </li>
        <li className={closeSecondBlock ? styles.upIndicator : ""}>
          {t("myAccount.documentsPage.firstTextBlock.proofAddress")} <span onClick={() => setCloseSecondBlock(!closeSecondBlock)}>{t("myAccount.documentsPage.more")}</span>
          <ul className={`${styles.textList} ${styles.innerTextList} ${closeSecondBlock ? "" : styles.hideTextList}`}>
            <li>
              {t("myAccount.documentsPage.firstTextBlock.proofAddressInnerTextBlock.text1")}
            </li>
            <li>
              {t("myAccount.documentsPage.firstTextBlock.proofAddressInnerTextBlock.text2")}
            </li>
            <li>
              {t("myAccount.documentsPage.firstTextBlock.proofAddressInnerTextBlock.text3")}
            </li>
            <li>
              {t("myAccount.documentsPage.firstTextBlock.proofAddressInnerTextBlock.text4")}
            </li>
            <li>
              {t("myAccount.documentsPage.firstTextBlock.proofAddressInnerTextBlock.text5")}
            </li>
            <li>
              {t("myAccount.documentsPage.firstTextBlock.proofAddressInnerTextBlock.text6")}
            </li>
            <li>
              {t("myAccount.documentsPage.firstTextBlock.proofAddressInnerTextBlock.text7")}
            </li>
          </ul>
        </li>
        <li className={closeThirdBlock ? styles.upIndicator : ""}>
          {t("myAccount.documentsPage.firstTextBlock.proofDeposit")} <span onClick={() => setCloseThirdBlock(!closeThirdBlock)}>{t("myAccount.documentsPage.more")}</span>
          <ul className={`${styles.textList} ${styles.innerTextList} ${closeThirdBlock ? "" : styles.hideTextList}`}>
            <li>
              {t("myAccount.documentsPage.firstTextBlock.proofDepositInnerTextBlock.text1")}
            </li>
            <li>
              {t("myAccount.documentsPage.firstTextBlock.proofDepositInnerTextBlock.text2")}
            </li>
          </ul>
        </li>
      </ul>
    </>

  )
}