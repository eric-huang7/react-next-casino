import styles from '../../../../styles/PaymentsModals/PaymentsCrypto.module.scss';


export const DepositAddressInput = ({addressData, t, memoData}) => {
  const handleCopy = (e) => {
    e.target.control.select();
    document.execCommand("copy");
  }

  return (
    <>
      <div className={styles.depositAddressContainer}>
        <label onClick={(e) => handleCopy(e)} htmlFor="depositAddressInput" className={styles.copyDepositAddress}></label>
        <input type="text" id={'depositAddressInput'} className={styles.addressInput} readOnly={true} value={addressData}/>
        <label htmlFor="depositAddressInput" className={styles.depositAddressLabel}>{t("cryptoPayment.depositAddress")}</label>
      </div>

      {
        memoData ?
          <div className={styles.memoContainer}>
            <label onClick={(e) => handleCopy(e)} htmlFor="memoInput" className={styles.copyMemo}></label>
            <input type="text" id={'memoInput'} className={styles.memoInput} readOnly={true} value={memoData}/>
            <label htmlFor="memoInput" className={styles.memoLabel}>{t("cryptoPayment.memo")}</label>
          </div>
          :
          <></>
      }

    </>

  )
}