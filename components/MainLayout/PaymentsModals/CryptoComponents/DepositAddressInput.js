import InputFieldRound from "../../../form/InputFieldRound";
import {chakra} from "@chakra-ui/react";
import {Text, VStack} from "@chakra-ui/layout";

const CopyIcon = ({id, onClick}) => <chakra.label
  htmlFor={id}
  onClick={onClick}
  w="31px"
  h="31px"
  cursor="pointer"
  bg='url("/assets/img/paymentsModals/copy.webp") no-repeat'>
</chakra.label>

export const DepositAddressInput = ({addressData, t, memoData}) => {
  const handleCopy = (e) => {
    e?.target?.control?.select();
    document.execCommand("copy");
  }

  return (
    <>
      <VStack w={{base: "100%", lg: "356px"}} alignItems="flex-start" spacing={0}>
        <Text as="div" fontSize="16px" color="text.250" fontFamily="Verdana">
          {t("cryptoPayment.depositAddress")}
        </Text>

        <InputFieldRound
          value={addressData}
          id="depositAddressInput"
          icon={<CopyIcon id="depositAddressInput" onClick={handleCopy} />}
          iconStyle={{ bg: "white", borderLeft: "1px solid" }}
        />
      </VStack>

      {memoData &&
        <VStack w="356px" alignItems="flex-start" spacing={0} pt={2}>
          <Text as="div" fontSize="16px" color="text.250" fontFamily="Verdana">
            {t("cryptoPayment.memo")}
          </Text>

          <InputFieldRound
            value={memoData}
            id="memoInput"
            icon={<CopyIcon id="memoInput" onClick={handleCopy} />}
            iconStyle={{ bg: "white", borderLeft: "1px solid" }}
          />
        </VStack>
      }
    </>
  )
}
