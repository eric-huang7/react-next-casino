import { Box, Image } from "@chakra-ui/react";
import BonusErrorHandler from "./BonusErrorHandler";
import SelectModal from "../modal/SelectModal";
import {useTranslation} from "next-i18next";
import {bonusInfoCalculator} from "../../helpers/bonusInfoCalculator";
import {HStack, Text, VStack} from "@chakra-ui/layout";
import {useRouter} from "next/router";

export const BonusInfoContainer = ({isShow, infoClickHandler, bonusData, userCurrency, fromDeposit}) => {
  const router = useRouter();
  const {t} = useTranslation('common');

  const closeButtonClickHandler = (e) => {
    infoClickHandler(!isShow);
  }

  let bonusInfo = bonusInfoCalculator(bonusData, userCurrency.userCurrencyData, t);

  const handleTerms = () => {
    closeButtonClickHandler();
    router.push('/termsAndConditions');
  }

  const data = [
    {label: t("bonusInfoContainer.bonusInfo.maxBonus"), value: bonusInfo.max_bonus},
    {label: t("bonusInfoContainer.bonusInfo.freeSpins"), value: bonusInfo.free_spins},
    {label: t("bonusInfoContainer.bonusInfo.wageringRequirements"), value: bonusInfo.wagering},
    {label: t("bonusInfoContainer.bonusInfo.maxBet"), value: bonusInfo.max_bet},
  ]

  return isShow && (
    <SelectModal
      isOpen={true}
      width={340}
      onClose={closeButtonClickHandler}
      title={t('bonusInfoContainer.bonusInfo.heading')}
    >
        <BonusErrorHandler>
          <Box w="100%" pb={4}>
            <VStack
              m="15px 10px 30px"
              border="1px solid"
              borderColor="grey.300"
              borderRadius="10px"
              w="calc(100% - 20px)"
              fontSize="12px"
              color="text.250"
              overflow="hidden"
              spacing={0}
            >
              {data.map((item, index) => item.value ? <HStack
                w="100%"
                spacing={0}
                minH="40px"
                alignItems="stretch"
                borderBottom={index === data.length - 1 ? "0px solid" : "1px solid"}
                borderColor="grey.300"
              >
                <Box p={1} w="50%" alignItems="center" display="flex">{item.label}</Box>
                <Box p={1} w="50%" bg="grey.200" display="flex" textAlign="right" justifyContent="flex-end" overflow="hidden" alignItems="center" color="black">
                  {item.value}
                </Box>
              </HStack> : null)}
            </VStack>

            {bonusInfo.min_deposit && <HStack bg="accent.500" minH="45px" p="5px 20px" mb="20px" spacing={3}>
              <Image src={'/assets/icons/arrowsIcon-transparent.png'} alt="" width="40px" height="40px"/>
              <Text fontFamily="Arial" color="white" fontSize="12px" m={0}>
                {bonusInfo.min_deposit}
              </Text>
            </HStack>}

            <HStack onClick={handleTerms} justifyContent="center">
              <Text color="accent.500" fontFamily="Lithograph" fontSize="14px" fontWeight={600} cursor="pointer">
               {t("bonusInfoContainer.bonusTermsConditionsLink")}
              </Text>
            </HStack>
          </Box>
        </BonusErrorHandler>
    </SelectModal>
  )
}
