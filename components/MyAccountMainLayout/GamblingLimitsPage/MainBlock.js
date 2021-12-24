import styles from '../../../styles/MyAccount/GamblingLimitsPage/GamblingLimitsPage.module.scss';
import {TextBlock} from "./TextBlock";
import {InputsBlock} from "./InputsBlock";



export const MainBlock = ({t}) => {


  return (
    <div  className={styles.mainBlock}>
      <TextBlock t={t} />
      <InputsBlock t={t} />
    </div>
  )
}