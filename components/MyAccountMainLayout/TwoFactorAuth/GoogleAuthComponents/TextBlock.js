import BodyText from "../../../typography/BodyText";
import {Box} from "@chakra-ui/react";

export const TextBlock = ({ t }) => {

  return (
    <Box>
      <BodyText pb={4}>{t('myAccount.twoFactorAuthPage.twoFaNOTCompleteContainer.textBlock.textOne')}</BodyText>
      <BodyText pb={4}>{t('myAccount.twoFactorAuthPage.twoFaNOTCompleteContainer.textBlock.textTwo')}</BodyText>
      <BodyText pb={4}>{t('myAccount.twoFactorAuthPage.twoFaNOTCompleteContainer.textBlock.textThree')}</BodyText>
      <BodyText pb={4}>{t('myAccount.twoFactorAuthPage.twoFaNOTCompleteContainer.textBlock.textFour')}</BodyText>
    </Box>
  )
}
