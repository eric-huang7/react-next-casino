import {useDispatch, useSelector} from "react-redux";
import {showRedeemModal} from "../../../redux/popups/action";
import {showMobileMenu} from "../../../redux/ui/action";
import {Accordion, Box} from "@chakra-ui/react";
import ListDropdownItem from "./ListDropdownItem";
import {logout} from "../../../redux/user/action";
import {useRouter} from "next/router";
import {useCookies} from "react-cookie";
import {setLang} from "../../../redux/lang/action";
import {languages} from "../../../envs/languages";

export const MobileListContainer = ({t, isAuth}) => {
  const dispatch = useDispatch();
  const router = useRouter();
  const [cookies, setCookie, removeCookie] = useCookies(['language']);
  const messages = useSelector((store) => store.notifications.messagesData);

  const unreadMessages = messages.slice().filter((el) => {
    if (el.read === '0' || el.read === undefined) {
      return true;
    }
  });

  const onClose = () => {
    dispatch(showMobileMenu(false))
  }

  const handleRedeem = () => {
    onClose()
    dispatch(showRedeemModal(true))
  }

  const langChooser = (e) => {
    onClose()
    dispatch(setLang({lang: e?.lang, setCookie}));
    router.push(`/${e?.lang}`)
  }

  const handleLogout = () => {
    onClose()
    router.push('/');
    dispatch(logout());
  }

  const listArr = [
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
      path: "/accounts/balance",
      isAuth: true
    },
    {id: 3,
      name: "mobileSideMenu.listMenu.notifications",
      icon: '/assets/img/mobileSideMenu/bell.svg',
      type: "link",
      path: "/notifications",
      badge: unreadMessages?.length,
      isAuth: true
    },
    {id: 4,
      name: "mobileSideMenu.listMenu.promotions",
      icon: '/assets/img/mobileSideMenu/gift.svg',
      type: "link",
      path: "/promotions"
    },
    {id: 10,
      name: "mobileSideMenu.listMenu.redeem",
      icon: '/assets/img/mobileSideMenu/cup.svg',
      type: "link",
      path: "javascript:void(0)",
      isAuth: true,
      onClick: handleRedeem
    },
    // {id: 5,
    //   name: "mobileSideMenu.listMenu.tournament",
    //   icon: '/assets/img/mobileSideMenu/cup.svg',
    //   type: "block",
    //   isAuth: true,
    //   blockData: [
    //     {id: "5.1", name: "mobileSideMenu.innerLists.tournament.slotWars", type: "link", path: "/#slotWars"},
    //     {id: "5.2", name: "mobileSideMenu.innerLists.tournament.tableWars", type: "link", path: "/#tableWars"},
    //     {id: "5.3", name: "mobileSideMenu.innerLists.tournament.lastManStanding", type: "link", path: "/#lastManStanding"},
    //   ]
    // },
    {id: 6,
      name: "mobileSideMenu.listMenu.help",
      icon: '/assets/img/mobileSideMenu/question.svg',
      type: "block",
      blockData: [
        {id: "6.1",
          name: "mobileSideMenu.innerLists.help.heading",
          icon: "/assets/img/mobileSideMenu/helpPremium.svg",
          info: "mobileSideMenu.innerLists.help.information",
          type: "block",
          // path: '',
          blockData: [
            {id: "6.1.1", name: "support@slotsIdol.com", path: "mailto:support@slotsIdol.com"},
            {id: "6.1.2", name: "mobileSideMenu.innerLists.help.liveChat", path: "/#liveChat"}
          ]
        },
        {id: "6.2", name: "FAQ", type: "link", path: "/contactUs#faq"},
        // {id: "6.3", name: "mobileSideMenu.innerLists.help.aboutBitcoin", type: "link", path: "/#AboutBitcoin"},
        // {id: "6.4", name: "mobileSideMenu.innerLists.help.instantExchanger", type: "link", path: "/#InstantBTCtoEURexchanger"},
        // {id: "6.5", name: "mobileSideMenu.innerLists.help.provabilityExplained", type: "link", path: "/#ProvabilityExplained"},
        {id: "6.6", name: "mobileSideMenu.innerLists.help.playSafe", type: "button", path: "/#PlaySafe"},
        // {id: "6.7", name: "mobileSideMenu.innerLists.help.complains", type: "link", path: "/#Complains"},
        // {id: "6.8", name: "mobileSideMenu.innerLists.help.howToBuyCrypto", type: "link", path: "/#HowToBuyCrypto"},
        {id: "6.9", name: "mobileSideMenu.innerLists.help.manageSubscriptions", type: "button", path: "/#manageSubscriptions", isAuth: true}
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
        {id: "7.4", name: "mobileSideMenu.innerLists.info.privacyPolicy", type: "link", path: "/privacy-policy"},
        // {id: "7.5", name: "mobileSideMenu.innerLists.info.affiliateProgram", type: "link", path: "/#AffiliateProgram"},
        // {id: "7.6", name: "mobileSideMenu.innerLists.info.bonusTermsAndConditions", type: "link", path: "/#BonusTermsAndConditions"},
      ]
    },
    {id: 8,
      name: "mobileSideMenu.listMenu.termsAndConditions",
      icon: '/assets/img/mobileSideMenu/files.svg',
      type: "link",
      path: '/termsAndConditions'
    },
    // {id: 9,
    //   name: "mobileSideMenu.listMenu.news",
    //   icon: '/assets/img/mobileSideMenu/files.svg',
    //   type: "link",
    //   path: "/#news"
    // },
    {id: 11,
      name: "mobileSideMenu.listMenu.language",
      icon: '/assets/img/mobileSideMenu/globe.svg',
      type: "block",
      blockData: languages.map(item => ({
        ...item,
        id: item.name,
        name: item.language,
        onClick: langChooser
      })),
      isAuth: true,
    },
    {id: 12,
      name: "mobileSideMenu.listMenu.logout",
      icon: '/assets/img/mobileSideMenu/arrow.svg',
      type: "link",
      isAuth: true,
      onClick: handleLogout
    },
  ];

  return (
    <Accordion allowMultiple>
      {listArr.filter(item => item.isAuth ? isAuth : true).map((el, index) => (
        <Box key={el.id}>
          <ListDropdownItem
            t={t}
            isAuth={isAuth}
            heading={el.name}
            img={el.icon}
            path={el.path}
            blockData={el.blockData}
            onClick={el.onClick}
            badge={el.badge}
          />
        </Box>
      ))}
    </Accordion>
  )
}
