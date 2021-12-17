import styles from '../../../styles/MyAccount/UserInfoPage/TwoFactorAuthPage.module.scss';
import {Heading} from "../ComponentsForPages/Heading";
import {GoogleAuthContainer} from "./GoogleAuthContainer";
import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {SavedKeysBlock} from "./GoogleAuthComponents/SavedKeysBlock";
import {TwoFactorAuthCompleteBlock} from "./GoogleAuthComponents/TwoFactorAuthCompleteBlock";
import {getQrAuth} from "../../../redux/actions/userData";


export const TwoFactorAuthPage = ({t}) => {
  const dispatch = useDispatch();
  const authData = useSelector((store) => store.authInfo)
  const [isShowSavedKeys, setIsShowSavedKeys] = useState(false);
  const [savedKeys, setSavedKeys] = useState([])

  console.log(authData);

  useEffect(() => {
    dispatch(getQrAuth());
  }, [])

  if (isShowSavedKeys) {

    return (
      <div className={styles.twoFactorMainWrapper}>
        <Heading t={t} heading={"myAccount.pageHeadings.googleAuth"}/>
        <SavedKeysBlock t={t} savedKeys={savedKeys}/>
      </div>
    )

  } else {

    if (authData.user.user.is_2fa_enabled || authData.isMayTwoFactorAuth) {

      return (
        <div className={styles.twoFactorMainWrapper}>
          <Heading t={t} heading={"myAccount.pageHeadings.googleAuth"}/>
          <TwoFactorAuthCompleteBlock authData={authData} t={t} />
        </div>
      )
    } else {

      return (
        <div className={styles.twoFactorMainWrapper}>
          <Heading t={t} heading={"myAccount.pageHeadings.googleAuth"}/>
          <GoogleAuthContainer setSavedKeys={setSavedKeys} setIsShowSavedKeys={setIsShowSavedKeys} authData={authData} t={t}/>
        </div>
      )
    }
  }




}