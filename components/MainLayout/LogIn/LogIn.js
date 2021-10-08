import styles from '../../../styles/LogIn.module.scss';
import {Header} from "../Header/Header";
import {useState} from "react";


export const LogIn = ({t, isShow}) => {
  const [isPassShow, setIsPassShow] = useState(false);
  const [passwordInputType, setPasswordInputType] = useState('password');

  function showPass(){
    if (isPassShow) {
      setIsPassShow(false);
      setPasswordInputType("password");
    } else {
      setIsPassShow(true);
      setPasswordInputType('text');
    }
  }


  return (
    <div className={`${styles.loginWrapper} ${isShow ? "" : styles.hideLogIn}`}>
      <Header t={t}/>
      <div className={styles.logInMainBlock}>
        <div className={styles.logInHeading}>
          <h2>Deposit $ 100 and get $ 200</h2>
        </div>
        <div className={styles.logInInnerBlock}>
          <div className={styles.logInInnerBlockHead}>
            <h3>Welcome To SlotsIdol</h3>
            <div className={styles.logInInnerCloseButton}>
              <span className={styles.closeOne}></span>
              <span className={styles.closeTwo}></span>
            </div>
          </div>
          <div className={styles.logInInnerBlockForms}>
            <form >
              <label htmlFor={'usernameIn'}>
                {'Username'}
              </label>
              <input id={'usernameIn'} type="text"/>

              <label htmlFor={'passwordIn'}>
                {'Password'}
              </label>
              <label className={styles.passwordEye}   htmlFor={'passwordIn'}>
                <img onClick={() => showPass()} src={'/assets/img/registerSignup/eye.svg'} alt="show pass icon"/>
                <input id={'passwordIn'} type={passwordInputType}/>
              </label>

            </form>
            <div className={styles.notAlreadyRegistered}>
              <p className={styles.alredyText}>Not registered yet?</p>
              <p className={styles.registerText}>Register</p>
            </div>
          </div>
        </div>
        <div className={styles.submitButtonWrapper}>
          <button className={styles.submitButton}>
            {'LOG IN'}
          </button>
        </div>

      </div>
    </div>
  )
}

