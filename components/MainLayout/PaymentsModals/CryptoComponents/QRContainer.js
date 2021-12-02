import styles from '../../../../styles/PaymentsModals/PaymentsCrypto.module.scss';


export const QRContainer = ({qrData}) => {

  return (
    <div className={styles.qrImageContainer}>
      <img src={"/assets/img/qrTest.png"} alt="qr code image" className={styles.qrCodeImage}/>
    </div>
  )
}