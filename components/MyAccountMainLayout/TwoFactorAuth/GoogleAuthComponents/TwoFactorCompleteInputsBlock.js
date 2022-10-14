import BodyText from "../../../typography/BodyText";
import ErrorMessage from "../../../typography/ErrorMessage";
import Container from "../../../form/Container";
import RoundButton from "../../../buttons/RoundButton";
import {HStack} from "@chakra-ui/react";

export const TwoFactorCompleteInputsBlock = ({
  t,
  deactivateButtonClickHandler,
  deactivateCodeValue,
  deactivateInputHandler,
  deactivateError
}) => (
  <Container>
    <BodyText bold fontSize={18}>222{t('myAccount.twoFactorAuthPage.twoFaCompleteContainer.deactivateGoogleAuth')}</BodyText>
    <BodyText pb={25}>{t('myAccount.twoFactorAuthPage.twoFaCompleteContainer.enterCurrentAuthCode')}</BodyText>
    {deactivateError && <ErrorMessage>{deactivateError}</ErrorMessage>}
    <form onSubmit={deactivateButtonClickHandler}>
      <HStack alignItems="center" justifyContent="space-between">
        <InputFieldLight onChange={deactivateInputHandler} value={deactivateCodeValue} />
        <RoundButton type="submit" solid onClick={deactivateButtonClickHandler}
          title={t('myAccount.twoFactorAuthPage.twoFaCompleteContainer.confirmButton')} />
      </HStack>
    </form>
  </Container>
)
