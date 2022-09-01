import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import { showMobileMenu } from '../../redux/ui/action'
import { MobileListContainer } from './MobileSideComponents/MobileListContainer'
import { UserInfoBlock } from './MobileSideComponents/UserInfoBlock'
import ErrorEmpty from '../ErrorBoundaryComponents/ErrorEmpty'
import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Image,
  Text,
  chakra,
  Box
} from '@chakra-ui/react'
import {HStack, VStack} from "@chakra-ui/layout";

const socilaLinks = [
  { key: 'facebook', href: '#facebook', img: '/assets/img/mobileSideMenu/facebook.svg' },
  { key: 'twitter', href: '#twitter', img: '/assets/img/mobileSideMenu/twitter.svg' },
  { key: 'youtube', href: '#youtube', img: '/assets/img/mobileSideMenu/youtube.svg' },
  { key: 'instagram', href: '#instagram', img: '/assets/img/mobileSideMenu/instagram.svg' },
]

export const MobileSideMenu = ({ t, userInform }) => {
  const dispatch = useDispatch()

  const isShowMobileMenu = useSelector((state) => state.ui.isShowMobileMenu)
  const isShowLogin = useSelector((isShowLogin) => isShowLogin.ui.isShowLogin)
  const isShowRegister = useSelector((isShowRegister) => isShowRegister.ui.isShowRegister)
  const currency = useSelector((state) => state.currency)

  const closeClickHandler = () => {
    if (isShowMobileMenu) {
      dispatch(showMobileMenu(false))
    } else {
      dispatch(showMobileMenu(true))
    }
  }
  const [isOpenLanguages, setIsOpenLanguages] = useState(false)

  function openLanguagesClickHandler () {
    if (isOpenLanguages) {
      setIsOpenLanguages(false)
    } else {
      setIsOpenLanguages(true)
    }
  }

  useEffect(() => {
    dispatch(showMobileMenu(false))
  }, [isShowLogin, isShowRegister])

  return (
    <Drawer placement="right" onClose={closeClickHandler} isOpen={isShowMobileMenu} size="full">
      <DrawerOverlay />
      <DrawerContent bg="grey.850" p={0}>
        <DrawerCloseButton color="white" _focus={{ boxShadow: 'none' }}/>
        <DrawerHeader borderBottomWidth={0} display="flex" justifyContent="center">
          <Image src={'/assets/img/mainLayoutImg/logo.webp'} width={102} height="auto" alt={'logo'}/>
        </DrawerHeader>
        <DrawerBody p={0}>
          <ErrorEmpty>
            <UserInfoBlock
              t={t}
              userInform={userInform}
              currency={currency}
            />
          </ErrorEmpty>
          <Box bg="black">
            <MobileListContainer
              isAuth={userInform.isAuthenticated}
              t={t}
            />
          </Box>

          <VStack w="100%" justifyContent="center" spacing={0} pb={2}>
            <HStack justifyContent="center" alignItems="center" h={55}>
              {socilaLinks.map((el) => (
                <chakra.a target="_blank" rel={'noreferrer'} key={`${el.key} footer`}
                   href={el.href}>
                  <Image height={35} width={35} src={el.img} alt={el.key}/>
                </chakra.a>
              ))}
            </HStack>
            <Text textAlign="center" fontSize="12px" color="grey.400" whiteSpace="nowrap">
              {"2020 SlotsIdol.com&#169; All Rights Reserved"}
            </Text>
          </VStack>
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  )
}
