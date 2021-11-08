import styles from '../../../../styles/PromotionsPage/TypeTwoBonusContainer.module.scss';

export const BonusImage = ({bonusInfo}) => {

  return (
    <div className={styles.imageBackground}>
      <img draggable={false} src={`https://cimagehost1.sos-ch-gva-2.exoscale-cdn.com/images/${bonusInfo?.image}`} alt="bonus image"/>
    </div>
  )
}