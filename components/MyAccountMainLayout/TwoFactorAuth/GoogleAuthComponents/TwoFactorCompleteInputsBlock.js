import BodyText from "../../../typography/BodyText";
import ErrorMessage from "../../../typography/ErrorMessage";
import Container from "../../../form/Container";
import RoundButton from "../../../buttons/RoundButton";
import {HStack} from "@chakra-ui/react";
import {Input} from "@chakra-ui/input";

export const TwoFactorCompleteInputsBlock = ({
  t,
  deactivateButtonClickHandler,
  deactivateCodeValue,
  deactivateInputHandler,
  deactivateError
}) => (
  <Container>
    <BodyText bold fontSize={18}>{t('myAccount.twoFactorAuthPage.twoFaCompleteContainer.deactivateGoogleAuth')}</BodyText>
    <BodyText pb={25}>{t('myAccount.twoFactorAuthPage.twoFaCompleteContainer.enterCurrentAuthCode')}</BodyText>
    {deactivateError && <ErrorMessage>{deactivateError}</ErrorMessage>}
    <form onSubmit={deactivateButtonClickHandler}>
      <HStack alignItems="center" justifyContent="space-between">
        <Input onChange={(e) => deactivateInputHandler(e.target.value)} value={deactivateCodeValue} type="text"
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
        <RoundButton type="submit" solid onClick={deactivateButtonClickHandler}
          title={t('myAccount.twoFactorAuthPage.twoFaCompleteContainer.confirmButton')} />
      </HStack>
    </form>
  </Container>
)
