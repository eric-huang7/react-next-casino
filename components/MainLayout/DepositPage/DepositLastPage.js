import {useSelector} from "react-redux";
import InputField from "../../form/InputField";
import {VStack, HStack, Text} from "@chakra-ui/react";

export const DepositLastPage = ({
  t, userDepositValue, depositValueInputHandler, userDepositValueError, userInfo, userCurrency
}) => {
  const chosenPayment = useSelector((state) => state.userFinance)

  return (
    <VStack w="100%" px={4} py={2} spacing={3}>
      <HStack w="100%" justifyContent="center">
        <img src={chosenPayment.paymentImg} alt=""/>
      </HStack>
      <InputField
        label={t("depositPage.depositLastPage.emailLabel")}
        defaultValue={userInfo?.user?.email}
        id={'paymentEmail'}
        fontSize={22}
        px={2}
      />
      <InputField
        label={t("depositPage.depositLastPage.amountPayment")}
        defaultValue={userDepositValue}
        onChange={depositValueInputHandler}
        error={t(userDepositValueError)}
        id={'paymentAmount'}
        fontSize={22}
        px={2}
      />
      <Text color="grey.600" fontSize={14}>{t("depositPage.depositLastPage.secureInfo")}</Text>
    </VStack>
  )
}
