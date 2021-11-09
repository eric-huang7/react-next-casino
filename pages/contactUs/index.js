import {useTranslation} from "next-i18next";
import {serverSideTranslations} from "next-i18next/serverSideTranslations";
import MainLayout from "../../components/MainLayout/MainLayout";
import styles from "../../styles/ContactUs.module.scss";

import {WhySlotsIdol} from "../../components/HomePageComponents/WhySlotsIdol/WhySlotsIdol";
import {NewsBlock} from "../../components/HomePageComponents/NewsBlock/NewsBlock";
import {MainBlock} from "../../components/ContactUsPageComponents/MainBlock/MainBlock";
import {HeadersBlock} from "../../components/ContactUsPageComponents/HeadersBlock/HeadersBclock";
import LangSwitcher from "../../components/LangSwitcher/LangSwitcher";
import {useRouter} from "next/router";
import {ContactsBlocks} from "../../components/ContactUsPageComponents/ContactsBlocks/ContactsBlocks";
import {Faq} from "../../components/ContactUsPageComponents/FAQ/Faq";
import {useDispatch} from "react-redux";
import {useEffect} from "react";
import {getCurrency} from "../../redux/actions/currency";


const ContactUs = (props) => {
  const { t } = useTranslation('common')

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
      <MainLayout t={t}>
        <MainBlock />
        <HeadersBlock t={t}/>
        <ContactsBlocks t={t}/>
        <div className={styles.textWhyslotsBack}>
          <Faq t={t}/>
          <WhySlotsIdol t={t} isBackShow={false}/>
        </div>
        <NewsBlock t={t} isBackShow={false}/>
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

export default  ContactUs;