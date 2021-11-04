import {useTranslation} from "next-i18next";
import {serverSideTranslations} from "next-i18next/serverSideTranslations";
import MainLayout from "../../components/MainLayout/MainLayout";
import styles from "../../styles/Home.module.scss";
import {PromotionsContainer} from "../../components/PromotionsPageComponents/PromotionsContainer";
import {useRouter} from "next/router";
import {useEffect} from "react";


const Promotions = (props) => {
  const { t } = useTranslation('common');
  console.log(props, 'promotions');
  return (
    <>
      <MainLayout t={t}>
        <PromotionsContainer t={t}/>
      </MainLayout>
    </>
  )
}

export const getStaticProps = async ({ locale }) => {
  return ({
    props: {
      ...await serverSideTranslations(locale, ['navbarLinks', 'common']),
      locale: locale
    },
  })
}

export default  Promotions;