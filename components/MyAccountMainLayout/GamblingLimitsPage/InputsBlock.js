import styles from '../../../styles/MyAccount/GamblingLimitsPage/GamblingLimitsPage.module.scss'
import { SelectPeriodContainer } from './InputsConponents/SelectPeriodContainer'
import { ButtonsContainer } from './InputsConponents/ButtonsContainer'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { patchUserData } from '../../../redux/user/action'
import ErrorEmpty from '../../ErrorBoundaryComponents/ErrorEmpty'

export const InputsBlock = ({ t, userInfo }) => {
  const dispatch = useDispatch()

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
    <div className={styles.inputsBlock}>
      <ErrorEmpty>
        <SelectPeriodContainer
          selfExclusionExpiry={selfExclusionExpiry}
          selfExclusionExpiryHandler={selfExclusionExpiryHandler}
          t={t}
        />
      </ErrorEmpty>
      <ButtonsContainer saveButtonHandler={saveButtonHandler} t={t}/>
      <p className={styles.innerText}>
        {t('myAccount.selfExclusionPage.textTwo')}
      </p>
    </div>
  )
}
