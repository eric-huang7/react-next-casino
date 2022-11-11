import {PaymentDataItem} from "./PaymentDataItem";
import useWindowDimensions from "../../hooks/useWindowDimensions";
import { Box } from "@chakra-ui/react";
import BodyText from "../typography/BodyText";
import {HStack} from "@chakra-ui/layout";

const withdrawInfo = {
  depositId: 1,
  paymentId: 1,
  paymentImage: '/assets/img/withdrawIcons/bitcoin.webp',
  paymentName: "Bitcoin",
  depositType: "Munch Better",
  depositFee: "0%",
  depositProcessingTime: "Instantly",
  depositLimitPerTransaction: {
    minLimit: "$ 10",
    maxLimit: "$ 5000"
  }
}

export const PaymentsWithdrawBlock = ({t}) => {
  const {width} = useWindowDimensions();

  let arrItemsFullScreen = [
    <PaymentDataItem key={`${withdrawInfo.depositId} withdraw 1`} t={t} dataInfo={withdrawInfo} type={'withdraw'}/>,
    <PaymentDataItem key={`${withdrawInfo.depositId} withdraw 2`} t={t} dataInfo={withdrawInfo} type={'withdraw'}/>,
    <PaymentDataItem key={`${withdrawInfo.depositId} withdraw 3`} t={t} dataInfo={withdrawInfo} type={'withdraw'}/>,
    <PaymentDataItem key={`${withdrawInfo.depositId} withdraw 4`} t={t} dataInfo={withdrawInfo} type={'withdraw'}/>,
  ];
  let arrItemMobile = [
    <PaymentDataItem key={`${withdrawInfo.depositId} withdraw 1`} t={t} dataInfo={withdrawInfo} type={'withdraw'}/>,
    <PaymentDataItem key={`${withdrawInfo.depositId} withdraw 2`} t={t} dataInfo={withdrawInfo} type={'withdraw'}/>,
    <PaymentDataItem key={`${withdrawInfo.depositId} withdraw 3`} t={t} dataInfo={withdrawInfo} type={'withdraw'}/>,
  ];


  let usedArrItems = arrItemsFullScreen;

  if (width < 665) {
    usedArrItems = arrItemMobile;
  } else {
    usedArrItems = arrItemsFullScreen;
  }
  return (
    <Box w="100%" mt="55px">
      <BodyText as="h2" bold textTransfor="uppercase" color="primary.500">
        {t("paymentsMethodsPage.withdrawBlock.heading")}
      </BodyText>
      <Box w="100%" bg="rgba(0, 0, 0, 0.3)" p="13px" mt="30px">
        <HStack border="1px solid #66686d" w="100%" minH="100%" p="20px" justifyContent="center" flexWrap="wrap">
          {usedArrItems.map((el) => el)}
        </HStack>
      </Box>
    </Box>
  )
}
