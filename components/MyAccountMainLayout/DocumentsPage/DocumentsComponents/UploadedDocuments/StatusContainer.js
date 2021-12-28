import styles from "../../../../../styles/MyAccount/DocumentsPage/DocumentsPage.module.scss";


export const StatusContainer = ({t, status}) => {

  let statusStr = statusValue(`${status}`);

  return (
    <div  className={styles.statusContainer}>
      <p
        className={`${
          status === 1 
            ?
            styles.pending
            :
            status === 2 
              ? 
              styles.success 
              : 
              ''
        }`}
      >
        {statusStr}
      </p>
    </div>
  )
}

function statusValue(status) {
  switch (status) {
    case "1":
      return "Pending"
    case "2":
      return "Checked"
    case "3":
      return "Error"
    default:
      return "-"
  }
}