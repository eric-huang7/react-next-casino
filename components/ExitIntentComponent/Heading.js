import styles from '../../styles/ExitIntentComponent/ExitInentPopup.module.scss';
import {CloseButton} from "./CloseButton";



export const Heading = ({t, closeHandler}) => {


  return (
    <div className={styles.headingBlock}>
      <p>
        Wait, Before You Go
      </p>
      <CloseButton t={t} closeHandler={closeHandler}></CloseButton>
    </div>
  )
}