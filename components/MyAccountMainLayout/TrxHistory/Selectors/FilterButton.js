import styles from "../../../../styles/MyAccount/TrxHistory/TrxHistory.module.scss";
import {useDispatch} from "react-redux";
import {getUserPayments} from "../../../../redux/actions/userData";


export const FilterButton = ({t, filterButtonClickHandler}) => {


  return (
    <button onClick={() => filterButtonClickHandler()} className={styles.filterButton}>
      Filter
    </button>
  )
}