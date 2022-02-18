import styles from '../../../../styles/PromotionsPage/TypeTwoBonusContainer.module.scss'

import { BonusMainHeading } from './BonusMainHeading'
import { BonusImage } from './BonusImage'
import { BonusButton } from './BonusButton'
import { BonusShortDescriptionBlock } from './BonusShortDescriptionBlock'
import { BonusLongDescriptionBlock } from './BonusLongDescriptionBlock'
import { BonusAmountInfo } from './BonusAmountInfo'

import useWindowDimensions from '../../../../hooks/useWindowDimensions'
import ErrorEmpty from '../../../ErrorBoundaryComponents/ErrorEmpty'

export const TypeTwoBonusContainer = ({ t, bonusInfo, locale, bonusCalculations, userData }) => {

  const { width } = useWindowDimensions()

  return (
    <>
      <ErrorEmpty>
        <BonusMainHeading locale={locale} t={t} bonusInfo={bonusInfo}/>
      </ErrorEmpty>
      <div className={styles.typeTwoBonusWrapper}>
        <ErrorEmpty>
          <BonusImage bonusInfo={bonusInfo}/>
        </ErrorEmpty>
        <div className={styles.bonusFrame}>
          <div className={styles.bonusInfoBlock}>
            <ErrorEmpty>
              <BonusButton bonusInfo={bonusInfo} userData={userData}/>
            </ErrorEmpty>
            <ErrorEmpty>
              <BonusShortDescriptionBlock locale={locale} t={t} bonusInfo={bonusInfo}/>
            </ErrorEmpty>
            <ErrorEmpty>
              <BonusAmountInfo bonusCalculations={bonusCalculations} t={t} bonusInfo={bonusInfo}/>
            </ErrorEmpty>
            {
              width > 700
                ?
                <ErrorEmpty>
                  <BonusLongDescriptionBlock
                    bonusCalculations={bonusCalculations}
                    t={t}
                    bonusInfo={bonusInfo}
                  />
                </ErrorEmpty>
                :
                ''
            }
          </div>
          {
            width <= 700
              ?
              <ErrorEmpty>
                <BonusLongDescriptionBlock
                  bonusCalculations={bonusCalculations}
                  t={t}
                  bonusInfo={bonusInfo}
                />
              </ErrorEmpty>
              :
              ''
          }
        </div>
      </div>
    </>
  )
}