import styles from '../../../../styles/MyAccount/DocumentsPage/DocumentsPage.module.scss';
import {useState} from "react";
import { Text, chakra, List, ListItem, ListIcon } from "@chakra-ui/react";
import {Collapse} from "@chakra-ui/transition";
import CircleIcon from "../../../icons/CircleIcon";

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


const TextElement = ({children , ...props}) => <Text as="span" fontSize="15px" color="text.450" fontFamily="Verdana" {...props}>
  {children}
</Text>

const UlElement = ({children , ...props}) => <chakra.ul listStyleType="bullet" m={0} p="0 10px 0 5px"
  fontSize="15px" color="text.450" fontFamily="Verdana" {...props}>
  {children}
</chakra.ul>

const Bullet = () => <ListIcon as={CircleIcon} boxSize={3} color='primary.500' verticalAlign="baseline" />

export const FirstTextBlock = ({t}) => {
  const [closeFirstBlock, setCloseFirstBlock] = useState(false);
  const [closeSecondBlock, setCloseSecondBlock] = useState(false);
  const [closeThirdBlock, setCloseThirdBlock] = useState(false);

  return (
    <>
      <Text fontSize={15} ml="20px" color="text.450" fontFamily="Verdana" p="0 10px 0 0">
        {t("myAccount.documentsPage.firstTextBlock.textListHeading")}
      </Text>

      <List spacing={3} py={3}>
        <ListItem>
          <Bullet />
          {t("myAccount.documentsPage.firstTextBlock.proofIdentity")} <Text as="span" fontWeight={600} cursor="pointer" onClick={() => setCloseFirstBlock(!closeFirstBlock)}>{t("myAccount.documentsPage.more")}</Text>
          <Collapse in={closeFirstBlock} animateOpacity>
            <List py="5px" pl="20px">
              {list1.map((item, index) => (<ListItem key={index}>
                <Bullet />
                <TextElement>
                  {t(item)}
                </TextElement>
              </ListItem>))}
            </List>
          </Collapse>
        </ListItem>

        <ListItem>
          <Bullet />
          {t("myAccount.documentsPage.firstTextBlock.proofAddress")} <Text as="span" fontWeight={600} cursor="pointer" onClick={() => setCloseSecondBlock(!closeSecondBlock)}>{t("myAccount.documentsPage.more")}</Text>
          <Collapse in={closeSecondBlock} animateOpacity>
            <List py="5px" pl="20px">
              {list2.map((item, index) => (<ListItem key={index}>
                <Bullet />
                <TextElement>
                  {t(item)}
                </TextElement>
              </ListItem>))}
            </List>
          </Collapse>
        </ListItem>

        <ListItem>
          <Bullet />
          {t("myAccount.documentsPage.firstTextBlock.proofDeposit")} <Text as="span" fontWeight={600} cursor="pointer" onClick={() => setCloseThirdBlock(!closeThirdBlock)}>{t("myAccount.documentsPage.more")}</Text>
          <Collapse in={closeThirdBlock} animateOpacity>
            <List py="5px" pl="20px">
              {list3.map((item, index) => (<ListItem key={index}>
                <Bullet />
                <TextElement>
                  {t(item)}
                </TextElement>
              </ListItem>))}
            </List>
          </Collapse>
        </ListItem>
      </List>
    </>

  )
}
