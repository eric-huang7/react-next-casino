import {useRouter} from "next/router";
import {useTranslation} from "next-i18next";
import {AccountMainLayout} from "../../../components/MyAccountMainLayout/AccountMainLayout";
import {serverSideTranslations} from "next-i18next/serverSideTranslations";
import {BalancePage} from "../../../components/MyAccountMainLayout/BalanceComponents/BalancePage";
import {TrxHistory} from "../../../components/MyAccountMainLayout/TrxHistory/TrxHistory";
import {BonusesPageContainer} from "../../../components/MyAccountMainLayout/BonusesPage/BonusesPageContainer";
import {ProfileInfoPage} from "../../../components/MyAccountMainLayout/ProfileInfoPage/ProfileInfoPage";

const PageType = (props) => {
  const router = useRouter();

  const { t } = useTranslation('common');


  switch (router.query.pageType) {
    case "balance":
      return (
        <AccountMainLayout t={t}>
          <BalancePage t={t}/>
        </AccountMainLayout>
      )
    case "history" :
      return (
        <AccountMainLayout t={t}>
          <TrxHistory t={t}/>
        </AccountMainLayout>
      )
    case "bonuses" :
      return (
        <AccountMainLayout t={t}>
          <BonusesPageContainer t={t}/>
        </AccountMainLayout>
      )
    case "profile-info" :
      return (
        <AccountMainLayout t={t}>
          <ProfileInfoPage t={t} />
        </AccountMainLayout>
      )
    case "gambling-limits" :
      return (
        <AccountMainLayout t={t}>
          <h2>gambling-limits</h2>
        </AccountMainLayout>
      )
    case "documents" :
      return (
        <AccountMainLayout t={t}>
          <h2>documents</h2>
        </AccountMainLayout>
      )
    default:
      return (
        <AccountMainLayout t={t}>
          <BalancePage t={t}/>
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

export default PageType;