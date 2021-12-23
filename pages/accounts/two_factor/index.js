import {useTranslation} from "next-i18next";
import {AccountMainLayout} from "../../../components/MyAccountMainLayout/AccountMainLayout";

import {serverSideTranslations} from "next-i18next/serverSideTranslations";
import {TwoFactorAuthPage} from "../../../components/MyAccountMainLayout/TwoFactorAuth/TwoFactorAuthPage";
import {useEffect} from "react";
import {auth} from "../../../redux/actions/userData";
import {useDispatch} from "react-redux";

const TwoFactorAuth = () => {
  const dispatch = useDispatch();
  const { t } = useTranslation('common');


  useEffect(() => {
    dispatch(auth());
  }, [])

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