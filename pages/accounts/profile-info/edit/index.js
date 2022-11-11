import {useTranslation} from "next-i18next";
import {AccountMainLayout} from "../../../../components/MyAccountMainLayout/AccountMainLayout";

import {serverSideTranslations} from "next-i18next/serverSideTranslations";
import {useSelector} from "react-redux";
import {Heading} from "../../../../components/MyAccountMainLayout/ComponentsForPages/Heading";
import {LoadingComponent} from "../../../../components/LoadingComponent/LoadingComponent";
import ErrorText from "../../../../components/ErrorBoundaryComponents/ErrorText";
import {EditProfileMainContainer} from "../../../../components/MyAccountMainLayout/EditProfilePage/EditProfileMainContainer";

const EditProfile = () => {
  const { t } = useTranslation('common');
  const userInfo = useSelector((store) => store.authInfo);
  const currencyJurisdiction = useSelector((store) => store.currency);

  return (
    <AccountMainLayout t={t}>
      <Heading heading={t("myAccount.pageHeadings.editProfile")}/>
      {currencyJurisdiction.loading_currency_jurisdiction || !userInfo.isAuthenticated
        ? <LoadingComponent t={t}/>
        : <ErrorText>
          <EditProfileMainContainer currencyJurisdiction={currencyJurisdiction} userInfo={userInfo.user.user} t={t}/>
        </ErrorText>
      }
    </AccountMainLayout>
  )
}


export const getStaticProps = async ({ locale }) => {
  return ({
    props: {
      ...await serverSideTranslations(locale, ['promotionsPage', 'common']),
    },
  })
}


export default EditProfile;
