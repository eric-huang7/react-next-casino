import { useDispatch, useSelector } from 'react-redux'
import { showDepositModal } from '/redux/popups/action'
import { useTranslation } from 'next-i18next'
import {Button, HStack, Text} from "@chakra-ui/react";
import {useRouter} from "next/router";
import {showMobileMenu} from "/redux/ui/action";

export const HeaderButtonsDeposit = ({ isUserLogined }) => {
  const { t } = useTranslation('common')
  const dispatch = useDispatch()
  const router = useRouter()
  const isShowDepositModal = useSelector((state) => state.popups.isShowDepositModal)

  const closeDepositModalHandler = () => {
    if (!isShowDepositModal) {
      dispatch(showDepositModal(true))
    }
    dispatch(showMobileMenu(false))
  }

  const cashoutHandler = () => {
    router.push('/accounts/cashout')
    dispatch(showMobileMenu(false))
  }

  return isUserLogined && (
    <HStack spacing={5} pr="16px" fontWeight="bold" color="white"
            fontFamily="Lithograph" textTransform="uppercase">
      <Button px="16px" h={{base: "29px", lg: "51px"}} borderRadius={0} bg="accent.500"
              _hover={{bg: "accent.500"}} onClick={closeDepositModalHandler}>
        <Text fontSize={{base: "9px", lg: "22px"}}>{t('header.navbarButtons.deposit')}</Text>
      </Button>
      <Button px="16px" h={{base: "29px", lg: "51px"}} borderRadius={0} bg="primary.500"
              _hover={{bg: "primary.500"}} onClick={cashoutHandler}>
        <Text fontSize={{base: "9px", lg: "22px"}}>{t('header.navbarButtons.cashOut')}</Text>
      </Button>
    </HStack>
  )
}
