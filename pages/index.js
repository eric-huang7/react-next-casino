import {useTranslation} from "next-i18next";
import {serverSideTranslations} from "next-i18next/serverSideTranslations";
import MainLayout from '../components/MainLayout/MainLayout'
import {useRouter} from "next/router";

import {HomePageContainer} from "../components/HomePageComponents/HomePageContainer";



export default function Home(props) {
  const {t} = useTranslation('common');
  // const dispatch = useDispatch();
  const router = useRouter();
  const locale = router.locale;
  // console.log(router, "home LOCALE")

  // useEffect(() => {
  //   // dispatch(setLang(locale));
  //   dispatch(getGames());
  //   dispatch(getNewGames()); //new games
  //   dispatch(getJackpotGames()); // Jackpot Games
  //   dispatch(getTableGames()); // Table Games
  //
  //   dispatch(getJackpots());
  //   dispatch(getWinners());
  //   dispatch(getLatestWinners());
  //   dispatch(getCurrency());
  //   // dispatch(getActiveBonuses());
  //
  // }, []);
  // const userLogin = useSelector((state) => state.authInfo.isAuthenticated)
  //
  //
  // const games = useSelector((games) => games.games);
  // const winners = useSelector((winners) => winners.winners);
  // const jackpots = useSelector((jackpots) => jackpots.jackpots);
  // const currencies = useSelector((state) => state.getCurrency);
  // const activeBonuses = useSelector((state) => state.bonuses);
  // const state = useSelector((state) => state);


  return (

    <>
      <MainLayout t={t}>
        <HomePageContainer
          t={t}
          // games={games}
          // jackpots={jackpots}
          // winners={winners}
        />
      </MainLayout>

    </>
  )
}

export const getServerSideProps = async ({ locale }) => {

  return ({
    props: {
      ...await serverSideTranslations(locale, ['promotionsPage', 'common', 'newsData']),
    },
  })
}