import Link from 'next/link'
import { Box, Image, chakra } from '@chakra-ui/react'
import { useDispatch, useSelector } from 'react-redux'
import {useState} from 'react'
import { showManageSubscriptions, showPlaySafe } from '/redux/popups/action'
import { useTranslation } from 'next-i18next'
import {HStack, Text, VStack, Stack} from "@chakra-ui/layout";
import {tel} from "/envs/contacts";

const Label = ({children, ...props}) => <Box
  whiteSpace="nowrap"
  fontSize="14px"
  color="grey.800"
  p="0 15px 0"
  fontFamily="Verdana"
  cursor="pointer"
  {...props}
>{children}</Box>

export const Footer = ({ userAuth }) => {
  const { t } = useTranslation('common');
  const dispatch = useDispatch()

  const linkKeyFirs = [
    { key: 'liveChat', route: '/#livechat', name: `LiveChat` },
    { key: 'tel', route: '/#tel', name: `Tel:${tel}` },
    { key: 'aboutUs', route: '/aboutUs', name: `aboutUs` },
    { key: 'faqs', route: '/contactUs#faq', name: `FAQs` },
    { key: 'contactUs', route: '/contactUs', name: `ContactUs` },
    { key: 'privacyPolicy', route: '/privacy-policy', name: `privacyPolicy` },
    { key: 'paymentsMethods', route: '/paymentsMethods', name: `paymentsMethods` },
  ]
  const linkKeySecond = [
    { key: 'whyUseCrypto', route: '/whyUseCrypto', name: `whyUseCrypto` },
    { key: 'promotions', route: '/promotions', name: `promotions` },
    { key: 'termsAndConditions', route: '/termsAndConditions', name: `TermsAndConditions` },
  ]
  const coinsImg = [
    { key: 'bitcoincash', src: '/assets/img/footer/bitcoincash.webp' },
    { key: 'binance', src: '/assets/img/footer/binance.webp' },
    { key: 'cardano', src: '/assets/img/footer/cardano.webp' },
    { key: 'chainlink', src: '/assets/img/footer/chainlink.webp' },
    { key: 'ethereum', src: '/assets/img/footer/ethereum.webp' },
    { key: 'litecoin', src: '/assets/img/footer/litecoin.webp' },
    { key: 'monero', src: '/assets/img/footer/monero.webp' },
    { key: 'polkadot', src: '/assets/img/footer/polkadot.webp' },
    { key: 'stellar', src: '/assets/img/footer/stellar.webp' },
  ]

  const socilaLinks = [
    { key: 'facebook', href: '/#facebook', img: '/assets/img/footer/facebook.svg' },
    { key: 'twitter', href: '/#twitter', img: '/assets/img/footer/twitter.svg' },
    { key: 'youtube', href: '/#youtube', img: '/assets/img/footer/youtube.svg' },
    { key: 'instagram', href: '/#instagram', img: '/assets/img/footer/instagram.svg' },
  ]

  const languages = useSelector(({ lang }) => lang.languages)
  const copyLanguages = [...languages]
  const activeLang = useSelector(({ lang }) => lang.activeLang)
  const [activeChooseLangBlock, setActiveChooseLangBlock] = useState(false)

  const switchActiveLangBlock = () => {
    if (activeChooseLangBlock) {
      setActiveChooseLangBlock(false)
    } else {
      setActiveChooseLangBlock(true)
    }
  }

  const liveChatClick = (e) => {
    e.preventDefault()
    const liveChatButton = document.getElementById('lhc_status_widget_v2').contentWindow.document.body.childNodes[0]
    liveChatButton.click()
  }

  let language = copyLanguages.find(item => item.lang === activeLang)?.language?.toUpperCase()

  return (
    <Box
      backgroundColor="grey.200"
      mt="0"
      pt="22px"
      pb="0"
    >
      <HStack w="100%" pt="34px" pb="25px" alignItems="center" bg="rgba(198, 198, 198, 0.7)">
        <Stack direction={{base: 'column', lg: 'row'}} alignItems="center" justifyContent="center" w="100%" p="0 50px">
          {coinsImg.map((el, index) => (
            <Box key={index}>
              <Image src={el.src} alt=""/>
            </Box>
          ))}
        </Stack>
      </HStack>
      <VStack p="45px 0 75px" alignItems="center" spacing={0}>
        <HStack flexWrap="wrap" justifyContent="center" pb={{base: 0, lg: "35px"}} spacing={0}>
          {linkKeyFirs.map((el) => (
            <Label key={el.key}>
              {el.key === 'liveChat'
                ? <chakra.a onClick={liveChatClick}  color="grey.800">
                  {t(`footer.${el.name}`)}
                </chakra.a>
                : <Link href={el.route}><chakra.a color="grey.800">{t(`footer.${el.name}`)}</chakra.a></Link>}
            </Label>
          ))}
        </HStack>
        <HStack flexWrap="wrap" justifyContent="center" spacing={0} pb={{base: "30px", lg: 0}}>
          <Label>
            <Link href={linkKeySecond[0].route}><chakra.a color="grey.800">
              {t(`footer.${linkKeySecond[0].name}`)}
            </chakra.a></Link>
          </Label>
          <Label>
            <Link href={linkKeySecond[1].route}><chakra.a color="grey.800">
              {t(`footer.${linkKeySecond[1].name}`)}
            </chakra.a></Link>
          </Label>
          <Label>
            <Link href={linkKeySecond[2].route}><chakra.a color="grey.800">
              {t(`footer.${linkKeySecond[2].name}`)}
            </chakra.a></Link>
          </Label>
          <Label>
            <span onClick={() => dispatch(showPlaySafe(true))}>{t(`footer.playSafe`)}</span>
          </Label>
          {userAuth && <Label>
            <span onClick={() => dispatch(showManageSubscriptions(true))}>{t(`footer.manageSubscriptions`)}</span>
          </Label>}
        </HStack>
      </VStack>
      <Box
        w="100%"
        h="39px"
        bg="linear-gradient(0deg, #7E7E7E, #7E7E7E), linear-gradient(0deg, #7E7E7E, #7E7E7E), #7E7E7E"
      />
      <Box
        mt="5px"
        w="100%"
        h="10px"
        bg="linear-gradient(0deg, #7E7E7E, #7E7E7E), linear-gradient(0deg, #7E7E7E, #7E7E7E), #7E7E7E"
      />
      <Stack
        direction={{base: 'column-reverse', lg: 'row'}}
        flexWrap="wrap"
        p={{base: "14px", lg: "14px 30px"}}
        alignItems="center"
        justifyContent={{base: "flex-start", lg: "space-between"}}
        spacing={{base: 0, lg: 2}}
        bg="linear-gradient(0deg, #900015, #900015), linear-gradient(0deg, #7E7E7E, #7E7E7E), #7E7E7E;"
      >
        <HStack
          alignItems="center"
          w={{base: '100%', lg: 'auto'}}
          justifyContent={{base: 'center', lg: 'flex-start'}}
          pt={{base: "30px", lg: 0}}
        >
          {socilaLinks.map((el) => (
            <a target="_blank" rel={'noreferrer'} key={el.key} href={el.href}>
              <Image src={el.img} width="43px" height="43px" alt=""/>
            </a>
          ))}
        </HStack>
        <Stack
          direction={{base: 'column', lg: 'row'}}
          w={{base: '100%', lg: 'auto'}}
          alignItems="center"
          color="white"
          fontSize={{base: '13px', lg: '16px'}}
        >
          <Stack direction={{base: 'column', lg: 'row'}} alignItems="center" spacing={4}>
            <Text ml={{base: '5px', lg: '40px'}}>{new Date().getFullYear()} SlotsIdol.com&#169; All Rights Reserved</Text>
            <Box m="0 5px 0 20px">
              <iframe
                src="https://licensing.gaming-curacao.com/validator/?lh=39be67de0ffa98b11f0dd2b6aec51152&template=seal"
                width="150" height="50" style={{ border: 'none' }}/>
            </Box>
          </Stack>
        </Stack>
      </Stack>
    </Box>
  )
}
