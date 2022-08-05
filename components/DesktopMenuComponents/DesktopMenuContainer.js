import {LinkItem} from "./LinkItem";
import { Box, Image, Button } from "@chakra-ui/react";
import {useDispatch, useSelector} from "react-redux";
import {showDepositModal, showPlaySafe, showRedeemModal} from "../../redux/popups/action";
import Link from "next/link";
import {useTranslation} from "next-i18next";
import {BalanceBlock} from "../MainLayout/Header/UserBlock/BalanceBlock";
import {VStack, HStack} from "@chakra-ui/layout";
import {logout} from "../../redux/user/action";
import {useRouter} from "next/router";

const HeaderButton = ({label, image, onClick}) => <Button
  onClick={onClick}
  bg="accent.850"
  _hover={{bg: "accent.850"}}
  borderRadius={0}
  color="white"
  w="100%"
  fontSize="10px"
  fontFamily="Lithograph"
  textAlign="left"
  justifyContent="flex-start"
>
  <Image
    width="auto"
    height="18px"
    verticalAlign="middle"
    marginRight="8px"
    src={image}
    alt=""
  />
  {label}
</Button>

export const DesktopMenuContainer = ({ onClose, userInfo, userCurrency }) => {
  const { t } = useTranslation('common')
  const dispatch = useDispatch()
  const router = useRouter();
  const isShowDepositModal = useSelector((state) => state.popups.isShowDepositModal)
  const isShowRedeemModal = useSelector((state) => state.popups.isShowDepositModal)

  const redeem = () => {
    if (!isShowRedeemModal) {
      dispatch(showRedeemModal(true))
    }
  }

  const linksData = [
    {id: 1, name: 'header.userDesktopMenu.bank', path: '/accounts/balance', icon: '/assets/icons/desktopMenu/bank-icon.webp'},
    {id: 2, name: 'header.userDesktopMenu.messages', path: '/notifications', icon: '/assets/icons/desktopMenu/email-icon.webp'},
    {id: 3, name: 'header.userDesktopMenu.myAccount', path: '/accounts/profile-info', icon: '/assets/icons/desktopMenu/account-icon.webp'},
    {id: 4, name: 'header.userDesktopMenu.bonuses', path: '/accounts/bonuses', icon: '/assets/icons/desktopMenu/bonus-icon.webp'},
    {id: 5, name: 'header.userDesktopMenu.myActivity', path: '/accounts/history/history/bets', icon: '/assets/icons/desktopMenu/activity-icon.webp'},
    {id: 6, name: 'header.userDesktopMenu.takeBreak', path: '/accounts/gambling-limits', icon: '/assets/icons/desktopMenu/take-break-icon.webp'},
    {id: 7, name: 'header.userDesktopMenu.history', path: '/accounts/history', icon: '/assets/icons/desktopMenu/history-icon.webp'},
    {id: 8, name: 'header.userDesktopMenu.2fa', path: '/accounts/two_factor', icon: '/assets/icons/desktopMenu/2fa-icon.webp'},
    {id: 8, name: 'header.userDesktopMenu.redeem', onClick: redeem, icon: '/assets/icons/desktopMenu/redeem-icon.webp'},
  ]

  const closeDepositModalHandler = () => {
    if (!isShowDepositModal) {
      dispatch(showDepositModal(true))
    }
    onClose();
  }

  const logoutButtonHandler = () => {
    router.push('/');
    dispatch(logout());
  }

  return (
    <Box
      boxShadow="-6px 11px 21px 7px rgba(0,0,0,0.5)"
      position="absolute"
      right="10px"
      top="47px"
      w="max-content"
    >
      <HStack justifyContent="space-between" alignItems="center" minW="100%" w="max-content" p="10px 15px" bg="accent.820">
        <Box minWidth="55%" w="max-content">
          <BalanceBlock userInfo={userInfo} userCurrency={userCurrency} />
        </Box>

        <VStack alignItems="flex-start">
          <HeaderButton
            image="/assets/icons/desktopMenu/deposit-icon.webp"
            label={t('header.navbarButtons.deposit')}
            onClick={closeDepositModalHandler}
          />

          <Link href={'/accounts/cashout'}>
            <a>
              <HeaderButton
                image="/assets/icons/desktopMenu/withdraw-icon.webp"
                label={t('header.navbarButtons.cashOut')}
                onClick={onClose}
              />
            </a>
          </Link>
        </VStack>
      </HStack>

      <Box backgroundImage="url('/assets/img/homeImg/popup_menu_bg.webp')" p="20px">
        <Box display="grid" gridTemplateColumns="1fr 1fr 1fr" columnGap="20px" rowGap="20px" w="100%" p={0} m={0}>
          {linksData.map((link) => (
            <LinkItem
              name={link.name}
              icon={link.icon}
              path={link.path}
              onClick={link.onClick}
              key={`${link.id} ${link.name} link item`}
            />
          ))}
        </Box>
      </Box>

      <Box bg="accent.500">
        <VStack
          fontSize="12px"
          lineHeight="16px"
          color="#361712"
          fontWeight={600}
          fontFamily="Lithograph"
          spacing={0}
          w="100%"
          alignItems="flex-start"
      >
          <Box w="100%" p="10px">
            <Link href="/contactUs#faq"><a>{t(`header.userDesktopMenu.help`)}</a></Link>
          </Box>
          <Box w="100%" p="10px" borderBottom="1px solid" borderColor="accent.870">
            <Box cursor="pointer" onClick={() => dispatch(showPlaySafe(true))}>
              {t(`header.userDesktopMenu.responsibleGaming`)}
            </Box>
          </Box>
          <Box w="100%" p="10px">
            <Box onClick={logoutButtonHandler} cursor="pointer">
              {t('header.userDesktopMenu.signOut')}
            </Box>
          </Box>
        </VStack>
      </Box>
    </Box>
  )
}
