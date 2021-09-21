import Link from 'next/link'
import {useTranslation} from "next-i18next";
import {serverSideTranslations} from "next-i18next/serverSideTranslations";
import LangSwitcher from "../components/LangSwitcher/LangSwitcher";
import MainLayout from '../components/MainLayout/MainLayout'
import {useRouter} from "next/router";
import {useDispatch} from "react-redux";
import {setLang} from "../redux/actions/lang";
import {useEffect} from "react";

import styles from '../styles/Home.module.scss';

export default function Home(props) {
  const {t} = useTranslation('common');
  const dispatch = useDispatch();
  const router = useRouter();
  const locale = router.locale;

  useEffect(() => {
    dispatch(setLang(locale));
  })

  return (
    <>
      <MainLayout t={t}>
        <h1 className={styles.headerHomePage}>{t(`header.navbarLinks.home`)}</h1>
        <LangSwitcher locale={locale}/>
        <Link href={'/aboutUs'}>
          <a>
            ASDSADASF
          </a>
        </Link>
      </MainLayout>
    </>
  )
}

export const getServerSideProps = async ({ locale }) => {
  return ({
    props: {
      ...await serverSideTranslations(locale, ['common']),
    },
  })
}