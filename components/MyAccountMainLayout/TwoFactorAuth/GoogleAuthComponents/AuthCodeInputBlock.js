import BodyText from "../../../typography/BodyText";
import ErrorMessage from "../../../typography/ErrorMessage";
import RoundButton from "../../../buttons/RoundButton";
import Container from "../../ProfileInfoPage/ProfileInfoComponents/PhoneVerification/Container";
import {HStack} from "@chakra-ui/react";
import InputFieldLight from "../../../form/InputFieldLight";

export const AuthCodeInputBlock = ({
  t,
  confirmButtonClickHandler,
  googleKEyInputHandler,
  googleKeyValue,
  googleAuthError
}) => (
  <Container>
    <BodyText>{t('myAccount.twoFactorAuthPage.twoFaNOTCompleteContainer.codeInputBlock.textOne')}</BodyText>
    <BodyText bold pb="25px">{t('myAccount.twoFactorAuthPage.twoFaNOTCompleteContainer.codeInputBlock.textTwo')}</BodyText>
    {googleAuthError && <ErrorMessage>{googleAuthError}</ErrorMessage>}
    <form onSubmit={confirmButtonClickHandler}>
      <HStack alignItems="center" justifyContent="space-between">
        <InputFieldLight onChange={googleKEyInputHandler} value={googleKeyValue} />
        <RoundButton type="submit" solid onClick={confirmButtonClickHandler}
          title={t('myAccount.twoFactorAuthPage.twoFaNOTCompleteContainer.codeInputBlock.confirmButton')} />
      </HStack>
    </form>
  </Container>
)
