import {useTranslation} from "next-i18next";
import {serverSideTranslations} from "next-i18next/serverSideTranslations";
import MainLayout from '../components/MainLayout/MainLayout'
import {HomePageContainer} from "../components/HomePageComponents/HomePageContainer";



export default function Home(props) {
  const {t} = useTranslation('common');


  return (

    <>
      <MainLayout t={t}>
        <HomePageContainer
          t={t}
        />
      </MainLayout>

    </>
  )
}

export const getServerSideProps = async ({ locale }) => {

  return ({
    props: {
      ...await serverSideTranslations(locale, ['promotionsPage', 'common', 'newsData']),
    },
  })
}