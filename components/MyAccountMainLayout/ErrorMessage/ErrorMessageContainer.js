import styles from '../../../styles/MyAccount/MyAccount.module.scss'
import { useDispatch } from 'react-redux'
import { errorPopupDeactivate } from '../../../redux/actions/showPopups'

export const ErrorMessageContainer = ({ t, errorData }) => {
  const dispatch = useDispatch()
  const closeErrorPopup = () => {
    dispatch(errorPopupDeactivate())

  }

  return (
    <div className={styles.errorMessageContainer}>
      <p>{t(errorData.errorPopupData)}</p>
      <button onClick={() => closeErrorPopup()} className={styles.closeButton}>
        <span className={styles.closeOne}></span>
        <span className={styles.closeTwo}></span>
      </button>
    </div>
  )
}