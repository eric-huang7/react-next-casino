import MainLayout from "../../components/MainLayout/MainLayout";
import {useTranslation} from "next-i18next";
import {serverSideTranslations} from "next-i18next/serverSideTranslations";
import {GamePageMainContainer} from "../../components/GamePageComponents/GamePageMainContainer";


const PlayGamePage = (props) => {
  const {t} = useTranslation('common');

  console.log(props, '# page props');

  return (
    <MainLayout t={t}>
      <GamePageMainContainer
        t={t}
      />
    </MainLayout>
  )
}


export const getServerSideProps = async (context) => {

  return ({
    props: {
      ...await serverSideTranslations(context.locale, ['promotionsPage', 'common', 'newsData']),

      query: context.query,
    },
  })
}

export default PlayGamePage;