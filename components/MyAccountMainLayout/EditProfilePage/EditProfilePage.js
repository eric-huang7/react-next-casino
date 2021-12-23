import styles from '../../../styles/MyAccount/UserInfoPage/EditProfilePage.module.scss';
import {Heading} from "../ComponentsForPages/Heading";
import {EditProfileMainContainer} from "./EditProfileComponents/EditProfileMainContainer";
import {useSelector} from "react-redux";



export const EditProfilePage = ({t}) => {
  const userInfo = useSelector((store) => store.authInfo);

  return (
    <div className={styles.editProfileMainContainer}>
      <Heading t={t} heading={"myAccount.pageHeadings.editProfile"}/>
      <EditProfileMainContainer userInfo={userInfo.user.user} t={t}/>
    </div>
  )
}