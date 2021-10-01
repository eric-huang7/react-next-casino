import Link from 'next/link'
import {useTranslation} from "next-i18next";
import {serverSideTranslations} from "next-i18next/serverSideTranslations";
import LangSwitcher from "../components/LangSwitcher/LangSwitcher";
import MainLayout from '../components/MainLayout/MainLayout'
import {useRouter} from "next/router";
import {useDispatch, useSelector} from "react-redux";
import {setLang} from "../redux/actions/lang";
import {useEffect} from "react";
import Head from "next/head";


import styles from '../styles/Home.module.scss';
import {MainBlock} from "../components/HomePageComponents/MainBlock";
import {JackpotBlock} from "../components/HomePageComponents/JackpotBlock/JackpotBlock";
import {ChooseCategoryBlock} from "../components/HomePageComponents/ChooseCategoryBlock/ChooseCategoryBlock";
import {GamesSliderBlock} from "../components/HomePageComponents/GamesSliderBlock/GamesSliderBlock";
import {getGames} from "../redux/actions/games";
import {PromotionsBlock} from "../components/HomePageComponents/PromotionsBlock/PromotionsBlock";
import {getWinners} from "../redux/actions/latestWinners";
import {TotalJackpotsAmount} from "../components/HomePageComponents/TotalJackpotsAmount/TotalJackpotsAmount";
import {WhySlotsIdol} from "../components/HomePageComponents/WhySlotsIdol/WhySlotsIdol";
import {Footer} from "../components/MainLayout/Footer/Footer";
import {NewsBlock} from "../components/HomePageComponents/NewsBlock/NewsBlock";

export default function Home(props) {
  const {t} = useTranslation('common');
  const dispatch = useDispatch();
  const router = useRouter();
  const locale = router.locale;

  useEffect(() => {
    dispatch(setLang(locale));
    dispatch(getGames());
    dispatch(getWinners());
  }, []);

  const games = useSelector((games) => games.games);
  const winners = useSelector((winners) => winners.winners);


  return (

    <>
      <Head>
        <script type="text/javascript" src="/chatWidget/chatWidget.js"></script>
      </Head>
      <MainLayout t={t}>
        <MainBlock />
        <JackpotBlock />
        <ChooseCategoryBlock t={t}/>
        <GamesSliderBlock t={t} type={'NEW_GAMES'} games={games}/>
        <GamesSliderBlock t={t} type={'JACKPOT_GAMES'} games={games}/>
        <PromotionsBlock t={t}/>
        <GamesSliderBlock t={t} type={'TABLE_GAMES'} games={games}/>
        <TotalJackpotsAmount t={t} winners={winners}/>
        <NewsBlock t={t} isBackShow={true}/>
        <WhySlotsIdol t={t}/>
        <Footer t={t}/>
      </MainLayout>

      <LangSwitcher locale={locale}/>
    </>
  )
}

export const getServerSideProps = async ({ locale }) => {
  return ({
    props: {
      ...await serverSideTranslations(locale, ['common']),
    },
  })
}