import {useTranslation} from "next-i18next";
import {serverSideTranslations} from "next-i18next/serverSideTranslations";
import MainLayout from "../../components/MainLayout/MainLayout";
import styles from "../../styles/Home.module.scss";
import {PromotionsContainer} from "../../components/PromotionsPageComponents/PromotionsContainer";
import {useRouter} from "next/router";
import {useEffect} from "react";
import {NewsBlock} from "../../components/HomePageComponents/NewsBlock/NewsBlock";
import {getGames, getJackpotGames, getNewGames, getTableGames} from "../../redux/actions/games";
import {getJackpots} from "../../redux/actions/latestJackpots";
import {getLatestWinners, getWinners} from "../../redux/actions/latestWinners";
import {getCurrency} from "../../redux/actions/currency";
import {useDispatch} from "react-redux";


const Promotions = (props) => {
  const dispatch = useDispatch();
  const { t } = useTranslation('common');

  // console.log(props, 'promotions');

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
        <PromotionsContainer />
        <NewsBlock t={t} isBackShow={false}/>
      </MainLayout>
    </>
  )
}

export const getServerSideProps = async (context) => {
  return ({
    props: {
      ...await serverSideTranslations(context.locale, ['promotionsPage', 'common']),
      locale: context.locale
    },
  })
}

export default  Promotions;