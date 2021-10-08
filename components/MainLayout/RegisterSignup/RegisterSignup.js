import styles from '../../../styles/RegisterSignup.module.scss'
import {Header} from "../Header/Header";
import {useEffect, useRef, useState} from "react";
import Link from "next/link";
import {loadGetInitialProps} from "next/dist/shared/lib/utils";
import {useDispatch, useSelector} from "react-redux";
import {showRegister} from "../../../redux/actions/registerShow";
import {showLogin} from "../../../redux/actions/loginShow";

export const RegisterSignup = ({t, isShow}) => {
  const dispatch = useDispatch();
  const isShowRegister = useSelector((isShowRegister) => isShowRegister.showRegister.isShow)

  function registerCloseButtonHandler() {
    if (isShowRegister) {
      dispatch(showRegister(false))
    } else {
      dispatch(showRegister(true))
    }
  }
  function openLogin() {
    dispatch(showLogin(true));
    dispatch(showRegister(false));
  }

  let currensyVariants = [
    {id: 1, currensy: "BRL", active: false},
    {id: 2, currensy: "RUB", active: false},
    {id: 3, currensy: "USD", active: true},
    {id: 4, currensy: "BTC", active: false},
    {id: 5, currensy: "ETH", active: false},
    {id: 6, currensy: "LTC", active: false},
    {id: 7, currensy: "BCH", active: false}
  ]
  const [activeBonus, setActiveBonus] = useState(false);
  const [isPassShow, setIsPassShow] = useState(false);
  const [passwordInputType, setPasswordInputType] = useState('password');

  const [isShowCurrency, setIsShowCurrency] = useState(false);
  const [activeCurrency, setActiveCurrency] = useState('USD');

  let currencyRef = useRef('')

  const setCurrency = (e) => {
    setActiveCurrency(e.target.innerText);
    setIsShowCurrency(false);
  }

  function showCurrencyBlock() {
    if (isShowCurrency) {
      setIsShowCurrency(false);
    } else {
      setIsShowCurrency(true);
    }
  }

  useEffect(() => {
    console.log(currencyRef.current.value);
  }, [activeCurrency])

  function showPass(){
    if (isPassShow) {
      setIsPassShow(false);
      setPasswordInputType("password");
    } else {
      setIsPassShow(true);
      setPasswordInputType('text');
    }
  }

  function showBonusInput() {
    if (activeBonus) {
      setActiveBonus(false)
    } else {
      setActiveBonus(true);
    }
  }

  return (
    <div className={`${styles.registerSignupWrapper} ${isShow ? '' : styles.hideRegister}`}>
      <Header t={t}/>
      <div onClick={() => registerCloseButtonHandler()} className={styles.forClosePopup}></div>
      <div className={styles.registerMainBlock}>
        <div className={styles.registerHeading}>
          <h2>Deposit $ 100 and get $ 200</h2>
        </div>
        <div className={styles.registerInnerBlock}>
          <div className={styles.registerInnerBlockHead}>
            <h3>Welcome To SlotsIdol</h3>
            <div onClick={() => registerCloseButtonHandler()} className={styles.registerInnerCloseButton}>
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
              <label className={styles.passwordEye}   htmlFor={'passwordIn'}>
                <img onClick={() => showPass()} src={'/assets/img/registerSignup/eye.svg'} alt="show pass icon"/>
                <input id={'passwordIn'} type={passwordInputType}/>
              </label>


              <label htmlFor={'currencyIn'}>
                {'Currensy'}
              </label>
                <input
                  readOnly={true}
                  ref={currencyRef}
                  className={styles.currencyInput}
                  onChange={(e) => console.log(e.target.value)}
                  onClick={() => showCurrencyBlock()}
                  value={activeCurrency || "USD"} id={'currencyIn'}
                  type="text"/>
                <div className={`${styles.currencyVariants} ${isShowCurrency ? styles.activeCurrency : ''}`}>
                  {
                    currensyVariants.map((el) => {
                      return (
                        <div
                          key={el.id}
                          onClick={(e) => setCurrency(e)}
                          className={styles.currencyItem}
                        >
                          <p>{el.currensy}</p>
                        </div>
                      )
                    })
                  }
                </div>

                <div className={`${styles.iHaveBonus} ${activeBonus ? styles.showBonusInput : ''}`}>
                  <p onClick={() => showBonusInput()}>I have a bonus code</p>
                  <input className={styles.bonusInput} id={'bonusIn'} type="text" placeholder={'bonus code'}/>
                </div>

                <div className={styles.agreeTermsWrapper}>
                  <input className={styles.agreeTermsCheckbox} id={"agreeTerms"} type="checkbox"/>
                  <label htmlFor={"agreeTerms"} className={styles.iReadAndAgreeLabel}>
                    {'I have read and agree to the'}
                  </label>
                  <Link href={'/termsAndConditions'}><a onClick={() => registerCloseButtonHandler()}>{'Terms of Use'}</a></Link>
                </div>
            </form>
            <div className={styles.alredyRegistered}>
              <p className={styles.alredyText}>Alredy registered?</p>
              <p onClick={() => openLogin()} className={styles.LogInText}>Log in</p>
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