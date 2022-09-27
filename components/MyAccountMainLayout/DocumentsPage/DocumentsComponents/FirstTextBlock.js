import styles from '../../../../styles/MyAccount/DocumentsPage/DocumentsPage.module.scss';
import {useState} from "react";
import { Text, chakra } from "@chakra-ui/react";

const list1 = [
  "myAccount.documentsPage.firstTextBlock.proofIdentityInnerTextBlock.text1",
  "myAccount.documentsPage.firstTextBlock.proofIdentityInnerTextBlock.text2",
  "myAccount.documentsPage.firstTextBlock.proofIdentityInnerTextBlock.text3",
  "myAccount.documentsPage.firstTextBlock.proofIdentityInnerTextBlock.text4",
  "myAccount.documentsPage.firstTextBlock.proofIdentityInnerTextBlock.text5",
  "myAccount.documentsPage.firstTextBlock.proofIdentityInnerTextBlock.text6",
  "myAccount.documentsPage.firstTextBlock.proofIdentityInnerTextBlock.text7"
];
const list2 = [
  "myAccount.documentsPage.firstTextBlock.proofAddressInnerTextBlock.text1",
  "myAccount.documentsPage.firstTextBlock.proofAddressInnerTextBlock.text2",
  "myAccount.documentsPage.firstTextBlock.proofAddressInnerTextBlock.text3",
  "myAccount.documentsPage.firstTextBlock.proofAddressInnerTextBlock.text4",
  "myAccount.documentsPage.firstTextBlock.proofAddressInnerTextBlock.text5",
  "myAccount.documentsPage.firstTextBlock.proofAddressInnerTextBlock.text6",
  "myAccount.documentsPage.firstTextBlock.proofAddressInnerTextBlock.text7",
];
const list3 = [
  "myAccount.documentsPage.firstTextBlock.proofDepositInnerTextBlock.text1",
  "myAccount.documentsPage.firstTextBlock.proofDepositInnerTextBlock.text2"
];

export const FirstTextBlock = ({t}) => {
  const [closeFirstBlock, setCloseFirstBlock] = useState(false);
  const [closeSecondBlock, setCloseSecondBlock] = useState(false);
  const [closeThirdBlock, setCloseThirdBlock] = useState(false);

  return (
    <>
      <Text fontSize={15} ml="15px" color="text.450" fontFamily="Verdana" p="0 10px 0 0">
        {t("myAccount.documentsPage.firstTextBlock.textListHeading")}
      </Text>
      <chakra.ul className={styles.textList}>
        <chakra.li className={closeFirstBlock ? styles.upIndicator : ""}>
          {t("myAccount.documentsPage.firstTextBlock.proofIdentity")} <span onClick={() => setCloseFirstBlock(!closeFirstBlock)}>{t("myAccount.documentsPage.more")}</span>
          <chakra.ul className={`${styles.textList} ${styles.innerTextList} ${closeFirstBlock ? "" : styles.hideTextList}`}>
            {list1.map((item, index) => (<Text key={index} as="li">
              {t(item)}
            </Text>))}
          </chakra.ul>
        </chakra.li>
        <chakra.li className={closeSecondBlock ? styles.upIndicator : ""}>
          {t("myAccount.documentsPage.firstTextBlock.proofAddress")} <span onClick={() => setCloseSecondBlock(!closeSecondBlock)}>{t("myAccount.documentsPage.more")}</span>
          <chakra.ul className={`${styles.textList} ${styles.innerTextList} ${closeSecondBlock ? "" : styles.hideTextList}`}>
            {list2.map((item, index) => (<Text key={index} as="li">
              {t(item)}
            </Text>))}
          </chakra.ul>
        </chakra.li>
        <chakra.li className={closeThirdBlock ? styles.upIndicator : ""}>
          {t("myAccount.documentsPage.firstTextBlock.proofDeposit")} <span onClick={() => setCloseThirdBlock(!closeThirdBlock)}>{t("myAccount.documentsPage.more")}</span>
          <chakra.ul className={`${styles.textList} ${styles.innerTextList} ${closeThirdBlock ? "" : styles.hideTextList}`}>
            {list3.map((item, index) => (<Text key={index} as="li">
              {t(item)}
            </Text>))}
          </chakra.ul>
        </chakra.li>
      </chakra.ul>
    </>

  )
}
