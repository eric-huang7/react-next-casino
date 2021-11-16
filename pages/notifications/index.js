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
import {getJackpots} from "../../redux/actions/latestJackpots";
import {getLatestWinners, getWinners} from "../../redux/actions/latestWinners";
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

  // const userAuth = useSelector(state => state.authInfo.isAuthenticated);
  // if (!userAuth) {
  //   router.replace('/', '/' ,{locale: router.locale})
  // }

  //TODO: uncomment upper redirection


  const userInfo = useSelector((store) => store.authInfo)
  // console.log(userInfo, '!!!!!!')
  return (
    <>
      <MainLayout t={t}>
        <div className={styles.mainWrapper}>
          <div className={styles.innerWrapper}>
            {
              userInfo.isAuthenticated ? <MainBlockContainer userInfo={userInfo.user} t={t}/> : ''
            }
            {/*<MainBlockContainer userInfo={userInfo} t={t}/>*/}
            <SideGamesContainer t={t}/>
          </div>
        </div>
      </MainLayout>
    </>

  )
}

export const getStaticProps = async ({ locale }) => {
  return ({
    props: {
      ...await serverSideTranslations(locale, ['promotionsPage', 'common']),
    },
  })
}

export default NotificationsPage;
