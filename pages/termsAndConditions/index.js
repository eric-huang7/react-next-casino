import {serverSideTranslations} from "next-i18next/serverSideTranslations";
import {useTranslation} from "next-i18next";
import MainLayout from "../../components/MainLayout/MainLayout";
import styles from '../../styles/TermsAndConditions/TermsAndConditions.module.scss';
import {WhySlotsIdol} from "../../components/HomePageComponents/WhySlotsIdol/WhySlotsIdol";
import {NewsBlock} from "../../components/HomePageComponents/NewsBlock/NewsBlock";
import {TextBlock} from "../../components/TermsAndConditionsComponents/TextBlock";
import {useDispatch} from "react-redux";
import {useEffect} from "react";
import {getCurrency} from "../../redux/currency/action";
import ErrorText from '../../components/ErrorBoundaryComponents/ErrorText'
import ErrorEmpty from '../../components/ErrorBoundaryComponents/ErrorEmpty'
import {MainBlock} from "../../components/MainLayout/MainBlock";


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
        <div className={styles.textWhyslotsBack}>
          <ErrorEmpty>
            <TextBlock
              textHeading={'heading'}
            />
          </ErrorEmpty>
          <ErrorText>
          <WhySlotsIdol isBackShow={false}/>
          </ErrorText>
        </div>
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
