import {serverSideTranslations} from "next-i18next/serverSideTranslations";
import {useTranslation} from "next-i18next";
import {useDispatch, useSelector} from "react-redux";
import MainLayout from "../../components/MainLayout/MainLayout";
import {useEffect, useRef, useState} from "react";
import {getCurrency} from "../../redux/actions/currency";
import {MainBlock} from "../../components/HomePageComponents/MainBlock";
import {ChooseCategoryBlock} from "../../components/HomePageComponents/ChooseCategoryBlock/ChooseCategoryBlock";
import {ProvidersContainer} from "../../components/ProvidersPageComponents/ProvidersContainer";
import {SearchGamesContainer} from "../../components/SearchGamesModalWindow/SearchGamesContainer";
import {NewsBlock} from "../../components/HomePageComponents/NewsBlock/NewsBlock";
import axios from "axios";
import {serverUrl} from "../../envs/url";


const ProvidersPage = (props) => {
  const {t} = useTranslation('common');
  const dispatch = useDispatch();
  const searchRef = useRef('');
  let searchGames = useSelector((store) => store.games.searchGames);

  const [providersData, setProvidersData] = useState([]);
  const [providersError, setProvidersError] = useState('');

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

    axios.get(serverUrl + 'game_providers')
      .then((data) => {

        setProvidersData(data.data.results);
        setProvidersError('');
      })
      .catch((err) => {
        setProvidersError('providersPage.error');
      })
  }, []);



  return (
    <>
      {/*<MainLayout t={t}>*/}
        <MainBlock />
        {/*<JackpotBlock />*/}
        {/*API for jackpots will add in futu
        re */}
        <ChooseCategoryBlock searchRef={searchRef} isProvidersPage={true} t={t}/>
        {
          searchGames.length >= 0 && searchRef.current.value ?
            <SearchGamesContainer t={t} searchGames={searchGames} searchBar={searchRef} heading={'all-games'}/>
            :
            <ProvidersContainer t={t} providersData={providersData} providersError={providersError}/>
        }
      {/*</MainLayout>*/}
    </>
  )
}


export const getServerSideProps = async (context) => {

  // const res = await fetch('http://t-gpb.slotsidol.com:7000/game_providers');
  // const providersData = await res.json();

  return ({
    props: {
      ...await serverSideTranslations(context.locale, ['promotionsPage', 'common', 'newsData']),
      // providersData: {...providersData},
    },
  })
}


export default ProvidersPage;