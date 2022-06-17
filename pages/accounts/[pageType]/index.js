import {useRouter} from "next/router";
import {useTranslation} from "next-i18next";
import {AccountMainLayout} from "../../../components/MyAccountMainLayout/AccountMainLayout";
import {serverSideTranslations} from "next-i18next/serverSideTranslations";
import {BalancePage} from "../../../components/MyAccountMainLayout/BalanceComponents/BalancePage";
import {TrxHistory} from "../../../components/MyAccountMainLayout/TrxHistory/TrxHistory";
import {BonusesPageContainer} from "../../../components/MyAccountMainLayout/BonusesPage/BonusesPageContainer";
import {ProfileInfoPage} from "../../../components/MyAccountMainLayout/ProfileInfoPage/ProfileInfoPage";
import {GamblingLimitsPage} from "../../../components/MyAccountMainLayout/GamblingLimitsPage/GamblingLimitsPage";
import {DocumentsPage} from "../../../components/MyAccountMainLayout/DocumentsPage/DocumentsPage";
import {CashoutPage} from "../../../components/MyAccountMainLayout/CashoutPage/CashoutPage";

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
          <GamblingLimitsPage t={t} />
        </AccountMainLayout>
      )
    case "documents" :
      return (
        <AccountMainLayout t={t}>
          <DocumentsPage t={t} />
        </AccountMainLayout>
      )
    case "cashout" :
      return (
        <AccountMainLayout t={t}>
          <CashoutPage t={t} activeLink={null}/>
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
      ...await serverSideTranslations(context.locale, ['promotionsPage', 'common', 'termsAndConditions']),
    },
  })
}

export default PageType;
