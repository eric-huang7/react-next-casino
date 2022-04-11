import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import MainLayout from '../../components/MainLayout/MainLayout'
import styles from '../../styles/PaymentsMethodsPage/PaymentsMethodsPage.module.scss'
import { NewsBlock } from '../../components/HomePageComponents/NewsBlock/NewsBlock'
import { PaymentsInformationBlock } from '../../components/PaymentsMethodsComponents/PaymentsInformationBlock'
import { useDispatch } from 'react-redux'
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
        <div className={styles.paymentsMainWrapper}>
          <PaymentsInformationBlock t={t}/>
        </div>
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
