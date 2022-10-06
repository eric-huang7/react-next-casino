import BodyText from "../../../../typography/BodyText";
import { chakra } from "@chakra-ui/react";

export const VerifyPhoneUserInfoTable = ({ t, phoneNumber, status }) => (
  <>
    <BodyText as="h3" bold fontSize={17}>
      {t('myAccount.profilePage.phoneVerification.inputsLabels.verifiedPhone')}
    </BodyText>
    <chakra.table fontSize={15} color="grey.450" fontFamily="Verdana">
      <tbody>
      <tr>
        <chakra.td w="200px" pb="10px">{t('myAccount.profilePage.phoneVerification.inputsLabels.phoneNumber')}</chakra.td>
        <td>{phoneNumber}</td>
      </tr>
      <tr>
        <chakra.td pb="10px">{t('myAccount.profilePage.phoneVerification.inputsLabels.status')}</chakra.td>
        <td>{status}</td>
      </tr>
      </tbody>
    </chakra.table>
  </>
)
