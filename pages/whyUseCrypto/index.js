import {useTranslation} from "next-i18next";
import {serverSideTranslations} from "next-i18next/serverSideTranslations";
import MainLayout from "../../components/MainLayout/MainLayout";
import styles from "../../styles/WhyUsecrypto/WhyUseCrypto.module.scss";
import {MainBlockWhyUseCrypto} from "../../components/WhyUseCrypto/MainBlockWhyUseCrypto";


const WhyUseCrypto = (props) => {
  const { t } = useTranslation('common');
  // console.log(props);
  return (
    <>
      <MainLayout t={t}>
        <MainBlockWhyUseCrypto />
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