import {useTranslation} from "next-i18next";
import {useRouter} from "next/router";
import {serverSideTranslations} from "next-i18next/serverSideTranslations";
import {MainBlock} from "../../components/HomePageComponents/MainBlock";
import MainLayout from "../../components/MainLayout/MainLayout";
import {ChooseCategoryBlock} from "../../components/HomePageComponents/ChooseCategoryBlock/ChooseCategoryBlock";
import {useEffect} from "react";
import {getCurrency} from "../../redux/actions/currency";
import {useDispatch} from "react-redux";




const GamesPage = (props) => {
  const dispatch = useDispatch();
  const { t } = useTranslation('common');
  const router = useRouter();
  const {pid} = router.query;
  console.log(pid, 'zxczxc');

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
        <MainBlock />
        {/*<JackpotBlock />*/}
        {/*API for jackpots will add in future */}
        <ChooseCategoryBlock isProvidersPage={false} t={t}/>
        <div>
          <h2 style={{color: "white"}}>
            {`${pid}     provider`}
          </h2>


          <p style={{color: "white"}}>provider inner Linck</p>
        </div>
      </MainLayout>
    </>
  )
}

// export async function getStaticPaths(context) {
//   console.log(context, 'static path')
//   return {
//     // Only `/posts/1` and `/posts/2` are generated at build time
//     paths: [
//       { params: { id: 'responsibleGaming' } },
//       { params: { id: 'termsAndConditions' } },
//       { params: { id: 'kycpolicy' } },
//       { params: { id: 'amlpolicy' } },
//     ],
//     // Enable statically generating additional pages
//     // For example: `/posts/3`
//     fallback: "blocking",
//   }
// }

export const getServerSideProps = async (context) => {
  console.log(context.query.pid, 'server pid');
  const res = await fetch(`http://t-gpb.slotsidol.com:7000/games?producers=${context.query.pid}`);
  const providersData = await res.json();
  return ({
    props: {
      ...await serverSideTranslations(context.locale, ['common']),
      providersData: {...providersData},
    },
  })
}



export default GamesPage;