import { Bonus } from './Bonus'
import { bonusesFinder } from '../../../helpers/bonusesFinder'
import { useRouter } from 'next/router'
import { bonusesCalculator } from './bonusesCalculator'
import { useTranslation } from 'next-i18next'
import ErrorEmpty from '../../ErrorBoundaryComponents/ErrorEmpty'
import { Text, Box } from "@chakra-ui/react"

export const BonusesContainer = ({ activeBonuses, userCurrency, userData }) => {
  const { t } = useTranslation('promotionsPage')
  const router = useRouter()
  let locale = router.locale
  let bonuses = bonusesFinder(activeBonuses.activeBonuses?.offers, userCurrency)

  return bonuses.length > 0 ? (
    <Box maxW="1300px" m="0 auto" p={{base: "50px 24px", lg: "50px 0"}}>
      {bonuses.map((bonus, index) => (
        <div key={bonus.id}>
          <ErrorEmpty>
            <Bonus
              bonusCalculations={bonusesCalculator(bonus, userCurrency, t)}
              locale={locale}
              bonusInfo={bonus}
              t={t}
              userData={userData}
              reverse={index % 2 !== 0}
            />
          </ErrorEmpty>
        </div>
      ))}
    </Box>
  ) : (
    <Text
      color="white"
      m="70px auto 70px"
      textAlign="center"
      textTransform="uppercase"
      fontSize="24px"
      fontFamily="Verdana"
    >{t('bonuses.noBonuses')}</Text>
  )
}
