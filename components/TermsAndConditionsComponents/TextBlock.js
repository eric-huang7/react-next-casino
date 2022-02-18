import styles from '../../styles/TermsAndConditions/TermsTextBlock.module.scss'
import { useTranslation } from 'next-i18next'

export const TextBlock = ({ textHeading }) => {
  const { t } = useTranslation('termsAndConditions')

  return (
    <section className={styles.textBlockWrapper}>
      <div className={styles.textBlockInnerWrapper}>
        <div className={styles.textBlockFrame}>
          <h2 className={styles.textBlockHeading}>{t(textHeading)}</h2>
          <div className={styles.textInfoBlock}>

            <div dangerouslySetInnerHTML={{ __html: t('text') }}/>

          </div>
        </div>
      </div>
    </section>
  )
}