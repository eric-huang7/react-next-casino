import styles from '../../../styles/PromotionsPage/BonusesContainer.module.scss'
import { TypeOneBonusContainer } from './TypeOneBonusContainer/TypeOneBonusContainer'
import { TypeTwoBonusContainer } from './TypeTwoBonusContainer/TypeTwoBonusContainer'
import { bonusesFinder } from '../../../helpers/bonusesFinder'
import { useRouter } from 'next/router'
import { bonusesCalculator } from './bonusesCalculator'
import { useTranslation } from 'next-i18next'
import ErrorEmpty from '../../ErrorBoundaryComponents/ErrorEmpty'

export const BonusesContainer = ({ activeBonuses, userCurrency, userData }) => {
  const { t } = useTranslation('promotionsPage')
  const router = useRouter()
  let locale = router.locale
  let bonuses = bonusesFinder(activeBonuses.activeBonuses?.offers, userCurrency)

  return bonuses.length > 0 ? (
    <div className={styles.bonusesContainerMainWrapper}>
      {
        bonuses.map((bonus, index) => {
          const bonusCalculations = bonusesCalculator(bonus, userCurrency, t)

          return index % 2 === 0 ? (
            <div key={bonus.id}>
              <ErrorEmpty>
                <TypeOneBonusContainer
                  bonusCalculations={bonusCalculations}
                  locale={locale}
                  bonusInfo={bonus}
                  t={t}
                  userData={userData}
                />
              </ErrorEmpty>
            </div>
          ) : (
            <div key={bonus.id}>
              <ErrorEmpty>
                <TypeTwoBonusContainer
                  bonusCalculations={bonusCalculations}
                  locale={locale}
                  bonusInfo={bonus}
                  t={t}
                  userData={userData}
                />
              </ErrorEmpty>
            </div>
          )
        })
      }
    </div>
  ) : (
    <p className={styles.noBonuses}>{t('bonuses.noBonuses')}</p>
  )
}
