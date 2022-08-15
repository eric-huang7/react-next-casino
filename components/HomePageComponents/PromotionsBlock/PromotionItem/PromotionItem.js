import styles from "../../../../styles/HomePage/PromotionsBlock.module.scss";
import {urlGen} from "../../../../helpers/imageUrl";
import {useTranslation} from "next-i18next";
import { Box, Text, VStack } from "@chakra-ui/react"
import PrimaryButton from "../../../buttons/PrimaryButton";

export const PromotionItem = ({bonusInfo, bonusCalculations}) => {
 const {t} = useTranslation("promotionsPage")

  return (
    <div className={styles.promotionMainItemWrapper}>
      <div className={styles.promotionItemWrapper}>
        <div className={styles.promotionFrame}>
          <div className={styles.promoImage}>
            <img src={urlGen(bonusInfo.image)} alt={`promotion image ${bonusInfo.id}`}/>
          </div>
          <div className={`${styles.promoHeading} __promoHeading`}>
            <h3>
              <span>{t(`bonuses.bonus_${bonusInfo?.id}.description_short.line_one`)} </span>
              <span>{t(`bonuses.bonus_${bonusInfo?.id}.description_short.line_two`)}</span>
            </h3>
          </div>

        </div>
        <div className={styles.promotionTextBlock}>
          <VStack
            w="100%"
            minH="254px"
            h="100%"
            borderBottom="1px solid #FFBF69"
            borderLeft="1px solid #FFBF69"
            borderRight="1px solid #FFBF69"
            p="10px"
          >
            <Text
              color="black"
              // mb="10px"
              fontSize="12px"
              lineHeight="14px"
              fontFamily="Verdana"
              noOfLines={6}
            >
              {t(`bonuses.bonus_${bonusInfo?.id}.description_long`, {x_key: bonusCalculations.x_key, y_key: bonusCalculations.y_key, wagner_require_key: bonusCalculations.wagner_require_key})}
            </Text>
            <Text color="accent.800" textAlign="center">{bonusInfo.addText}</Text>
            <Box fontSize="12px" lineHeight="21px" fontWeight={700} color="accent.800" textAlign="center" fontFamily="Verdana">
              <Box>
                {t(`bonuses.bonus_${bonusInfo?.id}.bonus_amount_info.max_bonus_amount`, {y_key: bonusCalculations.y_key})}
              </Box>
              <Box>
                {t(`bonuses.bonus_${bonusInfo?.id}.bonus_amount_info.min_deposit_amount`, {min_deposit_key: bonusCalculations.min_deposit_key})}
              </Box>
              <Box>
                {t(`bonuses.bonus_${bonusInfo?.id}.bonus_amount_info.playthrough_value`, {wagner_require_key: bonusCalculations.wagner_require_key})}
              </Box>
            </Box>
            <div style={{flex: 1}} />
            <Box w="100%" textAlign="center" pb="8px">
              <PrimaryButton borderRadius={0} fontSize="13px" p="4px 25px" height="29px" width="auto">
                {t('bonuses.knowMore')}
              </PrimaryButton>
            </Box>
          </VStack>
        </div>
      </div>
    </div>
  )
}
