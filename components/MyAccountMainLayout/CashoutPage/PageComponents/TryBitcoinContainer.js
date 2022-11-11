import {useDispatch} from "react-redux";
import { HStack, Text, Box } from '@chakra-ui/react';
import {setUserCurrencySwitcher} from "../../../../redux/userFinance/action";
import {showDepositModal} from "../../../../redux/popups/action";
import RoundButton from "../../../buttons/RoundButton";

export const TryBitcoinContainer = ({t, btcCurrency}) => {
  const dispatch = useDispatch()

  const tryBitcoinButtonHandler = () => {
    dispatch(setUserCurrencySwitcher(btcCurrency));
    dispatch(showDepositModal(true));
  }

  return (
    <Box>
      <Text m="0 0 40px 0" fontSize="16px" color="text.450" fontFamily="Verdana">
        {t("myAccount.cashoutPage.selectPaymentContainer.tryBitcoinBlock.heading")}
      </Text>
      <RoundButton
        solid
        onClick={tryBitcoinButtonHandler}
        title={<HStack>
          <span>{t("myAccount.cashoutPage.selectPaymentContainer.tryBitcoinBlock.button.playWith")}</span>
          <img src="/assets/img/myAccount/cashoutPage/bitcoinIcon.webp" width="21px" height="21px" alt="bincoin icon"/>
          <span>{t("myAccount.cashoutPage.selectPaymentContainer.tryBitcoinBlock.button.bitcoin")}</span>
        </HStack>}
      />
    </Box>
  )
}
