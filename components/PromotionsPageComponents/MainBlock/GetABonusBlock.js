import styles from '../../../styles/PromotionsPage/MainBlock.module.scss';


export const GetABonusBlock = ({t, dataForMainBlock}) => {

  return (
    <div className={styles.getAbonusWrapper}>
      <div className={styles.getAbonusFrame}>
        <div className={styles.upperTextBlock}>
          <span className={styles.mainText}>{dataForMainBlock.upperText.mainText}</span>
          <span className={styles.addText}>{dataForMainBlock.upperText.addText}</span>
        </div>
        <div className={styles.lowerTextBlock}>
          <span className={styles.lowerMainText}>{dataForMainBlock.lowerText.lowerMainText}</span>
          <span className={styles.lowerAddText}>{dataForMainBlock.lowerText.lowerAddText}</span>
        </div>
      </div>
    </div>
  )
}