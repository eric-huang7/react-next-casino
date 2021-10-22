import {useTranslation} from "next-i18next";
import {serverSideTranslations} from "next-i18next/serverSideTranslations";
import MainLayout from "../../components/MainLayout/MainLayout";
import styles from "../../styles/Home.module.scss";


const TermsConditions = (props) => {
  const { t } = useTranslation('common');
  return (
    <>
      <MainLayout t={t}>
        <h1 className={styles.headerHomePage}>{t(`pageNames.terms&conditions`)}</h1>
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

export default  TermsConditions;