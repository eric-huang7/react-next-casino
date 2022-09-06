import { BonusButton } from './BonusButton'
import ErrorEmpty from '../../ErrorBoundaryComponents/ErrorEmpty'
import { Text, VStack, Stack } from "@chakra-ui/react"
import {Box} from "@chakra-ui/layout";
import ShadowHeading from "../../typography/ShadowHeading";
import {urlGen} from "../../../helpers/imageUrl";
import {thinScroll} from "../../../styles/theme";

const AmountText = ({children, ...props}) => (
  <Text
    mt={0}
    fontSize={{base: "16px", lg: "18px"}}
    lineHeight={{base: "20px", lg: "22px"}}
    color="white"
    fontFamily={{base: "Arial", lg: "Myriad Pro"}}
    {...props}
  >
    {children}
  </Text>
)

const TitleText = ({children, ...props}) => (
  <Text
    mt={0}
    fontSize={{base: "16px", lg: "38px"}}
    lineHeight={{base: "20px", lg: "48px"}}
    color="white"
    fontFamily={{base: "Arial", lg: "Lithograph"}}
    m={0}
    textTransform="uppercase"
    {...props}
  >
    {children}
  </Text>
)

export const Bonus = ({ t, bonusInfo, locale, bonusCalculations, userData, reverse }) => (
  <>
    <Box textAlign={reverse ? "right" : "left"}>
      <ShadowHeading>
        {t(`bonuses.bonus_${bonusInfo?.id}.heading.line_one`)}
      </ShadowHeading>
      <ShadowHeading fontSize={{base: "24px", lg: "28px"}} color={reverse ? "#52a4ff" : "primary.500"}>
        {t(`bonuses.bonus_${bonusInfo?.id}.heading.line_two`)}
      </ShadowHeading>
    </Box>
    <Box
      w="100%"
      minH="310px"
      h={{base: "auto", lg: "420px"}}
      position="relative"
      p={{base: "10px", lg: "53px 10px 10px"}}
      pt={{base: "11vw", lg: "53px"}}
      mt={{base: "8px", lg: 0}}
      overflow="hidden"
      mb={{base: "30px", lg: "40px"}}
    >
      <Box
        width={{base: "100%", lg: "460px"}}
        minH={{base: "175px", lg: "100%"}}
        h={{base: "calc(100vw - 48px)", lg: "auto"}}
        mt={0}
        position="absolute"
        bottom={{base: "unset", lg: 0}}
        left={reverse ? "auto" : 0}
        right={reverse ? 0 : "auto"}
        top={0}
        backgroundRepeat="no-repeat"
        backgroundSize="cover"
        backgroundPosition="center center"
        backgroundImage={`url(${urlGen(bonusInfo?.image)})`}
      />

      <Stack
        w="100%"
        h="100%"
        border="1px solid #FFBF69"
        position="relative"
        zIndex={1}
        flexDirection={{base: "column", lg: "row"}}
        alignItems="flex-start"
      >
        <VStack
          minH={{base: "175px", lg: "inherit"}}
          h="calc(100% + 20px)"
          p="30px"
          mr={{base: "-10px", lg: reverse ? "450px" : "-10px"}}
          mb="-10px"
          ml={{base: "-10px", lg: reverse ? "-10px" : "450px"}}
          mt={{base: "calc(89vw - 48px)", lg: "-10px"}}
          bg={reverse ? "rgba(82, 164, 255, 0.5)" : "rgba(255, 155, 155, 0.5)"}
          alignItems="flex-start"
          justifyContent="space-between"
          overflow="hidden"
          spacing={0}
          position="relative"
        >
          <ErrorEmpty>
            <BonusButton
              bonusInfo={bonusInfo}
              userData={userData}
            />
          </ErrorEmpty>

          <Box>
            <TitleText>{t(`bonuses.bonus_${bonusInfo?.id}.description_short.line_one`)}</TitleText>
            <TitleText color="#57a7ff">{t(`bonuses.bonus_${bonusInfo?.id}.description_short.line_two`)}</TitleText>
          </Box>

          <Box pb={2}>
            <AmountText>
              {t(`bonuses.bonus_${bonusInfo?.id}.bonus_amount_info.max_bonus_amount`, {y_key: bonusCalculations.y_key})}
            </AmountText>
            <AmountText>
              {t(`bonuses.bonus_${bonusInfo?.id}.bonus_amount_info.min_deposit_amount`, {min_deposit_key: bonusCalculations.min_deposit_key})}
            </AmountText>
            <AmountText>
              {t(`bonuses.bonus_${bonusInfo?.id}.bonus_amount_info.playthrough_value`, {wagner_require_key: bonusCalculations.wagner_require_key})}
            </AmountText>
          </Box>

          <Box overflowY="auto" p={0} mt="16px" css={thinScroll}>
            <AmountText
              mt={0}
              fontSize={{base: "16px", lg: "18px"}}
              lineHeight={{base: "20px", lg: "22px"}}
              color="white"
              fontFamily={{base: "Arial", lg: "Myriad Pro"}}
            >
              {t(`bonuses.bonus_${bonusInfo?.id}.description_long`, {x_key: bonusCalculations.x_key, y_key: bonusCalculations.y_key, wagner_require_key: bonusCalculations.wagner_require_key})}
            </AmountText>
          </Box>
        </VStack>
      </Stack>
    </Box>
  </>
)
