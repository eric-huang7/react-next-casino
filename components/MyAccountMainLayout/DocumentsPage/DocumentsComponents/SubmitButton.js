import styles from "../../../../styles/MyAccount/DocumentsPage/DocumentsPage.module.scss";


export const SubmitButton = ({t, submitHandler}) => {


  return (
    <button
      type={"submit"}
      form={'downloadDocumentForm'}
      className={styles.submitButton}
    >
      Submit Document
    </button>
  )
}