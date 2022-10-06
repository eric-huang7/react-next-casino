import {Input} from "@chakra-ui/input";
import RoundButton from "../../../../buttons/RoundButton";
import {HStack} from "@chakra-ui/react";

export const VerifyCodeInputs = ({ t, verifyCodeInputHandler, verifyCode, sendVerifyCodeHandler }) => {

  return (
    <form onSubmit={sendVerifyCodeHandler}>
      <HStack alignItems="center" justifyContent="space-between" pt="8px">
        <Input
          onChange={(e) => verifyCodeInputHandler(e.target.value)}
          type="text"
          w="229px"
          h="38px"
          borderRadius="5px" bg="white"
          border="none"
          outline="none"
          mr="10px"
          fontSize="15px"
          color="text.450"
          fontFamily="Verdana"
          value={verifyCode}
        />
        <RoundButton
          onClick={sendVerifyCodeHandler}
          solid
          w="auto"
          px="25px"
          title={t('myAccount.profilePage.phoneVerification.buttons.confirm')}
        />
      </HStack>
    </form>
  )
}
