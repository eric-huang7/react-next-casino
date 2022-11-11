import { Text, List } from "@chakra-ui/react";
import CollapsedItem from "./CollapsedItem";

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

export const FirstTextBlock = ({t}) => (
  <>
    <Text fontSize={15} ml="20px" color="text.450" fontFamily="Verdana" p="0 10px 0 0">
      {t("myAccount.documentsPage.firstTextBlock.textListHeading")}
    </Text>

    <List spacing={3} py={3}>
      <CollapsedItem t={t} list={list1} title={t("myAccount.documentsPage.firstTextBlock.proofIdentity")}/>
      <CollapsedItem t={t} list={list2} title={t("myAccount.documentsPage.firstTextBlock.proofAddress")}/>
      <CollapsedItem t={t} list={list3} title={t("myAccount.documentsPage.firstTextBlock.proofDeposit")}/>
    </List>
  </>
)
