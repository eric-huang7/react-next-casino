import Image from 'next/image'
import {useDispatch, useSelector} from "react-redux";
import {Box} from "@chakra-ui/react";
import {showMobileMenu} from "/redux/ui/action";
import {NotificationCounter} from "../UserBlock/NotificationCounter";

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
    <Box
      display={{base: "block", lg: "none"}}
      w="32px"
      h="24px"
      mr="11px"
      position="relative"
      onClick={burgerClickHandler}
    >
      <Image
        src={'/assets/icons/burger_icon.svg'}
        alt="burgerMenu icon"
        width={'32px'}
        height={'24px'}
      />
      {(unreadMessages.length > 0 && userLogined) && <NotificationCounter messageCount={unreadMessages.length} />}
    </Box>
  )
}
