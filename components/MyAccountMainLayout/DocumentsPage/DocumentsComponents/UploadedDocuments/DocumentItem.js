import styles from "../../../../../styles/MyAccount/DocumentsPage/DocumentsPage.module.scss";


export const DocumentItem = ({t}) => {


  return (
    <div className={styles.documentItemWrapper}>
      <div  className={styles.documentNameContainer}>
        <p>
          pic.jpg
        </p>
      </div>
      <div className={styles.documentDescriptionContainer}>
        <p className={styles.descriptionTime}>Added at: December 27, 2021 13:44</p>
        <p className={styles.descriptionText}>Some description</p>
        <button className={styles.editDescriptionButton}>Edit Description</button>
        <button className={styles.removeFileButton}>
          <span className={styles.croseOne}></span>
          <span className={styles.croseTwo}></span>
          Remove
        </button>
      </div>
      <div  className={styles.statusContainer}>
        <p className={`${styles.pending}`}>Status</p>
      </div>
    </div>
  )
}