import styles from '../../../../styles/PaymentsModals/PaymentsCrypto.module.scss';

import QRCode from 'qrcode'
import {useEffect, useState} from "react";

export const QRContainer = ({qrData}) => {
  const [src, setSrc] = useState('')

  useEffect(() => {
    QRCode.toDataURL(qrData).then((data) => {
      setSrc(data);
    })
  },[])

  return (
    <div className={styles.qrImageContainer}>
      <img src={src} alt="qr code image" className={styles.qrCodeImage}/>
    </div>
  )
}