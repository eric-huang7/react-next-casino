import {serverSideTranslations} from "next-i18next/serverSideTranslations";
import {useTranslation} from "next-i18next";
import {useDispatch} from "react-redux";
import MainLayout from "../../components/MainLayout/MainLayout";
import {useEffect} from "react";
import {getCurrency} from "../../redux/actions/currency";
import {MainBlock} from "../../components/HomePageComponents/MainBlock";
import {ChooseCategoryBlock} from "../../components/HomePageComponents/ChooseCategoryBlock/ChooseCategoryBlock";
import {ProvidersContainer} from "../../components/ProvidersPageComponents/ProvidersContainer";


const ProvidersPage = (props) => {
  const {t} = useTranslation('common');
  const dispatch = useDispatch();
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

  // console.log(props.providersData.results, 'props providers')


  return (
    <>
      <MainLayout t={t}>
        <MainBlock />
        {/*<JackpotBlock />*/}
        {/*API for jackpots will add in future */}
        <ChooseCategoryBlock isProvidersPage={true} t={t}/>
        <ProvidersContainer t={t} providersData={props.providersData.results}/>

      </MainLayout>
    </>
  )
}


export const getServerSideProps = async (context) => {
  // console.log(context.req.headers['accept-language'].split(',')[0], 'CON');
  const res = await fetch('http://t-gpb.slotsidol.com:7000/game_providers');
  const providersData = await res.json();

  return ({
    props: {
      ...await serverSideTranslations(context.locale, ['promotionsPage', 'common']),
      providersData: {...providersData},
    },
  })
}


export default ProvidersPage;