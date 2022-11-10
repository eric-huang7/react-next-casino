import { Box, Image } from "@chakra-ui/react";
import BonusErrorHandler from "./BonusErrorHandler";
import SelectModal from "../modal/SelectModal";
import {useTranslation} from "next-i18next";
import {bonusInfoCalculator} from "../../helpers/bonusInfoCalculator";
import {HStack, Text, VStack} from "@chakra-ui/layout";
import {useRouter} from "next/router";
import {useSelector} from "react-redux";

export const BonusInfoContainer = ({isShow, infoClickHandler, bonusData, fromDeposit}) => {
  const router = useRouter();
  const {t} = useTranslation('common');

  const closeButtonClickHandler = (e) => {
    infoClickHandler(!isShow);
  }
  const userCurrency = useSelector((state) => state.userFinance)
  let bonusInfo = bonusInfoCalculator(bonusData, userCurrency?.userCurrencyData, t);

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
      width={500}
      headerHeight={70}
      onClose={closeButtonClickHandler}
      title={t('bonusInfoContainer.bonusInfo.heading')}
    >
        <BonusErrorHandler>
          <Box w="100%" pb={4} px="20px">
            <VStack
              m="10px 0 21px"
              border="1px solid"
              borderColor="#5B3229"
              borderRadius="10px"
              w="100%"
              fontSize="16px"
              fontFamily="Montserrat"
              color="white"
              overflow="hidden"
              spacing={0}
            >
              {data.map((item, index) => item.value ? <HStack
                w="100%"
                spacing={0}
                minH="40px"
                alignItems="stretch"
                borderBottom={index === data.length - 1 ? "0px solid" : "1px solid"}
                borderColor="#5B3229"
              >
                <Box p={3} w="50%" alignItems="center" display="flex">{item.label}</Box>
                <Box p={3} w="50%" bg="accent.890" display="flex" textAlign="right" justifyContent="flex-end"
                     overflow="hidden" alignItems="center" color="white">
                  {item.value}
                </Box>
              </HStack> : null)}
            </VStack>

            {bonusInfo.min_deposit && <HStack bg="accent.700" minH="45px" p="16px 21px" mb="20px" borderRadius="12px"
              spacing={5}>
              <Image src={'/assets/icons/refresh.svg'} alt="" width="40px" height="40px"/>
              <Text fontFamily="Montserrat" color="white" fontSize="15px" m={0}>
                {bonusInfo.min_deposit}
              </Text>
            </HStack>}

            <HStack justifyContent="center">
              <Text color="white" fontFamily="Montserrat" fontSize="16px" fontWeight={400} onClick={handleTerms}
                    cursor="pointer">
               {t("bonusInfoContainer.generalBonus")} <Text as="span" color="primary.500">
                  {t("bonusInfoContainer.bonusTermsConditionsLink")}
                </Text>
              </Text>

            </HStack>
          </Box>
        </BonusErrorHandler>
    </SelectModal>
  )
}
