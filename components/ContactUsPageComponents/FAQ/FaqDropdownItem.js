import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  HStack,
  Text,
  Image, Box
} from '@chakra-ui/react'

export const FaqDropdownItem = ({t, index, heading, img, innerInfo}) => (
  <AccordionItem borderBottomWidth="0px !important" borderTopWidth={index > 0 && "1px"} borderColor="#a93618">
    <AccordionButton px={0}>
      <HStack flex='1' justifyContent="flex-start" alignItems="center" h="50px">
        <Image src={img} alt="" />
        <Text textTransform="uppercase" fontSize={{base: "18px", lg: "20px"}} letterSpacing="1px">{t(heading)}</Text>
      </HStack>
      <AccordionIcon boxSize={8} color="#bbb" />
    </AccordionButton>
    <AccordionPanel pb={4} px={0}>
      <Accordion allowMultiple>
      {innerInfo.map((el, index) => (
        <AccordionItem key={index}>
          <AccordionButton px={0}>
            <Text flex='1' textAlign='left' color="#A93618" fontFamily="Verdana" fontSize="18px">
              {t(el.heading)}
            </Text>
            <AccordionIcon boxSize={8} color="#bbb" />
          </AccordionButton>
          <AccordionPanel pb={4} px={0} color="#7e7e7e">
            {t(el.text)}
          </AccordionPanel>
        </AccordionItem>
      ))}
      </Accordion>
    </AccordionPanel>
  </AccordionItem>
)
