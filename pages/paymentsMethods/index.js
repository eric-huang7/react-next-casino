import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import MainLayout from '../../components/MainLayout/MainLayout'
import { NewsBlock } from '../../components/HomePageComponents/NewsBlock/NewsBlock'
import { PaymentsInformationBlock } from '../../components/PaymentsMethodsComponents/PaymentsInformationBlock'
import { useDispatch } from 'react-redux'
import { Box } from "@chakra-ui/react"
import { useEffect } from 'react'
import { getCurrency } from '../../redux/currency/action'
import ErrorText from '../../components/ErrorBoundaryComponents/ErrorText'

const PaymentsMethods = () => {
  const { t } = useTranslation('common')

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getCurrency())
  }, [])

  return (
    <>
      <MainLayout t={t}>
        <Box  maxW="1360px" p={{base: 0, lg: "0 30px"}} m="0 auto">
          <PaymentsInformationBlock t={t}/>
        </Box>
        <ErrorText>
          <NewsBlock t={t} isBackShow={false}/>
        </ErrorText>
      </MainLayout>
    </>
  )
}

export const getStaticProps = async ({ locale }) => {
  return ({
    props: {
      ...await serverSideTranslations(locale, ['promotionsPage', 'common', 'newsData']),
    },
  })
}

export default PaymentsMethods
