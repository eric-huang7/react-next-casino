import {useTranslation} from "next-i18next";
import {useRouter} from "next/router";
import {serverSideTranslations} from "next-i18next/serverSideTranslations";
import {MainBlock} from "../../components/HomePageComponents/MainBlock";
import MainLayout from "../../components/MainLayout/MainLayout";
import {ChooseCategoryBlock} from "../../components/HomePageComponents/ChooseCategoryBlock/ChooseCategoryBlock";
import {useEffect} from "react";
import {getCurrency} from "../../redux/actions/currency";
import {useDispatch} from "react-redux";




const GamesPage = (props) => {
  const dispatch = useDispatch();
  const { t } = useTranslation('common');
  const router = useRouter();
  const {id} = router.query;
  console.log(router, 'zxczxc');

  console.log(props, 'PROPS GAMES')

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
        {/*<JackpotBlock />*/}
        {/*API for jackpots will add in future */}
        <ChooseCategoryBlock isProvidersPage={false} t={t}/>
        <div>
          <h2 style={{color: "white"}}>
            {`${id}     provider`}
          </h2>


          <p style={{color: "white"}}>provider inner Linck</p>
        </div>
      </MainLayout>
    </>
  )
}


export const getServerSideProps = async (context) => {
  console.log(context, 'server pid');
  let res;
  if (context.query.id === 'all-games') {
    res = await fetch(`http://t-gpb.slotsidol.com:7000/games?start_index=0&quantity=100`);
  } else {
    res = await fetch(`http://t-gpb.slotsidol.com:7000/games?producers=${context.query.id}`);
  }
  //
  const gamesData = await res.json();
  return ({
    props: {
      ...await serverSideTranslations(context.locale, ['common']),
      gamesData: {...gamesData},
    },
  })
}



export default GamesPage;