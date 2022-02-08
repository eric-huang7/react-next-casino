import {useTranslation} from "next-i18next";
import {serverSideTranslations} from "next-i18next/serverSideTranslations";
import MainLayout from '../../components/MainLayout/MainLayout'
import {useRouter} from "next/router";
import {HomePageContainer} from "../../components/HomePageComponents/HomePageContainer";
import {useEffect} from "react";
import {showChangePasswordPopup} from "../../redux/actions/showPopups";
import {useDispatch, useSelector} from "react-redux";
import {ChangePasswordContainer} from "../../components/ForgotPasswordComponents/ChangePasswordContainer/ChangePasswordContainer";



export default function ResetPswd(props) {
  const {t} = useTranslation('common');
  const dispatch = useDispatch();
  const router = useRouter();
  const locale = router.locale;

  // const userLogin = useSelector((state) => state.authInfo.isAuthenticated)
  const isShowModal = useSelector((store) => store.showPopupsReducer);

  useEffect(() => {

    const timer = setTimeout(() => {
      if (props.token) {
        console.log('show')
        dispatch(showChangePasswordPopup(true));
      }
    }, 2000);
    return () => {
      clearTimeout(timer);
    }
  }, [router])

  return (

    <>
      {/*<MainLayout*/}
      {/*  t={t}*/}
      {/*  token={props.token}*/}
      {/*>*/}
        {
          isShowModal.isShowChangePassword && props.token
            ?
            <ChangePasswordContainer
              t={t}
              token={props.token}
            />
            :
            <></>
        }
        <HomePageContainer
          t={t}
          // games={games}
          // jackpots={jackpots}
          // winners={winners}

        />
      {/*</MainLayout>*/}

    </>
  )
}

export const getServerSideProps = async (context) => {

  let token = null;
  if (context.query.token) {
    token = context.query.token;
  } else {

  }

  return ({
    props: {
      ...await serverSideTranslations(context.locale, ['promotionsPage', 'common', 'newsData']),
      token: token
    },
  })
}