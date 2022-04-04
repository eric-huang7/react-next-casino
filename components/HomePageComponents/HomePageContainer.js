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
import ErrorEmpty from "../ErrorBoundaryComponents/ErrorEmpty";
import {FaCertificate} from "react-icons/fa";
import {GiCardJackHearts, GiStarsStack} from "react-icons/gi";
// import NewGamesTitleImage from "/assets/img/gamesSlider/new_games_head.svg";

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
        searchGames.length >= 0 && searchRef.current.value
          ?
          <ErrorEmpty>
            <SearchGamesContainer t={t} searchGames={searchGames} searchBar={searchRef} heading={'all-games'}/>
          </ErrorEmpty>
          :
          <div>
            <ErrorText>
              <GamesSliderBlock
                t={t}
                titleImage={"/assets/img/gamesSlider/new_games_head.svg"}
                title={t('gamesPage.headings.newGames')}
                titleIcon={<FaCertificate />}
                slides={games?.newGames?.results?.slice()}
                loading={games.loadingNewGames}
                linkPath="/games-page/new-games"
              />
            </ErrorText>
            <ErrorText>
              <GamesSliderBlock
                t={t}
                titleImage={"/assets/img/gamesSlider/jackpot_head.svg"}
                title={t('gamesPage.headings.jackpotGames')}
                titleIcon={<GiStarsStack />}
                slides={games?.jackpotGames?.results?.slice()}
                loading={games.loadingJackpotGames}
                linkPath="/games-page/jackpot-games"
              />
            </ErrorText>
            <PromotionsBlock t={t} titleImage={"/assets/img/promotionsSlider/promotions_heading.svg"}/>
            <ErrorText>
              <GamesSliderBlock
                t={t}
                titleImage={"/assets/img/gamesSlider/table_head.svg"}
                title={t('gamesPage.headings.tableGames')}
                titleIcon={<GiCardJackHearts />}
                slides={games?.tableGames?.results?.slice()}
                loading={games.loadingTableGames}
                linkPath="/games-page/table-games"
              />
            </ErrorText>
            <ErrorText>
              <TotalJackpotsAmount t={t} winners={winners} jackpots={jackpots}/>
            </ErrorText>
            <ErrorText>
              <NewsBlock t={t} isBackShow={true} titleImage={"/assets/img/newsSlider/news_heading.svg"}/>
            </ErrorText>
            <ErrorText>
              <WhySlotsIdol t={t} isBackShow={true}/>
            </ErrorText>
          </div>
      }
    </>
  )
}
