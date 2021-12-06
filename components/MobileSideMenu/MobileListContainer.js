import Link from "next/link";
import {MobileSideListLinks} from "./MobileSideList";
import styles from '../../styles/MobileSideMenu/MobileSideMenu.module.scss';
import {useState} from "react";
import {DropMenu} from "./DropMenu";
import {NotificationCounter} from "../MainLayout/Header/BurgerButton/NotificationCounter";
import {useSelector} from "react-redux";


let listArr = [
  {id: 1,
    name: "mobileSideMenu.listMenu.home",
    icon: '/assets/img/mobileSideMenu/home.svg',
    type: "link",
    path: "/"
  },
  {id: 2,
    name: "mobileSideMenu.listMenu.user",
    icon: '/assets/img/mobileSideMenu/user.svg',
    type: "link",
    path: "/accounts"
  },
  {id: 3,
    name: "mobileSideMenu.listMenu.notifications",
    icon: '/assets/img/mobileSideMenu/bell.svg',
    type: "link",
    path: "/notifications"
  },
  {id: 4,
    name: "mobileSideMenu.listMenu.promotions",
    icon: '/assets/img/mobileSideMenu/gift.svg',
    type: "link",
    path: "/promotions"
  },
  {id: 5,
    name: "mobileSideMenu.listMenu.tournament",
    icon: '/assets/img/mobileSideMenu/cup.svg',
    type: "block",
    blockData: [
      {id: "5.1", name: "mobileSideMenu.innerLists.tournament.slotWars", type: "link", path: "/#slotWars"},
      {id: "5.2", name: "mobileSideMenu.innerLists.tournament.tableWars", type: "link", path: "/#tableWars"},
      {id: "5.3", name: "mobileSideMenu.innerLists.tournament.lastManStanding", type: "link", path: "/#lastManStanding"},
    ]
  },
  {id: 6,
    name: "mobileSideMenu.listMenu.help",
    icon: '/assets/img/mobileSideMenu/question.svg',
    type: "block",
    blockData: [
      {id: "6.1",
        name: "mobileSideMenu.innerLists.help.heading",
        info: "mobileSideMenu.innerLists.help.information",
        type: "block",
        // path: '',
        blockData: [
          {id: "6.1.1", name: "support@slotsIdol.com", path: "mailto:support@slotsIdol.com"},
          {id: "6.1.2", name: "mobileSideMenu.innerLists.help.liveChat", path: "/#liveChat"}
        ]
      },
      {id: "6.2", name: "FAQ", type: "link", path: "/contactUs#faq"},
      {id: "6.3", name: "mobileSideMenu.innerLists.help.aboutBitcoin", type: "link", path: "/#AboutBitcoin"},
      {id: "6.4", name: "mobileSideMenu.innerLists.help.instantExchanger", type: "link", path: "/#InstantBTCtoEURexchanger"},
      {id: "6.5", name: "mobileSideMenu.innerLists.help.provabilityExplained", type: "link", path: "/#ProvabilityExplained"},
      {id: "6.6", name: "mobileSideMenu.innerLists.help.playSafe", type: "button", path: "/#PlaySafe"},
      {id: "6.7", name: "mobileSideMenu.innerLists.help.complains", type: "link", path: "/#Complains"},
      {id: "6.8", name: "mobileSideMenu.innerLists.help.howToBuyCrypto", type: "link", path: "/#HowToBuyCrypto"},
      {id: "6.9", name: "mobileSideMenu.innerLists.help.manageSubscriptions", type: "button", path: "/#manageSubscriptions"}
    ]
  },
  {id: 7,
    name: "mobileSideMenu.listMenu.info",
    icon: '/assets/img/mobileSideMenu/information.svg',
    type: "block",
    blockData: [
      {id: "7.1", name: "mobileSideMenu.innerLists.info.aboutUs", type: "link", path: "/aboutUs"},
      {id: "7.2", name: "mobileSideMenu.innerLists.info.termsAndConditions", type: "link", path: "/termsAndConditions"},
      {id: "7.3", name: "mobileSideMenu.innerLists.info.payments", type: "link", path: "/paymentsMethods"},
      {id: "7.4", name: "mobileSideMenu.innerLists.info.privacyPolicy", type: "link", path: "/#PrivacyPolicy"},
      {id: "7.5", name: "mobileSideMenu.innerLists.info.affiliateProgram", type: "link", path: "/#AffiliateProgram"},
      // {id: "7.6", name: "mobileSideMenu.innerLists.info.bonusTermsAndConditions", type: "link", path: "/#BonusTermsAndConditions"},
    ]
  },
  {id: 8,
    name: "mobileSideMenu.listMenu.termsAndConditions",
    icon: '/assets/img/mobileSideMenu/files.svg',
    type: "link",
    path: '/termsAndConditions'
  },
  {id: 9,
    name: "mobileSideMenu.listMenu.news",
    icon: '/assets/img/mobileSideMenu/files.svg',
    type: "link",
    path: "/#news"
  },
];

export const MobileListContainer = ({t, isAuth}) => {


  const messages = useSelector((store) => store.notifications.messagesData);

  let unreadMessages = messages.slice().filter((el) => {
    if (el.read === '0' || el.read === undefined) {
      return true;
    } else {
      return false;
    }
  });

  return (
    <ul className={styles.mobileSideList}>
      <li className={styles.mobileSideListItem}>
        <MobileSideListLinks t={t} dataList={listArr[0]}/>
      </li>
      {isAuth ? <li className={styles.mobileSideListItem}>
                  <MobileSideListLinks t={t} dataList={listArr[1]}/>
                </li> : ""}
      {isAuth ? <li className={styles.mobileSideListItem}>
                  <MobileSideListLinks messages={unreadMessages} t={t} dataList={listArr[2]}/>
                </li> : ""}
      <li className={styles.mobileSideListItem}>
        <MobileSideListLinks t={t} dataList={listArr[3]}/>
      </li>
      {/*<li className={styles.mobileSideListItem}>*/}
      {/*  <img src={listArr[4].icon} alt='side menu icon'/>*/}
      {/*  <DropMenu el={listArr[4]} t={t} isAuth={isAuth}/>*/}
      {/*</li>*/}
      <li className={styles.mobileSideListItem}>
        <img src={listArr[5].icon} alt='side menu icon'/>
        <DropMenu el={listArr[5]} t={t} isAuth={isAuth}/>
      </li>
      <li className={styles.mobileSideListItem}>
        <img src={listArr[6].icon} alt='side menu icon'/>
        <DropMenu el={listArr[6]} t={t} isAuth={isAuth}/>
      </li>
      <li className={styles.mobileSideListItem}>
        <MobileSideListLinks t={t} dataList={listArr[7]}/>
      </li>
      <li className={styles.mobileSideListItem}>
        <MobileSideListLinks t={t} dataList={listArr[8]}/>
      </li>
    </ul>
  )
}

//      {
//         listArr.map((el) => {
//           if (el.type === 'link') {
//            return (
//              <li key={el.id} className={styles.mobileSideListItem}>
//               <MobileSideListLinks t={t} dataList={el}/>
//              </li>
//            )
//           } else {
//             return (
//               <li
//                 key={el.id}
//                 className={styles.mobileSideListItem}
//               >
//                 <img src={el.icon} alt='side menu icon'/>
//                 <DropMenu el={el} t={t}/>
//               </li>
//             )
//           }
//       })
//       }