import styles from '../../../../styles/HomePage/SlotMachineInterfase.module.scss'
import {SumInputs} from "./InputsElements/SumInputs";
import {setUserDepositValue} from "../../../../redux/actions/setUserDepositValue";
import {useDispatch, useSelector} from "react-redux";

export const SlotMachineInterface = ({userLogin}) => {


  return (
    <div className={styles.interfaceWrapper}>
      <SumInputs userLogin={userLogin}/>
    </div>
  )
}