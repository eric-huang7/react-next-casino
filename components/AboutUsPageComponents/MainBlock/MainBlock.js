import { useTranslation } from 'next-i18next'
import { VStack, Text, Box } from '@chakra-ui/react'
import {HStack} from "@chakra-ui/layout";

const Column = ({children, end}) => (
  <VStack
    w={{base: "40vw", lg: "auto"}}
    h={{base: "50%", lg: "100%"}}
    alignItems="center"
    justifyContent={end ? "flex-end" : "flex-start"}
    p={{base: "8px", lg: "50px 0"}}
  >
    {children}
  </VStack>
)
const Element = ({children}) => (
  <VStack alignItems="center" justifyContent="center" fontSize={{base: "4vw", lg: "1.4vw"}}
    letterSpacing="1px" color="white"
    fontWeight={600}
    fontFamily="Lithograph"
    textAlign="center"
    w={{base: "calc(40vw - 16px)", lg: "12vw"}}
    h={{base: "calc(40vw - 16px)", lg: "12vw"}}
    m="9px"
    p="30px"
    bg="url('/assets/img/aboutUs/about-us-banner-item.svg') no-repeat"
    backgroundSize="contain"
  >
    {children}
  </VStack>
)

export const MainBlock = () => {
  const { t } = useTranslation('common')

  return (
    <Box
      backgroundImage="url('/assets/img/homeImg/home_header_bckgr.jpg')"
      minH="424px"
      h={{base: "320px", lg: "auto"}}
      position="relative"
    >
      <Box w="100%" h="100%" position="absolute" left="0" top="0" zIndex={3}
        backgroundImage={{base: "none", lg: "url('/assets/img/aboutUs/about-us-banner.svg')"}}
        backgroundRepeat="no-repeat"
        backgroundPosition="7% bottom"
        backgroundSize="16vw"
        _before={{
          content: `""`,
          backgroundImage: {base: "none", lg: "url('/assets/img/contactUs/banner-left.webp')"},
          backgroundRepeat: "no-repeat",
          backgroundPosition: "left top",
          backgroundSize: "14vw",
          position: "absolute",
          left: 0,
          top: 0,
          width: "100%",
          height: "100%",
          zIndex: -1
        }}
         _after={{
          content: `""`,
          backgroundImage: {base: "none", lg: "url('/assets/img/contactUs/banner-right.webp')"},
          backgroundRepeat: "no-repeat",
          backgroundPosition: "right bottom",
          backgroundSize: "19vw",
          position: "absolute",
          right: 0,
          bottom: 0,
          width: "100%",
          height: "100%",
        }}
      >
        <HStack
          w="100%"
          h="100%"
          m="0 auto"
          alignItems="center"
          justifyContent="center"
          flexWrap="wrap"
        >
          <Column>
            <Element>
              <Text>{t("aboutUsPage.mainBlock.providers")}</Text>
            </Element>
          </Column>
          <Column end>
            <Element>
              <Text>{t("aboutUsPage.mainBlock.games")}</Text>
            </Element>
          </Column>
          <Column>
            <Element>
              <Text>{t("aboutUsPage.mainBlock.flexibleSystem.flexible")}</Text>
              <Text as="span" fontSize={{base: "2vw", lg: "0.8vw"}}>
                {t("aboutUsPage.mainBlock.flexibleSystem.cryptocurrency")}
              </Text>
              <Text>{t("aboutUsPage.mainBlock.flexibleSystem.system")}</Text>
            </Element>
          </Column>
          <Column end>
            <Element>
              <Text>{t("aboutUsPage.mainBlock.cashouts")}</Text>
            </Element>
          </Column>
        </HStack>
      </Box>
    </Box>
  )
}
