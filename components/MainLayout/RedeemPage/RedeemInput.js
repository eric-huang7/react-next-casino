import styles from '../../../styles/HomePage/RedeemInput.module.scss'

export const RedeemInput = ({mb = 0, mt = 8, onChange, value = 0, children, ...props}) => {
  return (
    <div className={styles.redeemInputWrapper} {...props} style={{marginTop: mt, marginBottom: mb}}>
      <div className={styles.arrowUp}/>
      {!children && <input typeof="text" value={value} onChange={onChange}/>}
      {children && <div className={styles.input}>
        {children}
      </div>}
      <div className={styles.arrowDown}/>
    </div>
  )
}
