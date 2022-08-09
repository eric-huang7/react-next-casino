import Link from 'next/link'
import { Box, Image } from '@chakra-ui/react'
import { ChooseLangDropdown } from './ChooseLangDropdown'
import { useDispatch, useSelector } from 'react-redux'
import {useState} from 'react'
import { showManageSubscriptions, showPlaySafe } from '../../../redux/popups/action'
import { useTranslation } from 'next-i18next'
import useWindowDimensions from '../../../hooks/useWindowDimensions'
import {HStack, Text, VStack, Stack} from "@chakra-ui/layout";
import {ChevronDownIcon, ChevronUpIcon} from "@chakra-ui/icons"

const Label = ({children, ...props}) => <Box
  whiteSpace="nowrap"
  fontSize="14px"
  color="white"
  p="0 15px 15px"
  fontFamily="Verdana"
  {...props}
>{children}</Box>

export const Footer = ({ userAuth }) => {
  const { t } = useTranslation('common');
  const { width } = useWindowDimensions()
  const dispatch = useDispatch()

  const linkKeyFirs = [
    { key: 'liveChat', route: '/#livechat', name: `LiveChat` },
    { key: 'tel', route: '/#tel', name: `Tel:7-55-7-99-8-487` },
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
      backgroundColor="accent.950"
      mt="100px"
      pb="30px"
    >
      <Box
        w="100%"
        h="50px"
        position="relative"
      >
        <Box
          position="absolute"
          left="calc(50% - 60px)"
          top="-50px"
          w="120px"
          h="120px"
          borderRadius="60px"
          border="10px solid"
          borderColor="accent.950"
          backgroundColor="accent.950"
          backgroundImage="url('/assets/img/mainLayoutImg/logo-round.webp')"
          backgroundRepeat="no-repeat"
          backgroundPosition="center center"
        />
      </Box>
      <HStack w="100%" pt="40px" alignItems="center">
        <Stack direction={{base: 'column', lg: 'row'}} alignItems="center" justifyContent="center" w="100%" p="0 50px">
          {coinsImg.map((el, index) => (
            <Box key={index}>
              <Image src={el.src} alt=""/>
            </Box>
          ))}
        </Stack>
      </HStack>
      <VStack p="5% 0 4%" alignItems="center" spacing={0}>
        <HStack flexWrap="wrap" justifyContent="center" pb={{base: 0, lg: "35px"}} spacing={0}>
          {linkKeyFirs.map((el) => (
            <Label key={el.key}>
              {el.key === 'liveChat'
                ? <a style={{ cursor: 'pointer' }} onClick={liveChatClick}>{t(`footer.${el.name}`)}</a>
                : <Link href={el.route}><a>{t(`footer.${el.name}`)}</a></Link>}
            </Label>
          ))}
        </HStack>
        <HStack flexWrap="wrap" justifyContent="center" spacing={0} pb={{base: "30px", lg: 0}}>
          <Label>
            <Link href={linkKeySecond[0].route}><a>{t(`footer.${linkKeySecond[0].name}`)}</a></Link>
          </Label>
          <Label>
            <Link href={linkKeySecond[1].route}><a>{t(`footer.${linkKeySecond[1].name}`)}</a></Link>
          </Label>
          <Label>
            <Link href={linkKeySecond[2].route}><a>{t(`footer.${linkKeySecond[2].name}`)}</a></Link>
          </Label>
          <Label>
            <span onClick={() => dispatch(showPlaySafe(true))}>{t(`footer.playSafe`)}</span>
          </Label>
          {userAuth && <Label>
            <span onClick={() => dispatch(showManageSubscriptions(true))}>{t(`footer.manageSubscriptions`)}</span>
          </Label>}
        </HStack>
      </VStack>
      <Stack
        direction={{base: 'column-reverse', lg: 'row'}}
        flexWrap="wrap"
        p={{base: 0, lg: "0 30px"}}
        alignItems="center"
        justifyContent={{base: "flex-start", lg: "space-between"}}
        spacing={{base: 0, lg: 2}}
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
          <HStack
            spacing={4}
            w={{base: '100%', lg: 'auto'}}
            alignItems="center"
            pb={{base: '10px', lg: 0}}
            justifyContent={{base: 'center', lg: 'flex-start'}}
          >
            <Text>{t(`footer.SelectLanguage`)}</Text>
            <HStack
              w={{base: "96px", lg: "189px"}}
              h={{base: "30px", lg: "42px"}}
              display="flex"
              alignItems="center"
              justifyContent="space-between"
              border="1px solid"
              borderColor="white"
              p="0 23px"
              ml="25px"
              position="relative"
              onClick={switchActiveLangBlock}
              spacing={0}
            >
              <Text as="span">{language}</Text>
              <Box display={{base: 'none', lg: 'block'}}>
                {activeChooseLangBlock
                  ? <ChevronUpIcon w={8} h={8} color="white"/>
                  : <ChevronDownIcon w={8} h={8} color="white"/>
                }
              </Box>
              {activeChooseLangBlock && <ChooseLangDropdown t={t} isVis={activeChooseLangBlock}/>}
            </HStack>
          </HStack>
          <Stack direction={{base: 'column', lg: 'row'}} alignItems="center" spacing={4}>
            <Text ml={{base: '5px', lg: '40px'}}>2020 SlotsIdol.com&#169; All Rights Reserved</Text>
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
