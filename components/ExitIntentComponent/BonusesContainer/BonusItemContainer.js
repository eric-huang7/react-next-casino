import {useTranslation} from "next-i18next";
import {useRouter} from "next/router";
import { Text, Image, Button } from "@chakra-ui/react";
import {user_url} from "../../../redux/url/url";
import {setUserBonus, setUserRegisterBonusCode} from "../../../redux/userBonus/action";
import {showDepositModal} from "../../../redux/popups/action";
import {useDispatch} from "react-redux";
import {showRegister} from "../../../redux/ui/action";
import Connect from "../../../helpers/connect";
import {iconsUrl, urlGen} from "../../../helpers/imageUrl";
import {Box, HStack, VStack} from "@chakra-ui/layout";

export const BonusItemContainer = ({bonusData, userData, exit, index}) => {
  const dispatch = useDispatch()
  const common = useTranslation('common');
  const {t} = useTranslation('promotionsPage');
  const router = useRouter();

  const submitBonusHandler = () => {
    if (userData.isAuthenticated) {
      const sendData = {
        id : userData.user.user.id,
        current_bonus_code: bonusData.redemption_code,
      }
      Connect.patch(user_url, JSON.stringify(sendData), {}, (status, data) => {
        if (data.data.bonus_offer) {
          dispatch(setUserBonus(bonusData.id));
          dispatch(showDepositModal(true));
          exit();

        } else {
          exit();
          router.push({
            pathname: '/games-page/bonus-games',
            query: {
              id: "bonus-games",
              bonus_heading: t(`bonuses.bonus_${bonusData.id}.deposit_bonus.heading`),
            }
          })
        }
      }).catch((errorData) => {
        exit();
      })
    } else {
      exit();
      dispatch(showRegister(true));
      dispatch(setUserRegisterBonusCode(bonusData.redemption_code));
    }
  }

  return (
    <HStack mb="7px" spacing={0}>
      <Box maxW="116px" w="100%" h="118px" overflow="hidden" position="relative" mr="14px">
        <Image src={urlGen(bonusData.image)} alt="" />
      </Box>
      <Box pb="10px" borderBottom="1px solid" borderColor="text.200">
        <Text fontSize="24px" fontWeight={400} color={index % 2 ? "#2263ac" : "primary.500"} fontFamily="Myriad Pro"
              textTransform="uppercase" m="0 0 7px 0" as="h3">
          {t(`bonuses.bonus_${bonusData.id}.deposit_bonus.heading`)}
        </Text>
        <HStack alignItems="center" spacing={0}>
          <Image src={iconsUrl(bonusData.icon)} alt="" mr="5px" maxW="44px" w="100%" />
          <VStack alignItems="center" justifyContent="center" spacing={0}>
            <Text m="0 0 5px 0" fontSize="17px" letterSpacing="2px" color="text.300" fontWeight="bold"
                  fontFamily="Arial" textAlign="center" textTransform="uppercase">
              {t(`bonuses.bonus_${bonusData.id}.deposit_bonus.description`)}
            </Text>
            <Button onClick={submitBonusHandler} w="fit-content" h="35px" borderRadius="8px" bg="#e64b3b" fontSize="12px"
              color='white' fontFamily="Verdana" textTransform="uppercase" border="none" outline="none" p="10px">
              {userData.isAuthenticated
                ? common.t("exitIntentPopup.bonusesContainer.claimButton")
                : common.t("exitIntentPopup.bonusesContainer.signUpButton")}
            </Button>
          </VStack>
        </HStack>
      </Box>
    </HStack>
  )
}
