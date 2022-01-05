import styles from '../../styles/DesktopMenu/DesktopMenu.module.scss';
import {useDispatch} from "react-redux";
import {logout} from "../../redux/actions/userData";


export const SignOutItem = ({t}) => {
const dispatch = useDispatch();

const logoutButtonHandler = () => {
  dispatch(logout());
}


  return (
    <li className={styles.linkItem}>
      <div className={styles.iconContainer}>
        <img src={'/assets/icons/desktopMenu/signOut.png'} alt={`sign out link icon`}/>
      </div>
      <button onClick={() => logoutButtonHandler()} className={styles.signoutButton}>Sign Out</button>
    </li>
  )
}