import { FaSort } from "react-icons/fa";
import { FaSortDown } from "react-icons/fa";
import { FaSortUp } from "react-icons/fa";
import styles from '../../../styles/MyAccount/BalancePage/BalancePage.module.scss';


export const TableHeading = ({onSort, columns, sort, direction}) => {
  return (
    <tr className={styles.headingRow} >
      <th className={styles.headingActive}>

      </th>
      {columns.map(column => (
        <th
          key={column.name}
          className={column.style}
          style={column.sort && {cursor: 'pointer'}}
          onClick={() => column.sort && onSort(column.name)}
        >
          <p>
            {column.title} {sort === column.name ? (direction ? <FaSortDown /> : <FaSortUp />) : column.sort && <FaSort color="#999" />}
          </p>
        </th>
      ))}
    </tr>
  )
}
