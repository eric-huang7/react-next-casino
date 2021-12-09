import {useRouter} from "next/router";
import {useTranslation} from "next-i18next";
import {serverSideTranslations} from "next-i18next/serverSideTranslations";
import {AccountMainLayout} from "../../../../components/MyAccountMainLayout/AccountMainLayout";
import {TrxHistory} from "../../../../components/MyAccountMainLayout/TrxHistory/TrxHistory";
import {BetsHistory} from "../../../../components/MyAccountMainLayout/BetsHistory/BetsHistory";


const TypeOfHistory = (props) => {
  const router = useRouter();

  console.log(router);

  const { t } = useTranslation('common');

  switch (router.query.typeOfHistory) {
    case "transactions":
      return (
        <AccountMainLayout t={t}>
          <TrxHistory  t={t}/>
        </AccountMainLayout>
      )
    case "bets" :
      return (
        <AccountMainLayout t={t}>
          <BetsHistory t={t} />
        </AccountMainLayout>
      )
    case "bonus" :
      return (
        <AccountMainLayout t={t}>
          <h1>bonus-history</h1>
        </AccountMainLayout>
      )
    case "bonus" :
      return (
        <AccountMainLayout t={t}>
          <h1>bonus-history</h1>
        </AccountMainLayout>
      )
    default:
      return (
        <AccountMainLayout t={t}>
          <TrxHistory t={t}/>
        </AccountMainLayout>
      )
  }

}

export const getServerSideProps = async (context) => {

  return ({
    props: {
      ...await serverSideTranslations(context.locale, ['promotionsPage', 'common']),
    },
  })
}

export default TypeOfHistory;