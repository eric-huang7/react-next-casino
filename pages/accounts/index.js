/* eslint-disable react-hooks/exhaustive-deps */
import {useTranslation} from "next-i18next";
import {useDispatch, useSelector} from "react-redux";
import {useRouter} from "next/router";
import {useEffect} from "react";
import {getCurrency} from "../../redux/actions/currency";
import {serverSideTranslations} from "next-i18next/serverSideTranslations";
import {getActiveBonuses} from "../../redux/actions/getBonuses";

import styles from '../../styles/MyAccount/MyAccount.module.scss'
import {AccountMainLayout} from "../../components/MyAccountMainLayout/AccountMainLayout";
import {LoadingComponent} from "../../components/LoadingComponent/LoadingComponent";




const Accounts = (props) => {
  const { t } = useTranslation('common');
  const dispatch = useDispatch();
  const currency = useSelector((store) => store.getCurrency);


  useEffect(() => {
    // dispatch(setLang(locale));
    // dispatch(getGames());
    // dispatch(getNewGames()); //new games
    // dispatch(getJackpotGames()); // Jackpot Games
    // dispatch(getTableGames()); // Table Games

    // dispatch(getJackpots());
    // dispatch(getWinners());
    // dispatch(getLatestWinners());

    if (!currency.currency) {
      dispatch(getCurrency());
    }


    dispatch(getActiveBonuses());

  }, []);


  return (
    <>
      <AccountMainLayout t={t}>
        <div className={styles.myAccountContainer}>
          <LoadingComponent t={t} />
        </div>
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