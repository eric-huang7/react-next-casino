import {SubscriptionsInputsContainer} from "./SubscriptionsInputsContainer";
import {SubscriptionsSubmitButton} from "./SubscriptionsSubmitButton";
import {useDispatch, useSelector} from "react-redux";
import {showManageSubscriptions} from "../../../redux/popups/action";
import {useEffect, useState} from "react";
import {changeLocalUserSubscriptions} from "../../../redux/userSubscriptions/action";
import SelectModal from "../../modal/SelectModal";
import {Box} from "@chakra-ui/layout";
import {useTranslation} from "next-i18next";

export const ManageSubscriptions = () => {
  const {t} = useTranslation('common');
  const dispatch = useDispatch();
  const userInfo = useSelector((state) => state)
  const isShowSubscriptions = useSelector((state) => state.popups.isShowManageSubscriptions);

  const closeButtonHandler = () => {
    dispatch(showManageSubscriptions(false));
  }

  useEffect(() => {
    if (isShowSubscriptions) {
      document.body.style.overflowY = "hidden"
    } else {
      document.body.style.overflowY = "auto"
    }
    return () => {
      document.body.style.overflowY = "auto"
    }
  }, [isShowSubscriptions])

  const [emailSubscript, setEmailSubscript] = useState(userInfo.authInfo.user.user.transactional_email_opt_in);
  const [smsSubscript, setSmsSubscript] = useState(userInfo.authInfo.user.user.transactional_sms_opt_in);
  const [notifySubscript, setNotifySubscript] = useState(userInfo.authInfo.user.user.browser_opt_in);

  // useEffect(() => {
  //   dispatch(changeLocalUserSubscriptions({
  //     transactional_email_opt_in: emailSubscript,
  //     transactional_sms_opt_in: smsSubscript,
  //     browser_opt_in: notifySubscript
  //   }))
  // }, [])

  const inputsCheckedHandler = (e) => {
    if (e.target.id === "emailSubscript") {
      setEmailSubscript(Number(e.target.checked));
    } else if (e.target.id === "smsSubscript") {
      setSmsSubscript(Number(e.target.checked));
    } else if (e.target.id === 'notifySubscript') {
      setNotifySubscript(Number(e.target.checked));
    }
  }

  return (
    <SelectModal
      isOpen={isShowSubscriptions}
      width={430}
      headerHeight={70}
      onClose={closeButtonHandler}
      title={t("manageSubscriptions.heading")}
      footer={<SubscriptionsSubmitButton
        emailSubscript={emailSubscript}
        smsSubscript={smsSubscript}
        notifySubscript={notifySubscript}
        userInfo={userInfo}
        t={t}
      />}
    >
      <Box pb={4}>
        <SubscriptionsInputsContainer
          inputsCheckedHandler={inputsCheckedHandler}
          emailSubscript={emailSubscript}
          smsSubscript={smsSubscript}
          notifySubscript={notifySubscript}
          userInfo={userInfo} t={t}
        />
      </Box>
    </SelectModal>
  )
}
