import styles from '../../styles/PlaySafe/PlaySafe.module.scss';
import {Header} from "../MainLayout/Header/Header";
import {useDispatch} from "react-redux";
import {showPlaySafe} from "../../redux/actions/showPopups";


export const PlaySafeHeading = ({t}) => {
  const dispatch = useDispatch();

  const closeClickHandler = () => {
    dispatch(showPlaySafe(false));
  }

  return (
    <div className={styles.headingContainer}>
      {/*<Header t={t}/>*/}
      <h2>{t("playSafe.heading")}</h2>
      <button onClick={() => closeClickHandler()} className={styles.playSafeCloseButton}>
        <span className={styles.closeOne}></span>
        <span className={styles.closeTwo}></span>
      </button>
    </div>
  )
}