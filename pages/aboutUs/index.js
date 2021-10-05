import {useTranslation} from "next-i18next";
import {serverSideTranslations} from "next-i18next/serverSideTranslations";
import MainLayout from "../../components/MainLayout/MainLayout";
import styles from "../../styles/AboutUs.module.scss";
import {NewsBlock} from "../../components/HomePageComponents/NewsBlock/NewsBlock";
import {WhySlotsIdol} from "../../components/HomePageComponents/WhySlotsIdol/WhySlotsIdol";
import {MainBlock} from "../../components/AboutUsPageComponents/MainBlock/MainBlock";
import {TextBlocks} from "../../components/AboutUsPageComponents/TextBlocks/TextBlocks";


const AboutUS = (props) => {
  const { t } = useTranslation('common')
  return (
    <>
      <MainLayout t={t}>
        <MainBlock t={t}/>
        <div className={styles.textWhyslotsBack}>
          <TextBlocks t={t}/>
          <WhySlotsIdol t={t} isBackShow={false}/>
        </div>
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

export default  AboutUS;