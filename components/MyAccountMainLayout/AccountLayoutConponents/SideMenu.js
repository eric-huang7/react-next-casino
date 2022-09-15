import { SideMenuItem } from './SideMenuItem'
import { useRouter } from 'next/router'
import { Box, Text, HStack, VStack } from "@chakra-ui/react"

const sideMenuListData = [
  {
    id: 1,
    name: 'myAccount.pageHeadings.balance',
    icon_active: '/assets/img/myAccount/balance_active.webp',
    icon_disabled: '/assets/img/myAccount/balance.webp',
    path: '/accounts/balance',
    pageType: 'balance'
  },
  {
    id: 2,
    name: 'myAccount.pageHeadings.history',
    icon_active: '/assets/img/myAccount/history_active.webp',
    icon_disabled: '/assets/img/myAccount/history.webp',
    path: '/accounts/history',
    pageType: 'history'
  },
  {
    id: 3,
    name: 'myAccount.pageHeadings.bonuses',
    icon_active: '/assets/img/myAccount/bonuses_active.webp',
    icon_disabled: '/assets/img/myAccount/bonuses.webp',
    path: '/accounts/bonuses',
    pageType: 'bonuses'
  },
  {
    id: 4,
    name: 'myAccount.pageHeadings.profileInfo',
    icon_active: '/assets/img/myAccount/profile_info_active.webp',
    icon_disabled: '/assets/img/myAccount/profile_info.webp',
    path: '/accounts/profile-info',
    pageType: 'profile-info'
  },
  {
    id: 5,
    name: 'myAccount.pageHeadings.gamblingLimits',
    icon_active: '/assets/img/myAccount/gambling_limits_active.webp',
    icon_disabled: '/assets/img/myAccount/gambling_limits.webp',
    path: '/accounts/gambling-limits',
    pageType: 'gambling-limits'
  },
  {
    id: 6,
    name: 'myAccount.pageHeadings.documents',
    icon_active: '/assets/img/myAccount/documents_active.webp',
    icon_disabled: '/assets/img/myAccount/documents.webp',
    path: '/accounts/documents',
    pageType: 'documents'
  },
]

export const SideMenu = ({ t, userInform }) => {
  const router = useRouter()

  return (
    <Box maxW={{base: "100%", lg: "336px"}} w="100%" bg="#eeeeee" p={0} spacing={0} m={0}>
      <HStack w="100%" h={{base: "60px", lg: "93px"}} alignItems="center" justifyContent="center" bg="primary.500"
        borderBottom="1px solid #ffffff" m={0}>
        <Text as="h2"  fontSize={{base: "20px", lg: "24px"}} fontWeight={400} letterSpacing="1px" color="white"
          fontFamily="Verdana" textAlign="center" textTransform="uppercase"
        >
          {t('myAccount.heading')}
        </Text>
      </HStack>
      <Box overflowY="auto">
        {sideMenuListData.map((el) => (
          <SideMenuItem userInform={userInform} key={`${el.id} account link item`} t={t} data={el} router={router}/>
        ))}
      </Box>
    </Box>
  )
}
