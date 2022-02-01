import {useTranslation} from "next-i18next";
import {serverSideTranslations} from "next-i18next/serverSideTranslations";
import MainLayout from '../../components/MainLayout/MainLayout'
import {useRouter} from "next/router";
import {HomePageContainer} from "../../components/HomePageComponents/HomePageContainer";
import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {token_url} from "../../redux/url/url";
import axios from "axios";
import {auth} from "../../redux/actions/userData";
import {showEmailValidationErrorPopup, showEmailValidationSuccessPopup} from "../../redux/actions/showPopups";



export default function EmailConfirmation(props) {
  const {t} = useTranslation('common');
  const dispatch = useDispatch();
  const router = useRouter();
  const locale = router.locale;

  // const userLogin = useSelector((state) => state.authInfo.isAuthenticated)
  const [emailError, setEmailError] = useState(null);

  useEffect(() => {

    if (props.token) {
      let sendData = {
        type: 1,
        token: props.token,
      }
      console.log(props.token,sendData, 'props.token');

      axios.patch(token_url, sendData)
        .then((data) => {
        if (data.data.extra_error_info) {

          setEmailError('used_token')

          dispatch(showEmailValidationErrorPopup(true));

          console.log(data, "extra_error_info!!!!!!!!!!!!!!");
        } else {

          setEmailError(null)
          dispatch(showEmailValidationSuccessPopup(true));

          console.log(data, "success!!!!!!!!!!!!!!!!!!");
        }
      }).catch((e) => {
        setEmailError('other_error')
        dispatch(showEmailValidationErrorPopup(true));

        console.log(e.response, "some error!!!!!!!!!!!!!!!!!");
      })
    }

  }, [])

  return (

    <>
      <MainLayout
        t={t}
        emailError={emailError}
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