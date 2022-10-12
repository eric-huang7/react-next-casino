import { QrGenerator } from './QrGenerator'
import BodyText from "../../../typography/BodyText";
import { HStack } from "@chakra-ui/react";

export const QrcodeContainer = ({ t, authData }) => (
  <HStack alignItems="flex-start">
    <QrGenerator qrData={authData.qr ? authData.qr : 'Try Again!'}/>
    <div>
      <BodyText pt={4} pb={4} color="red">
        {t('myAccount.twoFactorAuthPage.twoFaNOTCompleteContainer.qrBlock.icantScan')}
      </BodyText>
      <BodyText>{t('myAccount.twoFactorAuthPage.twoFaNOTCompleteContainer.qrBlock.copyCodeText')}</BodyText>
      <BodyText bold>{authData.key ? authData.key : authData.extra_error_info}</BodyText>
    </div>
  </HStack>
)
