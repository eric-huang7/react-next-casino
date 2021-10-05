import styles from '../../../styles/ContactUs/MainHeadersBlock.module.scss';

export const HeadersBlock = ({t}) => {

  return (
    <section className={styles.headersSection}>
      <div className={styles.headersInnerWrapper}>
        <h2 className={styles.hours}>{t('contactUsPage.headers.hoursAday')}</h2>
        <h2 className={styles.week}>{t('contactUsPage.headers.daysAweek')}</h2>
        <h2 className={styles.year}>{t('contactUsPage.headers.daysAyear')}</h2>
      </div>
      <p className={styles.textBottom}>{t('contactUsPage.headers.textBottom')}</p>
    </section>
  )
}