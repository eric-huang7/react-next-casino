import {useTranslation} from "next-i18next";
import {useRouter} from "next/router";
import {serverSideTranslations} from "next-i18next/serverSideTranslations";
import {MainBlock} from "../../components/HomePageComponents/MainBlock";
import MainLayout from "../../components/MainLayout/MainLayout";
import {ChooseCategoryBlock} from "../../components/HomePageComponents/ChooseCategoryBlock/ChooseCategoryBlock";
import {useEffect, useRef, useState} from "react";
import {getCurrency} from "../../redux/actions/currency";
import {useDispatch, useSelector} from "react-redux";
import {GamesContainer} from "../../components/GamesPageComponents/GamesContainer";
import {
  allProvidersURL,
  chosenProviderURL, game_category_ids, game_ids, game_provider_category_ids, game_provider_ids,
  jackpotGames_url,
  newGames_url,
  tableGames_url, topGames_url
} from "../../helpers/gamesURL";
import {setGames} from "../../redux/actions/games";
import {SearchGamesContainer} from "../../components/SearchGamesModalWindow/SearchGamesContainer";
import axios from "axios";
import {log} from "qrcode/lib/core/galois-field";




const GamesPage = (props) => {
  const dispatch = useDispatch();
  const { t } = useTranslation('common');
  const router = useRouter();
  const {id} = router.query;

  const searchRef = useRef('');


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
  const [total_rows, setTotal_rows] = useState(0);
  const [heading, setHeading] = useState('all-games');
  const [gamesError, setGamesError] = useState('');
  // useEffect(() => {
  //   dispatch(setGames(props.gamesData.results));
  //   setRequestGamesData(props.gamesData.results);
  //   setPageCounter(1);
  //   setTotal_rows(props.gamesData.total_rows);
  //   searchRef.current.value = '';
  // }, [props.gamesData]);



  useEffect(() => {
    let res;
    let heading;
    let whatSearch;
    setPageCounter(1);
    searchRef.current.value = '';

    setGamesError("");

    if (props.query.id === 'all-games') {

      heading = props.query.id;
      axios.get(allProvidersURL(100))
        .then((data) => {
          dispatch(setGames(data.data.results));
          setRequestGamesData(data.data.results);
          setTotal_rows(data.data.total_rows);

        })
        .catch((err) => {
          setGamesError('gamesPage.error');
        })

    } else if (props.query.id === 'new-games') {

      heading = props.query.id;
      axios.get(newGames_url(100))
        .then((data) => {
        dispatch(setGames(data.data.results));
        setRequestGamesData(data.data.results);
        setTotal_rows(data.data.total_rows);
      })
        .catch((err) => {
          setGamesError('gamesPage.error');
        });

    } else if (props.query.id === 'btc-games') {

      heading = props.query.id;
      axios.get(topGames_url(100))
        .then((data) => {
          dispatch(setGames(data.data.results));
          setRequestGamesData(data.data.results);
          setTotal_rows(data.data.total_rows);
        })
        .catch((err) => {
          setGamesError('gamesPage.error');
        });

    } else if (props.query.id === 'top-games') {

      heading = props.query.id;
      axios.get(topGames_url(100))
        .then((data) => {
          dispatch(setGames(data.data.results));
          setRequestGamesData(data.data.results);
          setTotal_rows(data.data.total_rows);
        })
        .catch((err) => {
          setGamesError('gamesPage.error');
        });

    } else if (props.query.id === 'jackpot-games') {

      heading = props.query.id;
      axios.get(jackpotGames_url(100))
        .then((data) => {
          dispatch(setGames(data.data.results));
          setRequestGamesData(data.data.results);
          setTotal_rows(data.data.total_rows);
        })
        .catch((err) => {
          setGamesError('gamesPage.error');
        });


    } else if (props.query.id === 'table-games') {

      heading = props.query.id;
      axios.get(tableGames_url(100))
        .then((data) => {
          dispatch(setGames(data.data.results));
          setRequestGamesData(data.data.results);
          setTotal_rows(data.data.total_rows);
        })
        .catch((err) => {
          setGamesError('gamesPage.error');
        });

    } else if (props.query.id === 'tournaments') {

      whatSearch = JSON.parse(props.query.tournamentData);
      heading = props.query.id;
      if (whatSearch.game_category_ids && whatSearch.game_provider_ids) {
        let provider = whatSearch.game_provider_ids.split('|').filter((el) => el !== "").join(',');
        let categoryId = whatSearch.game_category_ids.split('|').filter((el) => el !== "").join(',');
        axios.get(game_provider_category_ids(provider, categoryId))
          .then((data) => {
            dispatch(setGames(data.data.results));
            setRequestGamesData(data.data.results);
            setTotal_rows(data.data.total_rows);
          })
          .catch((err) => {
            setGamesError('gamesPage.error');
          });
      } else if (whatSearch.game_category_ids) {
        let categoryId = whatSearch.game_category_ids.split('|').filter((el) => el !== "").join(',');

        axios.get(game_category_ids(categoryId))
          .then((data) => {

            dispatch(setGames(data.data.results));
            setRequestGamesData(data.data.results);
            setTotal_rows(data.data.total_rows);
          })
          .catch((err) => {

            setGamesError('gamesPage.error');
          });
      } else if (whatSearch.game_provider_ids) {
        let provider = whatSearch.game_provider_ids.split('|').filter((el) => el !== "").join(',');

        // axios.get(game_provider_ids(provider))
        axios.get(game_provider_ids(provider))
          .then((data) => {
            dispatch(setGames(data.data.results));
            setRequestGamesData(data.data.results);
            setTotal_rows(data.data.total_rows);
          })
          .catch((err) => {
            setGamesError('gamesPage.error');
          });
      } else {
        let gamesId = whatSearch.game_ids.split('|').filter((el) => el !== "").join(',');

        console.log(gamesId, 'asdasdasdasda')

        axios.get(game_ids(gamesId))
          .then((data) => {
            dispatch(setGames(data.data.results));
            setRequestGamesData(data.data.results);
            setTotal_rows(data.data.total_rows);
          })
          .catch((err) => {
            setGamesError('gamesPage.error');
          });
      }

    } else if (props.query.id === 'bonus-games') {
      heading = props.query.active_bonus;
      axios.get(topGames_url(100))
        .then((data) => {
          dispatch(setGames(data.data.results));
          setRequestGamesData(data.data.results);
          setTotal_rows(data.data.total_rows);
        })
        .catch((err) => {
          setGamesError('gamesPage.error');
        });
    } else {

      heading = props.query.id;
      axios.get(chosenProviderURL(props.query.id))
        .then((data) => {
          dispatch(setGames(data.data.results));
          setRequestGamesData(data.data.results);
          setTotal_rows(data.data.total_rows);

        })
        .catch((err) => {
          setGamesError('gamesPage.error');
        });
    }
    setHeading(heading);
  }, [props.query])


  const allGames = useSelector((store) => store.games);
  let searchGames = useSelector((store) => store.games.searchGames);

  useEffect(() => {
    if (requestGamesData.length === total_rows) {
      setIsShowMoreButton(false);
    } else {

    }
    return () => {
      setIsShowMoreButton(true);
    }
  }, [props.query, total_rows, requestGamesData])


  return (
    <>
      <MainLayout t={t}>
        <MainBlock />
        {/*<JackpotBlock />*/}
        {/*API for jackpots will add in future */}
        <ChooseCategoryBlock searchRef={searchRef} isProvidersPage={false} t={t}/>
        {
          searchGames.length >= 0 && searchRef.current.value ?
            <SearchGamesContainer t={t} searchGames={searchGames} searchBar={searchRef} heading={heading}/>
            :
          <GamesContainer
          heading={heading}
          gamesData={requestGamesData}
          setRequestGamesData={setRequestGamesData}
          pageCounter={pageCounter}
          setPageCounter={setPageCounter}
          isShowMoreButton={isShowMoreButton}
          setIsShowMoreButton={setIsShowMoreButton}
          totalRows={total_rows}
          setTotal_rows={setTotal_rows}
          t={t}
          gamesError={gamesError}
          />
        }
      </MainLayout>
    </>
  )
}


export const getServerSideProps = async (context) => {

  return ({
    props: {
      ...await serverSideTranslations(context.locale, ['promotionsPage', 'common', 'newsData']),

      query: context.query,
    },
  })
}



export default GamesPage;