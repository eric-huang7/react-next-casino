import {useTranslation} from "next-i18next";
import {useRouter} from "next/router";
import {serverSideTranslations} from "next-i18next/serverSideTranslations";
import {MainBlock} from "../../components/HomePageComponents/MainBlock";
import MainLayout from "../../components/MainLayout/MainLayout";
import {ChooseCategoryBlock} from "../../components/HomePageComponents/ChooseCategoryBlock/ChooseCategoryBlock";
import {useEffect, useState} from "react";
import {getCurrency} from "../../redux/actions/currency";
import {useDispatch, useSelector} from "react-redux";
import {GamesContainer} from "../../components/GamesPageComponents/GamesContainer";
import {
  allProvidersURL,
  chosenProviderURL,
  jackpotGames_url,
  newGames_url,
  tableGames_url, topGames_url
} from "../../helpers/gamesURL";
import {setGames} from "../../redux/actions/games";




const GamesPage = (props) => {
  const dispatch = useDispatch();
  const { t } = useTranslation('common');
  const router = useRouter();
  const {id} = router.query;
  // console.log(router, 'zxczxc');

  // console.log(props, 'PROPS GAMES')

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


  const [isShowMoreButton, setIsShowMoreButton] = useState(true)
  const [requestGamesData, setRequestGamesData] = useState([]);
  const [pageCounter, setPageCounter] = useState(0);
  useEffect(() => {
    dispatch(setGames(props.gamesData.results));
    setRequestGamesData(props.gamesData.results);
    setPageCounter(0);

  }, [props.gamesData]);



  //.searchGames

  // useEffect(() => {
  //   if (searchGames.isSearchEmpty) {
  //     // setRequestGamesData([]);
  //   } else {
  //     // setRequestGamesData(searchGames.searchGames);
  //   }
  //
  // }, [searchGames.searchGames])


  const allGames = useSelector((store) => store.games);

  // let gameData = props.gamesData.results;


  return (
    <>
      <MainLayout t={t}>
        <MainBlock />
        {/*<JackpotBlock />*/}
        {/*API for jackpots will add in future */}
        <ChooseCategoryBlock isProvidersPage={false} t={t}/>
        {allGames.allGamesLoading
          ?
          <>
          </>
          :
          <GamesContainer
          heading={props.heading}
          gamesData={requestGamesData}
          setRequestGamesData={setRequestGamesData}
          pageCounter={pageCounter}
          setPageCounter={setPageCounter}
          isShowMoreButton={isShowMoreButton}
          setIsShowMoreButton={setIsShowMoreButton}
          totalRows={props.gamesData.total_rows}
          t={t}/>
        }
      </MainLayout>
    </>
  )
}


export const getServerSideProps = async (context) => {
  console.log(context, 'server pid');
  let res;
  let heading;

  if (context.query.id === 'all-games') {

    heading = context.query.id;
    res = await fetch(allProvidersURL(100));

  } else if (context.query.id === 'new-games') {

    heading = context.query.id;
    res = await fetch(newGames_url(100));

  } else if (context.query.id === 'btc-games') {

    heading = context.query.id;
    res = await fetch(topGames_url(100));

  } else if (context.query.id === 'top-games') {

    heading = context.query.id;
    res = await fetch(topGames_url(100));

  } else if (context.query.id === 'jackpot-games') {

    heading = context.query.id;
    res = await fetch(jackpotGames_url(100));


  } else if (context.query.id === 'table-games') {

    heading = context.query.id;
    res = await fetch(tableGames_url(100));

  } else {

    heading = context.query.id;
    res = await fetch(chosenProviderURL(context.query.id));

  }
  let gamesData = await res.json();
  return ({
    props: {
      ...await serverSideTranslations(context.locale, ['common']),
      gamesData: {...gamesData},
      heading: heading,
    },
  })
}



export default GamesPage;