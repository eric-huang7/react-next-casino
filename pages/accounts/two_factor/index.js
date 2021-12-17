import {useTranslation} from "next-i18next";
import {AccountMainLayout} from "../../../components/MyAccountMainLayout/AccountMainLayout";

import {serverSideTranslations} from "next-i18next/serverSideTranslations";
import {TwoFactorAuthPage} from "../../../components/MyAccountMainLayout/TwoFactorAuth/TwoFactorAuthPage";

const TwoFactorAuth = () => {
  const { t } = useTranslation('common');

  return (
    <AccountMainLayout t={t}>
      <TwoFactorAuthPage t={t} />
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


export default TwoFactorAuth;