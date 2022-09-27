import styles from "../../../../../styles/MyAccount/DocumentsPage/DocumentsPage.module.scss";

export const StatusContainer = ({t, status}) => {
  let statusStr = statusValue(`${status}`);

  return (
    <div  className={styles.statusContainer}>
      <p
        className={`${
          status === 1 
            ? styles.pending
            : status === 2 
              ? styles.success 
              : ''
        }`}
      >
        {t(statusStr)}
      </p>
    </div>
  )
}

function statusValue(status) {
  switch (status) {
    case "1":
      return "myAccount.documentsPage.uploadedDocumentsBlock.status.pending"
    case "2":
      return "myAccount.documentsPage.uploadedDocumentsBlock.status.checked"
    case "3":
      return "myAccount.documentsPage.uploadedDocumentsBlock.status.error"
    default:
      return "-"
  }
}
