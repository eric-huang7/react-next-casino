import Link from 'next/link'
import {useTranslation} from "next-i18next";
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import styles from '../styles/NotFoundPage.module.scss'

export const getStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale ?? 'en', ['common'])),
    },
  }
}

export default function NotFoundPage() {
  const { t } = useTranslation('common')

  return <Link href="/">
    <a>
      <div className={styles.wrapper}>
        <img
          src={`/assets/img/homeImg/slot_machine-mobile.webp`}
          alt="slot machine"
          height="50%"
        />
        <h1>{t('errorPage.title1')}</h1>
        <div className={styles.title2}>{t('errorPage.title2')}</div>
        <div className={styles.title3}>{t('errorPage.title3')}</div>
      </div>
    </a>
  </Link>
}
