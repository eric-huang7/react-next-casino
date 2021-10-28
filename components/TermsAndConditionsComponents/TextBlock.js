import styles from '../../styles/TermsAndConditions/TermsTextBlock.module.scss';

export const TextBlock = ({t, textData, textHeading}) => {

  return (
    <section className={styles.textBlockWrapper}>
      <div className={styles.textBlockInnerWrapper}>
        <div className={styles.textBlockFrame}>
          <h2 className={styles.textBlockHeading}>{textHeading}</h2>
          <div className={styles.textInfoBlock}>
            <p>
              {textData}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}