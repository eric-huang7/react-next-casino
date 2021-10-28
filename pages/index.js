import {useTranslation} from "next-i18next";
import {serverSideTranslations} from "next-i18next/serverSideTranslations";
import MainLayout from '../components/MainLayout/MainLayout'
import {useRouter} from "next/router";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import Head from "next/head";

import {MainBlock} from "../components/HomePageComponents/MainBlock";

import {ChooseCategoryBlock} from "../components/HomePageComponents/ChooseCategoryBlock/ChooseCategoryBlock";
import {GamesSliderBlock} from "../components/HomePageComponents/GamesSliderBlock/GamesSliderBlock";
import {getGames, getJackpotGames, getNewGames, getTableGames} from "../redux/actions/games";
import {PromotionsBlock} from "../components/HomePageComponents/PromotionsBlock/PromotionsBlock";
import {getLatestWinners, getWinners} from "../redux/actions/latestWinners";
import {TotalJackpotsAmount} from "../components/HomePageComponents/TotalJackpotsAmount/TotalJackpotsAmount";
import {WhySlotsIdol} from "../components/HomePageComponents/WhySlotsIdol/WhySlotsIdol";

import {NewsBlock} from "../components/HomePageComponents/NewsBlock/NewsBlock";
import {getCurrency} from "../redux/actions/currency";
import {getJackpots} from "../redux/actions/latestJackpots";



export default function Home(props) {
  const {t} = useTranslation('common');
  const dispatch = useDispatch();
  const router = useRouter();
  const locale = router.locale;
  // console.log(router, "home LOCALE")

  useEffect(() => {
    // dispatch(setLang(locale));
    dispatch(getGames());
    dispatch(getNewGames()); //new games
    dispatch(getJackpotGames()); // Jackpot Games
    dispatch(getTableGames()); // Table Games

    dispatch(getJackpots());
    dispatch(getWinners());
    dispatch(getLatestWinners());
    dispatch(getCurrency());

  }, []);


  const games = useSelector((games) => games.games);
  const winners = useSelector((winners) => winners.winners);
  const jackpots = useSelector((jackpots) => jackpots.jackpots);


  return (

    <>
      <Head>
        <script type="text/javascript" src="/chatWidget/chatWidget.js"></script>
      </Head>
      <MainLayout t={t}>
        <MainBlock />
        {/*<JackpotBlock />*/}
        {/*API for jackpots will add in future */}
        <ChooseCategoryBlock t={t}/>
        <GamesSliderBlock t={t} type={'NEW_GAMES'} games={games}/>
        <GamesSliderBlock t={t} type={'JACKPOT_GAMES'} games={games}/>
        <PromotionsBlock t={t}/>
        <GamesSliderBlock t={t} type={'TABLE_GAMES'} games={games}/>
        <TotalJackpotsAmount t={t} winners={winners} jackpots={jackpots}/>
        <NewsBlock t={t} isBackShow={true}/>
        <WhySlotsIdol t={t} isBackShow={true}/>

      </MainLayout>

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