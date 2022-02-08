import {useTranslation} from "next-i18next";
import {serverSideTranslations} from "next-i18next/serverSideTranslations";
import MainLayout from "../../components/MainLayout/MainLayout";
import styles from '../../styles/TermsAndConditions/TermsAndConditions.module.scss';
import {WhySlotsIdol} from "../../components/HomePageComponents/WhySlotsIdol/WhySlotsIdol";
import {NewsBlock} from "../../components/HomePageComponents/NewsBlock/NewsBlock";
import {useDispatch} from "react-redux";
import {useRouter} from "next/router";
import {useEffect} from "react";
import {allDataTermsAndConditions} from "../../components/TermsAndConditionsComponents/allDatatermsAndConditions";
import {getCurrency} from "../../redux/actions/currency";
import {MainBlock} from "../../components/PrivacyPolicyPageComponents/MainBlock";
import {TextBlock} from "../../components/PrivacyPolicyPageComponents/TextBlock";


const PrivacyPolicy = (props) => {
  const { t } = useTranslation('common');
  const dispatch = useDispatch();
  const router = useRouter();
  const locale = router.locale;

  useEffect(() => {
    // dispatch(setLang(locale));
    // dispatch(getGames());
    // dispatch(getNewGames()); //new games
    // dispatch(getJackpotGames()); // Jackpot Games
    // dispatch(getTableGames()); // Table Games

    // dispatch(getJackpots());
    // dispatch(getWinners());
    // dispatch(getLatestWinners());
    dispatch(getCurrency());
    // dispatch(getActiveBonuses());

  }, []);

  return (
    <>
      {/*<MainLayout t={t}>*/}
        <MainBlock />
        <div className={styles.textWhyslotsBack}>
          <TextBlock
            textData={allDataTermsAndConditions.data}
            textHeading={'heading'}
          />
          <WhySlotsIdol t={t} isBackShow={false}/>
        </div>
        <NewsBlock t={t} isBackShow={false}/>
      {/*</MainLayout>*/}
    </>
  )
}

export const getStaticProps = async ({ locale }) => {
  return ({
    props: {
      ...await serverSideTranslations(locale, ['promotionsPage', 'common', 'privacyPolicy', 'newsData']),
    },
  })
}

export default  PrivacyPolicy;