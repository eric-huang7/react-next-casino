import styles from '../../../styles/MyAccount/MyAccount.module.scss';
import {useDispatch, useSelector} from "react-redux";
import {errorPopupDeactivate} from "../../../redux/actions/showPopups";


export const ErrorMessageContainer = ({t, errorData}) => {
  const dispatch = useDispatch()
  const closeErrorPopup = () => {
    dispatch(errorPopupDeactivate());

  }

  console.log(errorData);

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