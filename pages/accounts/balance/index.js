import {useRouter} from "next/router";
import {useTranslation} from "next-i18next";
import {AccountMainLayout} from "../../../components/MyAccountMainLayout/AccountMainLayout";
import {serverSideTranslations} from "next-i18next/serverSideTranslations";

const Balance = (props) => {
  console.log(props)

  const router = useRouter();

  const { t } = useTranslation('common');

  return (
    <AccountMainLayout t={t}>
      <h1>{router.asPath}</h1>
    </AccountMainLayout>
  )
}

export const getStaticProps = async (context) => {

  return ({
    props: {
      ...await serverSideTranslations(context.locale, ['common']),
    },
  })
}

export default Balance;