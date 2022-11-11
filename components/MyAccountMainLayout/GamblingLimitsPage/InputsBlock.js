import { SelectPeriodContainer } from './InputsConponents/SelectPeriodContainer'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { patchUserData } from '../../../redux/user/action'
import ErrorEmpty from '../../ErrorBoundaryComponents/ErrorEmpty'
import BodyText from "../../typography/BodyText";
import RoundButton from "../../buttons/RoundButton";
import { HStack } from "@chakra-ui/react";
import {useRouter} from "next/router";
import {Box} from "@chakra-ui/layout";

export const InputsBlock = ({ t, userInfo }) => {
  const dispatch = useDispatch()
  const router = useRouter()

  const [selfExclusionExpiry, setSelfExclusionExpiry] = useState(86400000)

  const selfExclusionExpiryHandler = (value) => {
    setSelfExclusionExpiry(Number(value))
  }

  const saveButtonHandler = () => {
    let nowDate = new Date().getTime()
    let sendData = {
      id: userInfo.id,
      self_exclusion_expiry: (nowDate + selfExclusionExpiry) / 1000
    }
    const confirmation = confirm(t('myAccount.selfExclusionPage.confirmationText'))
    if (confirmation) {
      dispatch(patchUserData(sendData))
    }
  }

  return (
    <Box p="20px 0 25px 0">
      <ErrorEmpty>
        <SelectPeriodContainer
          selfExclusionExpiry={selfExclusionExpiry}
          selfExclusionExpiryHandler={selfExclusionExpiryHandler}
          t={t}
        />
      </ErrorEmpty>
      <HStack mb="45px">
        <RoundButton onClick={saveButtonHandler} solid title={t('myAccount.selfExclusionPage.saveButton')} />
        <RoundButton
          ml={4}
          onClick={() => router.push('/accounts/balance')}
          title={t('myAccount.selfExclusionPage.cancelButton')}
        />
      </HStack>
      <BodyText>{t('myAccount.selfExclusionPage.textTwo')}</BodyText>
    </Box>
  )
}
