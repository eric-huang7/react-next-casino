import {useTranslation} from "next-i18next";
import {serverSideTranslations} from "next-i18next/serverSideTranslations";
import MainLayout from "../../components/MainLayout/MainLayout";
import styles from '../../styles/PaymentsMethodsPage/PaymentsMethodsPage.module.scss';
import {NewsBlock} from "../../components/HomePageComponents/NewsBlock/NewsBlock";
import {PaymentsInformationBlock} from "../../components/PaymentsMethodsComponents/PaymentsInformationBlock";
import {PaymentsDepositBlock} from "../../components/PaymentsMethodsComponents/PaymentsDepositBlock";
import {PaymentsWithdrawBlock} from "../../components/PaymentsMethodsComponents/PaymentsWithdrawBlock";


const PaymentsMethods = (props) => {
  const { t } = useTranslation('common');
  // console.log(props);
  return (
    <>
      <MainLayout t={t}>
        <div className={styles.paymentsMainWrapper}>
          <PaymentsInformationBlock t={t}/>
          <PaymentsDepositBlock t={t}/>
          <PaymentsWithdrawBlock t={t}/>
        </div>

        <NewsBlock t={t} isBackShow={false}/>
      </MainLayout>
    </>
  )
}

export const getStaticProps = async ({ locale }) => {
  return ({
    props: {
      ...await serverSideTranslations(locale, ['common']),
    },
  })
}

export default  PaymentsMethods;