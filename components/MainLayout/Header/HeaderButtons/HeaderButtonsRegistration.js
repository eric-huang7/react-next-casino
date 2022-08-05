import {useDispatch, useSelector} from 'react-redux'
import {Button, HStack} from "@chakra-ui/react"
import {showRegister} from '../../../../redux/ui/action'
import {showLogin} from '../../../../redux/ui/action'
import {useTranslation} from 'next-i18next'

export const HeaderButtonsRegistration = () => {
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
    <HStack spacing={5} pr="16px" fontSize="22px" fontWeight="bold" color="white" fontFamily="Lithograph" textTransform="uppercase">
      <Button px="16px" h="51px" borderRadius={0} bg="accent.500" _hover={{bg: "accent.500"}} onClick={loginButtonHandler}>
        {t('header.navbarButtons.login')}
      </Button>
      <Button px="16px" h="51px" borderRadius={0} bg="primary.500" _hover={{bg: "primary.500"}} onClick={registerButtonHandler}>
        {t('header.navbarButtons.signIn')}
      </Button>
    </HStack>
  )
}
