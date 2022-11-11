import RoundButton from "../../../buttons/RoundButton";
import {HStack} from "@chakra-ui/react";
import {Box, Text} from "@chakra-ui/layout";
import InputField from "../../../form/InputField";

export const AddPromoCodeContainer = ({
  t,
  isCenter,
  promoCodeValue,
  promoCodeInputHandler,
  savePromoCodeClickHandler,
  promoErrorValue,
  promoDepositText
}) => {

  return (
    <Box
      alignSelf={isCenter ? "center" : "start"}
      maxW="402px"
      w="100%"
      minH="144px"
      borderRadius="5px"
      bg="#eeeeee"
      p="25px 17px 20px 23px"
      m={isCenter ? "0 auto 30px auto" : "17px 0 30px 0px"}
    >
      <Text fontSize="15px" fontWeight={400} color="#595656" fontFamily="Verdana">
        {t('myAccount.bonusPage.addPromoCode.heading')}
      </Text>
      <Text fontSize="15px" fontWeight={600} color="gray.850" fontFamily="Verdana">
        {t('myAccount.bonusPage.addPromoCode.addText')}
      </Text>
      <form onSubmit={savePromoCodeClickHandler}>
        <HStack alignItems="center" justifyContent="space-between" mt="32px">

          <InputField
            error={promoErrorValue}
            onChange={(e) => promoCodeInputHandler(e.target.value)}
            value={promoCodeValue}
            fontSize={16}
            px={2}
            inputProps={{
              maxW: "229px",
              w: "100%",
              h: "28px",
              borderRadius: "5px",
              bg: "white"
            }}

          />
          <RoundButton fontSize="12px" solid onClick={savePromoCodeClickHandler}
                       title={t('myAccount.bonusPage.addPromoCode.saveButton')}/>
        </HStack>
      </form>
      <Box fontSize={12} color="#595656">{promoDepositText ? promoDepositText : ''}</Box>
    </Box>
  )
}
