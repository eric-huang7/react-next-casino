import BodyText from "../../../typography/BodyText";
import ErrorMessage from "../../../typography/ErrorMessage";
import RoundButton from "../../../buttons/RoundButton";
import Container from "../../ProfileInfoPage/ProfileInfoComponents/PhoneVerification/Container";
import {Input} from "@chakra-ui/input";
import {HStack} from "@chakra-ui/react";

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
        <Input onChange={(e) => googleKEyInputHandler(e.target.value)} value={googleKeyValue} type="text"
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
        <RoundButton type="submit" solid onClick={confirmButtonClickHandler}
          title={t('myAccount.twoFactorAuthPage.twoFaNOTCompleteContainer.codeInputBlock.confirmButton')} />
      </HStack>
    </form>
  </Container>
)
