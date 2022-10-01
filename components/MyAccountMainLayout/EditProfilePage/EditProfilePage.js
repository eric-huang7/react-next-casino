import {Heading} from "../ComponentsForPages/Heading";
import {EditProfileMainContainer} from "./EditProfileComponents/EditProfileMainContainer";
import {useSelector} from "react-redux";
import {LoadingComponent} from "../../LoadingComponent/LoadingComponent";
import ErrorText from '../../ErrorBoundaryComponents/ErrorText'

export const EditProfilePage = ({t}) => {
  const userInfo = useSelector((store) => store.authInfo);
  const currencyJurisdiction = useSelector((store) => store.currency);

  return (
    <div>
      <Heading heading={t("myAccount.pageHeadings.editProfile")}/>
      {currencyJurisdiction.loading_currency_jurisdiction || !userInfo.isAuthenticated
        ? <LoadingComponent t={t}/>
        : <ErrorText>
          <EditProfileMainContainer currencyJurisdiction={currencyJurisdiction} userInfo={userInfo.user.user} t={t}/>
        </ErrorText>
      }
    </div>
  )
}
