import { VerifyCodeInputs } from './VerifyCodeInputs'
import { VerifyPhoneUserInfoTable } from './VerifyPhoneUserInfoTable'
import ErrorText from '../../../../ErrorBoundaryComponents/ErrorText'
import Container from "./Container";
import { HStack } from "@chakra-ui/react";
import RoundButton from "../../../../buttons/RoundButton";
import ErrorMessage from "../../../../typography/ErrorMessage";

export const VerifyCodeInputContainer = ({
  t,
  userInfo,
  phoneError,
  sendAgainVerifyCode,
  removePhoneNumberHandler,
  status,
  verifyCodeInputHandler,
  verifyCode,
  sendVerifyCodeHandler
}) => {
  let phoneNumber = userInfo?.unconfirmed_phone?.replaceAll('-', '')?.split('')?.map((el, ind) => {
    if (ind === 5 || ind === 6 || ind === 7) {
      return '*'
    } else {
      return el
    }
  })

  return (
    <Container>
      <ErrorText>
        <VerifyPhoneUserInfoTable
          phoneNumber={phoneNumber}
          t={t}
          status={status}
        />
      </ErrorText>
      <HStack alignItems="center">
        <RoundButton onClick={removePhoneNumberHandler} solid
                     title={t('myAccount.profilePage.phoneVerification.buttons.remove')}/>
        <RoundButton onClick={sendAgainVerifyCode} solid
                     title={t('myAccount.profilePage.phoneVerification.buttons.sendAgain')}/>
      </HStack>
      <ErrorText>
        <VerifyCodeInputs
          verifyCodeInputHandler={verifyCodeInputHandler}
          t={t}
          verifyCode={verifyCode}
          sendVerifyCodeHandler={sendVerifyCodeHandler}
        />
      </ErrorText>
      <ErrorMessage>{phoneError}</ErrorMessage>
    </Container>
  )
}
