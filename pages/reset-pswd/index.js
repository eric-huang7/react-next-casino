import {useTranslation} from "next-i18next";
import {serverSideTranslations} from "next-i18next/serverSideTranslations";
import MainLayout from '../../components/MainLayout/MainLayout'
import {useRouter} from "next/router";
import {HomePageContainer} from "../../components/HomePageComponents/HomePageContainer";
import {useEffect} from "react";
import {showChangePasswordPopup} from "../../redux/actions/showPopups";
import {useDispatch} from "react-redux";



export default function ResetPswd(props) {
  const {t} = useTranslation('common');
  const dispatch = useDispatch();
  const router = useRouter();

  useEffect(() => {

    if (props.token) {
      dispatch(showChangePasswordPopup(true));
    }

  }, [router])

  return (

    <>
      <MainLayout
        token={props.token}
      >
        <HomePageContainer
          t={t}
        />
      </MainLayout>

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