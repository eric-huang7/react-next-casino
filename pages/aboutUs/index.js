
import {useTranslation} from "next-i18next";
import {serverSideTranslations} from "next-i18next/serverSideTranslations";
import MainLayout from "../../components/MainLayout/MainLayout";
import styles from "../../styles/AboutUs.module.scss";
import {NewsBlock} from "../../components/HomePageComponents/NewsBlock/NewsBlock";
import {WhySlotsIdol} from "../../components/HomePageComponents/WhySlotsIdol/WhySlotsIdol";
import {MainBlock} from "../../components/AboutUsPageComponents/MainBlock/MainBlock";
import {TextBlocks} from "../../components/AboutUsPageComponents/TextBlocks/TextBlocks";
import LangSwitcher from "../../components/LangSwitcher/LangSwitcher";
import {useRouter} from "next/router";
import {setLang} from "../../redux/actions/lang";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {getCurrency} from "../../redux/actions/currency";


const AboutUS = (props) => {
  const { t } = useTranslation('common');
  const dispatch = useDispatch();
  const router = useRouter();

  // const activeLang = useSelector(({lang}) => lang.activeLang);
  //
  // useEffect(() => {
  //   dispatch(setLang(router.locale));
  //   console.log( router, "$$$$$$$$$$$$$$$$$$")
  // },[])

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
        <MainBlock t={t}/>
        <div className={styles.textWhyslotsBack}>
          <TextBlocks t={t}/>
          <WhySlotsIdol t={t} isBackShow={false}/>
        </div>
        <NewsBlock t={t} isBackShow={false}/>
      </MainLayout>
    </>
  )
}

export const getServerSideProps = async ({ locale }) => {
  return ({
    props: {
      ...await serverSideTranslations(locale, ['promotionsPage', 'common']),
    },
  })
}

export default  AboutUS;