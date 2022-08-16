import {urlGen} from "../../../../helpers/imageUrl";
import {useTranslation} from "next-i18next";
import { Box, Text, VStack } from "@chakra-ui/react"
import PrimaryButton from "../../../buttons/PrimaryButton";

export const PromotionItem = ({bonusInfo, bonusCalculations}) => {
  const {t} = useTranslation("promotionsPage")

  return (
    <Box
      w={{base: "215px", lg: "387px"}}
      minH={{base: "425px", lg: "617px"}}
      height="auto"
      position="relative"
      m="auto"
    >
      <Box
        w="100%"
        h="353px"
        position="relative"
        overflow="hidden"
      >
        <Box
          w="100%"
          h={{base: "200px", lg: "353px"}}
          overflow="hidden"
          position="relative"
          _before={{
            content: `""`,
            position: "absolute",
            top: "45px",
            left: "10px",
            right: "10px",
            height: "calc(100% - 45px)",
            borderTop: "1px solid #FFBF69",
            borderLeft: "1px solid #FFBF69",
            borderRight: "1px solid #FFBF69"
          }}
        >
          <img src={urlGen(bonusInfo.image)} alt={`promotion image ${bonusInfo.id}`}/>
        </Box>
        <Box
          position="absolute"
          zIndex={10}
          top={0}
          w="100%"
        >
          <Text
            as="h3"
            m="72px 25px 0"
            textTransform="uppercase"
            color="white"
            fontFamily="Woodpecker"
            fontWeight={600}
            fontSize={{base: "20px", lg: "48px"}}
            lineHeight={{base: "20px", lg: "46px"}}
            textAlign="center"
          >
            <span>{t(`bonuses.bonus_${bonusInfo?.id}.description_short.line_one`)} </span>
            <span>{t(`bonuses.bonus_${bonusInfo?.id}.description_short.line_two`)}</span>
          </Text>
        </Box>

      </Box>
      <Box
        bg="white"
        position="absolute"
        bottom={0}
        left={0}
        w="100%"
        minH={{base: "235px", lg: "264px"}}
        h="auto"
        p="0 10px 10px 10px"
      >
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
            fontSize={{base: "10px", lg: "12px"}}
            lineHeight={{base: "12px", lg: "14px"}}
            fontFamily="Verdana"
            noOfLines={6}
          >
            {t(`bonuses.bonus_${bonusInfo?.id}.description_long`, {x_key: bonusCalculations.x_key, y_key: bonusCalculations.y_key, wagner_require_key: bonusCalculations.wagner_require_key})}
          </Text>
          <Text color="accent.800" textAlign="center">{bonusInfo.addText}</Text>
          <Box fontSize={{base: "10px", lg: "12px"}} lineHeight={{base: "14px", lg: "21px"}} fontWeight={700} color="accent.800" textAlign="center" fontFamily="Verdana">
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
      </Box>
    </Box>
  )
}
