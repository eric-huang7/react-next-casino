import styles from '../../../styles/MyAccount/GamblingLimitsPage/GamblingLimitsPage.module.scss'
import { TextBlock } from './TextBlock'
import { InputsBlock } from './InputsBlock'
import ErrorText from '../../ErrorBoundaryComponents/ErrorText'

export const MainBlock = ({ t, userInfo }) => {

  return (
    <div className={styles.mainBlock}>
      <TextBlock t={t}/>
      <ErrorText>
        <InputsBlock t={t} userInfo={userInfo}/>
      </ErrorText>
    </div>
  )
}