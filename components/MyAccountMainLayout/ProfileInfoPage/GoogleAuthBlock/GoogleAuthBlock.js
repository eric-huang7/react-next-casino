import styles from '../../../../styles/MyAccount/UserInfoPage/GoogleAuth.module.scss';
import Link from "next/link";
import {useDispatch} from "react-redux";
import {auth} from "../../../../redux/actions/userData";

export const GoogleAuthBlock = ({t}) => {
  const dispatch = useDispatch();

  const googleAuthClickHandler = () => {
    dispatch(auth());
  }


  return (
    <div  className={styles.googleAuthMainBlock}>
      <h3 className={styles.googleAuthHeading}>Google Authenticator</h3>

      <Link href={'/accounts/two_factor'}><a onClick={() => googleAuthClickHandler()} className={styles.googleAuthLink}>Configure Google Authenticator</a></Link>
    </div>
  )
}