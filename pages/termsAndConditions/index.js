import {serverSideTranslations} from "next-i18next/serverSideTranslations";
import {useTranslation} from "next-i18next";
import MainLayout from "../../components/MainLayout/MainLayout";
import {WhySlotsIdol} from "../../components/HomePageComponents/WhySlotsIdol/WhySlotsIdol";
import {NewsBlock} from "../../components/HomePageComponents/NewsBlock/NewsBlock";
import {useDispatch} from "react-redux";
import {useEffect} from "react";
import { Box } from "@chakra-ui/react";
import {getCurrency} from "../../redux/currency/action";
import ErrorText from '../../components/ErrorBoundaryComponents/ErrorText'
import ErrorEmpty from '../../components/ErrorBoundaryComponents/ErrorEmpty'
import {MainBlock} from "../../components/MainLayout/MainBlock";
import {TextBlock} from "../../components/typography/TextBlock";


const TermsConditions = () => {
  const dispatch = useDispatch();
  const { t } = useTranslation('termsAndConditions');

  useEffect(() => {
    dispatch(getCurrency());

  }, []);

  return (
    <>
      <MainLayout>
        <MainBlock title={t('heading')} />
        {/*<PlayerBlock />*/}

        <Box pb="30px">
          <ErrorEmpty>
            <TextBlock title={t('heading')} content={t('text')} />
          </ErrorEmpty>
        </Box>

        <ErrorText>
          <WhySlotsIdol isBackShow={false}/>
        </ErrorText>

        <ErrorText>
          <NewsBlock isBackShow={false}/>
        </ErrorText>
      </MainLayout>
    </>
  )
}

export const getStaticProps = async ({ locale }) => {
  return ({
    props: {
      ...await serverSideTranslations(locale, ['promotionsPage', 'common', 'termsAndConditions', 'newsData']),
    },
  })
}

export default  TermsConditions;
