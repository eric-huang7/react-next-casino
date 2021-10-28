import {useTranslation} from "next-i18next";
import {serverSideTranslations} from "next-i18next/serverSideTranslations";
import MainLayout from "../../components/MainLayout/MainLayout";
import styles from "../../styles/Home.module.scss";
import {MainBlock} from "../../components/TermsAndConditionsComponents/MainBlock";
import {PlayerBlock} from "../../components/TermsAndConditionsComponents/PlayerBlock";


const TermsConditions = (props) => {
  const { t } = useTranslation('common');
  return (
    <>
      <MainLayout t={t}>
        <MainBlock />
        <PlayerBlock />
      </MainLayout>
    </>
  )
}

export const getStaticProps = async ({ locale }) => {
  return ({
    props: {
      ...await serverSideTranslations(locale, ['common']),
    },
  })
}

export default  TermsConditions;