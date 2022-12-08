import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import MainLayout from '../components/MainLayout/MainLayout'
import {getDynamicComponent} from "../helpers/theme";

const HomePageContainer = getDynamicComponent('HomePageComponents/HomePageContainer', 'HomePageContainer');

export default function Home () {
  const { t } = useTranslation('common')

  return (
    <MainLayout t={t}>
      <HomePageContainer t={t}/>
    </MainLayout>
  )
}

export const getServerSideProps = async ({ locale }) => {
  return ({
    props: {
      ...await serverSideTranslations(locale, ['promotionsPage', 'common', 'newsData']),
    },
  })
}
