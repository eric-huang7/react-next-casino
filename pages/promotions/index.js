import {serverSideTranslations} from "next-i18next/serverSideTranslations";
import MainLayout from "../../components/MainLayout/MainLayout";
import {PromotionsContainer} from "../../components/PromotionsPageComponents/PromotionsContainer";
import {useEffect} from "react";
import {NewsBlock} from "../../components/HomePageComponents/NewsBlock/NewsBlock";
import {getCurrency} from "../../redux/currency/action";
import {useDispatch} from "react-redux";
import ErrorText from '../../components/ErrorBoundaryComponents/ErrorText'


const Promotions = () => {
  const dispatch = useDispatch();


  useEffect(() => {
    dispatch(getCurrency());
  }, []);


  return (
    <>
      <MainLayout>
        <PromotionsContainer />
        <ErrorText>
          <NewsBlock isBackShow={false}/>
        </ErrorText>
      </MainLayout>
    </>
  )
}

export const getServerSideProps = async (context) => {
  return ({
    props: {
      ...await serverSideTranslations(context.locale, ['promotionsPage', 'common', 'newsData']),
      locale: context.locale
    },
  })
}

export default  Promotions;
