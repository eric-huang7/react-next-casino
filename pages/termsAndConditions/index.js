import {serverSideTranslations} from "next-i18next/serverSideTranslations";
import MainLayout from "../../components/MainLayout/MainLayout";
import styles from '../../styles/TermsAndConditions/TermsAndConditions.module.scss';
import {MainBlock} from "../../components/TermsAndConditionsComponents/MainBlock";
import {WhySlotsIdol} from "../../components/HomePageComponents/WhySlotsIdol/WhySlotsIdol";
import {NewsBlock} from "../../components/HomePageComponents/NewsBlock/NewsBlock";
import {TextBlock} from "../../components/TermsAndConditionsComponents/TextBlock";
import {useDispatch} from "react-redux";
import {useEffect} from "react";
import {getCurrency} from "../../redux/actions/currency";
import ErrorText from '../../components/ErrorBoundaryComponents/ErrorText'
import ErrorEmpty from '../../components/ErrorBoundaryComponents/ErrorEmpty'


const TermsConditions = () => {
  const dispatch = useDispatch();


  useEffect(() => {
    dispatch(getCurrency());

  }, []);

  return (
    <>
      <MainLayout>
        <MainBlock />
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