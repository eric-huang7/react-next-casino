import {useSelector} from "react-redux";
import styles from '../../../../styles/Header/BurgerButton.module.scss';

export const NotificationCounter = ({unreadMessages}) => {

  return (
    <span className={styles.burgerNotifyCounter}>{unreadMessages.length}</span>
  )
}