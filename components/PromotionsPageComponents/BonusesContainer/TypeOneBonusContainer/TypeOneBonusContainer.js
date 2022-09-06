import styles from '../../../../styles/PromotionsPage/TypeOneBonusContainer.module.scss'
import { BonusButton } from './BonusButton'
import { BonusShortDescriptionBlock } from './BonusShortDescriptionBlock'
import { BonusLongDescriptionBlock } from './BonusLongDescriptionBlock'
import { BonusAmountInfo } from './BonusAmountInfo'
import useWindowDimensions from '../../../../hooks/useWindowDimensions'
import ErrorEmpty from '../../../ErrorBoundaryComponents/ErrorEmpty'
import { Text } from "@chakra-ui/react"
import {Box} from "@chakra-ui/layout";
import ShadowHeading from "../../../typography/ShadowHeading";
import {urlGen} from "../../../../helpers/imageUrl";

export const TypeOneBonusContainer = ({ t, bonusInfo, locale, bonusCalculations, userData }) => {
  const { width } = useWindowDimensions()

  return (
    <>
      <Box>
        <ShadowHeading>
          {t(`bonuses.bonus_${bonusInfo?.id}.heading.line_one`)}
        </ShadowHeading>
        <ShadowHeading fontSize={{base: "24px", lg: "28px"}} color="primary.500">
          {t(`bonuses.bonus_${bonusInfo?.id}.heading.line_two`)}
        </ShadowHeading>
      </Box>
      <div className={styles.typeOneBonusWrapper}>
        <Box
          width={{base: "100%", lg: "460px"}}
          minH={{base: "175px", lg: "100%"}}
          h={{base: "calc(100vw - 48px)", lg: "auto"}}
          mt={0}
          position="absolute"
          bottom={{base: "unset", lg: 0}}
          left={0}
          top={0}
          backgroundRepeat="no-repeat"
          backgroundSize="cover"
          backgroundPosition="center center"
          backgroundImage={`url(${urlGen(bonusInfo?.image)})`}
        />

        <div className={styles.bonusFrame}>
          <div className={styles.bonusInfoBlock}>
            <ErrorEmpty>
              <BonusButton
                bonusInfo={bonusInfo}
                userData={userData}
              />
            </ErrorEmpty>
            <ErrorEmpty>
              <BonusShortDescriptionBlock
                locale={locale}
                t={t}
                bonusInfo={bonusInfo}
              />
            </ErrorEmpty>
            <ErrorEmpty>
              <BonusAmountInfo
                bonusCalculations={bonusCalculations}
                t={t}
                bonusInfo={bonusInfo}
              />
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
                <ErrorEmpty>
                  <BonusLongDescriptionBlock
                    bonusCalculations={bonusCalculations}
                    t={t}
                    bonusInfo={bonusInfo}
                  />
                </ErrorEmpty>
            }
          </div>
        </div>
      </div>
    </>

  )
}
