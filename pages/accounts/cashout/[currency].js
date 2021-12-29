import {useTranslation} from "next-i18next";
import {AccountMainLayout} from "../../../components/MyAccountMainLayout/AccountMainLayout";
import {ChangePasswordPage} from "../../../components/MyAccountMainLayout/ChangePasswordPage/ChangePasswordPage";
import {serverSideTranslations} from "next-i18next/serverSideTranslations";
import {CashoutPage} from "../../../components/MyAccountMainLayout/CashoutPage/CashoutPage";


const Cashout = (props) => {
  const { t } = useTranslation('common');

  console.log(props, '<<<<< cashout');

  return (
    <AccountMainLayout t={t}>
      <CashoutPage t={t} />
    </AccountMainLayout>
  )
}


export const getServerSideProps = async (context) => {
  console.log(context);

  return ({
    props: {
      ...await serverSideTranslations(context.locale, ['promotionsPage', 'common']),
      pageInfo: {
        query: {...context.query},
        params: {...context.params}
      }
    },
  })
}

export default Cashout;