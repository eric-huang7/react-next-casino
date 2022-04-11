import styles from '../../styles/PlaySafe/PlaySafe.module.scss';
import {useDispatch} from "react-redux";
import {showPlaySafe} from "../../redux/popups/action";


export const PlaySafeHeading = ({t}) => {
  const dispatch = useDispatch();

  const closeClickHandler = () => {
    dispatch(showPlaySafe(false));
  }

  return (
    <div className={styles.headingContainer}>
      <h2>{t("playSafe.heading")}</h2>
      <button onClick={() => closeClickHandler()} className={styles.playSafeCloseButton}>
        <span className={styles.closeOne}/>
        <span className={styles.closeTwo}/>
      </button>
    </div>
  )
}
