import {MainBlock} from "./MainBlock";
import {ChooseCategoryBlock} from "./ChooseCategoryBlock/ChooseCategoryBlock";
import {GamesSliderBlock} from "./GamesSliderBlock/GamesSliderBlock";
import {PromotionsBlock} from "./PromotionsBlock/PromotionsBlock";
import {TotalJackpotsAmount} from "./TotalJackpotsAmount/TotalJackpotsAmount";
import {NewsBlock} from "./NewsBlock/NewsBlock";
import {WhySlotsIdol} from "./WhySlotsIdol/WhySlotsIdol";
import {useEffect} from "react";
import {getGames, getJackpotGames, getNewGames, getTableGames} from "../../redux/actions/games";
import {getJackpots} from "../../redux/actions/latestJackpots";
import {getLatestWinners, getWinners} from "../../redux/actions/latestWinners";
import {getCurrency} from "../../redux/actions/currency";
import {useDispatch, useSelector} from "react-redux";


export const HomePageContainer = ({t}) => {
  const dispatch = useDispatch();

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
    // dispatch(getActiveBonuses());

  }, []);
  const userLogin = useSelector((state) => state.authInfo.isAuthenticated)


  const games = useSelector((games) => games.games);
  const winners = useSelector((winners) => winners.winners);
  const jackpots = useSelector((jackpots) => jackpots.jackpots);
  const currencies = useSelector((state) => state.getCurrency);
  const activeBonuses = useSelector((state) => state.bonuses);


  return (
    <>
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
    </>
  )
}