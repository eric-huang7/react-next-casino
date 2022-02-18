import {MainBlock} from "./MainBlock";
import {ChooseCategoryBlock} from "./ChooseCategoryBlock/ChooseCategoryBlock";
import {GamesSliderBlock} from "./GamesSliderBlock/GamesSliderBlock";
import {PromotionsBlock} from "./PromotionsBlock/PromotionsBlock";
import {TotalJackpotsAmount} from "./TotalJackpotsAmount/TotalJackpotsAmount";
import {NewsBlock} from "./NewsBlock/NewsBlock";
import {WhySlotsIdol} from "./WhySlotsIdol/WhySlotsIdol";
import {useEffect, useRef} from "react";
import {getGames, getJackpotGames, getNewGames, getTableGames} from "../../redux/actions/games";
import {getJackpots} from "../../redux/actions/latestJackpots";
import {getLatestWinners, getWinners} from "../../redux/actions/latestWinners";
import {getCurrency} from "../../redux/actions/currency";
import {useDispatch, useSelector} from "react-redux";
import {SearchGamesContainer} from "../SearchGamesModalWindow/SearchGamesContainer";
import ErrorText from "../ErrorBoundaryComponents/ErrorText";


export const HomePageContainer = ({t}) => {
  const dispatch = useDispatch();
  const searchRef = useRef('');
  let searchGames = useSelector((store) => store.games.searchGames);

  useEffect(() => {

    dispatch(getGames());
    dispatch(getNewGames());
    dispatch(getJackpotGames());
    dispatch(getTableGames());

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
      <MainBlock/>

      {/*<ErrorText>*/}
      {/*  <JackpotBlock />*/}
      {/*</ErrorText>*/}
      {/*API for jackpots will add in future */}
      <ChooseCategoryBlock searchRef={searchRef} isProvidersPage={false} t={t}/>
      {
        searchGames.length >= 0 && searchRef.current.value ?
          <SearchGamesContainer t={t} searchGames={searchGames} searchBar={searchRef} heading={'all-games'}/>
          :
          <>
            <ErrorText>
              <GamesSliderBlock t={t} type={'NEW_GAMES'} games={games}/>
            </ErrorText>
            <ErrorText>
              <GamesSliderBlock t={t} type={'JACKPOT_GAMES'} games={games}/>
            </ErrorText>
            <PromotionsBlock t={t}/>
            <ErrorText>
              <GamesSliderBlock t={t} type={'TABLE_GAMES'} games={games}/>
            </ErrorText>
            <ErrorText>
              <TotalJackpotsAmount t={t} winners={winners} jackpots={jackpots}/>
            </ErrorText>
            <ErrorText>
              <NewsBlock t={t} isBackShow={true}/>
            </ErrorText>
            <ErrorText>
              <WhySlotsIdol t={t} isBackShow={true}/>
            </ErrorText>
          </>
      }
    </>
  )
}