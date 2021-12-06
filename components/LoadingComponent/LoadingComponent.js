import styles from '../../styles/LoadingComponent.module.scss';


export const LoadingComponent = ({t}) => {

  return (
    <>
      <div className={styles.loaderWrapper}>
        <div className={styles.itemOne}>

        </div>
        <div className={styles.itemTwo}>

        </div>
        <div className={styles.itemThree}>

        </div>
        <div className={styles.itemFour}>

        </div>
      </div>
      <p className={styles.loadingText}>
        In process...
      </p>
    </>

  )
}