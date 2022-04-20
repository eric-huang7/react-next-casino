import styles from '../../styles/DesktopMenu/DesktopMenu.module.scss';
import {LinkItem} from "./LinkItem";
import {SignOutItem} from "./SignOutItem";
import {HeaderButtonsDeposit} from "../MainLayout/Header/HeaderButtons/HeaderButtonsDeposit";
import {useDispatch, useSelector} from "react-redux";
import {showDepositModal} from "../../redux/popups/action";
import Link from "next/link";
import {useTranslation} from "next-i18next";

export const DesktopMenuContainer = ({ onClose }) => {
  const { t } = useTranslation('common')
  const linksData = [
    {id: 1, name: 'header.userDesktopMenu.myAccount', path: '/accounts/balance', icon: '/assets/icons/desktopMenu/account-icon.png'},
    {id: 1, name: 'header.userDesktopMenu.bonuses', path: '/accounts/bonuses', icon: '/assets/icons/desktopMenu/bonus-icon.png'},
    {id: 1, name: 'header.userDesktopMenu.myBets', path: '/accounts/history/history/bets', icon: '/assets/icons/desktopMenu/activity-icon.png'},
    {id: 1, name: 'header.userDesktopMenu.transactions', path: '/accounts/history', icon: '/assets/icons/desktopMenu/history-icon.png'},
  ]

  const dispatch = useDispatch()
  const isShowDepositModal = useSelector((state) => state.popups.isShowDepositModal)

  const closeDepositModalHandler = () => {
    if (!isShowDepositModal) {
      dispatch(showDepositModal(true))
    }
    onClose();
  }

  return (
    <div className={styles.desktopMenuContainer}>
      <div className={styles.topNav}>
        <div>
          <button onClick={closeDepositModalHandler}>
            <img className={styles.logo} src={'/assets/icons/desktopMenu/deposit-icon.png'} alt=""/>
            {t('header.navbarButtons.deposit')}
          </button>
        </div>
        <div>&nbsp;</div>
        <div>
          <Link href={'/accounts/cashout'}>
            <a>
              <button onClick={onClose}>
                <img className={styles.logo} src={'/assets/icons/desktopMenu/withdraw-icon.png'} alt=""/>
                {t('header.navbarButtons.cashOut')}
              </button>
            </a>
          </Link>
        </div>
      </div>
      <div className={styles.menuContainer}>
        <ul className={styles.menuList}>
          {
            linksData.map((link) => {
              return (
                <LinkItem name={link.name} icon={link.icon} path={link.path} key={`${link.id} ${link.name} link item`}/>
              )
            })
          }
          <SignOutItem />
        </ul>
      </div>
    </div>
  )
}
