import {PaymentDataItem} from "./PaymentDataItem";
import useWindowDimensions from "../../hooks/useWindowDimensions";
import BodyText from "../typography/BodyText";
import {Box} from "@chakra-ui/react";
import {HStack} from "@chakra-ui/layout";

const depositInfo = {
  depositId: 1,
  paymentId: 1,
  paymentImage: '/assets/img/paymentsIcons/skrill.webp',
  paymentName: "Skrill",
  depositType: "Munch Better",
  depositFee: "0%",
  depositProcessingTime: "Instantly",
  depositLimitPerTransaction: {
    minLimit: "$ 10",
    maxLimit: "$ 5000"
  }
}

export const PaymentsDepositBlock = ({t, }) => {
  const {width} = useWindowDimensions();

  let arrItemsFullScreen =  [
    <PaymentDataItem key={`${depositInfo.depositId} deposit 1`} t={t} dataInfo={depositInfo} type={"deposit"}/>,
    <PaymentDataItem key={`${depositInfo.depositId} deposit 2`} t={t} dataInfo={depositInfo} type={"deposit"}/>,
    <PaymentDataItem key={`${depositInfo.depositId} deposit 3`} t={t} dataInfo={depositInfo} type={"deposit"}/>,
    <PaymentDataItem key={`${depositInfo.depositId} deposit 4`} t={t} dataInfo={depositInfo} type={"deposit"}/>,
    <PaymentDataItem key={`${depositInfo.depositId} deposit 5`} t={t} dataInfo={depositInfo} type={"deposit"}/>,
    <PaymentDataItem key={`${depositInfo.depositId} deposit 6`} t={t} dataInfo={depositInfo} type={"deposit"}/>,
    <PaymentDataItem key={`${depositInfo.depositId} deposit 7`} t={t} dataInfo={depositInfo} type={"deposit"}/>,
    <PaymentDataItem key={`${depositInfo.depositId} deposit 8`} t={t} dataInfo={depositInfo} type={"deposit"}/>,
  ];
  let arrItemMobile = [
    <PaymentDataItem key={`${depositInfo.depositId} deposit 1`} t={t} dataInfo={depositInfo} type={"deposit"}/>,
    <PaymentDataItem key={`${depositInfo.depositId} deposit 2`} t={t} dataInfo={depositInfo} type={"deposit"}/>,
    <PaymentDataItem key={`${depositInfo.depositId} deposit 3`} t={t} dataInfo={depositInfo} type={"deposit"}/>,
  ]

 let usedArrItems = arrItemsFullScreen;

  if (width < 665) {
    usedArrItems = arrItemMobile;
  } else {
    usedArrItems = arrItemsFullScreen;
  }

  return (
    <Box w="100%" mt="55px">
      <BodyText as="h2" bold textTransfor="uppercase" color="primary.500">
        {t("paymentsMethodsPage.depositBlock.heading")}
      </BodyText>
      <Box w="100%" bg="rgba(0, 0, 0, 0.3)" p="13px" mt="30px">
        <HStack border="1px solid #66686d" w="100%" minH="100%" p="20px" justifyContent="center" flexWrap="wrap">
          {usedArrItems.map((el) => el)}
        </HStack>
      </Box>
    </Box>
  )
}
