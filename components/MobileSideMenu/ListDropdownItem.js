import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  HStack,
  Text,
  Image,
  VStack,
  chakra
} from '@chakra-ui/react'
import {Badge, Box} from "@chakra-ui/layout";
import {useDispatch} from "react-redux";
import {showMobileMenu} from "../../redux/ui/action";
import {useRouter} from "next/router";

const ListDropdownItem = ({t, heading, path, img, blockData, isAuth, badge, onClick}) => {
  const dispatch = useDispatch();
  const router = useRouter();

  function onClose() {
    dispatch(showMobileMenu(false));
  }

  function handleClick(path) {
    if (onClick) {
      onClick();
    } else if (path) {
      router.push(path);
    }

    onClose();
  }

  return (
    <AccordionItem>
      <AccordionButton px={2} onClick={() => !blockData ? handleClick(path) : null}>
        <HStack flex='1' justifyContent="flex-start" alignItems="center" h="50px" spacing={5}>
          <Box w="35px">
            <Image src={img} alt="" />
          </Box>
          <Text color="#bfbfbf" fontSize="20px" fontWeight="bold" fontFamily="Segoe UI Bold">{t(heading)}</Text>
        </HStack>
        {blockData && <AccordionIcon color="#bfbfbf" boxSize={8} />}
        {badge && <Badge variant='solid' colorScheme='green' borderRadius="5px" mr={2}>
          {badge}
        </Badge>}
      </AccordionButton>
      <AccordionPanel py={0} px={0} bg="#393939">
        <Accordion allowMultiple>
          {blockData?.filter(item => item.isAuth ? isAuth : true)?.map((el, index) => (
            <AccordionItem key={index} borderBottomWidth="0px !important">
              <AccordionButton
                onClick={() => el.onClick ? el.onClick(el) : el.path && handleClick(el.path)}
                pl={el.blockData || !el.icon ? "63px" : 2}
                minH="60px"
                flexDirection={el.type === 'block' ? "column" : "row"}
                alignItems={el.type === 'block' ? "flex-start" : "center"}
                cursor={el.type === 'block' ? "default" : "pointer"}
              >
                <HStack flex='1' justifyContent="flex-start" alignItems="center" h="50px" spacing={5}>
                  {el.icon && <Box w="35px">
                    <Image src={el.icon} w="100%" h="auto" alt="" />
                  </Box>}
                  <Text textAlign='left' color="#bfbfbf" fontFamily="Verdana" fontSize="18px" fontWeight="bold">
                    {t(el.name)}
                  </Text>
                </HStack>
                {el.info && <Box pt={3}>
                  <Text textAlign='left' color="#bfbfbf" fontFamily="Verdana" fontSize="16px">
                    {t(el.info)}
                  </Text>
                </Box>}
                {el.blockData && <VStack pt={3} alignItems="flex-start">
                  {el.blockData.map((item, index) => (
                    <chakra.a key={index} color="#fff" fontFamily="Arial" fontSize="16px" bg="#5d5d5d" textAlign="center"
                      borderRadius="15px" border="2px solid #fff" href={item.path} _hover={{bg: "#5d5d5d"}}
                      minW="185px" p="10px"
                    >
                      {t(item.name)}
                    </chakra.a>
                  ))}
                </VStack>}
              </AccordionButton>
            </AccordionItem>
          ))}
        </Accordion>
      </AccordionPanel>
    </AccordionItem>
  )
}

export default ListDropdownItem;
