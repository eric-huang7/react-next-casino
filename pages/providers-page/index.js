import {serverSideTranslations} from "next-i18next/serverSideTranslations";
import {useTranslation} from "next-i18next";
import {useDispatch, useSelector} from "react-redux";
import MainLayout from "../../components/MainLayout/MainLayout";
import {useEffect, useRef} from "react";
import {getCurrency} from "../../redux/actions/currency";
import {MainBlock} from "../../components/HomePageComponents/MainBlock";
import {ChooseCategoryBlock} from "../../components/HomePageComponents/ChooseCategoryBlock/ChooseCategoryBlock";
import {ProvidersContainer} from "../../components/ProvidersPageComponents/ProvidersContainer";
import {SearchGamesContainer} from "../../components/SearchGamesModalWindow/SearchGamesContainer";


const ProvidersPage = (props) => {
  const {t} = useTranslation('common');
  const dispatch = useDispatch();
  const searchRef = useRef('');
  let searchGames = useSelector((store) => store.games.searchGames);

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

  // console.log(props.providersData.results, 'props providers')


  return (
    <>
      <MainLayout t={t}>
        <MainBlock />
        {/*<JackpotBlock />*/}
        {/*API for jackpots will add in future */}
        <ChooseCategoryBlock searchRef={searchRef} isProvidersPage={true} t={t}/>
        {
          searchGames.length >= 0 && searchRef.current.value ?
            <SearchGamesContainer t={t} searchGames={searchGames} searchBar={searchRef} heading={'all_games'}/>
            :
            <ProvidersContainer t={t} providersData={props.providersData.results}/>
        }
      </MainLayout>
    </>
  )
}


export const getServerSideProps = async (context) => {
  // console.log(context.req.headers['accept-language'].split(',')[0], 'CON');
  const res = await fetch('http://t-gpb.slotsidol.com:7000/game_providers');
  const providersData = await res.json();

  return ({
    props: {
      ...await serverSideTranslations(context.locale, ['promotionsPage', 'common']),
      providersData: {...providersData},
    },
  })
}


export default ProvidersPage;