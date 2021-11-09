import {useTranslation} from "next-i18next";
import {serverSideTranslations} from "next-i18next/serverSideTranslations";
import MainLayout from "../../components/MainLayout/MainLayout";
import styles from '../../styles/TermsAndConditions/TermsAndConditions.module.scss';
import {MainBlock} from "../../components/TermsAndConditionsComponents/MainBlock";
import {PlayerBlock} from "../../components/TermsAndConditionsComponents/PlayerBlock";
import {WhySlotsIdol} from "../../components/HomePageComponents/WhySlotsIdol/WhySlotsIdol";
import {NewsBlock} from "../../components/HomePageComponents/NewsBlock/NewsBlock";
import {TextBlock} from "../../components/TermsAndConditionsComponents/TextBlock";
import {termsAndConditions} from "../../components/TermsAndConditionsComponents/textData";
import {useDispatch} from "react-redux";
import {useRouter} from "next/router";
import {setLang} from "../../redux/actions/lang";
import {useEffect} from "react";
import {allDataTermsAndConditions} from "../../components/TermsAndConditionsComponents/allDatatermsAndConditions";
import {getCurrency} from "../../redux/actions/currency";


const TermsConditions = (props) => {
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
      <MainLayout t={t}>
        <MainBlock />
        <PlayerBlock />
        <div className={styles.textWhyslotsBack}>
          <TextBlock t={t} textData={allDataTermsAndConditions.data} textHeading={'Terms and Conditions'}/>
          <WhySlotsIdol t={t} isBackShow={false}/>
        </div>
        <NewsBlock t={t} isBackShow={false}/>
      </MainLayout>
    </>
  )
}

export const getStaticProps = async ({ locale }) => {
  return ({
    props: {
      ...await serverSideTranslations(locale, ['promotionsPage', 'common']),
    },
  })
}

export default  TermsConditions;