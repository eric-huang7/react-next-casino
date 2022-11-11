import { VerifyPhoneUserInfoTable } from './VerifyPhoneUserInfoTable'
import ErrorText from '../../../../ErrorBoundaryComponents/ErrorText'
import Container from "./Container";
import RoundButton from "../../../../buttons/RoundButton";

export const PhoneAlreadyVerified = ({ t, userInfo, status, removePhoneNumberHandler }) => {
  let phoneNumber = userInfo.phone_number ? userInfo.phone_number.replaceAll('-', '').split('').map((el, ind) => {
    if (ind === 5 || ind === 6 || ind === 7) {
      return '*'
    } else {
      return el
    }
  }) : ''

  return (
    <Container>
      <ErrorText>
        <VerifyPhoneUserInfoTable phoneNumber={phoneNumber} t={t} status={status}/>
      </ErrorText>
      <div>
        <RoundButton onClick={removePhoneNumberHandler} solid w="auto" px="25px"
          title={t('myAccount.profilePage.phoneVerification.buttons.remove')}
        />
      </div>
    </Container>
  )

}
