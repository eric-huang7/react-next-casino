import {Text, VStack, Box} from "@chakra-ui/react";
import {GrClose} from "react-icons/gr";
import Link from "next/link";
import {useTranslation} from "next-i18next";
import {tel} from "/envs/contacts";

const TextLink = ({children, ...props}) => <Text
  as="div"
  whiteSpace="nowrap"
  lineHeight="24px"
  fontSize="18px"
  bg="transparent"
  color="primary.500"
  textAlign="left"
  transition=".3s linear"
  fontFamily="Verdana"
  textTransform="uppercase"
  cursor="pointer"
  {...props}
>
  {children}
</Text>

const MenuModal = ({open, onClose}) => {
  const {t} = useTranslation("common");
  const linksKey = [
    {key: "home", route: "/"},
    {key: "promotions", route: "/promotions"},
    {key: "contactUs", route: "/contactUs"},
    {key: "termsAndConditions", route: "/termsAndConditions"},
    {key: "aboutUs", route: "/aboutUs"},
  ];

  const contacts = [
    {key: "liveChat", route: "/#livechat", name: `LiveChat`},
    {key: "tel", route: "/#tel", name: `Tel:${tel}`},
  ];
  const rightMenu = [
    {key: "faqs", route: "/contactUs#faq", name: `FAQs`},
    {key: "contactUs", route: "/contactUs", name: `ContactUs`},
    {key: "privacyPolicy", route: "/privacy-policy", name: `privacyPolicy`},
    {
      key: "paymentsMethods",
      route: "/paymentsMethods",
      name: `paymentsMethods`,
    },
    {key: "whyUseCrypto", route: "/whyUseCrypto", name: `whyUseCrypto`},
    {key: "promotions", route: "/promotions", name: `promotions`},
    {
      key: "termsAndConditions",
      route: "/termsAndConditions",
      name: `TermsAndConditions`,
    },
  ];

  return (
    <VStack
      onClick={onClose}
      visibility={open ? "visible" : "hidden"}
      alignItems="center"
      w="100%"
      h="100vh"
      overflow="hidden"
      position="fixed"
      top={0}
      left={0}
      zIndex={200}
      flexWrap="wrap"
      color="white"
      spacing={0}
    >
      <Box w="50%" h="100%" transform={open ? "translate(0%, 0%)" : "translate(0px, -101%)"}>
        <VStack
          bg="black"
          transform={open ? "translate(0%, 0%)" : "translate(0%, 101%)"}
          overflow="hidden"
          h="100%"
          w="100%"
          justifyContent="center"
          alignItems="flex-end"
          spacing={0}
        >
          <VStack pl="5%" alignItems="flex-end" spacing={0}>
            {linksKey.map((link) => (
              <Box
                key={link.key}
                h="90px"
                w="100%"
                textAlign="right"
                _hover={{
                  bg: "primary.500",
                  color: "black",
                }}
              >
                <Link href={link.route}>
                  <TextLink
                    h="90px"
                    lineHeight="90px"
                    fontSize="47px"
                    fontWeight={700}
                    color="white"
                    textAlign="right"
                    pr="5%"
                    _hover={{
                      color: "black"
                    }}
                  >
                    {t(`header.navbarLinks.${link.key}`)}
                  </TextLink>
                </Link>
              </Box>)
            )}
          </VStack>
        </VStack>
      </Box>

      <Box w="50%" h="100%" transform={open ? "translate(0%, 0%)" : "translate(0px, 101%)"}
      >
        <VStack
          bg="black"
          transform={open ? "translate(0%, 0%)" : "translate(0%, -101%)"}
          overflow="hidden"
          h="100%"
          w="100%"
          justifyContent="center"
          alignItems="flex-start"
          spacing={0}
        >
          <VStack pl="5%" alignItems="flex-start" spacing={0}>
            {rightMenu.map((link) => (
              <Box key={link.key} p="5px" textAlign="left">
                <Link href={link.route}>
                  <TextLink
                    color="text.200"
                    _hover={{
                      color: "primary.500"
                    }}
                  >
                    {t(`footer.${link.name}`)}
                  </TextLink>
                </Link>
              </Box>)
            )}
          </VStack>

          <VStack pl="5%" alignItems="flex-start" pt="80px" spacing={0}>
            {contacts.map((link) => (
              <Box key={link.key} textAlign="left" p="5px">
                <Link href={link.route}>
                  <TextLink>
                    {t(`footer.${link.name}`)}
                  </TextLink>
                </Link>
              </Box>)
            )}
          </VStack>
        </VStack>
      </Box>

      <Box
        onClick={onClose}
        cursor="pointer"
        position="absolute"
        top={0}
        left={0}
        w="90px"
        h="90px"
        bg="primary.500"
        color="white"
        display="flex"
        justifyContent="center"
        alignItems="center"
        zIndex={210}
      >
        <GrClose size={30}/>
      </Box>
    </VStack>
  );
};

export default MenuModal;
