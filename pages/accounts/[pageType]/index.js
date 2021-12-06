import {AccountMainLayout} from "../../../components/MyAccountMainLayout/AccountMainLayout";
import {useTranslation} from "next-i18next";
import {serverSideTranslations} from "next-i18next/serverSideTranslations";
import {useRouter} from "next/router";


const PageType = (props) => {
  const router = useRouter();

  const { t } = useTranslation('common');

  return (
    <AccountMainLayout t={t}>
      <h1>{router.asPath}</h1>
    </AccountMainLayout>
  )
}

export const getServerSideProps = async ({ locale }) => {
  return ({
    props: {
      ...await serverSideTranslations(locale, ['common']),
    },
  })
}

export default PageType;