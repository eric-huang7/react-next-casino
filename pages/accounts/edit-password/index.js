import {AccountMainLayout} from "../../../components/MyAccountMainLayout/AccountMainLayout";
import {useTranslation} from "next-i18next";
import {serverSideTranslations} from "next-i18next/serverSideTranslations";
import {Heading} from "../../../components/MyAccountMainLayout/ComponentsForPages/Heading";
import {ChangePasswordForm} from "../../../components/MyAccountMainLayout/ChangePasswordPage/ChangePasswordForm";


const EditPassword = () => {
  const { t } = useTranslation('common');

  return (
    <AccountMainLayout>
        <Heading heading={t('myAccount.pageHeadings.changePassword')}/>
        <ChangePasswordForm t={t}/>
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


export default EditPassword;
