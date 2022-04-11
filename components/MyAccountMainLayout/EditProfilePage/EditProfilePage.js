import styles from '../../../styles/MyAccount/UserInfoPage/EditProfilePage.module.scss';
import {Heading} from "../ComponentsForPages/Heading";
import {EditProfileMainContainer} from "./EditProfileComponents/EditProfileMainContainer";
import {useSelector} from "react-redux";
import {LoadingComponent} from "../../LoadingComponent/LoadingComponent";
import ErrorText from '../../ErrorBoundaryComponents/ErrorText'



export const EditProfilePage = ({t}) => {
  const userInfo = useSelector((store) => store.authInfo);
  const currencyJurisdiction = useSelector((store) => store.currency);


  if (currencyJurisdiction.loading_currency_jurisdiction || !userInfo.isAuthenticated) {
    return (
      <div>
        <Heading t={t} heading={"myAccount.pageHeadings.editProfile"}/>
        <LoadingComponent t={t}/>
      </div>
    )
  } else {
    return (
      <div className={styles.editProfileMainContainer}>
        <Heading t={t} heading={"myAccount.pageHeadings.editProfile"}/>
        <ErrorText>
          <EditProfileMainContainer currencyJurisdiction={currencyJurisdiction} userInfo={userInfo.user.user} t={t}/>
        </ErrorText>
      </div>
    )
  }
}
