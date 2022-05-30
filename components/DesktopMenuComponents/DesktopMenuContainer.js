import styles from '../../styles/DesktopMenu/DesktopMenu.module.scss';
import {LinkItem} from "./LinkItem";
import {SignOutItem} from "./SignOutItem";
import {HeaderButtonsDeposit} from "../MainLayout/Header/HeaderButtons/HeaderButtonsDeposit";
import {useDispatch, useSelector} from "react-redux";
import {showDepositModal, showPlaySafe, showRedeemModal} from "../../redux/popups/action";
import Link from "next/link";
import {useTranslation} from "next-i18next";
import {BalanceBlock} from "../MainLayout/Header/UserBlock/BalanceBlock";

export const DesktopMenuContainer = ({ onClose, userInfo, userCurrency }) => {
  const { t } = useTranslation('common')
  const dispatch = useDispatch()
  const isShowDepositModal = useSelector((state) => state.popups.isShowDepositModal)
  const isShowRedeemModal = useSelector((state) => state.popups.isShowDepositModal)

  const redeem = () => {
    if (!isShowRedeemModal) {
      dispatch(showRedeemModal(true))
    }
  }

  const linksData = [
    {id: 1, name: 'header.userDesktopMenu.bank', path: '/accounts/balance', icon: '/assets/icons/desktopMenu/bank-icon.webp'},
    {id: 2, name: 'header.userDesktopMenu.messages', path: '/notifications', icon: '/assets/icons/desktopMenu/email-icon.webp'},
    {id: 3, name: 'header.userDesktopMenu.myAccount', path: '/accounts/profile-info', icon: '/assets/icons/desktopMenu/account-icon.webp'},
    {id: 4, name: 'header.userDesktopMenu.bonuses', path: '/accounts/bonuses', icon: '/assets/icons/desktopMenu/bonus-icon.webp'},
    {id: 5, name: 'header.userDesktopMenu.myActivity', path: '/accounts/history/history/bets', icon: '/assets/icons/desktopMenu/activity-icon.webp'},
    {id: 6, name: 'header.userDesktopMenu.takeBreak', path: '/accounts/gambling-limits', icon: '/assets/icons/desktopMenu/take-break-icon.webp'},
    {id: 7, name: 'header.userDesktopMenu.history', path: '/accounts/history', icon: '/assets/icons/desktopMenu/history-icon.webp'},
    {id: 8, name: 'header.userDesktopMenu.2fa', path: '/accounts/two_factor', icon: '/assets/icons/desktopMenu/2fa-icon.webp'},
    {id: 8, name: 'header.userDesktopMenu.redeem', onClick: redeem, icon: '/assets/icons/desktopMenu/redeem-icon.webp'},
  ]

  const closeDepositModalHandler = () => {
    if (!isShowDepositModal) {
      dispatch(showDepositModal(true))
    }
    onClose();
  }



  return (
    <div className={styles.desktopMenuContainer}>
      <div className={styles.topNav}>
        <div className={styles.balance}>
          <BalanceBlock userInfo={userInfo} userCurrency={userCurrency} />
        </div>

        <div className={styles.buttons}>
          <div>
            <button onClick={closeDepositModalHandler}>
              <img className={styles.logo} src={'/assets/icons/desktopMenu/deposit-icon.webp'} alt=""/>
              {t('header.navbarButtons.deposit')}
            </button>
          </div>
          <div>
            <Link href={'/accounts/cashout'}>
              <a>
                <button onClick={onClose}>
                  <img className={styles.logo} src={'/assets/icons/desktopMenu/withdraw-icon.webp'} alt=""/>
                  {t('header.navbarButtons.cashOut')}
                </button>
              </a>
            </Link>
          </div>
        </div>
      </div>
      <div className={styles.menuContainer}>
        <ul className={styles.menuList}>
          {
            linksData.map((link) => (
              <LinkItem
                name={link.name}
                icon={link.icon}
                path={link.path}
                onClick={link.onClick}
                key={`${link.id} ${link.name} link item`}
              />
            ))
          }
        </ul>
      </div>
      <div className={styles.footer}>
        <ul className={styles.linkList}>
          <li>
            <Link href="/contactUs#faq"><a>{t(`header.userDesktopMenu.help`)}</a></Link>
          </li>
          <li className={styles.borderTop}>
            <div onClick={() => dispatch(showPlaySafe(true))}>{t(`header.userDesktopMenu.responsibleGaming`)}</div>
          </li>
          <SignOutItem />
        </ul>
      </div>
    </div>
  )
}
