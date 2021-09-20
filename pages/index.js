import styles from '../styles/Home.module.scss';

import {useTranslation} from "next-i18next";
import {serverSideTranslations} from "next-i18next/serverSideTranslations";

export default function Home() {
  const {t} = useTranslation('navbarLinks');

  return (
    <h1 className={styles.headerHomePage}>{t(`home`)}</h1>
  )
}

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...await serverSideTranslations(locale, ['navbarLinks']),
  },
})