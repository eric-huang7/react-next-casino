import { useTranslation } from 'next-i18next'
import { Stack, Box } from '@chakra-ui/react'
import MainLayout from '../../components/MainLayout/MainLayout'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { MainBlockContainer } from '../../components/NotificationsPage/MainBlock/MainBlockContainer'
import { useDispatch, useSelector } from 'react-redux'
import { SideGamesContainer } from '../../components/NotificationsPage/SideBlock/SideGamesContainer'
import { useEffect } from 'react'
import { getGames } from '../../redux/games/action'
import { getCurrency } from '../../redux/currency/action'
import ErrorEmpty from '../../components/ErrorBoundaryComponents/ErrorEmpty'
import ErrorText from '../../components/ErrorBoundaryComponents/ErrorText'

const NotificationsPage = () => {
  const { t } = useTranslation('common')
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getGames())
    dispatch(getCurrency())
  }, [])

  const notifyData = useSelector((store) => store.notifications)
  const userInfo = useSelector((store) => store.authInfo)

  return (
    <MainLayout t={t}>
      <Box w="100%" p={{base: 0, lg: "0 30px 0 30px"}} >
        {userInfo.isAuthenticated &&
          <Stack
            direction={{base: 'column', lg: 'row'}}
            maxW="1300px"
            bg="rgba(0,0,0,0.3)"
            m="0 auto 150px auto"
            alignItems="flex-start"
            spacing={0}
          >
            <ErrorText>
              <MainBlockContainer notifyData={notifyData} userInfo={userInfo} t={t}/>
            </ErrorText>
            <ErrorEmpty>
              <SideGamesContainer t={t}/>
            </ErrorEmpty>
          </Stack>
        }
      </Box>
    </MainLayout>
  )
}

export const getStaticProps = async ({ locale }) => {
  return ({
    props: {
      ...await serverSideTranslations(locale, ['promotionsPage', 'common', 'newsData']),
    },
  })
}

export default NotificationsPage
