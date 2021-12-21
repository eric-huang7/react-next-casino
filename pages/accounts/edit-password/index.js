import {AccountMainLayout} from "../../../components/MyAccountMainLayout/AccountMainLayout";
import {useTranslation} from "next-i18next";
import {serverSideTranslations} from "next-i18next/serverSideTranslations";
import {ChangePasswordPage} from "../../../components/MyAccountMainLayout/ChangePasswordPage/ChangePasswordPage";


const EditPassword = () => {
  const { t } = useTranslation('common');

  return (
    <AccountMainLayout t={t}>
        <ChangePasswordPage t={t} />
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