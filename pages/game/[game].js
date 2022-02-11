import MainLayout from "../../components/MainLayout/MainLayout";
import {useTranslation} from "next-i18next";
import {serverSideTranslations} from "next-i18next/serverSideTranslations";
import {GamePageMainContainer} from "../../components/GamePageComponents/GamePageMainContainer";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {freeGame} from "../../redux/actions/playGames";
import {showGameWindow} from "../../redux/actions/showGameWindow";
import {getGames, getJackpotGames, getNewGames, getTableGames} from "../../redux/actions/games";
import {getJackpots} from "../../redux/actions/latestJackpots";
import {getLatestWinners, getWinners} from "../../redux/actions/latestWinners";
import {getCurrency} from "../../redux/actions/currency";


const PlayGamePage = (props) => {
  const {t} = useTranslation('common');
  const playGames = useSelector((state) => state.playGame);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCurrency());
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (!playGames.freeGame && !playGames.startGame) {
        let lastGameData = JSON.parse(localStorage.getItem('user_last_game'));
        dispatch(freeGame({
          data: lastGameData.data,
          gameName: lastGameData.gameName ? lastGameData.gameName : "..."
        }));
        dispatch(showGameWindow(true));
      }
    }, 1000);

    return () => {
      clearTimeout(timer);
    }
  }, [])

  return (
    <>
      <MainLayout t={t}>
        <GamePageMainContainer
          t={t}
        />
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

export default PlayGamePage;