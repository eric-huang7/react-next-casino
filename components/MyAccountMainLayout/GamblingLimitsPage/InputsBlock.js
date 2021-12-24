import styles from '../../../styles/MyAccount/GamblingLimitsPage/GamblingLimitsPage.module.scss';
import {SelectPeriodContainer} from "./InputsConponents/SelectPeriodContainer";
import {ButtonsContainer} from "./InputsConponents/ButtonsContainer";



export const InputsBlock = ({t}) => {


  return (
    <div  className={styles.inputsBlock}>
      <SelectPeriodContainer t={t} />
      <ButtonsContainer t={t} />
      <p  className={styles.innerText}>
        If you feel the need in any additional information, please contact support.
      </p>
    </div>
  )
}