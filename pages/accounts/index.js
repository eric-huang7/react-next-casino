/* eslint-disable react-hooks/exhaustive-deps */
import {useTranslation} from "next-i18next";
import {useDispatch} from "react-redux";
import {useRouter} from "next/router";
import {useEffect} from "react";
import {getCurrency} from "../../redux/actions/currency";
import {serverSideTranslations} from "next-i18next/serverSideTranslations";
import {getActiveBonuses} from "../../redux/actions/getBonuses";

import styles from '../../styles/MyAccount/MyAccount.module.scss'
import {AccountMainLayout} from "../../components/MyAccountMainLayout/AccountMainLayout";




const Accounts = (props) => {
  const { t } = useTranslation('common');
  const dispatch = useDispatch();
  const router = useRouter();

  // const activeLang = useSelector(({lang}) => lang.activeLang);
  //
  // useEffect(() => {
  //   dispatch(setLang(router.locale));
  //   console.log( router, "$$$$$$$$$$$$$$$$$$")
  // },[])

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

    dispatch(getActiveBonuses());

  }, []);


  return (
    <>
      <AccountMainLayout t={t}>
        <h1>My account!!</h1>
      </AccountMainLayout>
    </>
  )
}

export const getServerSideProps = async ({ locale }) => {
  return ({
    props: {
      ...await serverSideTranslations(locale, ['promotionsPage', 'common']),
    },
  })
}

export default  Accounts;