import styles from '../../styles/MainBlock.module.scss'

export const MainBlock = ({ title }) => (
  <div className={styles.mainWrapper}>
    <h1 className={styles.title}>{title}</h1>
  </div>
)
