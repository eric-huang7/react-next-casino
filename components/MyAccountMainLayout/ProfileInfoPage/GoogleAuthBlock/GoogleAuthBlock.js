import styles from '../../../../styles/MyAccount/UserInfoPage/GoogleAuth.module.scss';
import Link from "next/link";
import {useDispatch} from "react-redux";
import {auth} from "../../../../redux/actions/userData";
import {useRouter} from "next/router";

export const GoogleAuthBlock = ({t}) => {
  const router = useRouter();
  const dispatch = useDispatch();

  const googleAuthClickHandler = (e) => {
    e.preventDefault();
    dispatch(auth()).then((data) => {
      router.push('/accounts/two_factor');
    }).catch((e) => {

    })

  }


  return (
    <div  className={styles.googleAuthMainBlock}>
      <h3 className={styles.googleAuthHeading}>{t("myAccount.profilePage.googleAuth.heading")}</h3>

      <Link href={'/accounts/two_factor'}>
        <a
          onClick={(e) => googleAuthClickHandler(e)}
          className={styles.googleAuthLink}
        >
          {t("myAccount.profilePage.googleAuth.link")}
        </a>
      </Link>
    </div>
  )
}