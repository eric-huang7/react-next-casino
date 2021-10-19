import Image from "next/image";
import Link from "next/link";

import styles from '../../styles/MobileSideMenu/MobileSideMenu.module.scss';
import {HeaderButtonsDeposit} from "../MainLayout/Header/HeaderButtons/HeaderButtonsDeposit";
import {HeaderButtonsRegistration} from "../MainLayout/Header/HeaderButtons/HeaderButtonsRegistration";
import {MobileSideList} from "./MobileSideList";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {showMobileMenu} from "../../redux/actions/sideMobileMenuShow";

const socilaLinks = [
 {key: 'facebook', href: '#facebook', img: '/assets/img/mobileSideMenu/facebook.svg'},
 {key: 'twitter', href: '#twitter', img: '/assets/img/mobileSideMenu/twitter.svg'},
 {key: 'youtube', href: '#youtube', img: '/assets/img/mobileSideMenu/youtube.svg'},
 {key: 'instagram', href: '#instagram', img: '/assets/img/mobileSideMenu/instagram.svg'},
]

export const MobileSideMenu = ({t, userInform}) => {
 const dispatch = useDispatch();
 console.log(userInform, 'fromSideMenu')

 const isShowMobileMenu = useSelector((state) => state.showMobileMenu.isShow);
 const isShowLogin = useSelector((isShowLogin) => isShowLogin.showLogin.isShow);
 const isShowRegister = useSelector((isShowRegister) => isShowRegister.showRegister.isShow);

 // const userInfo = useSelector((userInfo) => userInfo);
 // console.log(userInfo, 'side menu')
 // let userObj = {
 //  name: '',
 //  balance: '',
 //  bonuses: '',
 //  currency: '',
 // }

 useEffect(() => {
  if (userInform.isAuthenticated, userInform.balance.success) {
   userObj.name = userInform.user.user.username;
   userObj.balance = userInform.balance.balances[0].current_balance;
  }
  // userObj.bonuses = userInform.bonuses // no data now
 }, [userInform.isAuthenticated])



 const closeClickHandler = () => {
  if (isShowMobileMenu) {
   dispatch(showMobileMenu(false));
  } else {
   dispatch(showMobileMenu(true));
  }
 }

 useEffect(() => {
  dispatch(showMobileMenu(false));
 }, [isShowLogin, isShowRegister])

 return (
   <div className={`${styles.sideMenuMainWrapper} ${isShowMobileMenu ? styles.showMobileMenu : ''}`}>
    <div className={styles.sideMenuHeader}>
     <div className={styles.sideMenuCloseButton} onClick={() => closeClickHandler()}>
      <span></span>
      <span></span>
     </div>
     <div className={styles.sideMenuLogo}>
        <Image src={'/assets/img/mainLayoutImg/logo.png'} width={102} height={55} alt={'logo'}/>
     </div>
     <div className={styles.userInfoBlock}>
      <p className={styles.username}>{userObj.name}</p>
      <p className={styles.userMoney}>{userObj.balance} BTC</p>
      <div className={styles.userInfoDivider}></div>
      <div className={styles.userBonusesInfo}>
       <div className={styles.realMoneyBlock}>
        <span className={styles.realMoneyCount}>0 BTC</span>
        <span className={styles.realMoneyText}>Real money</span>
       </div>
       <div className={styles.bonusMoneyBlock}>
        <span className={styles.bonusMoneyCount}>0 BTC</span>
        <span className={styles.bonusMoneyText}>Locked by bonus</span>
       </div>
      </div>
      <div className={styles.sideMenuButtonsBlock}>
       {userInform.isAuthenticated ? <HeaderButtonsDeposit t={t} isUserLogined={userInform}/> : <HeaderButtonsRegistration isUserLogined={userInform.isAuthenticated} t={t}/>}
      </div>
     </div>
     <div className={styles.mobileSideListWrapper}>
      <MobileSideList />
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
 )
}