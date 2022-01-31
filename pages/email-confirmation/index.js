import {useTranslation} from "next-i18next";
import {serverSideTranslations} from "next-i18next/serverSideTranslations";
import MainLayout from '../../components/MainLayout/MainLayout'
import {useRouter} from "next/router";
import {HomePageContainer} from "../../components/HomePageComponents/HomePageContainer";
import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {token_url} from "../../redux/url/url";
import axios from "axios";
import {auth} from "../../redux/actions/userData";



export default function ResetPswd(props) {
  const {t} = useTranslation('common');
  const dispatch = useDispatch();
  const router = useRouter();
  const locale = router.locale;

  // const userLogin = useSelector((state) => state.authInfo.isAuthenticated)


  useEffect(() => {

    if (props.token) {
      let userData = {
        type: 1,
        token: props.token,
      }
      console.log(props.token,userData, 'props.token');

      axios.patch(token_url, userData)
        .then((data) => {
        if (data.data.extra_error_info) {
          console.log(data, "extra_error_info!!!!!!!!!!!!!!");
        } else {
          console.log(data, "success!!!!!!!!!!!!!!!!!!");
        }

        dispatch(auth());
      }).catch((e) => {
        console.log(e.response, "some error!!!!!!!!!!!!!!!!!");
      })
    }

  }, [])

  return (

    <>
      <MainLayout
        t={t}
        // token={props.token}
      >
        <HomePageContainer
          t={t}
          // games={games}
          // jackpots={jackpots}
          // winners={winners}

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