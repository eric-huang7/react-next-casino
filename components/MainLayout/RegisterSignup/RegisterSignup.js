import styles from '../../../styles/RegisterSignup.module.scss'
import {Header} from "../Header/Header";
import {useState} from "react";
import Link from "next/link";

export const RegisterSignup = ({t}) => {

  const [activeBonus, setActiveBonus] = useState(false)

  function showBonusInput() {
    if (activeBonus) {
      setActiveBonus(false)
    } else {
      setActiveBonus(true);
    }
  }

  return (
    <div className={styles.registerSignupWrapper}>
      <Header t={t}/>
      <div className={styles.registerMainBlock}>
        <div className={styles.registerHeading}>
          <h2>Deposit $ 100 and get $ 200</h2>
        </div>
        <div className={styles.registerInnerBlock}>
          <div className={styles.registerInnerBlockHead}>
            <h3>Welcome To SlotsIdol</h3>
            <div className={styles.registerInnerCloseButton}>
              <span className={styles.closeOne}></span>
              <span className={styles.closeTwo}></span>
            </div>
          </div>
          <div className={styles.registerInnerBlockForms}>
            <form >
              <label htmlFor={'emailIn'}>{'Email'}</label>
                <input id={'emailIn'} type="email"/>

              <label htmlFor={'usernameIn'}>
                {'Username'}
              </label>
                <input id={'usernameIn'} type="text"/>

              <label htmlFor={'passwordIn'}>
                {'Password'}
              </label>
                <input id={'passwordIn'} type="password"/>

              <label htmlFor={'currencyIn'}>
                {'Currensy'}
              </label>
                <input id={'currencyIn'} type="text"/>

                <div className={`${styles.iHaveBonus} ${activeBonus ? styles.showBonusInput : ''}`}>
                  <p onClick={() => showBonusInput()}>I have a bonus code</p>
                  <input className={styles.bonusInput} id={'bonusIn'} type="text" placeholder={'bonus code'}/>
                </div>

                <div className={styles.agreeTermsWrapper}>
                  <input className={styles.agreeTermsCheckbox} id={"agreeTerms"} type="checkbox"/>
                  <label htmlFor={"agreeTerms"} className={styles.iReadAndAgreeLabel}>
                    {'I have read and agree to the'}
                  </label>
                  <Link href={'/termsAndConditions'}><a>{'Terms of Use'}</a></Link>
                </div>
            </form>
            <div className={styles.alredyRegistered}>
              <p className={styles.alredyText}>Alredy registered?</p>
              <p className={styles.LogInText}>Log in</p>
            </div>
          </div>
        </div>
        <div className={styles.submitButtonWrapper}>
          <button className={styles.submitButton}>
            {'SIGN UP'}
          </button>
        </div>
      </div>
    </div>
  )
}