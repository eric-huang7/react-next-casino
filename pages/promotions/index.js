import {useTranslation} from "next-i18next";
import {serverSideTranslations} from "next-i18next/serverSideTranslations";
import MainLayout from "../../components/MainLayout/MainLayout";
import styles from "../../styles/Home.module.scss";
import {PromotionsContainer} from "../../components/PromotionsPageComponents/PromotionsContainer";
import {useRouter} from "next/router";
import {useEffect} from "react";
import {NewsBlock} from "../../components/HomePageComponents/NewsBlock/NewsBlock";


const Promotions = (props) => {
  const { t } = useTranslation('common');

  // console.log(props, 'promotions');
  return (
    <>
      <MainLayout t={t}>
        <PromotionsContainer />
        <NewsBlock t={t} isBackShow={false}/>
      </MainLayout>
    </>
  )
}

export const getServerSideProps = async (context) => {
  return ({
    props: {
      ...await serverSideTranslations(context.locale, ['promotionsPage', 'common']),
      locale: context.locale
    },
  })
}

export default  Promotions;