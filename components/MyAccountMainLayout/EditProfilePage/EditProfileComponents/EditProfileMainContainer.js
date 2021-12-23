import styles from '../../../../styles/MyAccount/UserInfoPage/EditProfilePage.module.scss';
import {InputContainer} from "./InputContainer";
import {BirthDaySelectorContainer} from "./BirthDaySelectorContainer";
import {GenderSelector} from "./GenderSelector";
import {CountrySelector} from "./CountrySelector";
import {TimeZoneSelector} from "./TimeZoneSelector";
import {ButtonsBlock} from "./ButtonsBlock";
import {EmailSmsChecksContainer} from "./EmailSmsChecksContainer";
import {useState} from "react";
import {birthdayFormatter} from "../../../../helpers/dateTranslator";


export const EditProfileMainContainer = ({t, userInfo}) => {
  console.log(userInfo);
  let address_1 = userInfo.address_1 ? userInfo.address_1 : '';
  let address_2 = userInfo.address_2 ? userInfo.address_2 : '';
  let birthday = userInfo.birthday ? birthdayFormatter(userInfo.birthday) : {day: undefined, month: undefined, year: undefined};

  const [fullName, setFullName] = useState(userInfo.full_name ? userInfo.full_name : '');
  const [nickname, setNickname] = useState(userInfo.username);
  const [gender, setGender] = useState('');
  const [city, setCity] = useState(userInfo.city ? userInfo.city : '');
  const [address, setAddress] = useState(address_1 + " " + address_2);
  const [postalCode, setPostalCode] = useState(userInfo.postal_code ? userInfo.postal_code : '');
  const [mobile, setMobile] = useState(userInfo.phone_number ? userInfo.phone_number : '');
  const [security_question, setSecurity_question] = useState(userInfo.security_question ? 'Field already specified' : '');
  const [security_answer, setSecurity_answer] = useState(userInfo.security_answer ? 'Field already specified' : '');
  const [emailPromo, setEmailPromo] = useState(userInfo.transactional_email_opt_in);
  const [smsPromo, setSmsPromo] = useState(userInfo.transactional_sms_opt_in);

  const fullNameInputHandler = (value) => {
    setFullName(value);
  }
  const nicknameInputHandler = (value) => {
    setNickname(value);
  }
  const cityInputHandler = (value) => {
    setCity(value);
  }
  const addressInputHandler = (value) => {
    setAddress(value);
  }
  const postalCodeInputHandler = (value) => {
    setPostalCode(value);
  }
  const mobileInputHandler = (value) => {
    setMobile(value);
  }
  const securityQuestionInputHandler = (value) => {
    setSecurity_question(value);
  }
  const securityAnswerInputHandler = (value) => {
    setSecurity_answer(value);
  }
  const emailPromoInputHandler = (value) => {
    setEmailPromo(Number(value));
  }
  const smsPromoPromoInputHandler = (value) => {
    setSmsPromo(Number(value));
  }



  return (
    <div className={styles.mainContainer}>
      <p  className={styles.textInfo}>
        Please enter valid contact details in the form below. Make sure it is accurate before saving.
      </p>
      <InputContainer
        t={t}
        inputName={'Full Name'}
        inputId={'nameInput'}
        value={fullName}
        valueHandler={fullNameInputHandler}
        disableEdit={userInfo.full_name ? true : false}
      />
      <InputContainer
        t={t}
        inputName={'Nickname'}
        inputId={'nicknameInput'}
        value={nickname}
        valueHandler={nicknameInputHandler}
        disableEdit={false}
      />
      <BirthDaySelectorContainer
        t={t}
        value={birthday}
        disableEdit={userInfo.birthday ? true : false}
      />
      <GenderSelector
        t={t}
      />
      <CountrySelector
        t={t}
      />
      <InputContainer
        t={t}
        inputName={'City'}
        inputId={'cityInput'}
        value={city}
        valueHandler={cityInputHandler}
        disableEdit={userInfo.city ? true : false}
      />
      <InputContainer
        t={t}
        inputName={'Address'}
        inputId={'addressInput'}
        value={address}
        valueHandler={addressInputHandler}
        disableEdit={address.trim() ? true : false}
      />
      <InputContainer
        t={t}
        inputName={'Postal code'}
        inputId={'postalCodeInput'}
        value={postalCode}
        valueHandler={postalCodeInputHandler}
        disableEdit={userInfo.postal_code ? true : false}
      />
      <InputContainer
        t={t}
        inputName={'Mobile'}
        inputId={'mobileInput'}
        value={mobile}
        valueHandler={mobileInputHandler}
        disableEdit={userInfo.phone_number ? true : false}
      />
        <InputContainer
          t={t}
          inputName={'Security Question'}
          inputId={'questionInput'}
          value={security_question}
          valueHandler={securityQuestionInputHandler}
          disableEdit={userInfo.security_question ? true : false}
        />
        <InputContainer
          t={t}
          inputName={'Security Answer'}
          inputId={'answerInput'}
          value={security_answer}
          valueHandler={securityAnswerInputHandler}
          disableEdit={userInfo.security_answer ? true : false}
        />
        <EmailSmsChecksContainer
          t={t}
          emailPromo={emailPromo}
          smsPromo={smsPromo}
          emailPromoInputHandler={emailPromoInputHandler}
          smsPromoPromoInputHandler={smsPromoPromoInputHandler}
        />
      <TimeZoneSelector
        t={t}
      />
      <ButtonsBlock t={t}/>
    </div>
  )
}