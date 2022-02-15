import styles from "../../../../styles/MyAccount/DocumentsPage/DocumentsPage.module.scss";


export const LoaderComponent = ({isUploading}) => {

  return (
    <div className={`${styles.loaderBlock} ${isUploading ? styles.showLoaderBlock : ''}`}>
      <img src={'/assets/icons/loader.gif'} alt="loader"/>
    </div>
  )
}