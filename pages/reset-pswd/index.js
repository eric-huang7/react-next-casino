import {useTranslation} from "next-i18next";
import {serverSideTranslations} from "next-i18next/serverSideTranslations";
import MainLayout from '../../components/MainLayout/MainLayout'
import {useRouter} from "next/router";

import {HomePageContainer} from "../../components/HomePageComponents/HomePageContainer";
import {useEffect} from "react";
import {showChangePasswordPopup} from "../../redux/actions/showPopups";
import {useDispatch} from "react-redux";



export default function ResetPswd(props) {
  const {t} = useTranslation('common');
  const dispatch = useDispatch();
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
  useEffect(() => {
    if (props.token) {
      console.log("open")
      console.log(props.token);
      dispatch(showChangePasswordPopup(true));
    } else {
      router.replace('/')
        .catch((e) => {
          console.log(e);
        })
    }

  }, [router])

  return (

    <>
      <MainLayout
        t={t}
        token={props.token}
      >
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

export const getServerSideProps = async (context) => {

  let token = null;
  if (context.query.token) {
    console.log(context.query.token, "success")
    token = context.query.token;
  } else {
    console.log(context.query.token, "FUUU");
  }

  return ({
    props: {
      ...await serverSideTranslations(context.locale, ['promotionsPage', 'common', 'newsData']),
      token: token
    },
  })
}