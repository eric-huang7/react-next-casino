import Image from 'next/image'
import styles from '../../../../styles/Header/BurgerButton.module.scss'
import {useDispatch, useSelector} from "react-redux";
import {showMobileMenu} from "../../../../redux/ui/action";
import {NotificationCounter} from "./NotificationCounter";
import ErrorEmpty from "../../../ErrorBoundaryComponents/ErrorEmpty";



export const BurgerButton = ({userLogined}) => {
  const dispatch = useDispatch();
  const isShowMobileMenu = useSelector((state) => state.ui.isShowMobileMenu);
  const messages = useSelector((store) => store.notifications.messagesData);

  let unreadMessages = messages.slice().filter((el) => {
    if (el.read === '0' || el.read === undefined) {
      return true;
    } else {
      return false;
    }
  });


  const burgerClickHandler = () => {
    if (isShowMobileMenu) {
      dispatch(showMobileMenu(false));
    } else {
      dispatch(showMobileMenu(true));
    }
  }

  return (
    <div
      className={styles.burgerWrapper}
      onClick={() => burgerClickHandler()}
    >
      <Image
        src={'/assets/icons/burger_icon.svg'}
        alt="burgerMenu icon"
        width={'32px'}
        height={'24px'}
      />
      {(unreadMessages.length > 0 && userLogined)
        ?
        <ErrorEmpty>
          <NotificationCounter unreadMessages={unreadMessages} />
        </ErrorEmpty>
        :
        <></>}
    </div>
  )
}
