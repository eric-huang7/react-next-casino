import styles from "../../../../../styles/MyAccount/DocumentsPage/DocumentsPage.module.scss";


export const DocumentNameContainer = ({t, name}) => {



  return (
    <div  className={styles.documentNameContainer}>
      <p>
        {name}
      </p>
    </div>
  )
}
