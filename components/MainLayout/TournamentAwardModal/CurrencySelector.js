import styles from '../../../styles/HomePage/RedeemInput.module.scss'

export const CurrencySelector = ({mb = 0, mt = 8, onChange, value = 0, ...props}) => {

  return (
    <div className={styles.redeemInputWrapper} {...props} style={{marginTop: mt, marginBottom: mb}}>
      <div className={styles.arrowUp} />
      <input typeof="text" value={value} onChange={onChange}/>
      <div className={styles.arrowDown} />
    </div>
  )
}
