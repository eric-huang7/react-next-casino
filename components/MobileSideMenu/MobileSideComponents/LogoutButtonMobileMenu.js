import styles from '../../../styles/MobileSideMenu/MobileSideMenu.module.scss';
import {useDispatch} from "react-redux";
import {logout} from "../../../redux/user/action";
import {showMobileMenu} from "../../../redux/ui/action";

export const LogoutButtonMobileMenu = ({t, isLogined}) => {
  const dispatch = useDispatch()

  const logoutClickHandler = () => {
    dispatch(logout());
    dispatch(showMobileMenu(false));
  }

  return (
    isLogined ? <div onClick={() => logoutClickHandler()} className={styles.logoutLinkWrapper}>
                  <img src={'/assets/img/mobileSideMenu/arrow.svg'} alt="logout icon"/>
                  <p>{t('mobileSideMenu.listMenu.logout')}</p>
                </div> : ""
  )
}
