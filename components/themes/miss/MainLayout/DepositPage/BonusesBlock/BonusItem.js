import {useTranslation} from "next-i18next";
import { HStack } from "@chakra-ui/react";
import {iconsUrl} from "/helpers/imageUrl";
import {useSelector} from "react-redux";
import {BonusesBlock} from "./BonusesBlock";
import {bonusInfoCalculator} from "/helpers/bonusInfoCalculator";

export const BonusesItem = ({bonusData}) => {
  const {t} = useTranslation('promotionsPage');

  const userCurrency = useSelector((state) => state.userFinance)
  const bonusDescription = bonusData && bonusInfoCalculator(bonusData, userCurrency.userCurrencyData, t);

  return (
    <HStack
      h="81px"
       maxW="100%"
      bg="primary.400"
      border="0"
      borderRadius="12px"
      alignItems="center"
      overflow="hidden"
      spacing={0}
      px="12px"
    >
      <BonusesBlock
        t={t}
        bonusImage={iconsUrl(bonusData.icon)}
        bonusHeading={`bonuses.bonus_${bonusData.id}.deposit_bonus.heading`}
        bonusDescription={`${bonusDescription.max_bonus}${bonusDescription.free_spins_amount ? ` + ${bonusDescription.free_spins_amount} ${t('bonusInfoContainer.bonusInfo.freeSpins')}` : ''}`}
        bonusData={bonusData}
        userCurrency={userCurrency}
        canShowInfo={true}
      />
    </HStack>)
}
