import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import MainLayout from '../../components/MainLayout/MainLayout'
import { MainBlockWhyUseCrypto } from '../../components/WhyUseCrypto/MainBlockWhyUseCrypto'
import { WhyUseBitcoinBlock } from '../../components/WhyUseCrypto/WhyUseBitcoinBlock'
import { WhyUseBitcoinItemsContainer } from '../../components/WhyUseCrypto/WhyUseBitcoinItemsContainer/WhyUseBitcoinItemsContainer'
import { GetStartedWith } from '../../components/WhyUseCrypto/GetStartedWith'
import { GetStartedInstructionsContainer } from '../../components/WhyUseCrypto/GetStartedInstructionsContainer/GetStartedInstructionsContainer'
import { NewsBlock } from '../../components/HomePageComponents/NewsBlock/NewsBlock'
import { useEffect } from 'react'
import { getCurrency } from '../../redux/actions/currency'
import { useDispatch } from 'react-redux'
import ErrorText from '../../components/ErrorBoundaryComponents/ErrorText'

const WhyUseCrypto = () => {
  const { t } = useTranslation('common')

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getCurrency())
  }, [])
  return (
    <>
      <MainLayout>
        <MainBlockWhyUseCrypto/>
        <WhyUseBitcoinBlock t={t}/>
        <WhyUseBitcoinItemsContainer t={t}/>
        <GetStartedWith t={t}/>
        <GetStartedInstructionsContainer t={t}/>
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
      ...await serverSideTranslations(locale, ['navbarLinks', 'promotionsPage', 'common', 'newsData']),
    },
  })
}

export default WhyUseCrypto