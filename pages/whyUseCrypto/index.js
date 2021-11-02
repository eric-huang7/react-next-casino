import {useTranslation} from "next-i18next";
import {serverSideTranslations} from "next-i18next/serverSideTranslations";
import MainLayout from "../../components/MainLayout/MainLayout";
import styles from "../../styles/WhyUsecrypto/WhyUseCrypto.module.scss";
import {MainBlockWhyUseCrypto} from "../../components/WhyUseCrypto/MainBlockWhyUseCrypto";
import {WhyUseBitcoinBlock} from "../../components/WhyUseCrypto/WhyUseBitcoinBlock";
import {WhyUseBitcoinItemsContainer} from "../../components/WhyUseCrypto/WhyUseBitcoinItemsContainer/WhyUseBitcoinItemsContainer";
import {GetStartedWith} from "../../components/WhyUseCrypto/GetStartedWith";
import {GetStartedInstructionsContainer} from "../../components/WhyUseCrypto/GetStartedInstructionsContainer/GetStartedInstructionsContainer";
import {NewsBlock} from "../../components/HomePageComponents/NewsBlock/NewsBlock";


const WhyUseCrypto = (props) => {
  const { t } = useTranslation('common');
  // console.log(props);
  return (
    <>
      <MainLayout t={t}>
        <MainBlockWhyUseCrypto />
        <WhyUseBitcoinBlock t={t}/>
        <WhyUseBitcoinItemsContainer t={t}/>
        <GetStartedWith t={t} />
        <GetStartedInstructionsContainer t={t}/>
        <NewsBlock t={t} isBackShow={false}/>
      </MainLayout>
    </>
  )
}

export const getStaticProps = async ({ locale }) => {
  return ({
    props: {
      ...await serverSideTranslations(locale, ['navbarLinks', 'common']),
    },
  })
}

export default  WhyUseCrypto;