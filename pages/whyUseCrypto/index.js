import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import MainLayout from '../../components/MainLayout/MainLayout'
// import { MainBlockWhyUseCrypto } from '../../components/WhyUseCrypto/MainBlockWhyUseCrypto'
import InfoBlock from '../../components/WhyUseCrypto/InfoBlock'
import { WhyUseBitcoinItemsContainer } from '../../components/WhyUseCrypto/WhyUseBitcoinItemsContainer/WhyUseBitcoinItemsContainer'
import { GetStartedInstructionsContainer } from '../../components/WhyUseCrypto/GetStartedInstructionsContainer/GetStartedInstructionsContainer'
import { NewsBlock } from '../../components/HomePageComponents/NewsBlock/NewsBlock'
import { useEffect } from 'react'
import { getCurrency } from '../../redux/currency/action'
import { useDispatch } from 'react-redux'
import ErrorText from '../../components/ErrorBoundaryComponents/ErrorText'
import {MainBlock} from "../../components/MainLayout/MainBlock";

const WhyUseCrypto = () => {
  const { t } = useTranslation('common')

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getCurrency())
  }, [])
  return (
    <>
      <MainLayout>
        {/*<MainBlockWhyUseCrypto/>*/}
        <MainBlock title={t('footer.whyUseCrypto')}/>
        <InfoBlock
          title={t('whyUseCryptoPage.whyUseBitcoinBlock.heading')}
          text={t('whyUseCryptoPage.whyUseBitcoinBlock.infoText')}
        />
        <WhyUseBitcoinItemsContainer t={t}/>
        <InfoBlock
          title={t('whyUseCryptoPage.getStartedWithBlock.heading')}
          text={t('whyUseCryptoPage.getStartedWithBlock.infoText')}
        />
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
