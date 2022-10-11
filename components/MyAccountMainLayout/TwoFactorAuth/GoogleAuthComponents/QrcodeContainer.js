import { QrGenerator } from './QrGenerator'
import BodyText from "../../../typography/BodyText";

export const QrcodeContainer = ({ t, authData }) => (
  <div>
    <QrGenerator qrData={authData.qr ? authData.qr : 'Try Again!'}/>
    <div>
      <BodyText py={4} color="red">
        {t('myAccount.twoFactorAuthPage.twoFaNOTCompleteContainer.qrBlock.icantScan')}
      </BodyText>
      <BodyText>{t('myAccount.twoFactorAuthPage.twoFaNOTCompleteContainer.qrBlock.copyCodeText')}</BodyText>
      <BodyText bold>{authData.key ? authData.key : authData.extra_error_info}</BodyText>
    </div>
  </div>
)
