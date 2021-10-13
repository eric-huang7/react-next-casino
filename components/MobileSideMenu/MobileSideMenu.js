import Image from "next/image";
import Link from "next/link";

import styles from '../../styles/MobileSideMenu/MobileSideMenu.module.scss';
import {HeaderButtonsDeposit} from "../MainLayout/Header/HeaderButtons/HeaderButtonsDeposit";
import {HeaderButtonsRegistration} from "../MainLayout/Header/HeaderButtons/HeaderButtonsRegistration";

const socilaLinks = [
 {key: 'facebook', href: '#facebook', img: '/assets/img/footer/facebook.png'},
 {key: 'twitter', href: '#twitter', img: '/assets/img/footer/twitter.png'},
 {key: 'youtube', href: '#youtube', img: '/assets/img/footer/youtube.png'},
 {key: 'instagram', href: '#instagram', img: '/assets/img/footer/instagram.png'},
 {key: 'linkedin', href: '#linkedin', img: '/assets/img/footer/linkedin.png'},
]

export const MobileSideMenu = ({t, userInform}) => {
 console.log(userInform, 'fromSideMenu')
 let userInfo = true;

 return (
   <div className={styles.sideMenuMainWrapper}>
    <div className={styles.sideMenuHeader}>
     <div className={styles.sideMenuCloseButton}>
      <span></span>
      <span></span>
     </div>
     <div className={styles.sideMenuLogo}>
        <Image src={'/assets/img/mainLayoutImg/logo.png'} width={102} height={55} alt={'logo'}/>
     </div>
     <div className={styles.userInfoBlock}>
      <p className={styles.username}>Jhon Smit</p>
      <p className={styles.userMoney}>0 BTC</p>
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
       {/*{userInfo ? <HeaderButtonsDeposit t={t} isUserLogined={userInfo}/> : <HeaderButtonsRegistration isUserLogined={userInfo} t={t}/>}*/}

      </div>
     </div>

     <div className={styles.sideMenuFooter}>
       <div className={styles.sideMenuFooterIconsBlock}>
         {socilaLinks.map((el) => {
          return (
            <a className={styles.socialLink} target="_blank" key={`${el.key} footer`} href={el.href}>
             <Image className={styles.socialImage} height={45} width={45} src={el.img} alt={el.key}/>
            </a>
          )
         })}
       </div>
     </div>
    </div>


   </div>
 )
}