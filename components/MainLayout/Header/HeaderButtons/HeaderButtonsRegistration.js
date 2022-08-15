import {useDispatch, useSelector} from 'react-redux'
import {Button, HStack, Text} from "@chakra-ui/react"
import {showRegister} from '../../../../redux/ui/action'
import {showLogin} from '../../../../redux/ui/action'
import {useTranslation} from 'next-i18next'

export const HeaderButtonsRegistration = ({display = "flex"}) => {
  const {t} = useTranslation('common')
  const dispatch = useDispatch()
  const isShowRegister = useSelector((isShowRegister) => isShowRegister.ui.isShowRegister)
  const isShowLogin = useSelector((isShowLogin) => isShowLogin.ui.isShowLogin)

  function registerButtonHandler() {
    if (isShowRegister) {
      dispatch(showRegister(false))
    } else {
      dispatch(showRegister(true))
      dispatch(showLogin(false))
    }
  }

  function loginButtonHandler() {
    if (isShowLogin) {
      dispatch(showLogin(false))

    } else {
      dispatch(showLogin(true))
      dispatch(showRegister(false))
    }
  }

  return (
    <HStack spacing={5} pr="16px" fontWeight="bold" color="white" display={display}
            fontFamily="Lithograph" textTransform="uppercase">
      <Button px="16px" h={{base: "29px", lg: "51px"}} borderRadius={0} bg="accent.500"
              _hover={{bg: "accent.500"}} onClick={loginButtonHandler}>
        <Text fontSize={{base: "9px", lg: "22px"}}>{t('header.navbarButtons.login')}</Text>
      </Button>
      <Button px="16px" h={{base: "29px", lg: "51px"}} borderRadius={0} bg="primary.500"
              _hover={{bg: "primary.500"}} onClick={registerButtonHandler}>
        <Text fontSize={{base: "9px", lg: "22px"}}>{t('header.navbarButtons.signIn')}</Text>
      </Button>
    </HStack>
  )
}
