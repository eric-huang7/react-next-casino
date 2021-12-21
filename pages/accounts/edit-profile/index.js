import {useTranslation} from "next-i18next";
import {AccountMainLayout} from "../../../components/MyAccountMainLayout/AccountMainLayout";

import {serverSideTranslations} from "next-i18next/serverSideTranslations";
import {EditProfilePage} from "../../../components/MyAccountMainLayout/EditProfilePage/EditProfilePage";

const EditProfile = () => {
  const { t } = useTranslation('common');

  return (
    <AccountMainLayout t={t}>
      <EditProfilePage t={t} />
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