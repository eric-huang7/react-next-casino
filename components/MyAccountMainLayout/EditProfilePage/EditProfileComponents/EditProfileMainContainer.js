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
  console.log(userInfo, '<<<<<<<<<<<<<< edit');
  let address_1 = userInfo.address_1 ? userInfo.address_1 : '';
  let address_2 = userInfo.address_2 ? userInfo.address_2 : '';
  let birthday = userInfo.birthday ? birthdayFormatter(userInfo.birthday) : {
    day: undefined,
    month: undefined,
    year: undefined
  };

  const [fullName, setFullName] = useState(userInfo.full_name ? userInfo.full_name : '');
  const [nickname, setNickname] = useState(userInfo.username);
  const [gender, setGender] = useState(userInfo.gender);
  const [city, setCity] = useState(userInfo.city ? userInfo.city : '');
  const [address, setAddress] = useState(address_1 + " " + address_2);
  const [postalCode, setPostalCode] = useState(userInfo.postal_code ? userInfo.postal_code : '');
  const [mobile, setMobile] = useState(userInfo.phone_number ? userInfo.phone_number : '');
  const [security_question, setSecurity_question] = useState(userInfo.security_question ? 'Field already specified' : '');
  const [security_answer, setSecurity_answer] = useState(userInfo.security_answer ? 'Field already specified' : '');
  const [emailPromo, setEmailPromo] = useState(userInfo.transactional_email_opt_in);
  const [smsPromo, setSmsPromo] = useState(userInfo.transactional_sms_opt_in);
  const [bDay, setBDay] = useState('');
  const [bMonth, setBMonth] = useState('');
  const [bYear, setBYear] = useState('');
  const [country, setCountry] = useState(userInfo.country_code ? userInfo.country_code : "");
  const [timeZone, setTimeZone] = useState(userInfo.time_zone ? userInfo.time_zone : "");


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
  const genderSelectorHandler = (value) => {
    console.log(value);
    setGender(value);
  }
  const countrySelectorHandler = (value) => {
    console.log(value);
    setCountry(value);
  }
  const timeZoneSelectorHandler = (value) => {
    console.log(value)
    setTimeZone(value);
  }

  // console.log(new Date(Number(bYear), Number(bMonth), Number(bDay)).getTime());
  const saveButtonClickHandler = () => {
   let sendData = {
      id: userInfo.id,
      full_name: fullName.trim() ? fullName : null,
      username: nickname.trim() ? nickname : null,
      birthday: "",
      gender: gender ? gender : 0,
      country_code: country ? country : "",
      city: city ? city : null,
      address_1: address.trim() ? address : null,
      postal_code: postalCode.trim() ? postalCode : null,
      phone_number: mobile.trim() ? mobile : null,
      unconfirmed_phone: mobile.trim() ? mobile : null,
      security_question: security_question.trim() ? security_question : null,
      security_answer: security_answer.trim() ? security_answer : null,
      transactional_email_opt_in: emailPromo ? emailPromo : 0,
      transactional_sms_opt_in: smsPromo ? smsPromo : 0,
      time_zone: timeZone ? timeZone : ""
    }

    if (userInfo.security_question && userInfo.security_answer) {

      delete sendData.security_answer
      delete sendData.security_question
    } else if (userInfo.security_question) {

      delete sendData.security_question
    } else if (userInfo.security_answer) {

      delete sendData.security_answer
    }

    console.log(sendData)

  }


  return (
    <div className={styles.mainContainer}>
      <p className={styles.textInfo}>
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
        setBDay={setBDay}
        setBMonth={setBMonth}
        setBYear={setBYear}
      />
      <GenderSelector
        t={t}
        value={gender}
        genderSelectorHandler={genderSelectorHandler}
        disableEdit={userInfo.gender ? true : false}
      />
      <CountrySelector
        value={country}
        countrySelectorHandler={countrySelectorHandler}
        disableEdit={userInfo.country_code ? true : false}
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
        timeZoneSelectorHandler={timeZoneSelectorHandler}
        timeZone={timeZone}
      />
      <ButtonsBlock saveButtonClickHandler={saveButtonClickHandler} t={t}/>
    </div>
  )
}