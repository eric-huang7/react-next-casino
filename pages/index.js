import Link from 'next/link'
import {useTranslation} from "next-i18next";
import {serverSideTranslations} from "next-i18next/serverSideTranslations";
import LangSwitcher from "../components/LangSwitcher/LangSwitcher";

import styles from '../styles/Home.module.scss';
import {useRouter} from "next/router";
import {useDispatch} from "react-redux";
import {setLang} from "../redux/actions/lang";
import {useEffect} from "react";

export default function Home(props) {
  const dispatch = useDispatch();
  const router = useRouter();
  const locale = router.locale;

  useEffect(() => {
    dispatch(setLang(locale));
  })

  const {t} = useTranslation('navbarLinks');
  return (
    <>
      <h1 className={styles.headerHomePage}>{t(`home`)}</h1>
      <LangSwitcher locale={locale}/>
      <Link href={'/aboutUS'}>
        <a>
          ASDSADASF
        </a>
      </Link>
    </>

  )
}

export const getServerSideProps = async ({ locale }) => {
  return ({
    props: {
      ...await serverSideTranslations(locale, ['navbarLinks']),
    },
  })
}