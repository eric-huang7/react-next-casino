import styles from '../../styles/NotificationsPage/NotificationsPage.module.scss';
import {useTranslation} from "next-i18next";
import MainLayout from "../../components/MainLayout/MainLayout";
import {serverSideTranslations} from "next-i18next/serverSideTranslations";
import {MainBlockContainer} from "../../components/NotificationsPage/MainBlock/MainBlockContainer";
import {useDispatch, useSelector} from "react-redux";
import {useRouter} from "next/router";
import {SideGamesContainer} from "../../components/NotificationsPage/SideBlock/SideGamesContainer";
import {useEffect} from "react";
import {getGames, getJackpotGames, getNewGames, getTableGames} from "../../redux/actions/games";

import {getCurrency} from "../../redux/actions/currency";




const NotificationsPage = () => {
  const { t } = useTranslation('common');
  const router = useRouter();
  const dispatch = useDispatch();

  useEffect(() => {
    // dispatch(setLang(locale));
    dispatch(getGames());
    // dispatch(getNewGames()); //new games
    // dispatch(getJackpotGames()); // Jackpot Games
    // dispatch(getTableGames()); // Table Games
    //
    // dispatch(getJackpots());
    // dispatch(getWinners());
    // dispatch(getLatestWinners());
    dispatch(getCurrency());
    // dispatch(getActiveBonuses());
  }, []);

  const notifyData = useSelector((store) => store.notifications);
  const userInfo = useSelector((store) => store.authInfo)


  return (
    <>
        <MainLayout t={t}>
          <div className={styles.mainWrapper}>

              {
                userInfo.isAuthenticated ?
                  <div className={styles.innerWrapper}>
                  <MainBlockContainer notifyData={notifyData} userInfo={userInfo} t={t}/>
                  <SideGamesContainer t={t}/>
                  </div>
                  : ''
              }
          </div>
        </MainLayout>
    </>

  )
}

export const getStaticProps = async ({ locale }) => {
  return ({
    props: {
      ...await serverSideTranslations(locale, ['promotionsPage', 'common', 'newsData']),
    },
  })
}

export default NotificationsPage;
