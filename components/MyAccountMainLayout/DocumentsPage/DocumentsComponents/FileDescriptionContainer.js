import styles from "../../../../styles/MyAccount/DocumentsPage/DocumentsPage.module.scss";


export const FileDescriptionContainer = ({t}) => {


  return (
    <div className={styles.descriptionContainer}>
      <label htmlFor="fileDescriptionField">Description</label>
      <textarea id={"fileDescriptionField"} />
    </div>
  )
}