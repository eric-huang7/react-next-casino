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

import {MainBlock} from "../components/HomePageComponents/MainBlock";
import {JackpotBlock} from "../components/HomePageComponents/JackpotBlock/JackpotBlock";
import {ChooseCategoryBlock} from "../components/HomePageComponents/ChooseCategoryBlock/ChooseCategoryBlock";
import {GamesSliderBlock} from "../components/HomePageComponents/GamesSliderBlock/GamesSliderBlock";
import {getGames} from "../redux/actions/games";
import {PromotionsBlock} from "../components/HomePageComponents/PromotionsBlock/PromotionsBlock";
import {getWinners} from "../redux/actions/latestWinners";
import {TotalJackpotsAmount} from "../components/HomePageComponents/TotalJackpotsAmount/TotalJackpotsAmount";
import {WhySlotsIdol} from "../components/HomePageComponents/WhySlotsIdol/WhySlotsIdol";

import {NewsBlock} from "../components/HomePageComponents/NewsBlock/NewsBlock";
import {getCurrency} from "../redux/actions/currency";



export default function Home(props) {
  const {t} = useTranslation('common');
  const dispatch = useDispatch();
  const router = useRouter();
  const locale = router.locale;

  console.log(props, 'PROPS INDEX');


  useEffect(() => {
    dispatch(setLang(locale));
    dispatch(getGames());
    // dispatch(getGames()); //new games
    // dispatch(getGames());
    // dispatch(getGames());

    dispatch(getWinners());
    dispatch(getCurrency());

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
        {/*<JackpotBlock />*/}
        {/*API for jackpots will add in future */}
        <ChooseCategoryBlock t={t}/>
        <GamesSliderBlock t={t} type={'NEW_GAMES'} games={games}/>
        <GamesSliderBlock t={t} type={'JACKPOT_GAMES'} games={games}/>
        <PromotionsBlock t={t}/>
        <GamesSliderBlock t={t} type={'TABLE_GAMES'} games={games}/>
        <TotalJackpotsAmount t={t} winners={winners}/>
        <NewsBlock t={t} isBackShow={true}/>
        <WhySlotsIdol t={t} isBackShow={true}/>

      </MainLayout>

      <LangSwitcher href={'/'} locale={locale}/>
    </>
  )
}

export const getServerSideProps = async ({ locale }) => {
  const jackpotsRes = await fetch('http://t-gpb.slotsidol.com:7001/jackpots');
  const jackpotsData = await jackpotsRes.json();

  return ({
    props: {
      ...await serverSideTranslations(locale, ['common']),
      jackpotsData: jackpotsData
    },
  })
}