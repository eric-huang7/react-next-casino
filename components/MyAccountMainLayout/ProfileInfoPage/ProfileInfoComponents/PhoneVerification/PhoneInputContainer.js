import BodyText from "../../../../typography/BodyText";
import RoundButton from "../../../../buttons/RoundButton";
import { HStack } from "@chakra-ui/react";
import ErrorMessage from "../../../../typography/ErrorMessage";
import {Input} from "@chakra-ui/input";
import Container from "./Container";

export const PhoneInputContainer = ({ t, phoneInputValue, phoneNumber, sendPhoneNumberHandler, phoneError }) => (
  <Container>
    <div>
      <BodyText>{t('myAccount.profilePage.phoneVerification.inputsLabels.addVerifiedPhone')}</BodyText>
      <BodyText fontSize={13} bold color="text.800">
        {t('myAccount.profilePage.phoneVerification.inputsLabels.verifyCodeWillSend')}
      </BodyText>
    </div>
    <form onSubmit={sendPhoneNumberHandler}>
      <HStack alignItems="center" justifyContent="space-between" pt="27px">
        <Input onChange={(e) => phoneInputValue(e.target.value)} value={phoneNumber} type="tel"
          w="229px"
          h="38px"
          borderRadius="5px" bg="white"
          border="none"
          outline="none"
          mr="10px"
          fontSize="15px"
          color="text.450"
          fontFamily="Verdana"
        />
        <RoundButton
          onClick={sendPhoneNumberHandler}
          type="submit"
          solid
          w="auto"
          px="25px"
          title={t('myAccount.profilePage.phoneVerification.buttons.add')}
        />
      </HStack>
    </form>
    <ErrorMessage fontSize={11}>{phoneError}</ErrorMessage>
  </Container>
)
