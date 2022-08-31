import {useState} from "react";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  HStack,
  Text,
  Image
} from '@chakra-ui/react'

export const FaqDropdownItem = ({t, heading, img, innerInfo}) => {
  const [activeMenu, setActiveMenu] = useState(false);

  function openMenu() {
    if (activeMenu) {
      setActiveMenu(false);
    } else {
      setActiveMenu(true);
    }
  }

  return (
    <AccordionItem>
      <AccordionButton>
        <HStack flex='1' justifyContent="flex-start" alignItems="center" h="50px">
          <Image src={img} alt="" />
          <Text textTransform="uppercase" fontSize="20px" letterSpacing="1px">{t(heading)}</Text>
        </HStack>
        <AccordionIcon />
      </AccordionButton>
      <AccordionPanel pb={4}>
        <Accordion allowMultiple>
        {innerInfo.map((el, index) => (
          <AccordionItem key={index}>
            <AccordionButton>
              <Text flex='1' textAlign='left' color="#A93618" fontFamily="Verdana" fontSize="18px">
                {t(el.heading)}
              </Text>
              <AccordionIcon />
            </AccordionButton>
            <AccordionPanel pb={4}>
              {t(el.text)}
            </AccordionPanel>
          </AccordionItem>
        ))}
        </Accordion>
      </AccordionPanel>
    </AccordionItem>
  )
}
