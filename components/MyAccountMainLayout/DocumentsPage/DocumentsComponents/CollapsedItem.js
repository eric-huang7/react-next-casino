import {List, ListIcon, ListItem, Text} from "@chakra-ui/react";
import {Collapse} from "@chakra-ui/transition";
import CircleIcon from "../../../icons/CircleIcon";
import {useState} from "react";

const Bullet = () => <ListIcon as={CircleIcon} boxSize={3} color='primary.500' verticalAlign="baseline" />

const TextElement = ({children , ...props}) => <Text as="span" fontSize="15px" color="text.450" fontFamily="Verdana" {...props}>
  {children}
</Text>

const CollapsedItem = ({t, title, list = [] }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <ListItem>
      <Bullet />
      {title} {list.length > 0 && <Text as="span" fontWeight={600} cursor="pointer" onClick={() => setIsOpen(!isOpen)}>{t("myAccount.documentsPage.more")}</Text>}
      <Collapse in={isOpen} animateOpacity>
        <List py="5px" pl="20px">
          {list.map((item, index) => (<ListItem key={index}>
            <Bullet />
            <TextElement>
              {t(item)}
            </TextElement>
          </ListItem>))}
        </List>
      </Collapse>
    </ListItem>
  )
}

export default CollapsedItem;
