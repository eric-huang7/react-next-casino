import { Text } from "@chakra-ui/react";
import {Box} from "@chakra-ui/layout";

export const PaymentsInformationBlock = ({t}) => (
  <Box p={{base: "0 20px", lg: 0}}>
    <Box w="100%" minH="195px" bg="rgba(0, 0, 0, 0.3)" p="13px" mt="30px">
      <Box border="1px solid #66686d" w="100%" minH="100%" p="20px">
        <Text as="h2" fontSize="16px" color="primary.500" fontFamily="Verdana" textTransform="uppercase"
              fontWeight={600} m="0 0 45px 0">
          {t("paymentsMethodsPage.mainBlock.heading")}
        </Text>
        <Text fontSize="16px" color="white" fontFamily="Verdana">
          {t("paymentsMethodsPage.mainBlock.textInfo")}
        </Text>
      </Box>
    </Box>
  </Box>
)
