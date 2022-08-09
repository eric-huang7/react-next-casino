import {useDispatch, useSelector} from "react-redux";
import {showManageSubscriptions} from "../../../redux/popups/action";
import {useEffect, useState} from "react";
import {changeLocalUserSubscriptions, changeUserSubscriptions} from "../../../redux/userSubscriptions/action";
import SelectModal from "../../modal/SelectModal";
import {VStack} from "@chakra-ui/layout";
import {useTranslation} from "next-i18next";
import SubmitButton from "../../buttons/SubmitButton";
import {Checkbox} from "@chakra-ui/checkbox";
import {CheckIcon} from "@chakra-ui/icons";
import {Text} from "@chakra-ui/react";

const CheckboxElement = ({label, onChange, checked, id, name}) => <Checkbox
  icon={<CheckIcon w={6} h={6} />}
  sx={{
    '& .chakra-checkbox__control': {
      width: 10,
      height: 10,
    }
  }}
  id={id}
  name={name}
  isChecked={checked}
  colorScheme='primary'
  onChange={onChange}
>
  <Text fontSize="16px" color="text.250">{label}</Text>
</Checkbox>

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

  const submitButtonClickHandler = () => {
    const userData = {
      id: userInfo.authInfo.user.user.id,
      transactional_email_opt_in: emailSubscript,
      transactional_sms_opt_in: smsSubscript,
      browser_opt_in: notifySubscript
    }
    dispatch(changeUserSubscriptions(userData));
    dispatch(changeLocalUserSubscriptions(userData));
  }

  return (
    <SelectModal
      isOpen={isShowSubscriptions || true}
      width={430}
      headerHeight={70}
      onClose={closeButtonHandler}
      title={t("manageSubscriptions.heading")}
      footer={<SubmitButton title={t("manageSubscriptions.subscriptionsButton")} onClick={submitButtonClickHandler}/>}
    >
      <VStack p="50px 24px" w="100%" alignItems="center">
        <VStack alignItems="flex-start" spacing={5}>
          <CheckboxElement
            id='emailSubscript'
            name='emailSubscript'
            checked={!!emailSubscript}
            onChange={inputsCheckedHandler}
            label={t("manageSubscriptions.emailSubscript")}
          />
          <CheckboxElement
            id='smsSubscript'
            name='smsSubscript'
            checked={!!smsSubscript}
            onChange={inputsCheckedHandler}
            label={t("manageSubscriptions.smsSubscript")}
          />
          <CheckboxElement
            id='notifySubscript'
            name='notifySubscript'
            checked={!!notifySubscript}
            onChange={inputsCheckedHandler}
            label={t("manageSubscriptions.notifySubscript")}
          />
        </VStack>
      </VStack>
    </SelectModal>
  )
}
