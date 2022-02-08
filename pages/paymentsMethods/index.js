import {useTranslation} from "next-i18next";
import {serverSideTranslations} from "next-i18next/serverSideTranslations";
import MainLayout from "../../components/MainLayout/MainLayout";
import styles from '../../styles/PaymentsMethodsPage/PaymentsMethodsPage.module.scss';
import {NewsBlock} from "../../components/HomePageComponents/NewsBlock/NewsBlock";
import {PaymentsInformationBlock} from "../../components/PaymentsMethodsComponents/PaymentsInformationBlock";
// import {PaymentsDepositBlock} from "../../components/PaymentsMethodsComponents/PaymentsDepositBlock";
// import {PaymentsWithdrawBlock} from "../../components/PaymentsMethodsComponents/PaymentsWithdrawBlock";
import {useDispatch} from "react-redux";
import {useEffect} from "react";
import {getCurrency} from "../../redux/actions/currency";


const PaymentsMethods = (props) => {
  const { t } = useTranslation('common');
  // console.log(props);

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

  return (
    <>
      {/*<MainLayout t={t}>*/}
        <div className={styles.paymentsMainWrapper}>
          <PaymentsInformationBlock t={t}/>
          {/*<PaymentsDepositBlock t={t}/>*/}
          {/*<PaymentsWithdrawBlock t={t}/>*/}
        </div>

        <NewsBlock t={t} isBackShow={false}/>
      {/*</MainLayout>*/}
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

export default  PaymentsMethods;