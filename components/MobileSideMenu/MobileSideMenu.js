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
import {MobileSideLangSwitcher} from "./MobileSideLangswitcher";
import {LogoutButtonMobileMenu} from "./LogoutButtonMobileMenu";
import {UserInfoBlock} from "./UserInfoBlock";

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


 const closeClickHandler = () => {
  if (isShowMobileMenu) {
   dispatch(showMobileMenu(false));
  } else {
   dispatch(showMobileMenu(true));
  }
 }
 const [isOpenLanguages, setIsOpenLanguages] = useState(false);

 function openLanguagesClickHandler() {
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
      <UserInfoBlock t={t} userInform={userInform} currency={currency}/>
      <div className={styles.mobileSideListWrapper}>
       <MobileListContainer isAuth={userInform.isAuthenticated} t={t}/>
       <div className={`${styles.mobileSideLangSwitcherButton} ${isOpenLanguages ? styles.activeLangMenu : ""}`}>
        <img src={'/assets/img/mobileSideMenu/globe.svg'} alt="language icon"/>
        <div className={styles.languageWrapper}>
         <p onClick={() => openLanguagesClickHandler()}>{t('mobileSideMenu.listMenu.language')}</p>
         <MobileSideLangSwitcher isOpenLanguages={isOpenLanguages}/>
        </div>
       </div>
       <LogoutButtonMobileMenu t={t} isLogined={userInform.isAuthenticated}/>
      </div>
      <div className={styles.sideMenuFooter}>
       <div className={styles.sideMenuFooterIconsBlock}>
        {socilaLinks.map((el) => {
         return (
           <a className={styles.socialLink} target="_blank" rel={'noreferrer'} key={`${el.key} footer`} href={el.href}>
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