import {List, Text} from "@chakra-ui/react";
import CollapsedItem from "./CollapsedItem";

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

export const SecondTextBlock = ({t}) => (
  <>
    <Text fontSize={15} ml="20px" color="text.450" fontFamily="Verdana" p="0 10px 0 0">
      {t("myAccount.documentsPage.secondTextBlock.textHeading")}
    </Text>

    <List spacing={3} py={3}>
      <CollapsedItem t={t} title={t("myAccount.documentsPage.secondTextBlock.netellerOrSkrill")}/>
      <CollapsedItem t={t} list={list1} title={t("myAccount.documentsPage.secondTextBlock.creditCard")}/>
      <CollapsedItem t={t} list={list2} title={t("myAccount.documentsPage.secondTextBlock.bankWithdrawal")}/>
    </List>

    <Text fontSize={15} ml="20px" color="text.450" fontFamily="Verdana" p="0 10px 0 0">
      {t("myAccount.documentsPage.secondTextBlock.pleaseNote")}
    </Text>
  </>
)
