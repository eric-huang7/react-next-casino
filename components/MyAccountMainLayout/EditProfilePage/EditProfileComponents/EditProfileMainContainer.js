import styles from '../../../../styles/MyAccount/UserInfoPage/EditProfilePage.module.scss';
import {InputContainer} from "./InputContainer";
import {BirthDaySelectorContainer} from "./BirthDaySelectorContainer";
import {GenderSelector} from "./GenderSelector";
import {CountrySelector} from "./CountrySelector";
import {TimeZoneSelector} from "./TimeZoneSelector";
import {ButtonsBlock} from "./ButtonsBlock";
import {EmailSmsChecksContainer} from "./EmailSmsChecksContainer";


export const EditProfileMainContainer = ({t}) => {


  return (
    <div className={styles.mainContainer}>
      <p  className={styles.textInfo}>
        Please enter valid contact details in the form below. Make sure it is accurate before saving.
      </p>
      <InputContainer
        t={t}
        inputName={'Full Name'}
        inputId={'nameInput'}
      />
      <InputContainer
        t={t}
        inputName={'Nickname'}
        inputId={'nicknameInput'}
      />
      <BirthDaySelectorContainer
        t={t}
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
      />
      <InputContainer
        t={t}
        inputName={'Address'}
        inputId={'addressInput'}
      />
      <InputContainer
        t={t}
        inputName={'Postal code'}
        inputId={'postalCodeInput'}
      />
      <InputContainer
        t={t}
        inputName={'Mobile'}
        inputId={'mobileInput'}
      />
        <InputContainer
          t={t}
          inputName={'Security Question'}
          inputId={'questionInput'}
        />
        <InputContainer
          t={t}
          inputName={'Security Answer'}
          inputId={'answerInput'}
        />
        <EmailSmsChecksContainer
          t={t}
        />
      <TimeZoneSelector
        t={t}
      />
      <ButtonsBlock t={t}/>
    </div>
  )
}