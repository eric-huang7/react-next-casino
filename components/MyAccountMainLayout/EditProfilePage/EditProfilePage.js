import styles from '../../../styles/MyAccount/UserInfoPage/EditProfilePage.module.scss';
import {Heading} from "../ComponentsForPages/Heading";
import {EditProfileMainContainer} from "./EditProfileComponents/EditProfileMainContainer";


export const EditProfilePage = ({t}) => {


  return (
    <div className={styles.editProfileMainContainer}>
      <Heading t={t} heading={"myAccount.pageHeadings.editProfile"}/>
      <EditProfileMainContainer t={t}/>
    </div>
  )
}