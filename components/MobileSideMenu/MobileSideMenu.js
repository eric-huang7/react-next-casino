import Image from "next/image";
import Link from "next/link";

import styles from '../../styles/MobileSideMenu/MobileSideMenu.module.scss';
import {HeaderButtonsDeposit} from "../MainLayout/Header/HeaderButtons/HeaderButtonsDeposit";
import {HeaderButtonsRegistration} from "../MainLayout/Header/HeaderButtons/HeaderButtonsRegistration";
import {MobileSideList} from "./MobileSideList";
import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {showMobileMenu} from "../../redux/actions/sideMobileMenuShow";
import {MobileListContainer} from "./MobileListContainer";
import {MobileSideLangswitcher} from "./MobileSideLangswitcher";

const socilaLinks = [
 {key: 'facebook', href: '#facebook', img: '/assets/img/mobileSideMenu/facebook.svg'},
 {key: 'twitter', href: '#twitter', img: '/assets/img/mobileSideMenu/twitter.svg'},
 {key: 'youtube', href: '#youtube', img: '/assets/img/mobileSideMenu/youtube.svg'},
 {key: 'instagram', href: '#instagram', img: '/assets/img/mobileSideMenu/instagram.svg'},
]

export const MobileSideMenu = ({t, userInform}) => {
 const dispatch = useDispatch();


 const isShowMobileMenu = useSelector((state) => state.showMobileMenu.isShow);
 const isShowLogin = useSelector((isShowLogin) => isShowLogin.showLogin.isShow);
 const isShowRegister = useSelector((isShowRegister) => isShowRegister.showRegister.isShow);
 const currency = useSelector((state) => state.getCurrency);

 const [username, setUsername] = useState('');
 const [userBalance, setUserBalance] = useState('');
 const [userRealMoney, setUserRealMoney] = useState('');
 const [userBonuses, setUserBonuses] = useState('');
 const [userCurrency, setUserCurrency] = useState('');


 useEffect(() => {
  if (userInform.isAuthenticated && userInform.balance) {
   setUsername(userInform.user.user.username);

   if (userInform.balance.balances.length > 0) {
    setUserBalance(Number(userInform.balance.balances[0].current_balance).toFixed(2));
    setUserRealMoney(Number(userInform.balance.balances[0].current_balance).toFixed(2));
   } else {
    setUserBalance("00,00");
    setUserRealMoney("00,00");
   }
  }
  // userObj.bonuses = userInform.bonuses // no data now
 }, [userInform.isAuthenticated, userInform.balance]);

 useEffect(() => {
  if (!currency.loading && userInform.isAuthenticated && userInform.balance) {
   setUserCurrency(currency.currency?.results.find((el) => {
    if (userInform.user.user?.currency) {
     return Number(el.id) === Number(userInform.user.user.currency_id);
    } else if (!userInform.user.user.base_currency_id) {
     return Number(el.id) === 1;
    } else {
     return Number(el.id) === Number(userInform.user.user.base_currency_id);
    }
   }).abbreviation);
  } else {
   setUserCurrency('')
  }
 },[currency.currency, userInform.isAuthenticated, userInform.balance])


 const closeClickHandler = () => {
  if (isShowMobileMenu) {
   dispatch(showMobileMenu(false));
  } else {
   dispatch(showMobileMenu(true));
  }
 }
 const [isOpenLanguages, setIsOpenLanguages] = useState(false);

 function openLanguagesClickHandler() {
  console.log('asdas')
  if (isOpenLanguages) {
   setIsOpenLanguages(false);
  } else {
   setIsOpenLanguages(true);
  }
 }


 useEffect(() => {
  dispatch(showMobileMenu(false));
 }, [isShowLogin, isShowRegister])

 return (
   <div className={`${styles.sideMenuWrapper} ${isShowMobileMenu ? styles.showMobileMenu : ''}`}>
    <div className={`${styles.sideMenuMainWrapper}`}>
     <div className={styles.sideMenuHeader}>
      <div className={styles.sideMenuCloseButton} onClick={() => closeClickHandler()}>
       <span></span>
       <span></span>
      </div>
      <div className={styles.sideMenuLogo}>
       <Image src={'/assets/img/mainLayoutImg/logo.png'} width={102} height={55} alt={'logo'}/>
      </div>
      <div className={styles.userInfoBlock}>
       <p className={styles.username}>{username}</p>
       <p className={styles.userMoney}>{`${userBalance} ${userCurrency}`}</p>
       <div className={styles.userInfoDivider}></div>
       {
        userInform.isAuthenticated ? <div className={styles.userBonusesInfo}>
         <div className={styles.realMoneyBlock}>
          <span className={styles.realMoneyCount}>{`${userRealMoney} ${userCurrency}`}</span>
          <span className={styles.realMoneyText}>Real money</span>
         </div>
         <div className={styles.bonusMoneyBlock}>
          <span className={styles.bonusMoneyCount}>0 BTC</span>
          <span className={styles.bonusMoneyText}>Locked by bonus</span>
         </div>
        </div> : ""
       }

       <div className={styles.sideMenuButtonsBlock}>
        {userInform.isAuthenticated ? <HeaderButtonsDeposit t={t} isUserLogined={userInform}/> : <HeaderButtonsRegistration isUserLogined={userInform.isAuthenticated} t={t}/>}
       </div>
      </div>
      <div className={styles.mobileSideListWrapper}>
       <MobileListContainer t={t}/>
       <div className={`${styles.mobileSideLangSwitcherButton} ${isOpenLanguages ? styles.activeLangMenu : ""}`}>
        <img  alt=""/>
        <div className={styles.languageWrapper}>
         <p onClick={() => openLanguagesClickHandler()}>{t('mobileSideMenu.listMenu.language')}</p>
         <MobileSideLangswitcher isOpenLanguages={isOpenLanguages}/>
        </div>
       </div>
       <div className={styles.logoutLinkWrapper}>
        <img alt=""/>
        <p>{t('mobileSideMenu.listMenu.logout')}</p>
       </div>
      </div>
      <div className={styles.sideMenuFooter}>
       <div className={styles.sideMenuFooterIconsBlock}>
        {socilaLinks.map((el) => {
         return (
           <a className={styles.socialLink} target="_blank" key={`${el.key} footer`} href={el.href}>
            <Image className={styles.socialImage} height={35} width={35} src={el.img} alt={el.key}/>
           </a>
         )
        })}
       </div>
       <p className={styles.sideFooterRights}>2020 SlotsIdol.com&#169; All Rights Reserved</p>
      </div>
     </div>


    </div>
   </div>

 )
}