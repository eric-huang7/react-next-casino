import BirthDaySelectorContainer from './components/BirthDaySelectorContainer'
import { GenderSelector } from './components/GenderSelector'
import { CountrySelector } from './components/CountrySelector'
import { TimeZoneSelector } from './components/TimeZoneSelector'
import { EmailSmsChecksContainer } from './components/EmailSmsChecksContainer'
import { useState } from 'react'
import { birthdayFormatter } from '../../../helpers/dateTranslator'
import { patchUserData } from '../../../redux/user/action'
import { useDispatch } from 'react-redux'
import { useRouter } from 'next/router'
import {phone_number_url} from '../../../redux/url/url'
import { SecurityQuestionSelector } from './components/SecurityQuestionSelector'
import ErrorEmpty from '../../ErrorBoundaryComponents/ErrorEmpty'
import Connect from "../../../helpers/connect";
import { Text } from "@chakra-ui/react"
import InputContainer from "./components/InputContainer";
import RoundButton from "../../buttons/RoundButton";
import {HStack, Box} from "@chakra-ui/layout";

export const EditProfileMainContainer = ({ t, userInfo, currencyJurisdiction }) => {

  const dispatch = useDispatch()
  const router = useRouter()

  let address_1 = userInfo.address_1 ? userInfo.address_1 : ''
  let address_2 = userInfo.address_2 ? userInfo.address_2 : ''
  let birthday = userInfo.birthday ? birthdayFormatter(userInfo.birthday) : {
    day: undefined,
    month: undefined,
    year: undefined
  }

  const [fullName, setFullName] = useState(userInfo.full_name ? userInfo.full_name : '')
  const [nickname, setNickname] = useState(userInfo.username)
  const [gender, setGender] = useState(userInfo.gender)
  const [city, setCity] = useState(userInfo.city ? userInfo.city : '')
  const [address, setAddress] = useState(address_1 + ' ' + address_2)
  const [postalCode, setPostalCode] = useState(userInfo.postal_code ? userInfo.postal_code : '')
  const [mobile, setMobile] = useState(userInfo.unconfirmed_phone ? userInfo.unconfirmed_phone : '')
  const [enteredMobile, setEnteredMobile] = useState('')
  const [security_question, setSecurity_question] = useState(userInfo.security_question ? t('myAccount.editProfilePage.fieldAlreadySpec') : '')
  const [security_question_selector, setSecurity_question_selector] = useState(userInfo.security_question ? t('myAccount.editProfilePage.fieldAlreadySpec') : '')
  const [security_answer, setSecurity_answer] = useState(userInfo.security_answer ? t('myAccount.editProfilePage.fieldAlreadySpec') : '')
  const [emailPromo, setEmailPromo] = useState(userInfo.transactional_email_opt_in)
  const [smsPromo, setSmsPromo] = useState(userInfo.transactional_sms_opt_in)
  const [bDay, setBDay] = useState(birthday.day)
  const [bMonth, setBMonth] = useState(birthday.month)
  const [bYear, setBYear] = useState(birthday.year)
  const [country, setCountry] = useState(userInfo.country_code ? userInfo.country_code : '')
  const [timeZone, setTimeZone] = useState(userInfo.time_zone ? userInfo.time_zone : '')
  const [phoneError, setPhoneError] = useState('')

  const fullNameInputHandler = (value) => {
    setFullName(value)
  }
  const nicknameInputHandler = (value) => {
    setNickname(value)
  }
  const cityInputHandler = (value) => {
    setCity(value)
  }
  const addressInputHandler = (value) => {
    setAddress(value)
  }
  const postalCodeInputHandler = (value) => {
    setPostalCode(value)
  }
  const mobileInputHandler = (value) => {
    setMobile(value)
    setEnteredMobile(value)
  }
  const securityQuestionSelectorHandler = (value) => {
    setSecurity_question_selector(value)
    setSecurity_question('')
  }
  const securityQuestionInputHandler = (value) => {
    setSecurity_question(value)
  }
  const securityAnswerInputHandler = (value) => {
    setSecurity_answer(value)
  }
  const emailPromoInputHandler = (value) => {
    setEmailPromo(Number(value))
  }
  const smsPromoPromoInputHandler = (value) => {
    setSmsPromo(Number(value))
  }
  const genderSelectorHandler = (value) => {
    setGender(value)
  }
  const countrySelectorHandler = (value) => {
    setCountry(value)
  }
  const timeZoneSelectorHandler = (value) => {
    setTimeZone(value)
  }

  const saveButtonClickHandler = () => {
    let sendSecurityQuestion = ''
    if (security_question_selector) {
      if (security_question_selector === 'enter') {
        sendSecurityQuestion = security_question
      } else if (security_question_selector === '0') {
        sendSecurityQuestion = ''
      } else {
        sendSecurityQuestion = security_question_selector
      }
    } else {
      sendSecurityQuestion = ''
    }

    let sendData = {
      id: userInfo.id,
      full_name: fullName.trim() ? fullName : null,
      birthday: null,
      gender: gender ? gender : 0,
      country_code: country ? country : '',
      city: city ? city : null,
      address_1: address.trim() ? address : null,
      postal_code: postalCode.trim() ? postalCode : null,
      security_question: sendSecurityQuestion.trim() ? sendSecurityQuestion : null,
      security_answer: security_answer.trim() ? security_answer : null,
      transactional_email_opt_in: emailPromo ? emailPromo : 0,
      transactional_sms_opt_in: smsPromo ? smsPromo : 0,
      time_zone: timeZone ? timeZone : ''
    }
    if (Number(bYear) && Number(bMonth) !== NaN && Number(bDay)) {
      sendData.birthday = new Date(Number(bYear), Number(bMonth), Number(bDay)).getTime() / 1000
    } else {
      delete sendData.birthday
    }

    if (userInfo.security_question && userInfo.security_answer) {

      delete sendData.security_answer
      delete sendData.security_question
    } else if (userInfo.security_question) {

      delete sendData.security_question
    } else if (userInfo.security_answer) {

      delete sendData.security_answer
    }

    if (userInfo.phone_number) {
      dispatch(patchUserData(sendData))
      router.push('/accounts/profile-info')
      setPhoneError('')
    } else if (enteredMobile) {
      phoneNumberVerification(sendData)
    } else {
      dispatch(patchUserData(sendData))
      router.push('/accounts/profile-info')
      setPhoneError('')
    }

  }

  const phoneNumberVerification = (sendData) => {
    // let userData = {
    //   id: userInfo.user.user.id,
    //   phone_number: mobile,
    // }
    const config = {
      params: {
        type: 5,
        phone: mobile
      }
    }
    Connect.get(phone_number_url, config,(status, data) => {
      setPhoneError('')
      dispatch(patchUserData(sendData))
      router.push('/accounts/profile-info')
    }).catch((e) => {
      setPhoneError(t('myAccount.editProfilePage.fieldAlreadySpec'))
    })
  }

  return (
    <Box>
      <Text fontSize={16} color="text.450" fontFamily="Verdana" mb="45px">
        {t('myAccount.editProfilePage.textBlock')}
      </Text>
      {currencyJurisdiction.currency_jurisdiction.success && currencyJurisdiction.currency_jurisdiction.results.length
        && <ErrorEmpty>
          <InputContainer
            t={t}
            inputName={t('myAccount.editProfilePage.fullName')}
            inputId={'nameInput'}
            value={fullName}
            valueHandler={fullNameInputHandler}
            disableEdit={false}
          />
        </ErrorEmpty>}
      <ErrorEmpty>
        <InputContainer
          t={t}
          inputName={t('myAccount.editProfilePage.nickname')}
          inputId={'nicknameInput'}
          value={nickname}
          valueHandler={nicknameInputHandler}
          disableEdit={true}
        />
      </ErrorEmpty>
      <ErrorEmpty>
        <BirthDaySelectorContainer
          t={t}
          value={birthday}
          disableEdit={userInfo.birthday ? true : false}
          setBDay={setBDay}
          bDay={bDay}
          setBMonth={setBMonth}
          bMonth={bMonth}
          setBYear={setBYear}
          bYear={bYear}
        />
      </ErrorEmpty>
      {currencyJurisdiction.currency_jurisdiction.success && currencyJurisdiction.currency_jurisdiction.results.length
        && <>
          <ErrorEmpty>
            <GenderSelector
              t={t}
              value={gender}
              genderSelectorHandler={genderSelectorHandler}
              disableEdit={userInfo.gender ? true : false}
            />
          </ErrorEmpty>
          <ErrorEmpty>
            <CountrySelector
              value={country}
              countrySelectorHandler={countrySelectorHandler}
              disableEdit={userInfo.country_code ? true : false}
              t={t}
            />
          </ErrorEmpty>
          <ErrorEmpty>
            <InputContainer
              t={t}
              inputName={t('myAccount.editProfilePage.city')}
              inputId={'cityInput'}
              value={city}
              valueHandler={cityInputHandler}
              disableEdit={userInfo.city ? true : false}
            />
          </ErrorEmpty>
          <ErrorEmpty>
            <InputContainer
              t={t}
              inputName={t('myAccount.editProfilePage.address')}
              inputId={'addressInput'}
              value={address}
              valueHandler={addressInputHandler}
              disableEdit={(address_1 + ' ' + address_2).trim() ? true : false}
            />
          </ErrorEmpty>
          <ErrorEmpty>
            <InputContainer
              t={t}
              inputName={t('myAccount.editProfilePage.postalCode')}
              inputId={'postalCodeInput'}
              value={postalCode}
              valueHandler={postalCodeInputHandler}
              disableEdit={userInfo.postal_code ? true : false}
            />
          </ErrorEmpty>
          <ErrorEmpty>
            <InputContainer
              t={t}
              inputName={t('myAccount.editProfilePage.mobile')}
              inputId={'mobileInput'}
              value={mobile}
              valueHandler={mobileInputHandler}
              disableEdit={userInfo.unconfirmed_phone ? true : false}
              phoneError={phoneError}
            />
          </ErrorEmpty>
        </>
      }
      <ErrorEmpty>
        <SecurityQuestionSelector
          t={t}
          value={security_question_selector}
          onSelect={securityQuestionSelectorHandler}
          disableEdit={userInfo.security_question ? true : false}
        />
      </ErrorEmpty>
      {!userInfo.security_question && security_question_selector === 'enter' && <ErrorEmpty>
        <InputContainer
          t={t}
          inputName={t('myAccount.editProfilePage.enterSecQuestion')}
          inputId={'questionInput'}
          value={security_question}
          valueHandler={securityQuestionInputHandler}
          disableEdit={userInfo.security_question ? true : false}
        />
      </ErrorEmpty>}
      <ErrorEmpty>
        <InputContainer
          t={t}
          inputName={t('myAccount.editProfilePage.secAnswer')}
          inputId={'answerInput'}
          value={security_answer}
          valueHandler={securityAnswerInputHandler}
          disableEdit={userInfo.security_answer ? true : false}
        />
      </ErrorEmpty>
      <ErrorEmpty>
        <EmailSmsChecksContainer
          t={t}
          emailPromo={emailPromo}
          smsPromo={smsPromo}
          emailPromoInputHandler={emailPromoInputHandler}
          smsPromoPromoInputHandler={smsPromoPromoInputHandler}
        />
      </ErrorEmpty>
      <ErrorEmpty>
        <TimeZoneSelector
          t={t}
          timeZoneSelectorHandler={timeZoneSelectorHandler}
          timeZone={timeZone}
        />
      </ErrorEmpty>
      <HStack pl={{base: 0, lg: "180px"}}>
        <RoundButton solid onClick={saveButtonClickHandler}
                     title={t("myAccount.editProfilePage.saveButton")}/>

        <RoundButton onClick={() => router.push('/accounts/profile-info')}
                     title={t("myAccount.editProfilePage.cancelButton")}/>
      </HStack>
    </Box>
  )
}
