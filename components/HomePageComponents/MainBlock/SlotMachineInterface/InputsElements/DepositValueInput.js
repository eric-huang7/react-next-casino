import styles from "../../../../../styles/HomePage/SumInputs.module.scss";


export const DepositValueInput = ({sumInputChangeHandler, sumInputVal}) => {

  return (
    <input
      onChange={(e) => sumInputChangeHandler(e)}
      id="sumInputMain"
      className={styles.sumInput}
      maxLength={10}
      type="number"
      value={sumInputVal}
    />
  )
}