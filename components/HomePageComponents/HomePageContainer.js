import {ChooseCategoryBlock} from "./ChooseCategoryBlock/ChooseCategoryBlock";
import {GamesSliderBlock} from "./GamesSliderBlock/GamesSliderBlock";
import {PromotionsBlock} from "./PromotionsBlock/PromotionsBlock";
import {TotalJackpotsAmount} from "./TotalJackpotsAmount/TotalJackpotsAmount";
import {NewsBlock} from "./NewsBlock/NewsBlock";
import {WhySlotsIdol} from "./WhySlotsIdol/WhySlotsIdol";
import {useEffect, useRef} from "react";
import {getGames, getGamesLobby, getJackpotGames, getNewGames, getTableGames} from "../../redux/games/action";
import {getJackpots} from "../../redux/gameData/action";
import {getLatestWinners, getWinners} from "../../redux/gameData/action";
import {getCurrency} from "../../redux/currency/action";
import {useDispatch, useSelector} from "react-redux";
import {SearchGamesContainer} from "../GamesPageComponents/SearchGamesContainer";
import ErrorText from "../ErrorBoundaryComponents/ErrorText";
import ErrorEmpty from "../ErrorBoundaryComponents/ErrorEmpty";
import {FaCertificate} from "react-icons/fa";
import {GiCardJackHearts, GiStarsStack} from "react-icons/gi";
import {getDynamicComponent} from "../../helpers/theme";
// import NewGamesTitleImage from "/assets/img/gamesSlider/new_games_head.svg";

const MainBlock = getDynamicComponent('HomePageComponents/MainBlock', 'MainBlock')

export const HomePageContainer = ({t}) => {
  const dispatch = useDispatch();
  const searchRef = useRef('');
  let searchGames = useSelector((store) => store.games.searchGames);

  useEffect(() => {

    dispatch(getGamesLobby());

    dispatch(getJackpots());
    dispatch(getWinners());
    dispatch(getLatestWinners());
    dispatch(getCurrency());

  }, []);


  const games = useSelector((games) => games.games);
  const gameData = useSelector((state) => state.gameData);

  return (
    <>
      <MainBlock/>

      {/*<ErrorText>*/}
      {/*  <JackpotBlock />*/}
      {/*</ErrorText>*/}
      {/*API for jackpots will add in future */}
      <ChooseCategoryBlock searchRef={searchRef} isProvidersPage={false} t={t}/>
      <div>
        {searchGames.length > 0 ?(
          <ErrorEmpty>
            <SearchGamesContainer t={t} searchGames={searchGames} heading={'all-games'}/>
          </ErrorEmpty>
        ) : (
          <>
            <ErrorText>
              <GamesSliderBlock
                t={t}
                titleImage={"/assets/img/gamesSlider/new_games_head.svg"}
                title={t('gamesPage.headings.newGames')}
                titleIcon={<FaCertificate />}
                slides={games?.newGames?.results?.slice()}
                count={games?.newGames?.rows}
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
                count={games?.jackpotGames?.rows}
                loading={games.loadingJackpotGames}
                linkPath="/games-page/jackpot-games"
              />
            </ErrorText>
          </>
        )}
        <PromotionsBlock
          t={t}
          title={t('header.navbarLinks.promotions')}
          titleImage={"/assets/img/promotionsSlider/promotions_heading.svg"}
        />
        <ErrorText>
          <GamesSliderBlock
            t={t}
            titleImage={"/assets/img/gamesSlider/table_head.svg"}
            title={t('gamesPage.headings.tableGames')}
            titleIcon={<GiCardJackHearts />}
            slides={games?.tableGames?.results?.slice()}
            count={games?.tableGames?.rows}
            loading={games.loadingTableGames}
            linkPath="/games-page/table-games"
          />
        </ErrorText>
        <ErrorText>
          <TotalJackpotsAmount
            t={t}
            title={t('homePage.totalJackpotHeading')}
            gameData={gameData}
          />
        </ErrorText>
        <ErrorText>
          <NewsBlock
            isBackShow={true}
            titleImage={"/assets/img/newsSlider/news_heading.svg"}
          />
        </ErrorText>
        <ErrorText>
          <WhySlotsIdol t={t} title={t('homePage.whySlotsIdol')} isBackShow={true}/>
        </ErrorText>
      </div>
    </>
  )
}
