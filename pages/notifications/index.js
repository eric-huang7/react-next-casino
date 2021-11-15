import styles from '../../styles/NotificationsPage/NotificationsPage.module.scss';
import {useTranslation} from "next-i18next";
import MainLayout from "../../components/MainLayout/MainLayout";
import {serverSideTranslations} from "next-i18next/serverSideTranslations";
import {MainBlockContainer} from "../../components/NotificationsPage/MainBlock/MainBlockContainer";
import {useSelector} from "react-redux";
import {useRouter} from "next/router";


const NotificationsPage = () => {
  const { t } = useTranslation('common');
  const router = useRouter();

  // const userAuth = useSelector(state => state.authInfo.isAuthenticated);
  // if (!userAuth) {
  //   router.replace('/', '/' ,{locale: router.locale})
  // }

  //TODO: uncomment upper redirection


  return (
    <>
      <MainLayout t={t}>
        <div className={styles.mainWrapper}>
          <MainBlockContainer t={t}/>
        </div>
      </MainLayout>
    </>

  )
}

export const getStaticProps = async ({ locale }) => {
  return ({
    props: {
      ...await serverSideTranslations(locale, ['promotionsPage', 'common']),
    },
  })
}

export default NotificationsPage;
