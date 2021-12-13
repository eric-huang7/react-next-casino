import {useRouter} from "next/router";
import {useTranslation} from "next-i18next";
import {serverSideTranslations} from "next-i18next/serverSideTranslations";
import {AccountMainLayout} from "../../../../components/MyAccountMainLayout/AccountMainLayout";
import {TrxHistory} from "../../../../components/MyAccountMainLayout/TrxHistory/TrxHistory";
import {BetsHistory} from "../../../../components/MyAccountMainLayout/BetsHistory/BetsHistory";
import {BonusHistory} from "../../../../components/MyAccountMainLayout/BonusHistory/BonusHistory";


const TypeOfHistory = (props) => {
  const router = useRouter();

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
          <BonusHistory t={t}/>
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